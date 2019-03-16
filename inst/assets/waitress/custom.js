var progress;

Shiny.addCustomMessageHandler('waitress-init', function(opts) {
	if(opts.id != null)
		progress = progressJs(opts.id);
	else
		progress = progressJs();
});

Shiny.addCustomMessageHandler('waitress-start', function(opts) {
	progress.start()
});

Shiny.addCustomMessageHandler('waitress-set', function(opts) {
	progress.set(opts.percent)
});

Shiny.addCustomMessageHandler('waitress-auto', function(opts) {
	progress.autoIncrease(opts.percent, opts.ms)
});

Shiny.addCustomMessageHandler('waitress-increase', function(opts) {
	progress.increase(opts.percent)
});

Shiny.addCustomMessageHandler('waitress-end', function(opts) {
	progress.end()
});
