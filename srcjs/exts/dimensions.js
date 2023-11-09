/**
 * Get the dimensions of an element. Used to layer the waiter
 * screen on top of say 'element'.
 * @param  {HTMLElement} element - Element to compute the dimensions.
 * @param  {number} offsetTop - Offset for the top of the dimension.
 * @param  {number} offsetHeight - Offset for the Height dimension.
 */
export const getDimensions = (element, offsetTop = 0, offsetHeight = 0) => {
  var elementPosition = {
    width: element.offsetWidth,
    height: element.offsetHeight + offsetHeight,
    top: isNaN(element.offsetTop) ? offsetTop : element.offsetTop + offsetTop,
    left: isNaN(element.offsetLeft) ? 0 : element.offsetLeft,
  };

  return elementPosition;
};

