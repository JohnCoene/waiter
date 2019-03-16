Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  window.loading_screen = pleaseWait({
    logo: opts.logo,
    backgroundColor: opts.color,
    loadingHtml: opts.html
  });
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  window.loading_screen.finish();
});
