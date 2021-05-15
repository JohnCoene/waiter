Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  show_waiter(
    opts.id, 
    opts.html, 
    opts.color, 
    opts.hide_on_render, 
    opts.hide_on_error, 
    opts.hide_on_silent_error,
    opts.image
  );
  Shiny.setInputValue("waiter_shown", true, {priority: 'event'});
});

Shiny.addCustomMessageHandler('waiter-update', function(opts) {
  update_waiter(opts.id, opts.html);
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  hide_waiter(opts.id);

  let input = "waiter_hidden";
  if(opts.id !== null)
    input = opts.id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
});
