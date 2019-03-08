var loading_screen;

Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  loading_screen = pleaseWait({
    logo: opts.logo,
    backgroundColor: opts.color,
    loadingHtml: opts.html
  });
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  loading_screen.finish();
});
