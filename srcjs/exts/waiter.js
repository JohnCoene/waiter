import 'shiny';
import 'jquery';
import { getDimensions } from './dimensions';

import './waiter-css/css-spinners.css';
import './waiter-css/custom.css';
import './waiter-css/devloop.css';
import './waiter-css/loaders.css';
import './waiter-css/spinbolt.css';
import './waiter-css/spinkit.css';
import './waiter-css/spinners.css';
import './waiter-css/waiter.css';

// elements to hide on recomputed
var waiterToHideOnRender = new Map();
var waiterToFadeout = new Map();
var waiterToHideOnError = new Map();
var waiterToHideOnSilentError = new Map();

const setWaiterShownInput = (id) => {
  let input = "waiter_shown";
  if(id !== null)
    input = id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
};

const setWaiterHiddenInput = (id) => {
  let input = "waiter_hidden";
  if(id !== null)
    input = id + "_" + input;
  
  Shiny.setInputValue(input, true, {priority: 'event'});
}

let defaultWaiter = {
  id: null, 
  html: '<div class="container--box"><div class="boxxy"><div class="spinner spinner--1"></div></div></div>', 
  color: '#333e48', 
  hideOnRender: false, 
  hideOnError: false, 
  hideOnSilentError: false, 
  image: null,
  fadeOut: false,
  onShown: setWaiterShownInput
};

// show waiter overlay
export const showWaiter = (params = defaultWaiter) => {

  // declare
  var dom,
      selector = 'body',
      exists = false;

  // get parent
  if(params.id !== null)
    selector = '#' + params.id;
  
  dom = document.querySelector(selector);
  if(dom == undefined){
    console.log("Cannot find", params.id);
    return ;
  }
  
  // allow missing for testing
  params.hideOnRender = params.hideOnRender || false;

  // set in maps
  waiterToHideOnRender.set(params.id, params.hideOnError);
  waiterToFadeout.set(selector, params.fadeOut);
  waiterToHideOnError.set(params.id, params.hideOnError);
  waiterToHideOnSilentError.set(params.id, params.hideOnSilentError);

  let el = getDimensions(dom); // get dimensions

  // no id = fll screen
  if(params.id === null){
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

  if(exists){
    console.log("waiter on", params.id, "already exists");
    return;
  }
  
  hideRecalculate(params.id);

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

  // append overlay to dom
  dom.appendChild(overlay);

  // set input
  try {
    params.onShown(params.id);
  }
  catch(err) {
    console.log("likely using waiterShowOnLoad - shiny not connected yet:", err.message);
  }
  
}

export const hideWaiter = (id, onHidden) => {

  var selector = 'body';
  if(id !== null)
    selector = '#' + id;

  let overlay = $(selector).find(".waiter-overlay");
  
  if(overlay.length == 0)
    return;
  
  let timeout = 250;
  if(waiterToFadeout.get(selector)){
    let value = waiterToFadeout.get(selector);

    if(typeof value == 'boolean')
      value = 500;

    $(overlay).fadeOut(value);

    timeout = timeout + value;
  }
  
  // this is to avoid the waiter screen from flashing
  setTimeout(function(){
    overlay.remove();
  }, timeout);

  onHidden(id);

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
  if(waiterToHide.get(event.name)){
    hideWaiter(event.name);
  }
});

// remove when output errors
$(document).on('shiny:error', function(event) {
  if(event.error.type == null && waiterToHideOnError.get(event.name)){
    hideWaiter(event.name);
    return
  } 
  
  if (event.error.type != null && waiterToHideOnSilentError.get(event.name)){
    hideWaiter(event.name);
  }
});

// On resize we need to resize the waiter screens too
window.addEventListener("resize", function(){
  let waiters = document.getElementsByClassName("waiter-local");
  let fs = document.getElementsByClassName("waiter-fullscreen");

  for(waiter of waiters){
    let dim = getDimensions(waiter.parentElement);
    waiter.style.width = dim.width + 'px';
    waiter.style.height = dim.height + 'px';
  }

  for(waiter of fs){
    waiter.style.width = window.innerWidth + 'px';
    waiter.style.height = window.innerHeight + 'px';
  }
});

Shiny.addCustomMessageHandler('waiter-show', function(opts) {
  showWaiter({
    id: opts.id, 
    html: opts.html, 
    color: opts.color, 
    hideOnRender: opts.hide_on_render,
    hideOnError: opts.hide_on_error, 
    hideOnSilentError: opts.hide_on_silent_error,
    image: opts.image,
    fadeOut: opts.fade_out
  });
  Shiny.setInputValue("waiter_shown", true, {priority: 'event'});
});

Shiny.addCustomMessageHandler('waiter-update', function(opts) {
  updateWaiter(opts.id, opts.html);
});

Shiny.addCustomMessageHandler('waiter-hide', function(opts) {
  hideWaiter(opts.id, setWaiterHiddenInput);
});
