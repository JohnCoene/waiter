import "shiny";
import "jquery";
import { getDimensions } from "../dimensions";
import { hideRecalculate } from "../recalculate";
import { setWaiterHiddenInput, setWaiterShownInput } from "./callbacks";
import { createOverlay } from "./overlay";

import "./css/css-spinners.css";
import "./css/custom.css";
import "./css/devloop.css";
import "./css/loaders.css";
import "./css/spinbolt.css";
import "./css/spinkit.css";
import "./css/spinners.css";
import "./css/waiter.css";

// elements to hide on recomputed
var waiterToHideOnRender = new Map();
var waiterToFadeout = new Map();
var waiterToHideOnError = new Map();
var waiterToHideOnSilentError = new Map();

let defaultWaiter = {
  id: null,
  html: '<div class="container--box"><div class="boxxy"><div class="spinner spinner--1"></div></div></div>',
  color: "#333e48",
  hideOnRender: false,
  hideOnError: false,
  hideOnSilentError: false,
  image: null,
  fadeOut: false,
  ns: null,
  onShown: setWaiterShownInput,
  onHidden: setWaiterHiddenInput,
};

/**
 * Show a waiter screen
 * @function
 * @param  {JSON} params - JSON object of options, see 'defaultWaiter'.
 * @example
 * // defaults
 * show({
 *   id: null,
 *   html: '<div class="container--box"><div class="boxxy"><div class="spinner spinner--1"></div></div></div>',
 *   color: '#333e48',
 *   hideOnRender: false,
 *   hideOnError: false,
 *   hideOnSilentError: false,
 *   image: null,
 *   fadeOut: false,
 *   ns: null,
 *   onShown: setWaiterShownInput,
 *   onHidden: setWaiterHiddenInput
 * });
 */
export const show = (params = defaultWaiter) => {
  // declare
  var dom,
    selector = "body",
    exists = false;

  // get parent
  if (params.id !== null) selector = "#" + params.id;

  dom = document.querySelector(selector);
  if (dom == undefined) {
    console.log("Cannot find", params.id);
    return;
  }

  // allow missing for testing
  params.hideOnRender = params.hideOnRender || false;

  // set in maps
  waiterToHideOnRender.set(params.id, params);
  waiterToFadeout.set(selector, params.fadeOut);
  waiterToHideOnError.set(params.id, params.hideOnError);
  waiterToHideOnSilentError.set(params.id, params.hideOnSilentError);

  let el = getDimensions(dom); // get dimensions

  // no id = fll screen
  if (params.id === null) {
    el.height = window.innerHeight;
    el.width = $("body").width();
  }

  // force static if position relative
  // otherwise overlay is completely off
  var pos = window.getComputedStyle(dom, null).position;
  if (pos == "relative") dom.className += " staticParent";

  // check if overlay exists
  dom.childNodes.forEach((el) => {
    if (el.className === "waiter-overlay") exists = true;
  });

  if (exists) {
    console.log("waiter on", params.id, "already exists");
    return;
  }

  hideRecalculate(params.id);

  let overlay = createOverlay(params, el);
  // append overlay to dom
  dom.appendChild(overlay);

  // set input
  if (params.onShown != undefined) params.onShown(params.id);
};
/**
 * @function
 * @param  {string} id - Id of element containing the waiter.
 * if 'null' assumes the waiter is full screen.
 * @param  {Function} onHidden - A callback function to call
 * when the waiter is hidden. Leave on 'null' to not use.
 */
export const hide = (id, onHidden = null) => {
  var selector = "body";
  if (id !== null) selector = "#" + id;

  let overlay = $(selector).find(".waiter-overlay");

  if (overlay.length == 0) return;

  let timeout = 250;
  if (waiterToFadeout.get(selector)) {
    let value = waiterToFadeout.get(selector);

    if (typeof value == "boolean") value = 500;

    $(overlay).fadeOut(value);

    timeout = timeout + value;
  }

  // this is to avoid the waiter screen from flashing
  setTimeout(function () {
    overlay.remove();
  }, timeout);

  if (onHidden != undefined && onHidden != null) onHidden(id);
};

/**
 * Update the content of the waiter.
 * @function
 * @param  {string} id - Id of element to update the waiter.
 * If 'null' assumes the waiter is full screen.
 * @param  {string} html - An html string content to replace
 * the waiter.
 */
export const update = (id, html) => {
  var selector = "body";
  if (id !== null) selector = "#" + id;

  $(selector)
    .find(".waiter-overlay-content")
    .each((index, el) => {
      $(el).html(html);
    });
};

/**
 * Show the recalculate effect from base shiny.
 * Only useful if it was previously hidden.
 * @function
 * @param  {string} id - Id of reactive element.
 */
export const showRecalculate = (id) => {
  $(id + "-waiter-recalculating").remove();
};

// remove when output receives value
$(document).on("shiny:value", function (event) {
  let w = waiterToHideOnRender.get(event.name);

  if (w == undefined) return;

  if (!w.hideOnRender) return;

  hide(event.name, w.onHidden);
});

// remove when output errors
$(document).on("shiny:error", function (event) {
  if (event.error.type == null && waiterToHideOnError.get(event.name)) {
    hide(event.name, setWaiterHiddenInput);
    return;
  }

  if (event.error.type != null && waiterToHideOnSilentError.get(event.name)) {
    hide(event.name, setWaiterHiddenInput);
  }
});

// On resize we need to resize the waiter screens too
window.addEventListener("resize", function () {
  $(".waiter-local").each((index, el) => {
    let dim = getDimensions($(el).parent()[0]);
    $(el).css({
      width: dim.width + "px",
      height: dim.height + "px",
    });
  });

  $(".waiter-fullscreen").css({
    width: window.innerWidth + "px",
    height: window.innerHeight + "px",
  });
});

Shiny.addCustomMessageHandler("waiter-show", function (opts) {
  show(opts);
  Shiny.setInputValue("waiter_shown", true, { priority: "event" });
});

Shiny.addCustomMessageHandler("waiter-update", function (opts) {
  update(opts.id, opts.html);
});

Shiny.addCustomMessageHandler("waiter-hide", function (opts) {
  hide(opts.id, setWaiterHiddenInput);
});
