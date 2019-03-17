Shiny.addCustomMessageHandler('butler-config', function(opts) {
	topbar.config(opts)
});

Shiny.addCustomMessageHandler('butler-show', function(opts) {
	topbar.show()
});

Shiny.addCustomMessageHandler('butler-hide', function(opts) {
	topbar.hide()
});