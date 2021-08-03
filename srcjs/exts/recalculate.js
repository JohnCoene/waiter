// storage to avoid multiple CSS injections
let hiddenRecalculating = new Map();
/**
 * Hide the recalculate effect from base shiny for a
 * specific element.
 * @param  {string} id - Id of element to hide the 
 * recalculate.
 */
export const hideRecalculate = (id) => {

  if(id === null)
    return ;
  
  if(hiddenRecalculating.get(id))
    return;
  
  hiddenRecalculating.set(id, true);

  var css = '#' + id + '.recalculating {opacity: 1.0 !important; }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.id = id + "-waiter-recalculating";
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}
