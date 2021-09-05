import 'shiny';
import 'jquery'

let attendants = new Map();

/**
 * Handles messages from the shiny server to set the progress
 * of the bar and optionally its text.
 * @function
 * @param  {JSON} msg - JSON object sent from shiny server.
 */
const handleProgress = (msg) => {
  let $el = $(`#${msg.id} .progress-bar`);
  let w = getWidth(msg.id, msg.value);
 
  $el
    .attr('aria-valuenow', msg.value)
    .css('width', w + '%');

  if(msg.text)
    $el.html(msg.text);

  if(msg.hideOnEnd && getMax(msg.id) >= msg.value)
    $(`#${msg.id}`).show();

  if(msg.hideOnEnd && getMax(msg.id) <= msg.value)
    $(`#${msg.id}`).hide();
}

/**
 * Get the max value from a progress bar.
 * @function
 * @param  {string} id - Id of the progress bar.
 */
const getMax = (id) => {
  let max = $(`#${id} .progress-bar`)
    .attr('aria-valuemax');

  return parseFloat(max);
}

/**
 * Get the width the progress bar should be set to.
 * @function
 * @param  {string} id - Id of the progress bar.
 * @param  {number} value - Value sent from the server
 * must be more than the 'min' of the progress bar and less
 * than the 'max'.
 */
const getWidth = (id, value) => {
  let max = getMax(id);
  return (value / max) * 100;
}

Shiny.addCustomMessageHandler('attendant-set-min', (msg) => {
  $(`#${msg.id} .progress-bar`)
    .attr('aria-valuemin', msg.min);
});

Shiny.addCustomMessageHandler('attendant-set-max', (msg) => {
  $(`#${msg.id} .progress-bar`)
    .attr('aria-valuemax', msg.max);
});

Shiny.addCustomMessageHandler('attendant-set', handleProgress);

Shiny.addCustomMessageHandler('attendant-done', (msg) => {
  let existingAttendant = attendants.get(msg.id);

  if(existingAttendant != undefined)
    clearInterval(existingAttendant);

  msg.value = getMax(msg.id);
  handleProgress(msg);
})

Shiny.addCustomMessageHandler('attendant-auto', (msg) => {
  let $el = $(`#${msg.id} .progress-bar`);
  let max = getMax(msg.id);
  let value = parseFloat($el.attr('aria-valuenow'));

  let sequence = setInterval(() => {
    if(value > max)
      return ;

    value = value + 1;
    let w = getWidth(msg.id, value);
  
    $(`#${msg.id} .progress-bar`)
      .attr('aria-valuenow', value)
      .css('width', w + '%');
  }, msg.ms);

  attendants.set(msg.id, sequence);
})
