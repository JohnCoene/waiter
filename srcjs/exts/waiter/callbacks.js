export const setWaiterShownInput = (id) => {
  let input = "waiter_shown";
  if(id !== null)
    input = id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
};

export const setWaiterHiddenInput = (id) => {
  let input = "waiter_hidden";
  if(id !== null)
    input = id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
}
