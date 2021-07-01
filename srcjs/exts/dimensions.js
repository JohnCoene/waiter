export const getDimensions = (element, offsetTop = 0, offsetHeight = 0) => {
  var elementPosition = {
		width: element.offsetWidth,
		height: element.offsetHeight + offsetHeight,
		top: isNaN(element.offsetTop) ? offsetTop : element.offsetTop + offsetTop,
		left: isNaN(element.offsetLeft) ? 0 : element.offsetLeft,
	};

  return elementPosition;
}