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
var waiter_to_hide = [];
var waiter_to_hide_on_error = [];
var waiter_to_hide_on_silent_error = [];

// show waiter overlay
function show_waiter(id, html, color, to_hide, hide_on_error, hide_on_silent_error, image){
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

  // add to array
  if(to_hide)
    waiter_to_hide.push(id);

  if(hide_on_error)
    waiter_to_hide_on_error.push(id);

  if(hide_on_silent_error)
    waiter_to_hide_on_silent_error.push(id);

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

  // add styles
  overlay.style.height = el.height + 'px';
  overlay.style.width = el.width + 'px';
  overlay.style.top = el.top + 'px';
  overlay.style.left = el.left + 'px';
  overlay.style.backgroundColor = color;
  overlay.style.position = "absolute";
  overlay.style.zIndex = 9999;
  overlay.classList.add("waiter-overlay");

  if(image != null && image != ''){
    overlay.style.backgroundImage = "url('" + image + "')";
  }

  if(id === null) {
    overlay.classList.add("waiter-fullscreen");
    bindEvents();
  } else {
    overlay.classList.add("waiter-local");
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

  var dom = document.querySelector(selector);

  var overlay = dom.getElementsByClassName("waiter-overlay");

  if(overlay.length > 0){
    overlay[0].style.opacity = '0';
    setTimeout(function(){
      try {
        dom.removeChild(overlay[0]);
        hide_recalculate(id);
      } catch {
        console.log("error removing waiter from", id)
      } finally {
        Shiny.setInputValue(id + "_waiter_hidden", true, {priority: 'event'});
      }
    }, 250)
  } else{
    console.log("no waiter on", id);
  }

}

function update_waiter(id, html){

  var selector = 'body';

  if(id !== null)
    selector = '#' + id;

  var dom = document.querySelector(selector);

  var overlay = dom.getElementsByClassName("waiter-overlay-content");

  if(overlay.length > 0)
    overlay[0].innerHTML = html;
  else
    console.log("no waiter on", id);
  
}

function hide_recalculate(id){

  if(id === null)
    return ;

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

function show_recalculate(id){
  $(id + "-waiter-recalculating").remove();
}

// remove when output receives value
$(document).on('shiny:value', function(event) {
  if(waiter_to_hide.indexOf(event.name) >= 0){
    hide_waiter(event.name);
  }
});

// remove when output errors
$(document).on('shiny:error', function(event) {
  if(event.error.type == null && waiter_to_hide_on_error.indexOf(event.name) >= 0){
    hide_waiter(event.name);
  } else if (event.error.type != null && waiter_to_hide_on_silent_error.indexOf(event.name) >= 0){
    hide_waiter(event.name);
  }
});

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

function bindEvents(){
  document.onscroll = function(){
    let waiter = document.getElementsByClassName("waiter-fullscreen");

    if(waiter === undefined)
      return;
     
    waiter[0].scrollIntoView();
  }
}