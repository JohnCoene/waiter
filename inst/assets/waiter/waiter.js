// compute offset position of waiter overlay
function get_offset(element) {
  var elementPosition = {};

  //set width and height
  elementPosition.width = element.offsetWidth;
  elementPosition.height = element.offsetHeight;

  //calculate element top and left
  var _x = element.offsetLeft;
  var _y = element.offsetTop;
  if(isNaN(_x))
    _x = 0;
  if(isNaN(_y))
    _y = 0;
  
  //set top and left
  elementPosition.top = _y;
  elementPosition.left = _x;

  return elementPosition;
}

// elements to hide on recomputed
var waiter_to_hide = new Map();
var waiter_to_fadeout = new Map();
var waiter_to_hide_on_error = new Map();
var waiter_to_hide_on_silent_error = new Map();

// show waiter overlay
function show_waiter(
  id = null, 
  html, 
  color = '#333e48', 
  to_hide = false, 
  hide_on_error = false, 
  hide_on_silent_error = false, 
  image = null,
  fade_out = false
){

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
  waiter_to_fadeout.set(id, fade_out);
  waiter_to_hide_on_error.set(id, hide_on_error);
  waiter_to_hide_on_silent_error.set(id, hide_on_silent_error);

  el = get_offset(dom); // get dimensions

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
  
  hide_recalculate(id);

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
    console.log("waiter_show_on_load - shiny not connected yet:", err.message);
  }
  
}

function hide_waiter(id){

  var selector = 'body';
  if(id !== null)
    selector = '#' + id;

  let overlay = $(selector).find(".waiter-overlay");
  
  if(overlay.length == 0)
    return;
  
  let timeout = 250;
  if(waiter_to_fadeout.get(id)){
    let value = waiter_to_fadeout.get(id);

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

function update_waiter(id, html){

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
hiddenRecalculating = new Map();

function hide_recalculate(id){

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
function show_recalculate(id){
  $(id + "-waiter-recalculating").remove();
}

// remove when output receives value
$(document).on('shiny:value', function(event) {
  if(waiter_to_hide.get(event.name)){
    hide_waiter(event.name);
  }
});

// remove when output errors
$(document).on('shiny:error', function(event) {
  if(event.error.type == null && waiter_to_hide_on_error.get(event.name)){
    hide_waiter(event.name);
  } else if (event.error.type != null && waiter_to_hide_on_silent_error.get(event.name)){
    hide_waiter(event.name);
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
