import 'shiny';
import 'jquery'

let attendants = new Map();

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

const getMax = (id) => {
  let max = $(`#${id} .progress-bar`)
    .attr('aria-valuemax');

  return parseFloat(max);
}

const getWidth = (id, value) => {
  let max = getMax(id);
  return (value / max) * 100;
}

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
