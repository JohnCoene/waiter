(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Shiny"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["Shiny", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["waitress"] = factory(require("Shiny"), require("jQuery"));
	else
		root["waitress"] = factory(root["Shiny"], root["jQuery"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_shiny__, __WEBPACK_EXTERNAL_MODULE_jquery__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);
      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }
      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names

  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
    content = _item[1],
    cssMapping = _item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./srcjs/exts/dimensions.js":
/*!**********************************!*\
  !*** ./srcjs/exts/dimensions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDimensions: () => (/* binding */ getDimensions)
/* harmony export */ });
/**
 * Get the dimensions of an element. Used to layer the waiter
 * screen on top of say 'element'.
 * @param  {HTMLElement} element - Element to compute the dimensions.
 * @param  {number} offsetTop - Offset for the top of the dimension.
 * @param  {number} offsetHeight - Offset for the Height dimension.
 */
const getDimensions = (element, offsetTop = 0, offsetHeight = 0) => {
  var elementPosition = {
    width: element.offsetWidth,
    height: element.offsetHeight + offsetHeight,
    top: isNaN(element.offsetTop) ? offsetTop : element.offsetTop + offsetTop,
    left: isNaN(element.offsetLeft) ? 0 : element.offsetLeft
  };
  return elementPosition;
};

/***/ }),

/***/ "./srcjs/exts/recalculate.js":
/*!***********************************!*\
  !*** ./srcjs/exts/recalculate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideRecalculate: () => (/* binding */ hideRecalculate)
/* harmony export */ });
// storage to avoid multiple CSS injections
let hiddenRecalculating = new Map();
/**
 * Hide the recalculate effect from base shiny for a
 * specific element.
 * @param  {string} id - Id of element to hide the
 * recalculate.
 */
const hideRecalculate = id => {
  if (id === null) return;
  if (hiddenRecalculating.get(id)) return;
  hiddenRecalculating.set(id, true);
  var css = "#" + id + ".recalculating {opacity: 1.0 !important; }",
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");
  style.id = id + "-waiter-recalculating";
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
};

/***/ }),

/***/ "./srcjs/exts/waitress/progress.js":
/*!*****************************************!*\
  !*** ./srcjs/exts/waitress/progress.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

/**
 * Progress.js v0.1.0
 * https://github.com/usablica/progress.js
 * MIT licensed
 *
 * Copyright (C) 2013 usabli.ca - Afshin Mehrabani (@afshinmeh)
 */

