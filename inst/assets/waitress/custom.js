Shiny.addCustomMessageHandler('waitress-init', function(opts) {
	
	if(opts.id != null)
		prog = progressJs(opts.id);
	else
		prog = progressJs();

	prog = prog.setOptions(opts.options);

	window.waitress[opts.name] = prog;
});

Shiny.addCustomMessageHandler('waitress-start', function(opts) {
	window.waitress[opts.name].start();
});

Shiny.addCustomMessageHandler('waitress-set', function(opts) {
	window.waitress[opts.name].set(opts.percent);
});

Shiny.addCustomMessageHandler('waitress-auto', function(opts) {
	window.waitress[opts.name].autoIncrease(opts.percent, opts.ms);
});

Shiny.addCustomMessageHandler('waitress-increase', function(opts) {
	window.waitress[opts.name].increase(opts.percent);
});

Shiny.addCustomMessageHandler('waitress-end', function(opts) {
	window.waitress[opts.name].end();
});
