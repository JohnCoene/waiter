var hostesses = [];

Shiny.addCustomMessageHandler('hostess-init', function(opts) {
  hostesses[opts.id] = new ldBar("#" + opts.id);
});

Shiny.addCustomMessageHandler('hostess-set', function(opts) {
  hostesses[opts.id].set(opts.value);
});
