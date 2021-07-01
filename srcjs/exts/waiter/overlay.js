export const createOverlay = (params, el) => {
	// create overlay
	let overlay = document.createElement("DIV");
	// create overlay content
	let overlayContent = document.createElement("DIV");
	// insert html
	overlayContent.innerHTML = params.html;
	overlayContent.classList.add("waiter-overlay-content");

	// dynamic position
	if(params.id == null)
		overlay.style.position = "fixed";
	else
		overlay.style.position = "absolute";

	// dynamic dimensions
	overlay.style.height = el.height + 'px';
	overlay.style.width = el.width + 'px';
	overlay.style.top = el.top + 'px';
	overlay.style.left = el.left + 'px';
	overlay.style.backgroundColor = params.color;
	overlay.classList.add("waiter-overlay");

	if(params.image != null && params.image != ''){
		overlay.style.backgroundImage = "url('" + params.image + "')";
	}

	// either full-screen or partial
	if(params.id !== null) {
		overlay.classList.add("waiter-local");
	} else {
		overlay.classList.add('waiter-fullscreen');
	}

	// append overlay content in overlay
	overlay.appendChild(overlayContent);

	return overlay;
}