(function (root, factory) {
  if (true) {
    // CommonJS
    factory(exports);
  } else {}
})(this, function (exports) {
  //Default config/variables
  var VERSION = "0.1.0";

  /**
   * ProgressJs main class
   *
   * @class ProgressJs
   */
  function ProgressJs(obj) {
    if (typeof obj.length != "undefined") {
      this._targetElement = obj;
    } else {
      this._targetElement = [obj];
    }
    if (typeof window._progressjsId === "undefined") window._progressjsId = 1;
    if (typeof window._progressjsIntervals === "undefined") window._progressjsIntervals = {};
    this._options = {
      //progress bar theme
      theme: "blue",
      //overlay mode makes an overlay layer in the target element
      overlayMode: false,
      //to consider CSS3 transitions in events
      considerTransition: true
    };
  }

  /**
   * Start progress for specific element(s)
   *
   * @api private
   * @method _createContainer
   */
  function _startProgress() {
    //call onBeforeStart callback
    if (typeof this._onBeforeStartCallback != "undefined") {
      this._onBeforeStartCallback.call(this);
    }

    //create the container for progress bar
    _createContainer.call(this);
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      _setProgress.call(this, this._targetElement[i]);
    }
  }

  /**
   * Set progress bar for specific element
   *
   * @api private
   * @method _setProgress
   * @param {Object} targetElement
   */
  function _setProgress(targetElement) {
    //if the target element already as `data-progressjs`, ignore the init
    if (targetElement.hasAttribute("data-progressjs")) return;

    //get target element position
    var targetElementOffset = _getOffset.call(this, targetElement);
    targetElement.setAttribute("data-progressjs", window._progressjsId);
    var progressElementContainer = document.createElement("div");
    progressElementContainer.className = "progressjs-progress progressjs-theme-" + this._options.theme;

    //set the position percent elements, it depends on targetElement tag
    if (targetElement.tagName.toLowerCase() === "body") {
      progressElementContainer.style.position = "fixed";
    } else {
      progressElementContainer.style.position = "absolute";
    }
    progressElementContainer.setAttribute("data-progressjs", window._progressjsId);
    var progressElement = document.createElement("div");
    progressElement.className = "progressjs-inner";

    //create an element for current percent of progress bar
    var progressPercentElement = document.createElement("div");
    progressPercentElement.className = "progressjs-percent";
    progressPercentElement.innerHTML = "1%";
    progressElement.appendChild(progressPercentElement);
    if (this._options.overlayMode && targetElement.tagName.toLowerCase() === "body") {
      //if we have `body` for target element and also overlay mode is enable, we should use a different
      //position for progress bar container element
      progressElementContainer.style.left = 0;
      progressElementContainer.style.right = 0;
      progressElementContainer.style.top = 0;
      progressElementContainer.style.bottom = 0;
    } else {
      //set progress bar container size and offset
      progressElementContainer.style.left = targetElementOffset.left + "px";
      progressElementContainer.style.top = targetElementOffset.top + "px";
      //if targetElement is body set to percent so it scales with browser resize
      if (targetElement.nodeName == "BODY") {
        progressElementContainer.style.width = "100%";
      } else {
        progressElementContainer.style.width = targetElementOffset.width + "px";
      }
      if (this._options.overlayMode) {
        progressElementContainer.style.height = targetElementOffset.height + "px";
      }
    }
    progressElementContainer.appendChild(progressElement);

    //append the element to container
    var container = document.querySelector(".progressjs-container");
    container.appendChild(progressElementContainer);
    _setPercentFor(targetElement, 1);

    //and increase the progressId
    ++window._progressjsId;
  }

  /**
   * Set percent for all elements
   *
   * @api private
   * @method _setPercent
   * @param {Number} percent
   */
  function _setPercent(percent) {
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      _setPercentFor.call(this, this._targetElement[i], percent);
    }
  }

  /**
   * Set percent for specific element
   *
   * @api private
   * @method _setPercentFor
   * @param {Object} targetElement
   * @param {Number} percent
   */
  function _setPercentFor(targetElement, percent) {
    var self = this;

    //prevent overflow!
    if (percent >= 100) percent = 100;
    if (targetElement.hasAttribute("data-progressjs")) {
      //setTimeout for better CSS3 animation applying in some cases
      setTimeout(function () {
        //call the onprogress callback
        if (typeof self._onProgressCallback != "undefined") {
          self._onProgressCallback.call(self, targetElement, percent);
        }
        var percentElement = _getPercentElement(targetElement);
        percentElement.style.width = parseInt(percent) + "%";
        var percentElement = percentElement.querySelector(".progressjs-percent");
        var existingPercent = parseInt(percentElement.innerHTML.replace("%", ""));

        //start increase/decrease the percent element with animation
        (function (percentElement, existingPercent, currentPercent) {
          var increasement = true;
          if (existingPercent > currentPercent) {
            increasement = false;
          }
          var intervalIn = 10;
          function changePercentTimer(percentElement, existingPercent, currentPercent) {
            //calculate the distance between two percents
            var distance = Math.abs(existingPercent - currentPercent);
            if (distance < 3) {
              intervalIn = 30;
            } else if (distance < 20) {
              intervalIn = 20;
            } else {
              intervanIn = 1;
            }
            if (existingPercent - currentPercent != 0) {
              //set the percent
              percentElement.innerHTML = (increasement ? ++existingPercent : --existingPercent) + "%";
              setTimeout(function () {
                changePercentTimer(percentElement, existingPercent, currentPercent);
              }, intervalIn);
            }
          }
          changePercentTimer(percentElement, existingPercent, currentPercent);
        })(percentElement, existingPercent, parseInt(percent));
      }, 50);
    }
  }

  /**
   * Get the progress bar element
   *
   * @api private
   * @method _getPercentElement
   * @param {Object} targetElement
   */
  function _getPercentElement(targetElement) {
    var progressjsId = parseInt(targetElement.getAttribute("data-progressjs"));
    return document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="' + progressjsId + '"] > .progressjs-inner');
  }

  /**
   * Auto increase the progress bar every X milliseconds
   *
   * @api private
   * @method _autoIncrease
   * @param {Number} size
   * @param {Number} millisecond
   */
  function _autoIncrease(size, millisecond) {
    var self = this;
    var target = this._targetElement[0];
    if (!target) return;
    var progressjsId = parseInt(target.getAttribute("data-progressjs"));
    if (typeof window._progressjsIntervals[progressjsId] != "undefined") {
      clearInterval(window._progressjsIntervals[progressjsId]);
    }
    window._progressjsIntervals[progressjsId] = setInterval(function () {
      _increasePercent.call(self, size);
    }, millisecond);
  }

  /**
   * Increase the size of progress bar
   *
   * @api private
   * @method _increasePercent
   * @param {Number} size
   */
  function _increasePercent(size) {
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];
      if (currentElement.hasAttribute("data-progressjs")) {
        var percentElement = _getPercentElement(currentElement);
        var existingPercent = parseInt(percentElement.style.width.replace("%", ""));
        if (existingPercent) {
          _setPercentFor.call(this, currentElement, existingPercent + (size || 1));
        }
      }
    }
  }

  /**
   * Close and remove progress bar
   *
   * @api private
   * @method _end
   */
  function _end() {
    //call onBeforeEnd callback
    if (typeof this._onBeforeEndCallback != "undefined") {
      if (this._options.considerTransition === true) {
        //we can safety assume that all layers would be the same, so `this._targetElement[0]` is the same as `this._targetElement[1]`
        _getPercentElement(this._targetElement[0]).addEventListener(whichTransitionEvent(), this._onBeforeEndCallback, false);
      } else {
        this._onBeforeEndCallback.call(this);
      }
    }
    var target = this._targetElement[0];
    if (!target) return;
    var progressjsId = parseInt(target.getAttribute("data-progressjs"));
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];
      var percentElement = _getPercentElement(currentElement);
      if (!percentElement) return;
      var existingPercent = parseInt(percentElement.style.width.replace("%", ""));
      var timeoutSec = 1;
      if (existingPercent < 100) {
        _setPercentFor.call(this, currentElement, 100);
        timeoutSec = 500;
      }

      //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
      //about compatibility with IEs. Should be fixed in further versions.
      (function (percentElement, currentElement) {
        setTimeout(function () {
          percentElement.parentNode.className += " progressjs-end";
          setTimeout(function () {
            //remove the percent element from page
            percentElement.parentNode.parentNode.removeChild(percentElement.parentNode);
            //and remove the attribute
            currentElement.removeAttribute("data-progressjs");
          }, 1000);
        }, timeoutSec);
      })(percentElement, currentElement);
    }

    //clean the setInterval for autoIncrease function
    if (window._progressjsIntervals[progressjsId]) {
      //`delete` keyword has some problems in IE
      try {
        clearInterval(window._progressjsIntervals[progressjsId]);
        window._progressjsIntervals[progressjsId] = null;
        delete window._progressjsIntervals[progressjsId];
      } catch (ex) {}
    }
  }

  /**
   * Remove progress bar without finishing
   *
   * @api private
   * @method _kill
   */
  function _kill() {
    var target = this._targetElement[0];
    if (!target) return;
    var progressjsId = parseInt(target.getAttribute("data-progressjs"));
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];
      var percentElement = _getPercentElement(currentElement);
      if (!percentElement) return;

      //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
      //about compatibility with IEs. Should be fixed in further versions.
      (function (percentElement, currentElement) {
        percentElement.parentNode.className += " progressjs-end";
        setTimeout(function () {
          //remove the percent element from page
          percentElement.parentNode.parentNode.removeChild(percentElement.parentNode);
          //and remove the attribute
          currentElement.removeAttribute("data-progressjs");
        }, 1000);
      })(percentElement, currentElement);
    }

    //clean the setInterval for autoIncrease function
    if (window._progressjsIntervals[progressjsId]) {
      //`delete` keyword has some problems in IE
      try {
        clearInterval(window._progressjsIntervals[progressjsId]);
        window._progressjsIntervals[progressjsId] = null;
        delete window._progressjsIntervals[progressjsId];
      } catch (ex) {}
    }
  }

  /**
   * Create the progress bar container
   *
   * @api private
   * @method _createContainer
   */
  function _createContainer() {
    //first check if we have an container already, we don't need to create it again
    if (!document.querySelector(".progressjs-container")) {
      var containerElement = document.createElement("div");
      containerElement.className = "progressjs-container";
      document.body.appendChild(containerElement);
    }
  }

  /**
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method _getOffset
   * @param {Object} element
   * @returns Element's position info
   */
  function _getOffset(element) {
    var elementPosition = {};
    if (element.tagName.toLowerCase() === "body") {
      //set width
      elementPosition.width = element.clientWidth;
      //set height
      elementPosition.height = element.clientHeight;
    } else {
      //set width
      elementPosition.width = element.offsetWidth;
      //set height
      elementPosition.height = element.offsetHeight;
    }

    //calculate element top and left
    var _x = 0;
    var _y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      _x += element.offsetLeft;
      _y += element.offsetTop;
      element = element.offsetParent;
    }
    //set top
    elementPosition.top = _y;
    //set left
    elementPosition.left = _x;
    return elementPosition;
  }

  /**
   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
   * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
   *
   * @param obj1
   * @param obj2
   * @returns obj3 a new object based on obj1 and obj2
   */
  function _mergeOptions(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }
    return obj3;
  }
  var progressJs = function (targetElm) {
    if (typeof targetElm === "object") {
      //Ok, create a new instance
      return new ProgressJs(targetElm);
    } else if (typeof targetElm === "string") {
      //select the target element with query selector
      var targetElement = document.querySelectorAll(targetElm);
      if (targetElement) {
        return new ProgressJs(targetElement);
      } else {
        throw new Error("There is no element with given selector.");
      }
    } else {
      return new ProgressJs(document.body);
    }
  };

  /**
   * Get correct transition callback
   * Thanks @webinista: http://stackoverflow.com/a/9090128/375966
   *
   * @returns transition name
   */
  function whichTransitionEvent() {
    var t;
    var el = document.createElement("fakeelement");
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  /**
   * Current ProgressJs version
   *
   * @property version
   * @type String
   */
  progressJs.version = VERSION;

  //Prototype
  progressJs.fn = ProgressJs.prototype = {
    clone: function () {
      return new ProgressJs(this);
    },
    setOption: function (option, value) {
      this._options[option] = value;
      return this;
    },
    setOptions: function (options) {
      this._options = _mergeOptions(this._options, options);
      return this;
    },
    start: function () {
      _startProgress.call(this);
      return this;
    },
    set: function (percent) {
      _setPercent.call(this, percent);
      return this;
    },
    increase: function (size) {
      _increasePercent.call(this, size);
      return this;
    },
    autoIncrease: function (size, millisecond) {
      _autoIncrease.call(this, size, millisecond);
      return this;
    },
    end: function () {
      _end.call(this);
      return this;
    },
    kill: function () {
      _kill.call(this);
      return this;
    },
    onbeforeend: function (providedCallback) {
      if (typeof providedCallback === "function") {
        this._onBeforeEndCallback = providedCallback;
      } else {
        throw new Error("Provided callback for onbeforeend was not a function");
      }
      return this;
    },
    onbeforestart: function (providedCallback) {
      if (typeof providedCallback === "function") {
        this._onBeforeStartCallback = providedCallback;
      } else {
        throw new Error("Provided callback for onbeforestart was not a function");
      }
      return this;
    },
    onprogress: function (providedCallback) {
      if (typeof providedCallback === "function") {
        this._onProgressCallback = providedCallback;
      } else {
        throw new Error("Provided callback for onprogress was not a function");
      }
      return this;
    }
  };
  exports.progressJs = progressJs;
  return progressJs;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/overlay.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/overlay.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom */\n.waitress-overlay{\n  text-align: center;\n  z-index:999;\n}\n\n.waitress-overlay-content{\n  text-align: center;\n  position: absolute;\n  right: 50%;\n  margin-right: -35px;\n  top: 50%;\n  margin-top: -20px;\n}\n\n.waitress-notification{\n  max-width: 100%;\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.notifications{\n  box-shadow:\n    0 3.1px 2px rgba(0, 0, 0, 0.02),\n    0 6.9px 4.7px rgba(0, 0, 0, 0.028),\n    0 12.8px 8.9px rgba(0, 0, 0, 0.035),\n    0 23.1px 15.9px rgba(0, 0, 0, 0.042),\n    0 43.2px 29.7px rgba(0, 0, 0, 0.05),\n    0 100px 71px rgba(0, 0, 0, 0.07);\n}\n\n@media (max-width: 500px) { \n  .waitress-notification {\n    width: 94%;\n    left: 0 !important;\n    right: 0 !important;\n    margin-left: 3%;\n    margin-right: 3%;\n  }\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}", "",{"version":3,"sources":["webpack://./srcjs/exts/waitress/css/overlay.css"],"names":[],"mappings":"AAAA,WAAW;AACX;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE;;;;;;oCAMkC;AACpC;;AAEA;EACE;IACE,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,6BAA6B;YACrB,qBAAqB;EAC/B;EACA;IACE,2BAA2B;YACnB,mBAAmB;EAC7B;AACF;AACA;EACE;IACE,6BAA6B;YACrB,qBAAqB;EAC/B;EACA;IACE,2BAA2B;YACnB,mBAAmB;EAC7B;AACF","sourcesContent":["/* Custom */\n.waitress-overlay{\n  text-align: center;\n  z-index:999;\n}\n\n.waitress-overlay-content{\n  text-align: center;\n  position: absolute;\n  right: 50%;\n  margin-right: -35px;\n  top: 50%;\n  margin-top: -20px;\n}\n\n.waitress-notification{\n  max-width: 100%;\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.notifications{\n  box-shadow:\n    0 3.1px 2px rgba(0, 0, 0, 0.02),\n    0 6.9px 4.7px rgba(0, 0, 0, 0.028),\n    0 12.8px 8.9px rgba(0, 0, 0, 0.035),\n    0 23.1px 15.9px rgba(0, 0, 0, 0.042),\n    0 43.2px 29.7px rgba(0, 0, 0, 0.05),\n    0 100px 71px rgba(0, 0, 0, 0.07);\n}\n\n@media (max-width: 500px) { \n  .waitress-notification {\n    width: 94%;\n    left: 0 !important;\n    right: 0 !important;\n    margin-left: 3%;\n    margin-right: 3%;\n  }\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/progress.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/progress.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".progressjs-inner {\n    width: 0;\n}\n.progressjs-progress {\n    z-index: 9999999;\n}\n\n/* blue theme, like iOS 7 progress bar */\n.progressjs-theme-blue .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blue.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blue .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadius {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadiusHalfOpacity {\n    background-color: white;\n    opacity: 0.5;\n   -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius, overlay layer and percent bar */\n.progressjs-theme-blueOverlayRadiusWithPercentBar {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-percent {\n    width: 70px;\n    text-align: center;\n    height: 40px;\n    position: absolute;\n    right: 50%;\n    margin-right: -35px;\n    top: 50%;\n    margin-top: -20px;\n    font-size: 30px;\n    opacity: .5;\n}\n\n.progressjs-theme-blackRadiusInputs {\n    height: 10px;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 1s ease-out;\n    -moz-transition: all 1s ease-out;\n    -o-transition: all 1s ease-out;\n    transition: all 1s ease-out;\n    background-color: #34495e;\n}\n.progressjs-theme-blackRadiusInputs.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-percent {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./srcjs/exts/waitress/css/progress.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;AACZ;AACA;IACI,gBAAgB;AACpB;;AAEA,wCAAwC;AACxC;IACI,WAAW;IACX,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,yCAAyC;IACzC,sCAAsC;IACtC,oCAAoC;IACpC,iCAAiC;IACjC,UAAU;AACd;AACA;IACI,aAAa;AACjB;;AAEA,kDAAkD;AAClD;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,kDAAkD;AAClD;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,oDAAoD;AACpD;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,oDAAoD;AACpD;IACI,uBAAuB;IACvB,YAAY;GACb,qCAAqC;IACpC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,iEAAiE;AACjE;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;IACjB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,mCAAmC;IACnC,gCAAgC;IAChC,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,yCAAyC;IACzC,sCAAsC;IACtC,oCAAoC;IACpC,iCAAiC;IACjC,UAAU;AACd;AACA;IACI,aAAa;AACjB","sourcesContent":[".progressjs-inner {\n    width: 0;\n}\n.progressjs-progress {\n    z-index: 9999999;\n}\n\n/* blue theme, like iOS 7 progress bar */\n.progressjs-theme-blue .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blue.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blue .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadius {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadiusHalfOpacity {\n    background-color: white;\n    opacity: 0.5;\n   -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius, overlay layer and percent bar */\n.progressjs-theme-blueOverlayRadiusWithPercentBar {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-percent {\n    width: 70px;\n    text-align: center;\n    height: 40px;\n    position: absolute;\n    right: 50%;\n    margin-right: -35px;\n    top: 50%;\n    margin-top: -20px;\n    font-size: 30px;\n    opacity: .5;\n}\n\n.progressjs-theme-blackRadiusInputs {\n    height: 10px;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 1s ease-out;\n    -moz-transition: all 1s ease-out;\n    -o-transition: all 1s ease-out;\n    transition: all 1s ease-out;\n    background-color: #34495e;\n}\n.progressjs-theme-blackRadiusInputs.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-percent {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./srcjs/exts/waitress/css/overlay.css":
/*!*********************************************!*\
  !*** ./srcjs/exts/waitress/css/overlay.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./overlay.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/overlay.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./srcjs/exts/waitress/css/progress.css":
/*!**********************************************!*\
  !*** ./srcjs/exts/waitress/css/progress.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./progress.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/progress.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_shiny__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************!*\
  !*** ./srcjs/exts/waitress/waitress.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress */ "./srcjs/exts/waitress/progress.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_progress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recalculate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recalculate */ "./srcjs/exts/recalculate.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dimensions */ "./srcjs/exts/dimensions.js");
/* harmony import */ var _css_progress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/progress.css */ "./srcjs/exts/waitress/css/progress.css");
/* harmony import */ var _css_overlay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/overlay.css */ "./srcjs/exts/waitress/css/overlay.css");








