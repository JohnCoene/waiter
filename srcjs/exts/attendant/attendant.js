import 'shiny';
import 'jquery'

const getMax = (el) => {
  let max = el
    .attr('aria-valuemax');

  return parseFloat(max);
}

const getWidth = (id, value) => {
  let max = $(`#${id} .progress-bar`)
    .attr('aria-valuemax');

  return (value / max) * 100;
}

Shiny.addCustomMessageHandler('attendant-set', (msg) => {
  let $el = $(`#${msg.id} .progress-bar`);
  let w = getWidth(msg.id, msg.value);
 
  $el
    .attr('aria-valuenow', msg.value)
    .css('width', w + '%');

  if(msg.text)
    $el.html(msg.text);

  if(msg.hideOnEnd && getMax($el) >= msg.value)
    $(`#${msg.id}`).show();

  if(msg.hideOnEnd && getMax($el) <= msg.value)
    $(`#${msg.id}`).hide();
})
