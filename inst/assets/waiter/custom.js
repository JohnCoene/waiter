Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  if(opts.id) {
    show_waiter(opts.id, opts.html, opts.color, opts.hide_on_render, opts.hide_on_error, opts.hide_on_silent_error);
  } else {
    window.loading_screen = pleaseWait({
      logo: opts.logo,
      backgroundColor: opts.color,
      loadingHtml: opts.html
    });
    Shiny.setInputValue("waiter_shown", true, {priority: 'event'});
  }
});

Shiny.addCustomMessageHandler('waiter-update', function(opts) {
  if(opts.id)
    update_waiter(opts.id, opts.html);
  else
    window.loading_screen.updateLoadingHtml(opts.html, true);
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  if(opts.id) {
    hide_waiter(opts.id)
  } else {
    window.loading_screen.finish();
    Shiny.setInputValue("waiter_hidden", true, {priority: 'event'});
  }
});

$(document).on('shiny:disconnected', function(event) {
  window.loading_screen.finish();
  Shiny.setInputValue("waiter_hidden", true, {priority: 'event'});
});