// keep infinite to later clear
let intervals = new Map();
// elements to hide on recomputed
let waitressToHide = new Map();
let waitresses = new Map();
function positionToCoords(position) {
  var pos = {};
  var base_y = 0;
  var current_notifications = document.getElementsByClassName("waitress-notification");
  for (var n of current_notifications) {
    base_y = base_y + 10 + n.offsetHeight;
  }
  if (position == "bl") {
    pos.top = "auto";
    pos.bottom = base_y + 10 + "px";
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl") {
    pos.top = base_y + 10 + "px";
    pos.bottom = "auto";
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "br") {
    pos.top = "auto";
    pos.bottom = base_y + 10 + "px";
    pos.left = "auto";
    pos.right = "10px";
  } else if (position == "tr") {
    pos.top = base_y + 10 + "px";
    pos.bottom = "auto";
    pos.left = "auto";
    pos.right = "10px";
  }
  return pos;
}
Shiny.addCustomMessageHandler("waitress-init", function (opts) {
  if (waitresses.get(opts.name) != undefined) return;
  let notification, prog;
  if (opts.notify) {
    // create div
    notification = document.createElement("DIV");

    // position div
    let pos = positionToCoords(opts.position);
    notification.style.bottom = pos.bottom;
    notification.style.right = pos.right;
    notification.style.left = pos.left;
    notification.style.top = pos.top;

    //notification.width = '100px';
    notification.height = "50px";
    notification.style.color = opts.textColor;
    notification.style.backgroundColor = opts.backgroundColor;
    notification.style.position = "fixed";
    notification.innerHTML = opts.html;
    notification.style.zIndex = 9999;
    notification.id = opts.id;
    notification.classList.add("waitress-notification");
    notification.classList.add("notifications");
    document.body.appendChild(notification);
    opts.id = "#" + opts.id;
  }
  if (opts.id != null) prog = (0,_progress__WEBPACK_IMPORTED_MODULE_2__.progressJs)(opts.id);else prog = (0,_progress__WEBPACK_IMPORTED_MODULE_2__.progressJs)();
  prog = prog.setOptions(opts.options);
  waitresses.set(opts.name, prog);
});
Shiny.addCustomMessageHandler("waitress-start", function (opts) {
  waitresses.get(opts.name).start();
  let exists = false,
    dom,
    overlay,
    overlayContent;
  if (opts.hideOnRender) waitressToHide.set(opts.id, opts);

  // content
  if (opts.html) {
    (0,_recalculate__WEBPACK_IMPORTED_MODULE_3__.hideRecalculate)(opts.id);

    // get parent
    dom = document.getElementById(opts.id);
    if (dom == undefined) {
      console.log("Cannot find", opts.id);
      return;
    }
    let el = (0,_dimensions__WEBPACK_IMPORTED_MODULE_4__.getDimensions)(dom, 2, -2);

    // check if overlay exists
    dom.childNodes.forEach(function (el) {
      if (el.className === "waitress-overlay") exists = true;
    });
    if (exists) {
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
    overlay.style.height = el.height + "px";
    overlay.style.width = el.width + "px";
    overlay.style.top = el.top + "px";
    overlay.style.left = el.left + "px";
    overlay.style.color = opts.textColor;
    overlay.style.backgroundColor = opts.backgroundColor;
    overlay.style.position = "absolute";
    overlay.style.zIndex = 99999999;
    overlay.classList.add("waitress-overlay");

    // append overlay content in overlay
    overlay.appendChild(overlayContent);

    // append overlay to dom
    setTimeout(function () {
      dom.appendChild(overlay);
    }, 10);
  }

  // https://github.com/JohnCoene/waiter/issues/63
  if (opts.infinite) {
    let value = 0,
      inc = 0,
      end = 100;
    intervals.set(opts.name, setInterval(function () {
      inc = (end - value) / (end + value);
      value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000;
      waitresses.get(opts.name).set(value);
    }, 350));
  }
});
Shiny.addCustomMessageHandler("waitress-set", function (opts) {
  waitresses.get(opts.name).set(opts.percent);
});
Shiny.addCustomMessageHandler("waitress-auto", function (opts) {
  waitresses.get(opts.name).autoIncrease(opts.percent, opts.ms);
});
Shiny.addCustomMessageHandler("waitress-increase", function (opts) {
  waitresses.get(opts.name).increase(opts.percent);
});
Shiny.addCustomMessageHandler("waitress-end", function (opts) {
  waitresses.get(opts.name).end();
  if (opts.id) {
    var dom = document.getElementById(opts.id);
    var overlay = dom.getElementsByClassName("waitress-overlay");
    if (overlay.length > 0) dom.removeChild(overlay[0]);
  }
  if (opts.infinite) clearInterval(intervals.get(opts.name));
  if (opts.isNotification) {
    // small delay to allow the loading bar to end
    setTimeout(function () {
      $(`#${opts.name}`).remove();
    }, 400);
  }
});
$(document).on("shiny:value shiny:error shiny:recalculated", function (event) {
  let w = waitressToHide.get(event.name);
  if (w == undefined) return;
  if (w.infinite) clearInterval(intervals.get(event.name));
  waitresses.get(w.name).end();
  if (w.isNotification) {
    // small delay to allow the loading bar to end
    setTimeout(function () {
      $(`#${event.name}`).remove();
    }, 400);
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQzFMLElBQUssRUFBQyxDQUFDLENBQUN1TixNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1Q7QUFDRixDQUFDLENBQUM7QUFFRkQsQ0FBQyxDQUFDbkssUUFBUSxDQUFDLENBQUNxSyxFQUFFLENBQUMsNENBQTRDLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0VBQzVFLElBQUlDLENBQUMsR0FBR3pDLGNBQWMsQ0FBQ2xJLEdBQUcsQ0FBQzBLLEtBQUssQ0FBQ3pOLElBQUksQ0FBQztFQUV0QyxJQUFJME4sQ0FBQyxJQUFJM0QsU0FBUyxFQUFFO0VBRXBCLElBQUkyRCxDQUFDLENBQUNYLFFBQVEsRUFBRXJGLGFBQWEsQ0FBQ3NELFNBQVMsQ0FBQ2pJLEdBQUcsQ0FBQzBLLEtBQUssQ0FBQ3pOLElBQUksQ0FBQyxDQUFDO0VBRXhEa0wsVUFBVSxDQUFDbkksR0FBRyxDQUFDMkssQ0FBQyxDQUFDMU4sSUFBSSxDQUFDLENBQUMwSyxHQUFHLENBQUMsQ0FBQztFQUU1QixJQUFJZ0QsQ0FBQyxDQUFDTCxjQUFjLEVBQUU7SUFDcEI7SUFDQWhILFVBQVUsQ0FBQyxZQUFZO01BQ3JCaUgsQ0FBQyxDQUFFLElBQUdHLEtBQUssQ0FBQ3pOLElBQUssRUFBQyxDQUFDLENBQUN1TixNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1Q7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhaXRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9zcmNqcy9leHRzL2RpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vc3JjanMvZXh0cy9yZWNhbGN1bGF0ZS5qcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9zcmNqcy9leHRzL3dhaXRyZXNzL3Byb2dyZXNzLmpzIiwid2VicGFjazovL3dhaXRlci8uL3NyY2pzL2V4dHMvd2FpdHJlc3MvY3NzL292ZXJsYXkuY3NzIiwid2VicGFjazovL3dhaXRlci8uL3NyY2pzL2V4dHMvd2FpdHJlc3MvY3NzL3Byb2dyZXNzLmNzcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9zcmNqcy9leHRzL3dhaXRyZXNzL2Nzcy9vdmVybGF5LmNzcz9kNGM1Iiwid2VicGFjazovL3dhaXRlci8uL3NyY2pzL2V4dHMvd2FpdHJlc3MvY3NzL3Byb2dyZXNzLmNzcz8yMzQyIiwid2VicGFjazovL3dhaXRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhaXRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2FpdGVyL2V4dGVybmFsIHVtZCBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vd2FpdGVyL2V4dGVybmFsIHVtZCBcImpRdWVyeVwiIiwid2VicGFjazovL3dhaXRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FpdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dhaXRlci8uL3NyY2pzL2V4dHMvd2FpdHJlc3Mvd2FpdHJlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiU2hpbnlcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiU2hpbnlcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2FpdHJlc3NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJTaGlueVwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2FpdHJlc3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJTaGlueVwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zaGlueV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogR2V0IHRoZSBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQuIFVzZWQgdG8gbGF5ZXIgdGhlIHdhaXRlclxuICogc2NyZWVuIG9uIHRvcCBvZiBzYXkgJ2VsZW1lbnQnLlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGNvbXB1dGUgdGhlIGRpbWVuc2lvbnMuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG9mZnNldFRvcCAtIE9mZnNldCBmb3IgdGhlIHRvcCBvZiB0aGUgZGltZW5zaW9uLlxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRIZWlnaHQgLSBPZmZzZXQgZm9yIHRoZSBIZWlnaHQgZGltZW5zaW9uLlxuICovXG5leHBvcnQgY29uc3QgZ2V0RGltZW5zaW9ucyA9IChlbGVtZW50LCBvZmZzZXRUb3AgPSAwLCBvZmZzZXRIZWlnaHQgPSAwKSA9PiB7XG4gIHZhciBlbGVtZW50UG9zaXRpb24gPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIG9mZnNldEhlaWdodCxcbiAgICB0b3A6IGlzTmFOKGVsZW1lbnQub2Zmc2V0VG9wKSA/IG9mZnNldFRvcCA6IGVsZW1lbnQub2Zmc2V0VG9wICsgb2Zmc2V0VG9wLFxuICAgIGxlZnQ6IGlzTmFOKGVsZW1lbnQub2Zmc2V0TGVmdCkgPyAwIDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICB9O1xuXG4gIHJldHVybiBlbGVtZW50UG9zaXRpb247XG59O1xuXG4iLCIvLyBzdG9yYWdlIHRvIGF2b2lkIG11bHRpcGxlIENTUyBpbmplY3Rpb25zXG5sZXQgaGlkZGVuUmVjYWxjdWxhdGluZyA9IG5ldyBNYXAoKTtcbi8qKlxuICogSGlkZSB0aGUgcmVjYWxjdWxhdGUgZWZmZWN0IGZyb20gYmFzZSBzaGlueSBmb3IgYVxuICogc3BlY2lmaWMgZWxlbWVudC5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWQgLSBJZCBvZiBlbGVtZW50IHRvIGhpZGUgdGhlXG4gKiByZWNhbGN1bGF0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVSZWNhbGN1bGF0ZSA9IChpZCkgPT4ge1xuICBpZiAoaWQgPT09IG51bGwpIHJldHVybjtcblxuICBpZiAoaGlkZGVuUmVjYWxjdWxhdGluZy5nZXQoaWQpKSByZXR1cm47XG5cbiAgaGlkZGVuUmVjYWxjdWxhdGluZy5zZXQoaWQsIHRydWUpO1xuXG4gIHZhciBjc3MgPSBcIiNcIiArIGlkICsgXCIucmVjYWxjdWxhdGluZyB7b3BhY2l0eTogMS4wICFpbXBvcnRhbnQ7IH1cIixcbiAgICBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sXG4gICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cbiAgc3R5bGUuaWQgPSBpZCArIFwiLXdhaXRlci1yZWNhbGN1bGF0aW5nXCI7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG5cbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59O1xuIiwiLyoqXG4gKiBQcm9ncmVzcy5qcyB2MC4xLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS91c2FibGljYS9wcm9ncmVzcy5qc1xuICogTUlUIGxpY2Vuc2VkXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDEzIHVzYWJsaS5jYSAtIEFmc2hpbiBNZWhyYWJhbmkgKEBhZnNoaW5tZWgpXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIENvbW1vbkpTXG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeShyb290KTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgLy9EZWZhdWx0IGNvbmZpZy92YXJpYWJsZXNcbiAgdmFyIFZFUlNJT04gPSBcIjAuMS4wXCI7XG5cbiAgLyoqXG4gICAqIFByb2dyZXNzSnMgbWFpbiBjbGFzc1xuICAgKlxuICAgKiBAY2xhc3MgUHJvZ3Jlc3NKc1xuICAgKi9cbiAgZnVuY3Rpb24gUHJvZ3Jlc3NKcyhvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5fdGFyZ2V0RWxlbWVudCA9IG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGFyZ2V0RWxlbWVudCA9IFtvYmpdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9wcm9ncmVzc2pzSWQgPT09IFwidW5kZWZpbmVkXCIpIHdpbmRvdy5fcHJvZ3Jlc3Nqc0lkID0gMTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzID0ge307XG5cbiAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgLy9wcm9ncmVzcyBiYXIgdGhlbWVcbiAgICAgIHRoZW1lOiBcImJsdWVcIixcbiAgICAgIC8vb3ZlcmxheSBtb2RlIG1ha2VzIGFuIG92ZXJsYXkgbGF5ZXIgaW4gdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICBvdmVybGF5TW9kZTogZmFsc2UsXG4gICAgICAvL3RvIGNvbnNpZGVyIENTUzMgdHJhbnNpdGlvbnMgaW4gZXZlbnRzXG4gICAgICBjb25zaWRlclRyYW5zaXRpb246IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBwcm9ncmVzcyBmb3Igc3BlY2lmaWMgZWxlbWVudChzKVxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfY3JlYXRlQ29udGFpbmVyXG4gICAqL1xuICBmdW5jdGlvbiBfc3RhcnRQcm9ncmVzcygpIHtcbiAgICAvL2NhbGwgb25CZWZvcmVTdGFydCBjYWxsYmFja1xuICAgIGlmICh0eXBlb2YgdGhpcy5fb25CZWZvcmVTdGFydENhbGxiYWNrICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuX29uQmVmb3JlU3RhcnRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIHRoZSBjb250YWluZXIgZm9yIHByb2dyZXNzIGJhclxuICAgIF9jcmVhdGVDb250YWluZXIuY2FsbCh0aGlzKTtcblxuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDtcbiAgICAgIGkgPCBlbG1zTGVuZ3RoO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICBfc2V0UHJvZ3Jlc3MuY2FsbCh0aGlzLCB0aGlzLl90YXJnZXRFbGVtZW50W2ldKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb2dyZXNzIGJhciBmb3Igc3BlY2lmaWMgZWxlbWVudFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfc2V0UHJvZ3Jlc3NcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9zZXRQcm9ncmVzcyh0YXJnZXRFbGVtZW50KSB7XG4gICAgLy9pZiB0aGUgdGFyZ2V0IGVsZW1lbnQgYWxyZWFkeSBhcyBgZGF0YS1wcm9ncmVzc2pzYCwgaWdub3JlIHRoZSBpbml0XG4gICAgaWYgKHRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc2pzXCIpKSByZXR1cm47XG5cbiAgICAvL2dldCB0YXJnZXQgZWxlbWVudCBwb3NpdGlvblxuICAgIHZhciB0YXJnZXRFbGVtZW50T2Zmc2V0ID0gX2dldE9mZnNldC5jYWxsKHRoaXMsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgdGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIiwgd2luZG93Ll9wcm9ncmVzc2pzSWQpO1xuXG4gICAgdmFyIHByb2dyZXNzRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9XG4gICAgICBcInByb2dyZXNzanMtcHJvZ3Jlc3MgcHJvZ3Jlc3Nqcy10aGVtZS1cIiArIHRoaXMuX29wdGlvbnMudGhlbWU7XG5cbiAgICAvL3NldCB0aGUgcG9zaXRpb24gcGVyY2VudCBlbGVtZW50cywgaXQgZGVwZW5kcyBvbiB0YXJnZXRFbGVtZW50IHRhZ1xuICAgIGlmICh0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJib2R5XCIpIHtcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIH1cblxuICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRhdGEtcHJvZ3Jlc3Nqc1wiLFxuICAgICAgd2luZG93Ll9wcm9ncmVzc2pzSWQsXG4gICAgKTtcbiAgICB2YXIgcHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9ncmVzc0VsZW1lbnQuY2xhc3NOYW1lID0gXCJwcm9ncmVzc2pzLWlubmVyXCI7XG5cbiAgICAvL2NyZWF0ZSBhbiBlbGVtZW50IGZvciBjdXJyZW50IHBlcmNlbnQgb2YgcHJvZ3Jlc3MgYmFyXG4gICAgdmFyIHByb2dyZXNzUGVyY2VudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2dyZXNzUGVyY2VudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJwcm9ncmVzc2pzLXBlcmNlbnRcIjtcbiAgICBwcm9ncmVzc1BlcmNlbnRFbGVtZW50LmlubmVySFRNTCA9IFwiMSVcIjtcblxuICAgIHByb2dyZXNzRWxlbWVudC5hcHBlbmRDaGlsZChwcm9ncmVzc1BlcmNlbnRFbGVtZW50KTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMub3ZlcmxheU1vZGUgJiZcbiAgICAgIHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImJvZHlcIlxuICAgICkge1xuICAgICAgLy9pZiB3ZSBoYXZlIGBib2R5YCBmb3IgdGFyZ2V0IGVsZW1lbnQgYW5kIGFsc28gb3ZlcmxheSBtb2RlIGlzIGVuYWJsZSwgd2Ugc2hvdWxkIHVzZSBhIGRpZmZlcmVudFxuICAgICAgLy9wb3NpdGlvbiBmb3IgcHJvZ3Jlc3MgYmFyIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUubGVmdCA9IDA7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUucmlnaHQgPSAwO1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnRvcCA9IDA7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUuYm90dG9tID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9zZXQgcHJvZ3Jlc3MgYmFyIGNvbnRhaW5lciBzaXplIGFuZCBvZmZzZXRcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gdGFyZ2V0RWxlbWVudE9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnRvcCA9IHRhcmdldEVsZW1lbnRPZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgLy9pZiB0YXJnZXRFbGVtZW50IGlzIGJvZHkgc2V0IHRvIHBlcmNlbnQgc28gaXQgc2NhbGVzIHdpdGggYnJvd3NlciByZXNpemVcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm5vZGVOYW1lID09IFwiQk9EWVwiKSB7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGFyZ2V0RWxlbWVudE9mZnNldC53aWR0aCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMub3ZlcmxheU1vZGUpIHtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudE9mZnNldC5oZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzRWxlbWVudCk7XG5cbiAgICAvL2FwcGVuZCB0aGUgZWxlbWVudCB0byBjb250YWluZXJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc2pzLWNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyKTtcblxuICAgIF9zZXRQZXJjZW50Rm9yKHRhcmdldEVsZW1lbnQsIDEpO1xuXG4gICAgLy9hbmQgaW5jcmVhc2UgdGhlIHByb2dyZXNzSWRcbiAgICArK3dpbmRvdy5fcHJvZ3Jlc3Nqc0lkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwZXJjZW50IGZvciBhbGwgZWxlbWVudHNcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX3NldFBlcmNlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9zZXRQZXJjZW50KHBlcmNlbnQpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLCBlbG1zTGVuZ3RoID0gdGhpcy5fdGFyZ2V0RWxlbWVudC5sZW5ndGg7XG4gICAgICBpIDwgZWxtc0xlbmd0aDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgX3NldFBlcmNlbnRGb3IuY2FsbCh0aGlzLCB0aGlzLl90YXJnZXRFbGVtZW50W2ldLCBwZXJjZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBlcmNlbnQgZm9yIHNwZWNpZmljIGVsZW1lbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX3NldFBlcmNlbnRGb3JcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEVsZW1lbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9zZXRQZXJjZW50Rm9yKHRhcmdldEVsZW1lbnQsIHBlcmNlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvL3ByZXZlbnQgb3ZlcmZsb3chXG4gICAgaWYgKHBlcmNlbnQgPj0gMTAwKSBwZXJjZW50ID0gMTAwO1xuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc2pzXCIpKSB7XG4gICAgICAvL3NldFRpbWVvdXQgZm9yIGJldHRlciBDU1MzIGFuaW1hdGlvbiBhcHBseWluZyBpbiBzb21lIGNhc2VzXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jYWxsIHRoZSBvbnByb2dyZXNzIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5fb25Qcm9ncmVzc0NhbGxiYWNrICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBzZWxmLl9vblByb2dyZXNzQ2FsbGJhY2suY2FsbChzZWxmLCB0YXJnZXRFbGVtZW50LCBwZXJjZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwZXJjZW50RWxlbWVudCA9IF9nZXRQZXJjZW50RWxlbWVudCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgcGVyY2VudEVsZW1lbnQuc3R5bGUud2lkdGggPSBwYXJzZUludChwZXJjZW50KSArIFwiJVwiO1xuXG4gICAgICAgIHZhciBwZXJjZW50RWxlbWVudCA9IHBlcmNlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIucHJvZ3Jlc3Nqcy1wZXJjZW50XCIsXG4gICAgICAgICk7XG4gICAgICAgIHZhciBleGlzdGluZ1BlcmNlbnQgPSBwYXJzZUludChcbiAgICAgICAgICBwZXJjZW50RWxlbWVudC5pbm5lckhUTUwucmVwbGFjZShcIiVcIiwgXCJcIiksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9zdGFydCBpbmNyZWFzZS9kZWNyZWFzZSB0aGUgcGVyY2VudCBlbGVtZW50IHdpdGggYW5pbWF0aW9uXG4gICAgICAgIChmdW5jdGlvbiAocGVyY2VudEVsZW1lbnQsIGV4aXN0aW5nUGVyY2VudCwgY3VycmVudFBlcmNlbnQpIHtcbiAgICAgICAgICB2YXIgaW5jcmVhc2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZXhpc3RpbmdQZXJjZW50ID4gY3VycmVudFBlcmNlbnQpIHtcbiAgICAgICAgICAgIGluY3JlYXNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpbnRlcnZhbEluID0gMTA7XG4gICAgICAgICAgZnVuY3Rpb24gY2hhbmdlUGVyY2VudFRpbWVyKFxuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQsXG4gICAgICAgICAgICBleGlzdGluZ1BlcmNlbnQsXG4gICAgICAgICAgICBjdXJyZW50UGVyY2VudCxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwZXJjZW50c1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMoZXhpc3RpbmdQZXJjZW50IC0gY3VycmVudFBlcmNlbnQpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMykge1xuICAgICAgICAgICAgICBpbnRlcnZhbEluID0gMzA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgMjApIHtcbiAgICAgICAgICAgICAgaW50ZXJ2YWxJbiA9IDIwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW50ZXJ2YW5JbiA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZ1BlcmNlbnQgLSBjdXJyZW50UGVyY2VudCAhPSAwKSB7XG4gICAgICAgICAgICAgIC8vc2V0IHRoZSBwZXJjZW50XG4gICAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgKGluY3JlYXNlbWVudCA/ICsrZXhpc3RpbmdQZXJjZW50IDogLS1leGlzdGluZ1BlcmNlbnQpICsgXCIlXCI7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZVBlcmNlbnRUaW1lcihcbiAgICAgICAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQZXJjZW50LFxuICAgICAgICAgICAgICAgICAgY3VycmVudFBlcmNlbnQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSwgaW50ZXJ2YWxJbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlUGVyY2VudFRpbWVyKHBlcmNlbnRFbGVtZW50LCBleGlzdGluZ1BlcmNlbnQsIGN1cnJlbnRQZXJjZW50KTtcbiAgICAgICAgfSkocGVyY2VudEVsZW1lbnQsIGV4aXN0aW5nUGVyY2VudCwgcGFyc2VJbnQocGVyY2VudCkpO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHByb2dyZXNzIGJhciBlbGVtZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9nZXRQZXJjZW50RWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0RWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gX2dldFBlcmNlbnRFbGVtZW50KHRhcmdldEVsZW1lbnQpIHtcbiAgICB2YXIgcHJvZ3Jlc3Nqc0lkID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIikpO1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcm9ncmVzc2pzLWNvbnRhaW5lciA+IC5wcm9ncmVzc2pzLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3Nqcz1cIicgK1xuICAgICAgICBwcm9ncmVzc2pzSWQgK1xuICAgICAgICAnXCJdID4gLnByb2dyZXNzanMtaW5uZXInLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXV0byBpbmNyZWFzZSB0aGUgcHJvZ3Jlc3MgYmFyIGV2ZXJ5IFggbWlsbGlzZWNvbmRzXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9hdXRvSW5jcmVhc2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbGxpc2Vjb25kXG4gICAqL1xuICBmdW5jdGlvbiBfYXV0b0luY3JlYXNlKHNpemUsIG1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldEVsZW1lbnRbMF07XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICB2YXIgcHJvZ3Jlc3Nqc0lkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3Nqc1wiKSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFsc1twcm9ncmVzc2pzSWRdICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwod2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0pO1xuICAgIH1cbiAgICB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbmNyZWFzZVBlcmNlbnQuY2FsbChzZWxmLCBzaXplKTtcbiAgICB9LCBtaWxsaXNlY29uZCk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2UgdGhlIHNpemUgb2YgcHJvZ3Jlc3MgYmFyXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9pbmNyZWFzZVBlcmNlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemVcbiAgICovXG4gIGZ1bmN0aW9uIF9pbmNyZWFzZVBlcmNlbnQoc2l6ZSkge1xuICAgIGZvciAoXG4gICAgICB2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDtcbiAgICAgIGkgPCBlbG1zTGVuZ3RoO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSB0aGlzLl90YXJnZXRFbGVtZW50W2ldO1xuICAgICAgaWYgKGN1cnJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3Nqc1wiKSkge1xuICAgICAgICB2YXIgcGVyY2VudEVsZW1lbnQgPSBfZ2V0UGVyY2VudEVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICB2YXIgZXhpc3RpbmdQZXJjZW50ID0gcGFyc2VJbnQoXG4gICAgICAgICAgcGVyY2VudEVsZW1lbnQuc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIiksXG4gICAgICAgICk7XG4gICAgICAgIGlmIChleGlzdGluZ1BlcmNlbnQpIHtcbiAgICAgICAgICBfc2V0UGVyY2VudEZvci5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LFxuICAgICAgICAgICAgZXhpc3RpbmdQZXJjZW50ICsgKHNpemUgfHwgMSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbmQgcmVtb3ZlIHByb2dyZXNzIGJhclxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfZW5kXG4gICAqL1xuICBmdW5jdGlvbiBfZW5kKCkge1xuICAgIC8vY2FsbCBvbkJlZm9yZUVuZCBjYWxsYmFja1xuICAgIGlmICh0eXBlb2YgdGhpcy5fb25CZWZvcmVFbmRDYWxsYmFjayAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5jb25zaWRlclRyYW5zaXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgLy93ZSBjYW4gc2FmZXR5IGFzc3VtZSB0aGF0IGFsbCBsYXllcnMgd291bGQgYmUgdGhlIHNhbWUsIHNvIGB0aGlzLl90YXJnZXRFbGVtZW50WzBdYCBpcyB0aGUgc2FtZSBhcyBgdGhpcy5fdGFyZ2V0RWxlbWVudFsxXWBcbiAgICAgICAgX2dldFBlcmNlbnRFbGVtZW50KHRoaXMuX3RhcmdldEVsZW1lbnRbMF0pLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSxcbiAgICAgICAgICB0aGlzLl9vbkJlZm9yZUVuZENhbGxiYWNrLFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb25CZWZvcmVFbmRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXRFbGVtZW50WzBdO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIHByb2dyZXNzanNJZCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIikpO1xuXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCwgZWxtc0xlbmd0aCA9IHRoaXMuX3RhcmdldEVsZW1lbnQubGVuZ3RoO1xuICAgICAgaSA8IGVsbXNMZW5ndGg7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuX3RhcmdldEVsZW1lbnRbaV07XG4gICAgICB2YXIgcGVyY2VudEVsZW1lbnQgPSBfZ2V0UGVyY2VudEVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuXG4gICAgICBpZiAoIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgIHZhciBleGlzdGluZ1BlcmNlbnQgPSBwYXJzZUludChcbiAgICAgICAgcGVyY2VudEVsZW1lbnQuc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIiksXG4gICAgICApO1xuXG4gICAgICB2YXIgdGltZW91dFNlYyA9IDE7XG4gICAgICBpZiAoZXhpc3RpbmdQZXJjZW50IDwgMTAwKSB7XG4gICAgICAgIF9zZXRQZXJjZW50Rm9yLmNhbGwodGhpcywgY3VycmVudEVsZW1lbnQsIDEwMCk7XG4gICAgICAgIHRpbWVvdXRTZWMgPSA1MDA7XG4gICAgICB9XG5cbiAgICAgIC8vSSBiZWxpZXZlIEkgc2hvdWxkIGhhbmRsZSB0aGlzIHNpdHVhdGlvbiB3aXRoIGV2ZW50TGlzdGVuZXIgYW5kIGB0cmFuc2l0aW9uZW5kYCBldmVudCBidXQgSSdtIG5vdCBzdXJlXG4gICAgICAvL2Fib3V0IGNvbXBhdGliaWxpdHkgd2l0aCBJRXMuIFNob3VsZCBiZSBmaXhlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLlxuICAgICAgKGZ1bmN0aW9uIChwZXJjZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVyY2VudEVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc05hbWUgKz0gXCIgcHJvZ3Jlc3Nqcy1lbmRcIjtcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9yZW1vdmUgdGhlIHBlcmNlbnQgZWxlbWVudCBmcm9tIHBhZ2VcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvL2FuZCByZW1vdmUgdGhlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc2pzXCIpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LCB0aW1lb3V0U2VjKTtcbiAgICAgIH0pKHBlcmNlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy9jbGVhbiB0aGUgc2V0SW50ZXJ2YWwgZm9yIGF1dG9JbmNyZWFzZSBmdW5jdGlvblxuICAgIGlmICh3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSkge1xuICAgICAgLy9gZGVsZXRlYCBrZXl3b3JkIGhhcyBzb21lIHByb2JsZW1zIGluIElFXG4gICAgICB0cnkge1xuICAgICAgICBjbGVhckludGVydmFsKHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFsc1twcm9ncmVzc2pzSWRdKTtcbiAgICAgICAgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF07XG4gICAgICB9IGNhdGNoIChleCkge31cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHByb2dyZXNzIGJhciB3aXRob3V0IGZpbmlzaGluZ1xuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfa2lsbFxuICAgKi9cbiAgZnVuY3Rpb24gX2tpbGwoKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldEVsZW1lbnRbMF07XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICB2YXIgcHJvZ3Jlc3Nqc0lkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3Nqc1wiKSk7XG5cbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwLCBlbG1zTGVuZ3RoID0gdGhpcy5fdGFyZ2V0RWxlbWVudC5sZW5ndGg7XG4gICAgICBpIDwgZWxtc0xlbmd0aDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5fdGFyZ2V0RWxlbWVudFtpXTtcbiAgICAgIHZhciBwZXJjZW50RWxlbWVudCA9IF9nZXRQZXJjZW50RWxlbWVudChjdXJyZW50RWxlbWVudCk7XG5cbiAgICAgIGlmICghcGVyY2VudEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgLy9JIGJlbGlldmUgSSBzaG91bGQgaGFuZGxlIHRoaXMgc2l0dWF0aW9uIHdpdGggZXZlbnRMaXN0ZW5lciBhbmQgYHRyYW5zaXRpb25lbmRgIGV2ZW50IGJ1dCBJJ20gbm90IHN1cmVcbiAgICAgIC8vYWJvdXQgY29tcGF0aWJpbGl0eSB3aXRoIElFcy4gU2hvdWxkIGJlIGZpeGVkIGluIGZ1cnRoZXIgdmVyc2lvbnMuXG4gICAgICAoZnVuY3Rpb24gKHBlcmNlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudCkge1xuICAgICAgICBwZXJjZW50RWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSBcIiBwcm9ncmVzc2pzLWVuZFwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vcmVtb3ZlIHRoZSBwZXJjZW50IGVsZW1lbnQgZnJvbSBwYWdlXG4gICAgICAgICAgcGVyY2VudEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vYW5kIHJlbW92ZSB0aGUgYXR0cmlidXRlXG4gICAgICAgICAgY3VycmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc2pzXCIpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pKHBlcmNlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy9jbGVhbiB0aGUgc2V0SW50ZXJ2YWwgZm9yIGF1dG9JbmNyZWFzZSBmdW5jdGlvblxuICAgIGlmICh3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSkge1xuICAgICAgLy9gZGVsZXRlYCBrZXl3b3JkIGhhcyBzb21lIHByb2JsZW1zIGluIElFXG4gICAgICB0cnkge1xuICAgICAgICBjbGVhckludGVydmFsKHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFsc1twcm9ncmVzc2pzSWRdKTtcbiAgICAgICAgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF07XG4gICAgICB9IGNhdGNoIChleCkge31cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBwcm9ncmVzcyBiYXIgY29udGFpbmVyXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9jcmVhdGVDb250YWluZXJcbiAgICovXG4gIGZ1bmN0aW9uIF9jcmVhdGVDb250YWluZXIoKSB7XG4gICAgLy9maXJzdCBjaGVjayBpZiB3ZSBoYXZlIGFuIGNvbnRhaW5lciBhbHJlYWR5LCB3ZSBkb24ndCBuZWVkIHRvIGNyZWF0ZSBpdCBhZ2FpblxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc2pzLWNvbnRhaW5lclwiKSkge1xuICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSBcInByb2dyZXNzanMtY29udGFpbmVyXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZWxlbWVudCBwb3NpdGlvbiBvbiB0aGUgcGFnZVxuICAgKiBUaGFua3MgdG8gYG1lb3V3YDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQyNDc0LzM3NTk2NlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfZ2V0T2Zmc2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIEVsZW1lbnQncyBwb3NpdGlvbiBpbmZvXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0ge307XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYm9keVwiKSB7XG4gICAgICAvL3NldCB3aWR0aFxuICAgICAgZWxlbWVudFBvc2l0aW9uLndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIC8vc2V0IGhlaWdodFxuICAgICAgZWxlbWVudFBvc2l0aW9uLmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3NldCB3aWR0aFxuICAgICAgZWxlbWVudFBvc2l0aW9uLndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIC8vc2V0IGhlaWdodFxuICAgICAgZWxlbWVudFBvc2l0aW9uLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIC8vY2FsY3VsYXRlIGVsZW1lbnQgdG9wIGFuZCBsZWZ0XG4gICAgdmFyIF94ID0gMDtcbiAgICB2YXIgX3kgPSAwO1xuICAgIHdoaWxlIChlbGVtZW50ICYmICFpc05hTihlbGVtZW50Lm9mZnNldExlZnQpICYmICFpc05hTihlbGVtZW50Lm9mZnNldFRvcCkpIHtcbiAgICAgIF94ICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgIF95ICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICAvL3NldCB0b3BcbiAgICBlbGVtZW50UG9zaXRpb24udG9wID0gX3k7XG4gICAgLy9zZXQgbGVmdFxuICAgIGVsZW1lbnRQb3NpdGlvbi5sZWZ0ID0gX3g7XG5cbiAgICByZXR1cm4gZWxlbWVudFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgb2JqMSdzIHZhbHVlcyB3aXRoIG9iajIncyBhbmQgYWRkcyBvYmoyJ3MgaWYgbm9uIGV4aXN0ZW50IGluIG9iajFcbiAgICogdmlhOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3MTI1MS9ob3ctY2FuLWktbWVyZ2UtcHJvcGVydGllcy1vZi10d28tamF2YXNjcmlwdC1vYmplY3RzLWR5bmFtaWNhbGx5XG4gICAqXG4gICAqIEBwYXJhbSBvYmoxXG4gICAqIEBwYXJhbSBvYmoyXG4gICAqIEByZXR1cm5zIG9iajMgYSBuZXcgb2JqZWN0IGJhc2VkIG9uIG9iajEgYW5kIG9iajJcbiAgICovXG4gIGZ1bmN0aW9uIF9tZXJnZU9wdGlvbnMob2JqMSwgb2JqMikge1xuICAgIHZhciBvYmozID0ge307XG4gICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMSkge1xuICAgICAgb2JqM1thdHRybmFtZV0gPSBvYmoxW2F0dHJuYW1lXTtcbiAgICB9XG4gICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMikge1xuICAgICAgb2JqM1thdHRybmFtZV0gPSBvYmoyW2F0dHJuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajM7XG4gIH1cblxuICB2YXIgcHJvZ3Jlc3NKcyA9IGZ1bmN0aW9uICh0YXJnZXRFbG0pIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldEVsbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgLy9PaywgY3JlYXRlIGEgbmV3IGluc3RhbmNlXG4gICAgICByZXR1cm4gbmV3IFByb2dyZXNzSnModGFyZ2V0RWxtKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXRFbG0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vc2VsZWN0IHRoZSB0YXJnZXQgZWxlbWVudCB3aXRoIHF1ZXJ5IHNlbGVjdG9yXG4gICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RWxtKTtcblxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9ncmVzc0pzKHRhcmdldEVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gZWxlbWVudCB3aXRoIGdpdmVuIHNlbGVjdG9yLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQcm9ncmVzc0pzKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNvcnJlY3QgdHJhbnNpdGlvbiBjYWxsYmFja1xuICAgKiBUaGFua3MgQHdlYmluaXN0YTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTA5MDEyOC8zNzU5NjZcbiAgICpcbiAgICogQHJldHVybnMgdHJhbnNpdGlvbiBuYW1lXG4gICAqL1xuICBmdW5jdGlvbiB3aGljaFRyYW5zaXRpb25FdmVudCgpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIik7XG4gICAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgICBPVHJhbnNpdGlvbjogXCJvVHJhbnNpdGlvbkVuZFwiLFxuICAgICAgTW96VHJhbnNpdGlvbjogXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiBcIndlYmtpdFRyYW5zaXRpb25FbmRcIixcbiAgICB9O1xuXG4gICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgUHJvZ3Jlc3NKcyB2ZXJzaW9uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB2ZXJzaW9uXG4gICAqIEB0eXBlIFN0cmluZ1xuICAgKi9cbiAgcHJvZ3Jlc3NKcy52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAvL1Byb3RvdHlwZVxuICBwcm9ncmVzc0pzLmZuID0gUHJvZ3Jlc3NKcy5wcm90b3R5cGUgPSB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvZ3Jlc3NKcyh0aGlzKTtcbiAgICB9LFxuICAgIHNldE9wdGlvbjogZnVuY3Rpb24gKG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IF9tZXJnZU9wdGlvbnModGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBfc3RhcnRQcm9ncmVzcy5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChwZXJjZW50KSB7XG4gICAgICBfc2V0UGVyY2VudC5jYWxsKHRoaXMsIHBlcmNlbnQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBpbmNyZWFzZTogZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgIF9pbmNyZWFzZVBlcmNlbnQuY2FsbCh0aGlzLCBzaXplKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgYXV0b0luY3JlYXNlOiBmdW5jdGlvbiAoc2l6ZSwgbWlsbGlzZWNvbmQpIHtcbiAgICAgIF9hdXRvSW5jcmVhc2UuY2FsbCh0aGlzLCBzaXplLCBtaWxsaXNlY29uZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgX2VuZC5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBraWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICBfa2lsbC5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBvbmJlZm9yZWVuZDogZnVuY3Rpb24gKHByb3ZpZGVkQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdmlkZWRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlRW5kQ2FsbGJhY2sgPSBwcm92aWRlZENhbGxiYWNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uYmVmb3JlZW5kIHdhcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb25iZWZvcmVzdGFydDogZnVuY3Rpb24gKHByb3ZpZGVkQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdmlkZWRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlU3RhcnRDYWxsYmFjayA9IHByb3ZpZGVkQ2FsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25iZWZvcmVzdGFydCB3YXMgbm90IGEgZnVuY3Rpb25cIixcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb25wcm9ncmVzczogZnVuY3Rpb24gKHByb3ZpZGVkQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdmlkZWRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX29uUHJvZ3Jlc3NDYWxsYmFjayA9IHByb3ZpZGVkQ2FsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBjYWxsYmFjayBmb3Igb25wcm9ncmVzcyB3YXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICB9O1xuXG4gIGV4cG9ydHMucHJvZ3Jlc3NKcyA9IHByb2dyZXNzSnM7XG4gIHJldHVybiBwcm9ncmVzc0pzO1xufSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEN1c3RvbSAqL1xcbi53YWl0cmVzcy1vdmVybGF5e1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDo5OTk7XFxufVxcblxcbi53YWl0cmVzcy1vdmVybGF5LWNvbnRlbnR7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi53YWl0cmVzcy1ub3RpZmljYXRpb257XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uc3tcXG4gIGJveC1zaGFkb3c6XFxuICAgIDAgMy4xcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMiksXFxuICAgIDAgNi45cHggNC43cHggcmdiYSgwLCAwLCAwLCAwLjAyOCksXFxuICAgIDAgMTIuOHB4IDguOXB4IHJnYmEoMCwgMCwgMCwgMC4wMzUpLFxcbiAgICAwIDIzLjFweCAxNS45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksXFxuICAgIDAgNDMuMnB4IDI5LjdweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxcbiAgICAwIDEwMHB4IDcxcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IFxcbiAgLndhaXRyZXNzLW5vdGlmaWNhdGlvbiB7XFxuICAgIHdpZHRoOiA5NCU7XFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjanMvZXh0cy93YWl0cmVzcy9jc3Mvb3ZlcmxheS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7Ozs7O29DQU1rQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7WUFDckIscUJBQXFCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7WUFDbkIsbUJBQW1CO0VBQzdCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsNkJBQTZCO1lBQ3JCLHFCQUFxQjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO1lBQ25CLG1CQUFtQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEN1c3RvbSAqL1xcbi53YWl0cmVzcy1vdmVybGF5e1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDo5OTk7XFxufVxcblxcbi53YWl0cmVzcy1vdmVybGF5LWNvbnRlbnR7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi53YWl0cmVzcy1ub3RpZmljYXRpb257XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uc3tcXG4gIGJveC1zaGFkb3c6XFxuICAgIDAgMy4xcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMiksXFxuICAgIDAgNi45cHggNC43cHggcmdiYSgwLCAwLCAwLCAwLjAyOCksXFxuICAgIDAgMTIuOHB4IDguOXB4IHJnYmEoMCwgMCwgMCwgMC4wMzUpLFxcbiAgICAwIDIzLjFweCAxNS45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksXFxuICAgIDAgNDMuMnB4IDI5LjdweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxcbiAgICAwIDEwMHB4IDcxcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IFxcbiAgLndhaXRyZXNzLW5vdGlmaWNhdGlvbiB7XFxuICAgIHdpZHRoOiA5NCU7XFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICB3aWR0aDogMDtcXG59XFxuLnByb2dyZXNzanMtcHJvZ3Jlc3Mge1xcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xcbn1cXG5cXG4vKiBibHVlIHRoZW1lLCBsaWtlIGlPUyA3IHByb2dyZXNzIGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWUgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlLnByb2dyZXNzanMtZW5kIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZSAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYmx1ZSB0aGVtZSB3aXRoIG92ZXJsYXkgbGF5ZXIsIG5vIHBlcmNlbnQgYmFyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheS5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGJsdWUgdGhlbWUgd2l0aCBvdmVybGF5IGxheWVyLCBubyBwZXJjZW50IGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBCbHVlIHRoZW1lIHdpdGggYm9yZGVyIHJhZGl1cyBhbmQgb3ZlcmxheSBsYXllciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1cyAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzLnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1cyAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQmx1ZSB0aGVtZSB3aXRoIGJvcmRlciByYWRpdXMgYW5kIG92ZXJsYXkgbGF5ZXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c0hhbGZPcGFjaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNIYWxmT3BhY2l0eSAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzSGFsZk9wYWNpdHkucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzSGFsZk9wYWNpdHkgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEJsdWUgdGhlbWUgd2l0aCBib3JkZXIgcmFkaXVzLCBvdmVybGF5IGxheWVyIGFuZCBwZXJjZW50IGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzV2l0aFBlcmNlbnRCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzV2l0aFBlcmNlbnRCYXIgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c1dpdGhQZXJjZW50QmFyLnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c1dpdGhQZXJjZW50QmFyIC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibGFja1JhZGl1c0lucHV0cyB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmxhY2tSYWRpdXNJbnB1dHMgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1ZTtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmxhY2tSYWRpdXNJbnB1dHMucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibGFja1JhZGl1c0lucHV0cyAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjanMvZXh0cy93YWl0cmVzcy9jc3MvcHJvZ3Jlc3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksV0FBVztJQUNYLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsa0RBQWtEO0FBQ2xEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxvREFBb0Q7QUFDcEQ7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtHQUNiLHFDQUFxQztJQUNwQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGlFQUFpRTtBQUNqRTtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgd2lkdGg6IDA7XFxufVxcbi5wcm9ncmVzc2pzLXByb2dyZXNzIHtcXG4gICAgei1pbmRleDogOTk5OTk5OTtcXG59XFxuXFxuLyogYmx1ZSB0aGVtZSwgbGlrZSBpT1MgNyBwcm9ncmVzcyBiYXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlIC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZS5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWUgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGJsdWUgdGhlbWUgd2l0aCBvdmVybGF5IGxheWVyLCBubyBwZXJjZW50IGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBibHVlIHRoZW1lIHdpdGggb3ZlcmxheSBsYXllciwgbm8gcGVyY2VudCBiYXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5LnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQmx1ZSB0aGVtZSB3aXRoIGJvcmRlciByYWRpdXMgYW5kIG92ZXJsYXkgbGF5ZXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXMgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1cy5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXMgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEJsdWUgdGhlbWUgd2l0aCBib3JkZXIgcmFkaXVzIGFuZCBvdmVybGF5IGxheWVyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNIYWxmT3BhY2l0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzSGFsZk9wYWNpdHkgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c0hhbGZPcGFjaXR5LnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c0hhbGZPcGFjaXR5IC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBCbHVlIHRoZW1lIHdpdGggYm9yZGVyIHJhZGl1cywgb3ZlcmxheSBsYXllciBhbmQgcGVyY2VudCBiYXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c1dpdGhQZXJjZW50QmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c1dpdGhQZXJjZW50QmFyIC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNXaXRoUGVyY2VudEJhci5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNXaXRoUGVyY2VudEJhciAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogLTM1cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnByb2dyZXNzanMtdGhlbWUtYmxhY2tSYWRpdXNJbnB1dHMge1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsYWNrUmFkaXVzSW5wdXRzIC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsYWNrUmFkaXVzSW5wdXRzLnByb2dyZXNzanMtZW5kIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmxhY2tSYWRpdXNJbnB1dHMgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3ZlcmxheS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL292ZXJsYXkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2dyZXNzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZ3Jlc3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zaGlueV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCJzaGlueVwiO1xuaW1wb3J0IFwianF1ZXJ5XCI7XG5cbmltcG9ydCB7IHByb2dyZXNzSnMgfSBmcm9tIFwiLi9wcm9ncmVzc1wiO1xuaW1wb3J0IHsgaGlkZVJlY2FsY3VsYXRlIH0gZnJvbSBcIi4uL3JlY2FsY3VsYXRlXCI7XG5pbXBvcnQgeyBnZXREaW1lbnNpb25zIH0gZnJvbSBcIi4uL2RpbWVuc2lvbnNcIjtcblxuaW1wb3J0IFwiLi9jc3MvcHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9vdmVybGF5LmNzc1wiO1xuXG4vLyBrZWVwIGluZmluaXRlIHRvIGxhdGVyIGNsZWFyXG5sZXQgaW50ZXJ2YWxzID0gbmV3IE1hcCgpO1xuLy8gZWxlbWVudHMgdG8gaGlkZSBvbiByZWNvbXB1dGVkXG5sZXQgd2FpdHJlc3NUb0hpZGUgPSBuZXcgTWFwKCk7XG5cbmxldCB3YWl0cmVzc2VzID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBwb3NpdGlvblRvQ29vcmRzKHBvc2l0aW9uKSB7XG4gIHZhciBwb3MgPSB7fTtcblxuICB2YXIgYmFzZV95ID0gMDtcbiAgdmFyIGN1cnJlbnRfbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJ3YWl0cmVzcy1ub3RpZmljYXRpb25cIixcbiAgKTtcbiAgZm9yICh2YXIgbiBvZiBjdXJyZW50X25vdGlmaWNhdGlvbnMpIHtcbiAgICBiYXNlX3kgPSBiYXNlX3kgKyAxMCArIG4ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBvc2l0aW9uID09IFwiYmxcIikge1xuICAgIHBvcy50b3AgPSBcImF1dG9cIjtcbiAgICBwb3MuYm90dG9tID0gYmFzZV95ICsgMTAgKyBcInB4XCI7XG4gICAgcG9zLmxlZnQgPSBcIjEwcHhcIjtcbiAgICBwb3MucmlnaHQgPSBcImF1dG9cIjtcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PSBcInRsXCIpIHtcbiAgICBwb3MudG9wID0gYmFzZV95ICsgMTAgKyBcInB4XCI7XG4gICAgcG9zLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgIHBvcy5sZWZ0ID0gXCIxMHB4XCI7XG4gICAgcG9zLnJpZ2h0ID0gXCJhdXRvXCI7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT0gXCJiclwiKSB7XG4gICAgcG9zLnRvcCA9IFwiYXV0b1wiO1xuICAgIHBvcy5ib3R0b20gPSBiYXNlX3kgKyAxMCArIFwicHhcIjtcbiAgICBwb3MubGVmdCA9IFwiYXV0b1wiO1xuICAgIHBvcy5yaWdodCA9IFwiMTBweFwiO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09IFwidHJcIikge1xuICAgIHBvcy50b3AgPSBiYXNlX3kgKyAxMCArIFwicHhcIjtcbiAgICBwb3MuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgcG9zLmxlZnQgPSBcImF1dG9cIjtcbiAgICBwb3MucmlnaHQgPSBcIjEwcHhcIjtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwid2FpdHJlc3MtaW5pdFwiLCBmdW5jdGlvbiAob3B0cykge1xuICBpZiAod2FpdHJlc3Nlcy5nZXQob3B0cy5uYW1lKSAhPSB1bmRlZmluZWQpIHJldHVybjtcblxuICBsZXQgbm90aWZpY2F0aW9uLCBwcm9nO1xuXG4gIGlmIChvcHRzLm5vdGlmeSkge1xuICAgIC8vIGNyZWF0ZSBkaXZcbiAgICBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuXG4gICAgLy8gcG9zaXRpb24gZGl2XG4gICAgbGV0IHBvcyA9IHBvc2l0aW9uVG9Db29yZHMob3B0cy5wb3NpdGlvbik7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJvdHRvbSA9IHBvcy5ib3R0b207XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLnJpZ2h0ID0gcG9zLnJpZ2h0O1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLnRvcCA9IHBvcy50b3A7XG5cbiAgICAvL25vdGlmaWNhdGlvbi53aWR0aCA9ICcxMDBweCc7XG4gICAgbm90aWZpY2F0aW9uLmhlaWdodCA9IFwiNTBweFwiO1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5jb2xvciA9IG9wdHMudGV4dENvbG9yO1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRzLmJhY2tncm91bmRDb2xvcjtcbiAgICBub3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IG9wdHMuaHRtbDtcbiAgICBub3RpZmljYXRpb24uc3R5bGUuekluZGV4ID0gOTk5OTtcbiAgICBub3RpZmljYXRpb24uaWQgPSBvcHRzLmlkO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwid2FpdHJlc3Mtbm90aWZpY2F0aW9uXCIpO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uc1wiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG4gICAgb3B0cy5pZCA9IFwiI1wiICsgb3B0cy5pZDtcbiAgfVxuXG4gIGlmIChvcHRzLmlkICE9IG51bGwpIHByb2cgPSBwcm9ncmVzc0pzKG9wdHMuaWQpO1xuICBlbHNlIHByb2cgPSBwcm9ncmVzc0pzKCk7XG5cbiAgcHJvZyA9IHByb2cuc2V0T3B0aW9ucyhvcHRzLm9wdGlvbnMpO1xuXG4gIHdhaXRyZXNzZXMuc2V0KG9wdHMubmFtZSwgcHJvZyk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJ3YWl0cmVzcy1zdGFydFwiLCBmdW5jdGlvbiAob3B0cykge1xuICB3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpLnN0YXJ0KCk7XG4gIGxldCBleGlzdHMgPSBmYWxzZSxcbiAgICBkb20sXG4gICAgb3ZlcmxheSxcbiAgICBvdmVybGF5Q29udGVudDtcblxuICBpZiAob3B0cy5oaWRlT25SZW5kZXIpIHdhaXRyZXNzVG9IaWRlLnNldChvcHRzLmlkLCBvcHRzKTtcblxuICAvLyBjb250ZW50XG4gIGlmIChvcHRzLmh0bWwpIHtcbiAgICBoaWRlUmVjYWxjdWxhdGUob3B0cy5pZCk7XG5cbiAgICAvLyBnZXQgcGFyZW50XG4gICAgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5pZCk7XG4gICAgaWYgKGRvbSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGZpbmRcIiwgb3B0cy5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVsID0gZ2V0RGltZW5zaW9ucyhkb20sIDIsIC0yKTtcblxuICAgIC8vIGNoZWNrIGlmIG92ZXJsYXkgZXhpc3RzXG4gICAgZG9tLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc05hbWUgPT09IFwid2FpdHJlc3Mtb3ZlcmxheVwiKSBleGlzdHMgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgY29uc29sZS5sb2coXCJ3YWl0cmVzcyBvblwiLCBvcHRzLmlkLCBcImFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBvdmVybGF5XG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gICAgLy8gY3JlYXRlIG92ZXJsYXkgY29udGVudFxuICAgIG92ZXJsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICAvLyBpbnNlcnQgaHRtbFxuICAgIG92ZXJsYXlDb250ZW50LmlubmVySFRNTCA9IG9wdHMuaHRtbDtcbiAgICBvdmVybGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwid2FpdHJlc3Mtb3ZlcmxheS1jb250ZW50XCIpO1xuXG4gICAgLy8gYWRkIHN0eWxlc1xuICAgIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gZWwuaGVpZ2h0ICsgXCJweFwiO1xuICAgIG92ZXJsYXkuc3R5bGUud2lkdGggPSBlbC53aWR0aCArIFwicHhcIjtcbiAgICBvdmVybGF5LnN0eWxlLnRvcCA9IGVsLnRvcCArIFwicHhcIjtcbiAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBlbC5sZWZ0ICsgXCJweFwiO1xuICAgIG92ZXJsYXkuc3R5bGUuY29sb3IgPSBvcHRzLnRleHRDb2xvcjtcbiAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdHMuYmFja2dyb3VuZENvbG9yO1xuICAgIG92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgb3ZlcmxheS5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ3YWl0cmVzcy1vdmVybGF5XCIpO1xuXG4gICAgLy8gYXBwZW5kIG92ZXJsYXkgY29udGVudCBpbiBvdmVybGF5XG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChvdmVybGF5Q29udGVudCk7XG5cbiAgICAvLyBhcHBlbmQgb3ZlcmxheSB0byBkb21cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNvZW5lL3dhaXRlci9pc3N1ZXMvNjNcbiAgaWYgKG9wdHMuaW5maW5pdGUpIHtcbiAgICBsZXQgdmFsdWUgPSAwLFxuICAgICAgaW5jID0gMCxcbiAgICAgIGVuZCA9IDEwMDtcblxuICAgIGludGVydmFscy5zZXQoXG4gICAgICBvcHRzLm5hbWUsXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluYyA9IChlbmQgLSB2YWx1ZSkgLyAoZW5kICsgdmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKHZhbHVlICsgaW5jICsgTnVtYmVyLkVQU0lMT04pICogMTAwMCkgLyAxMDAwO1xuICAgICAgICB3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpLnNldCh2YWx1ZSk7XG4gICAgICB9LCAzNTApLFxuICAgICk7XG4gIH1cbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcIndhaXRyZXNzLXNldFwiLCBmdW5jdGlvbiAob3B0cykge1xuICB3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpLnNldChvcHRzLnBlcmNlbnQpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwid2FpdHJlc3MtYXV0b1wiLCBmdW5jdGlvbiAob3B0cykge1xuICB3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpLmF1dG9JbmNyZWFzZShvcHRzLnBlcmNlbnQsIG9wdHMubXMpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwid2FpdHJlc3MtaW5jcmVhc2VcIiwgZnVuY3Rpb24gKG9wdHMpIHtcbiAgd2FpdHJlc3Nlcy5nZXQob3B0cy5uYW1lKS5pbmNyZWFzZShvcHRzLnBlcmNlbnQpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwid2FpdHJlc3MtZW5kXCIsIGZ1bmN0aW9uIChvcHRzKSB7XG4gIHdhaXRyZXNzZXMuZ2V0KG9wdHMubmFtZSkuZW5kKCk7XG5cbiAgaWYgKG9wdHMuaWQpIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5pZCk7XG4gICAgdmFyIG92ZXJsYXkgPSBkb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndhaXRyZXNzLW92ZXJsYXlcIik7XG5cbiAgICBpZiAob3ZlcmxheS5sZW5ndGggPiAwKSBkb20ucmVtb3ZlQ2hpbGQob3ZlcmxheVswXSk7XG4gIH1cblxuICBpZiAob3B0cy5pbmZpbml0ZSkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbHMuZ2V0KG9wdHMubmFtZSkpO1xuXG4gIGlmIChvcHRzLmlzTm90aWZpY2F0aW9uKSB7XG4gICAgLy8gc21hbGwgZGVsYXkgdG8gYWxsb3cgdGhlIGxvYWRpbmcgYmFyIHRvIGVuZFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJChgIyR7b3B0cy5uYW1lfWApLnJlbW92ZSgpO1xuICAgIH0sIDQwMCk7XG4gIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcInNoaW55OnZhbHVlIHNoaW55OmVycm9yIHNoaW55OnJlY2FsY3VsYXRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IHcgPSB3YWl0cmVzc1RvSGlkZS5nZXQoZXZlbnQubmFtZSk7XG5cbiAgaWYgKHcgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgaWYgKHcuaW5maW5pdGUpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxzLmdldChldmVudC5uYW1lKSk7XG5cbiAgd2FpdHJlc3Nlcy5nZXQody5uYW1lKS5lbmQoKTtcblxuICBpZiAody5pc05vdGlmaWNhdGlvbikge1xuICAgIC8vIHNtYWxsIGRlbGF5IHRvIGFsbG93IHRoZSBsb2FkaW5nIGJhciB0byBlbmRcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICQoYCMke2V2ZW50Lm5hbWV9YCkucmVtb3ZlKCk7XG4gICAgfSwgNDAwKTtcbiAgfVxufSk7XG5cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsIl9pIiwicHVzaCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIlR5cGVFcnJvciIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsImlzQXJyYXkiLCJfaXRlbSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJnZXREaW1lbnNpb25zIiwiZWxlbWVudCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRQb3NpdGlvbiIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJpc05hTiIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiaGlkZGVuUmVjYWxjdWxhdGluZyIsIk1hcCIsImhpZGVSZWNhbGN1bGF0ZSIsImdldCIsInNldCIsImNzcyIsImhlYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJWRVJTSU9OIiwiUHJvZ3Jlc3NKcyIsIm9iaiIsIl90YXJnZXRFbGVtZW50Iiwid2luZG93IiwiX3Byb2dyZXNzanNJZCIsIl9wcm9ncmVzc2pzSW50ZXJ2YWxzIiwiX29wdGlvbnMiLCJ0aGVtZSIsIm92ZXJsYXlNb2RlIiwiY29uc2lkZXJUcmFuc2l0aW9uIiwiX3N0YXJ0UHJvZ3Jlc3MiLCJfb25CZWZvcmVTdGFydENhbGxiYWNrIiwiX2NyZWF0ZUNvbnRhaW5lciIsImVsbXNMZW5ndGgiLCJfc2V0UHJvZ3Jlc3MiLCJ0YXJnZXRFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudE9mZnNldCIsIl9nZXRPZmZzZXQiLCJzZXRBdHRyaWJ1dGUiLCJwcm9ncmVzc0VsZW1lbnRDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJwb3NpdGlvbiIsInByb2dyZXNzRWxlbWVudCIsInByb2dyZXNzUGVyY2VudEVsZW1lbnQiLCJpbm5lckhUTUwiLCJyaWdodCIsImJvdHRvbSIsIm5vZGVOYW1lIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIl9zZXRQZXJjZW50Rm9yIiwiX3NldFBlcmNlbnQiLCJwZXJjZW50Iiwic2VsZiIsInNldFRpbWVvdXQiLCJfb25Qcm9ncmVzc0NhbGxiYWNrIiwicGVyY2VudEVsZW1lbnQiLCJfZ2V0UGVyY2VudEVsZW1lbnQiLCJwYXJzZUludCIsImV4aXN0aW5nUGVyY2VudCIsInJlcGxhY2UiLCJjdXJyZW50UGVyY2VudCIsImluY3JlYXNlbWVudCIsImludGVydmFsSW4iLCJjaGFuZ2VQZXJjZW50VGltZXIiLCJkaXN0YW5jZSIsIk1hdGgiLCJhYnMiLCJpbnRlcnZhbkluIiwicHJvZ3Jlc3Nqc0lkIiwiZ2V0QXR0cmlidXRlIiwiX2F1dG9JbmNyZWFzZSIsInNpemUiLCJtaWxsaXNlY29uZCIsInRhcmdldCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9pbmNyZWFzZVBlcmNlbnQiLCJjdXJyZW50RWxlbWVudCIsIl9lbmQiLCJfb25CZWZvcmVFbmRDYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGljaFRyYW5zaXRpb25FdmVudCIsInRpbWVvdXRTZWMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJleCIsIl9raWxsIiwiY29udGFpbmVyRWxlbWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIl94IiwiX3kiLCJvZmZzZXRQYXJlbnQiLCJfbWVyZ2VPcHRpb25zIiwib2JqMSIsIm9iajIiLCJvYmozIiwiYXR0cm5hbWUiLCJwcm9ncmVzc0pzIiwidGFyZ2V0RWxtIiwicXVlcnlTZWxlY3RvckFsbCIsIkVycm9yIiwidCIsImVsIiwidHJhbnNpdGlvbnMiLCJ0cmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsInZlcnNpb24iLCJmbiIsImNsb25lIiwic2V0T3B0aW9uIiwib3B0aW9uIiwic2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJzdGFydCIsImluY3JlYXNlIiwiYXV0b0luY3JlYXNlIiwiZW5kIiwia2lsbCIsIm9uYmVmb3JlZW5kIiwicHJvdmlkZWRDYWxsYmFjayIsIm9uYmVmb3Jlc3RhcnQiLCJvbnByb2dyZXNzIiwiaW50ZXJ2YWxzIiwid2FpdHJlc3NUb0hpZGUiLCJ3YWl0cmVzc2VzIiwicG9zaXRpb25Ub0Nvb3JkcyIsInBvcyIsImJhc2VfeSIsImN1cnJlbnRfbm90aWZpY2F0aW9ucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTaGlueSIsImFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyIiwib3B0cyIsIm5vdGlmaWNhdGlvbiIsInByb2ciLCJub3RpZnkiLCJjb2xvciIsInRleHRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImh0bWwiLCJ6SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJleGlzdHMiLCJkb20iLCJvdmVybGF5Iiwib3ZlcmxheUNvbnRlbnQiLCJoaWRlT25SZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImluZmluaXRlIiwiaW5jIiwicm91bmQiLCJOdW1iZXIiLCJFUFNJTE9OIiwibXMiLCJpc05vdGlmaWNhdGlvbiIsIiQiLCJyZW1vdmUiLCJvbiIsImV2ZW50IiwidyJdLCJzb3VyY2VSb290IjoiIn0=