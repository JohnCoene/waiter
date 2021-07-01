export const getDimensions = (element) => {
  var elementPosition = {
		width: element.offsetWidth,
		height: element.offsetHeight,
		top: isNaN(element.offsetTop) ? 0 : element.offsetTop,
		left: isNaN(element.offsetLeft) ? 0 : element.offsetLeft,
	};

  return elementPosition;
}