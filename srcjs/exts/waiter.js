import 'shiny';

Shiny.addCustomMessageHandler('waiter-alert', function(msg){
  let response = prompt(msg);
  Shiny.setInputValue('waiterResponse', response);
})
