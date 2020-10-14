Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  show_waiter(opts.id, opts.html, opts.color, opts.hide_on_render, opts.hide_on_error, opts.hide_on_silent_error);
  Shiny.setInputValue("waiter_shown", true, {priority: 'event'});
});

Shiny.addCustomMessageHandler('waiter-update', function(opts) {
  update_waiter(opts.id, opts.html);
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  hide_waiter(opts.id);
});

$(document).on('shiny:disconnected', function(event) {
  hide_waiter();
  Shiny.setInputValue("waiter_hidden", true, {priority: 'event'});
});