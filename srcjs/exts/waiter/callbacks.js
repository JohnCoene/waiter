/**
 * Callback function to set the waiter input on shown.
 * @function
 * @param  {string} id - Id of element to show.
 */
export const setWaiterShownInput = (id) => {
  let input = "waiter_shown";
  if(id !== null)
    input = id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
};
/**
 * Callback function to set the waiter input on hidden.
 * @function
 * @param  {string} id - Id of element to show.
 */
export const setWaiterHiddenInput = (id) => {
  let input = "waiter_hidden";
  if(id !== null)
    input = id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
}
