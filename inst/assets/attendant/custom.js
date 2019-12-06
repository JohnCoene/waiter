
Shiny.addCustomMessageHandler('attendant-start', function(opts) {
	window.instance = $(opts.selector).scheletrone();
});

Shiny.addCustomMessageHandler('attendant-stop', function(opts) {
	window.instance = $(opts.selector).scheletrone('stopLoader');
});
