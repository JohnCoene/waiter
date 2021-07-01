import 'shiny';
import 'jquery';

import {progressJs} from './progress';
import { hideRecalculate } from '../recalculate';
import { getDimensions } from '../dimensions';

import './css/progress.css';
import './css/overlay.css';

// keep infinite to later clear
let intervals = new Map();
// elements to hide on recomputed
let waitressToHide = new Map();

let waitresses = new Map();

function positionToCoords(position){
  var pos = {};

  var base_y = 0;
  var current_notifications = document.getElementsByClassName("waitress-notification");
  for(var n of current_notifications){
    base_y = base_y + 10 + n.offsetHeight;
  }

  if(position == "bl"){
    pos.top = "auto";
    pos.bottom = (base_y + 10) + 'px';
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl"){
    pos.top = (base_y + 10) + "px";
    pos.bottom = "auto";
    pos.left = "10px";
    pos.right = "auto";
  } else if(position == "br"){
    pos.top = "auto";
    pos.bottom = (base_y + 10) + 'px';
    pos.left = "auto";
    pos.right = "10px";
  } else if(position == "tr"){
    pos.top = (base_y + 10) + 'px';
    pos.bottom = "auto";
    pos.left = "auto";
    pos.right = "10px";
  }

  return pos;
}

Shiny.addCustomMessageHandler('waitress-init', function(opts) {

	if(waitresses.get(opts.name) != undefined)
    return; 
  
  let notification, prog;

  if(opts.notify){
    // create div
    notification = document.createElement("DIV");

    // position div
    let pos = positionToCoords(opts.position);
    notification.style.bottom = pos.bottom;
    notification.style.right = pos.right;
    notification.style.left = pos.left;
    notification.style.top = pos.top;

    //notification.width = '100px';
    notification.height = '50px';
    notification.style.color = opts.textColor;
    notification.style.backgroundColor = opts.backgroundColor;
    notification.style.position = "fixed";
    notification.innerHTML = opts.html;
    notification.style.zIndex = 9999;
    notification.id = opts.id;
    notification.classList.add("waitress-notification");
    notification.classList.add("notifications");
    document.body.appendChild(notification);
    opts.id = '#' + opts.id;
  }

	if(opts.id != null)
		prog = progressJs(opts.id);
	else
		prog = progressJs();

	prog = prog.setOptions(opts.options);

	waitresses.set(opts.name, prog);
});

Shiny.addCustomMessageHandler('waitress-start', function(opts) {
  
  waitresses.get(opts.name).start();
  let exists = false, 
      dom,
      overlay,
      overlayContent;
  
  if(opts.hideOnRender)
    waitressToHide.set(opts.id, opts);

  // content
  if(opts.html){

    hideRecalculate(opts.id);

    // get parent
    dom = document.getElementById(opts.id);
    if(dom == undefined){
      console.log("Cannot find", opts.id);
      return ;
    }

    let el = getDimensions(dom, 2, -2); 

    // check if overlay exists
    dom.childNodes.forEach(function(el){
      if(el.className === 'waitress-overlay')
        exists = true;
    });

    if(exists){
      console.log("waitress on", opts.id, "already exists");
      return;
    }

    // create overlay
    overlay = document.createElement("DIV");
    // create overlay content
    overlayContent = document.createElement("DIV");
    // insert html
    overlayContent.innerHTML = opts.html;
    overlayContent.classList.add("waitress-overlay-content");

    // add styles
    overlay.style.height = el.height + 'px';
    overlay.style.width = el.width + 'px';
    overlay.style.top = el.top + 'px';
    overlay.style.left = el.left + 'px';
    overlay.style.color = opts.textColor;
    overlay.style.backgroundColor = opts.backgroundColor;
    overlay.style.position = "absolute";
    overlay.style.zIndex = 99999999;
    overlay.classList.add("waitress-overlay");

    // append overlay content in overlay
    overlay.appendChild(overlayContent);

    // append overlay to dom
    setTimeout(function(){
      dom.appendChild(overlay);
    }, 10);
  }

  // https://github.com/JohnCoene/waiter/issues/63
  if(opts.infinite){
    let value = 0,
        inc = 0,
        end = 100;

    intervals.set(
      opts.name, 
      setInterval(function(){
        inc = ((end - value) / (end + value));
        value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000
        waitresses.get(opts.name).set(value);
      }, 350)
    );
  }
});

Shiny.addCustomMessageHandler('waitress-set', function(opts) {
	waitresses.get(opts.name).set(opts.percent);
});

Shiny.addCustomMessageHandler('waitress-auto', function(opts) {
	waitresses.get(opts.name).autoIncrease(opts.percent, opts.ms);
});

Shiny.addCustomMessageHandler('waitress-increase', function(opts) {
	waitresses.get(opts.name).increase(opts.percent);
});

Shiny.addCustomMessageHandler('waitress-end', function(opts) {
  waitresses.get(opts.name).end();

  if(opts.id){
    var dom = document.getElementById(opts.id);
    var overlay = dom.getElementsByClassName("waitress-overlay");
  
    if(overlay.length > 0)
      dom.removeChild(overlay[0]);
  }

  if(opts.infinite)
    clearInterval(intervals.get(opts.name));
  
    if(opts.isNotification){
    // small delay to allow the loading bar to end
    setTimeout(function(){
      $(`#${opts.name}`).remove();
    }, 400);
  }

});

$(document).on('shiny:value shiny:error shiny:recalculated', function(event) {
  let w = waitressToHide.get(event.name);

  if(w == undefined)
    return ;
  
  if(w.infinite)
    clearInterval(intervals.get(event.name));
  
  waitresses.get(w.name).end();

  if(w.isNotification){
    // small delay to allow the loading bar to end
    setTimeout(function(){
      $(`#${event.name}`).remove();
    }, 400);
  }
  
});