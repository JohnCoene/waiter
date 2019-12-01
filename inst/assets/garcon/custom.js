Shiny.addCustomMessageHandler('garcon-init', function(opts) {
  var image = document.getElementById(opts.image);
  Loadgo.init(image, opts.options);
});

Shiny.addCustomMessageHandler('garcon-set', function(opts) {
  var image = document.getElementById(opts.image);
  Loadgo.setprogress(image, opts.value);
});

Shiny.addCustomMessageHandler('garcon-reset', function(opts) {
  var image = document.getElementById(opts.image);
  Loadgo.resetprogress(image);
});

Shiny.addCustomMessageHandler('garcon-destroy', function(opts) {
  var image = document.getElementById(opts.image);
  Loadgo.destroy(image);
});

Shiny.addCustomMessageHandler('garcon-stop', function(opts) {
  var image = document.getElementById(opts.image);
  Loadgo.stop(image);
});