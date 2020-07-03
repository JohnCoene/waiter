var attendants = [];

Shiny.addCustomMessageHandler('attendant-init', function(opts) {
  if(opts.container){
    var cont = document.getElementById(opts.container);
    opts.options.container = cont;
    console.log(cont);
  }

  attendants[opts.id] = new RsupProgress(opts.options);
});

Shiny.addCustomMessageHandler('attendant-start', function(opts) {
  attendants[opts.id].start();
});

Shiny.addCustomMessageHandler('attendant-end', function(opts) {
  attendants[opts.id].end();
});
