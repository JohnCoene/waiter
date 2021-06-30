import 'shiny';
import 'jquery';

// compute offset position of waiter overlay
const getDimensions = (element) => {
  var elementPosition = {
		width: element.offsetWidth,
		height: element.offsetHeight,
		top: isNaN(element.offsetTop) ? 0 : element.offsetTop,
		left: isNaN(element.offsetLeft) ? 0 : element.offsetLeft,
	};

  return elementPosition;
}

// elements to hide on recomputed
var waiter_to_hide = new Map();
var waiter_to_fadeout = new Map();
var waiter_to_hide_on_error = new Map();
var waiter_to_hide_on_silent_error = new Map();

// show waiter overlay
export const showWaiter = (
  id = null, 
  html, 
  color = '#333e48', 
  to_hide = false, 
  hide_on_error = false, 
  hide_on_silent_error = false, 
  image = null,
  fade_out = false
) => {

  if(html == null){
    console.error("Missing html content");
    return;
  }

  // declare
  var dom,
      selector = 'body',
      exists = false;

  // get parent
  if(id !== null)
    selector = '#' + id;
  
  dom = document.querySelector(selector);
  if(dom == undefined){
    console.log("Cannot find", id);
    return ;
  }
  
  // allow missing for testing
  to_hide = to_hide || false;

  // set in maps
  waiter_to_hide.set(id, to_hide);
  waiter_to_fadeout.set(selector, fade_out);
  waiter_to_hide_on_error.set(id, hide_on_error);
  waiter_to_hide_on_silent_error.set(id, hide_on_silent_error);

  let el = getDimensions(dom); // get dimensions

  if(id === null){
    el.height = window.innerHeight;
    el.width = $("body").width();
  }
  
  // force static if position relative
  // otherwise overlay is completely off
  var pos = window.getComputedStyle(dom, null).position;
  if(pos == 'relative')
    dom.className += ' staticParent';

  // check if overlay exists
  dom.childNodes.forEach(function(el){
    if(el.className === 'waiter-overlay')
      exists = true;
  });

  if(exists === true){
    console.log("waiter on", id, "already exists");
    return;
  }
  
  hideRecalculate(id);

  // create overlay
  var overlay = document.createElement("DIV");
  // create overlay content
  var overlay_content = document.createElement("DIV");
  // insert html
  overlay_content.innerHTML = html;
  overlay_content.classList.add("waiter-overlay-content");

  // dynamic position
  if(id == null)
    overlay.style.position = "fixed";
  else
    overlay.style.position = "absolute";
  
  // dynamic dimensions
  overlay.style.height = el.height + 'px';
  overlay.style.width = el.width + 'px';
  overlay.style.top = el.top + 'px';
  overlay.style.left = el.left + 'px';
  overlay.style.backgroundColor = color;
  overlay.classList.add("waiter-overlay");

  if(image != null && image != ''){
    overlay.style.backgroundImage = "url('" + image + "')";
  }

  if(id !== null) {
    overlay.classList.add("waiter-local");
  } else {
    overlay.classList.add('waiter-fullscreen');
  }
  //overlay.style.animation = "expand .15s ease-in-out";

  // append overlay content in overlay
  overlay.appendChild(overlay_content);

  // append overlay to dom
  dom.appendChild(overlay);

  // set input
  try {
    Shiny.setInputValue(id + "_waiter_shown", true, {priority: 'event'});
  }
  catch(err) {
    console.log("waiterShowOnLoad - shiny not connected yet:", err.message);
  }
  
}

export const hideWaiter = (id) => {

  var selector = 'body';
  if(id !== null)
    selector = '#' + id;

  let overlay = $(selector).find(".waiter-overlay");
  
  if(overlay.length == 0)
    return;
  
  let timeout = 250;
  if(waiter_to_fadeout.get(selector)){
    let value = waiter_to_fadeout.get(selector);

    if(typeof value == 'boolean')
      value = 500;

    $(overlay).fadeOut(value);

    timeout = timeout + value;
  }
  
  // this is to avoid the waiter screen from flashing
  setTimeout(function(){
    overlay.remove();
  }, timeout);

}

export const updateWaiter = (id, html) => {

  var selector = 'body';

  if(id !== null)
    selector = '#' + id;

  var dom = document.querySelector(selector);

  var overlay = dom.getElementsByClassName("waiter-overlay-content");
  
  if(overlay.length == 0)
    return;

  if(overlay.length > 0)
    overlay[0].innerHTML = html;
  else
    console.log("no waiter on", id);
  
}

// storage to avoid multiple CSS injections
let hiddenRecalculating = new Map();

const hideRecalculate = (id) => {

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

// currently unused but may be useful for others using JS API
export const showRecalculate = (id) => {
  $(id + "-waiter-recalculating").remove();
}

// remove when output receives value
$(document).on('shiny:value', function(event) {
  if(waiter_to_hide.get(event.name)){
    hideWaiter(event.name);
  }
});

// remove when output errors
$(document).on('shiny:error', function(event) {
  if(event.error.type == null && waiter_to_hide_on_error.get(event.name)){
    hideWaiter(event.name);
  } else if (event.error.type != null && waiter_to_hide_on_silent_error.get(event.name)){
    hideWaiter(event.name);
  }
});

// On resize we need to resize the waiter screens too
window.addEventListener("resize", function(){
  let waiters = document.getElementsByClassName("waiter-local");
  let fs = document.getElementsByClassName("waiter-fullscreen");

  for(waiter of waiters){
    dim = get_offset(waiter.parentElement);
    waiter.style.width = dim.width + 'px';
    waiter.style.height = dim.height + 'px';
  }

  for(waiter of fs){
    dim = get_offset(waiter.parentElement);
    waiter.style.width = window.innerWidth + 'px';
    waiter.style.height = window.innerHeight + 'px';
  }
});

Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  showWaiter(
    opts.id, 
    opts.html, 
    opts.color, 
    opts.hide_on_render, 
    opts.hide_on_error, 
    opts.hide_on_silent_error,
    opts.image,
    opts.fade_out
  );
  Shiny.setInputValue("waiter_shown", true, {priority: 'event'});
});

Shiny.addCustomMessageHandler('waiter-update', function(opts) {
  updateWaiter(opts.id, opts.html);
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  hideWaiter(opts.id);

  let input = "waiter_hidden";
  if(opts.id !== null)
    input = opts.id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
});
