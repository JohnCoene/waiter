(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Shiny"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["Shiny", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["waitress"] = factory(require("Shiny"), require("jQuery"));
	else
		root["waitress"] = factory(root["Shiny"], root["jQuery"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_shiny__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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
/* harmony export */   "getDimensions": () => (/* binding */ getDimensions)
/* harmony export */ });
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
/* harmony export */   "hideRecalculate": () => (/* binding */ hideRecalculate)
/* harmony export */ });
// storage to avoid multiple CSS injections
let hiddenRecalculating = new Map();
const hideRecalculate = id => {
  if (id === null) return;
  if (hiddenRecalculating.get(id)) return;
  hiddenRecalculating.set(id, true);
  var css = '#' + id + '.recalculating {opacity: 1.0 !important; }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
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
  var VERSION = '0.1.0';
  /**
   * ProgressJs main class
   *
   * @class ProgressJs
   */

  function ProgressJs(obj) {
    if (typeof obj.length != 'undefined') {
      this._targetElement = obj;
    } else {
      this._targetElement = [obj];
    }

    if (typeof window._progressjsId === 'undefined') window._progressjsId = 1;
    if (typeof window._progressjsIntervals === 'undefined') window._progressjsIntervals = {};
    this._options = {
      //progress bar theme
      theme: 'blue',
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
    if (typeof this._onBeforeStartCallback != 'undefined') {
      this._onBeforeStartCallback.call(this);
    } //create the container for progress bar


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
    if (targetElement.hasAttribute("data-progressjs")) return; //get target element position

    var targetElementOffset = _getOffset.call(this, targetElement);

    targetElement.setAttribute("data-progressjs", window._progressjsId);
    var progressElementContainer = document.createElement('div');
    progressElementContainer.className = 'progressjs-progress progressjs-theme-' + this._options.theme; //set the position percent elements, it depends on targetElement tag

    if (targetElement.tagName.toLowerCase() === 'body') {
      progressElementContainer.style.position = 'fixed';
    } else {
      progressElementContainer.style.position = 'absolute';
    }

    progressElementContainer.setAttribute("data-progressjs", window._progressjsId);
    var progressElement = document.createElement("div");
    progressElement.className = "progressjs-inner"; //create an element for current percent of progress bar

    var progressPercentElement = document.createElement('div');
    progressPercentElement.className = "progressjs-percent";
    progressPercentElement.innerHTML = "1%";
    progressElement.appendChild(progressPercentElement);

    if (this._options.overlayMode && targetElement.tagName.toLowerCase() === 'body') {
      //if we have `body` for target element and also overlay mode is enable, we should use a different
      //position for progress bar container element
      progressElementContainer.style.left = 0;
      progressElementContainer.style.right = 0;
      progressElementContainer.style.top = 0;
      progressElementContainer.style.bottom = 0;
    } else {
      //set progress bar container size and offset
      progressElementContainer.style.left = targetElementOffset.left + 'px';
      progressElementContainer.style.top = targetElementOffset.top + 'px'; //if targetElement is body set to percent so it scales with browser resize

      if (targetElement.nodeName == 'BODY') {
        progressElementContainer.style.width = '100%';
      } else {
        progressElementContainer.style.width = targetElementOffset.width + 'px';
      }

      if (this._options.overlayMode) {
        progressElementContainer.style.height = targetElementOffset.height + 'px';
      }
    }

    progressElementContainer.appendChild(progressElement); //append the element to container

    var container = document.querySelector('.progressjs-container');
    container.appendChild(progressElementContainer);

    _setPercentFor(targetElement, 1); //and increase the progressId


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
    var self = this; //prevent overflow!

    if (percent >= 100) percent = 100;

    if (targetElement.hasAttribute("data-progressjs")) {
      //setTimeout for better CSS3 animation applying in some cases
      setTimeout(function () {
        //call the onprogress callback
        if (typeof self._onProgressCallback != 'undefined') {
          self._onProgressCallback.call(self, targetElement, percent);
        }

        var percentElement = _getPercentElement(targetElement);

        percentElement.style.width = parseInt(percent) + '%';
        var percentElement = percentElement.querySelector(".progressjs-percent");
        var existingPercent = parseInt(percentElement.innerHTML.replace('%', '')); //start increase/decrease the percent element with animation

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
              percentElement.innerHTML = (increasement ? ++existingPercent : --existingPercent) + '%';
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
    var progressjsId = parseInt(targetElement.getAttribute('data-progressjs'));
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
    var progressjsId = parseInt(target.getAttribute('data-progressjs'));

    if (typeof window._progressjsIntervals[progressjsId] != 'undefined') {
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

      if (currentElement.hasAttribute('data-progressjs')) {
        var percentElement = _getPercentElement(currentElement);

        var existingPercent = parseInt(percentElement.style.width.replace('%', ''));

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
    if (typeof this._onBeforeEndCallback != 'undefined') {
      if (this._options.considerTransition === true) {
        //we can safety assume that all layers would be the same, so `this._targetElement[0]` is the same as `this._targetElement[1]`
        _getPercentElement(this._targetElement[0]).addEventListener(whichTransitionEvent(), this._onBeforeEndCallback, false);
      } else {
        this._onBeforeEndCallback.call(this);
      }
    }

    var target = this._targetElement[0];
    if (!target) return;
    var progressjsId = parseInt(target.getAttribute('data-progressjs'));

    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];

      var percentElement = _getPercentElement(currentElement);

      if (!percentElement) return;
      var existingPercent = parseInt(percentElement.style.width.replace('%', ''));
      var timeoutSec = 1;

      if (existingPercent < 100) {
        _setPercentFor.call(this, currentElement, 100);

        timeoutSec = 500;
      } //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
      //about compatibility with IEs. Should be fixed in further versions.


      (function (percentElement, currentElement) {
        setTimeout(function () {
          percentElement.parentNode.className += " progressjs-end";
          setTimeout(function () {
            //remove the percent element from page
            percentElement.parentNode.parentNode.removeChild(percentElement.parentNode); //and remove the attribute

            currentElement.removeAttribute("data-progressjs");
          }, 1000);
        }, timeoutSec);
      })(percentElement, currentElement);
    } //clean the setInterval for autoIncrease function


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
    var progressjsId = parseInt(target.getAttribute('data-progressjs'));

    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];

      var percentElement = _getPercentElement(currentElement);

      if (!percentElement) return; //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
      //about compatibility with IEs. Should be fixed in further versions.

      (function (percentElement, currentElement) {
        percentElement.parentNode.className += " progressjs-end";
        setTimeout(function () {
          //remove the percent element from page
          percentElement.parentNode.parentNode.removeChild(percentElement.parentNode); //and remove the attribute

          currentElement.removeAttribute("data-progressjs");
        }, 1000);
      })(percentElement, currentElement);
    } //clean the setInterval for autoIncrease function


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

    if (element.tagName.toLowerCase() === 'body') {
      //set width
      elementPosition.width = element.clientWidth; //set height

      elementPosition.height = element.clientHeight;
    } else {
      //set width
      elementPosition.width = element.offsetWidth; //set height

      elementPosition.height = element.offsetHeight;
    } //calculate element top and left


    var _x = 0;
    var _y = 0;

    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      _x += element.offsetLeft;
      _y += element.offsetTop;
      element = element.offsetParent;
    } //set top


    elementPosition.top = _y; //set left

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
    if (typeof targetElm === 'object') {
      //Ok, create a new instance
      return new ProgressJs(targetElm);
    } else if (typeof targetElm === 'string') {
      //select the target element with query selector
      var targetElement = document.querySelectorAll(targetElm);

      if (targetElement) {
        return new ProgressJs(targetElement);
      } else {
        throw new Error('There is no element with given selector.');
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
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
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


  progressJs.version = VERSION; //Prototype

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
      if (typeof providedCallback === 'function') {
        this._onBeforeEndCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforeend was not a function');
      }

      return this;
    },
    onbeforestart: function (providedCallback) {
      if (typeof providedCallback === 'function') {
        this._onBeforeStartCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforestart was not a function');
      }

      return this;
    },
    onprogress: function (providedCallback) {
      if (typeof providedCallback === 'function') {
        this._onProgressCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onprogress was not a function');
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./overlay.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/overlay.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_overlay_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


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
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./progress.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/waitress/css/progress.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

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

let intervals = new Map(); // elements to hide on recomputed

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
    pos.bottom = base_y + 10 + 'px';
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl") {
    pos.top = base_y + 10 + "px";
    pos.bottom = "auto";
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "br") {
    pos.top = "auto";
    pos.bottom = base_y + 10 + 'px';
    pos.left = "auto";
    pos.right = "10px";
  } else if (position == "tr") {
    pos.top = base_y + 10 + 'px';
    pos.bottom = "auto";
    pos.left = "auto";
    pos.right = "10px";
  }

  return pos;
}

Shiny.addCustomMessageHandler('waitress-init', function (opts) {
  if (waitresses.get(opts.name) != undefined) return;
  let notification, prog;

  if (opts.notify) {
    // create div
    notification = document.createElement("DIV"); // position div

    let pos = positionToCoords(opts.position);
    notification.style.bottom = pos.bottom;
    notification.style.right = pos.right;
    notification.style.left = pos.left;
    notification.style.top = pos.top; //notification.width = '100px';

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

  if (opts.id != null) prog = (0,_progress__WEBPACK_IMPORTED_MODULE_2__.progressJs)(opts.id);else prog = (0,_progress__WEBPACK_IMPORTED_MODULE_2__.progressJs)();
  prog = prog.setOptions(opts.options);
  waitresses.set(opts.name, prog);
});
Shiny.addCustomMessageHandler('waitress-start', function (opts) {
  waitresses.get(opts.name).start();
  let exists = false,
      dom,
      overlay,
      overlayContent;
  if (opts.hideOnRender) waitressToHide.set(opts.id, opts); // content

  if (opts.html) {
    (0,_recalculate__WEBPACK_IMPORTED_MODULE_3__.hideRecalculate)(opts.id); // get parent

    dom = document.getElementById(opts.id);

    if (dom == undefined) {
      console.log("Cannot find", opts.id);
      return;
    }

    let el = (0,_dimensions__WEBPACK_IMPORTED_MODULE_4__.getDimensions)(dom, 2, -2); // check if overlay exists

    dom.childNodes.forEach(function (el) {
      if (el.className === 'waitress-overlay') exists = true;
    });

    if (exists) {
      console.log("waitress on", opts.id, "already exists");
      return;
    } // create overlay


    overlay = document.createElement("DIV"); // create overlay content

    overlayContent = document.createElement("DIV"); // insert html

    overlayContent.innerHTML = opts.html;
    overlayContent.classList.add("waitress-overlay-content"); // add styles

    overlay.style.height = el.height + 'px';
    overlay.style.width = el.width + 'px';
    overlay.style.top = el.top + 'px';
    overlay.style.left = el.left + 'px';
    overlay.style.color = opts.textColor;
    overlay.style.backgroundColor = opts.backgroundColor;
    overlay.style.position = "absolute";
    overlay.style.zIndex = 99999999;
    overlay.classList.add("waitress-overlay"); // append overlay content in overlay

    overlay.appendChild(overlayContent); // append overlay to dom

    setTimeout(function () {
      dom.appendChild(overlay);
    }, 10);
  } // https://github.com/JohnCoene/waiter/issues/63


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
Shiny.addCustomMessageHandler('waitress-set', function (opts) {
  waitresses.get(opts.name).set(opts.percent);
});
Shiny.addCustomMessageHandler('waitress-auto', function (opts) {
  waitresses.get(opts.name).autoIncrease(opts.percent, opts.ms);
});
Shiny.addCustomMessageHandler('waitress-increase', function (opts) {
  waitresses.get(opts.name).increase(opts.percent);
});
Shiny.addCustomMessageHandler('waitress-end', function (opts) {
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
$(document).on('shiny:value shiny:error shiny:recalculated', function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjanMvZXh0cy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyY2pzL2V4dHMvcmVjYWxjdWxhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjanMvZXh0cy93YWl0cmVzcy9wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmNqcy9leHRzL3dhaXRyZXNzL2Nzcy9vdmVybGF5LmNzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmNqcy9leHRzL3dhaXRyZXNzL2Nzcy9wcm9ncmVzcy5jc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjanMvZXh0cy93YWl0cmVzcy9jc3Mvb3ZlcmxheS5jc3M/ZDRjNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmNqcy9leHRzL3dhaXRyZXNzL2Nzcy9wcm9ncmVzcy5jc3M/MjM0MiIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vZXh0ZXJuYWwgXCJTaGlueVwiIiwid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmNqcy9leHRzL3dhaXRyZXNzL3dhaXRyZXNzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9zIiwiX2UiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXJyIiwiaXNBcnJheSIsIl9pdGVtIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImdldERpbWVuc2lvbnMiLCJlbGVtZW50Iiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudFBvc2l0aW9uIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsInRvcCIsImlzTmFOIiwibGVmdCIsIm9mZnNldExlZnQiLCJoaWRkZW5SZWNhbGN1bGF0aW5nIiwiTWFwIiwiaGlkZVJlY2FsY3VsYXRlIiwiZ2V0Iiwic2V0IiwiY3NzIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyb290IiwiZmFjdG9yeSIsIlZFUlNJT04iLCJQcm9ncmVzc0pzIiwib2JqIiwiX3RhcmdldEVsZW1lbnQiLCJ3aW5kb3ciLCJfcHJvZ3Jlc3Nqc0lkIiwiX3Byb2dyZXNzanNJbnRlcnZhbHMiLCJfb3B0aW9ucyIsInRoZW1lIiwib3ZlcmxheU1vZGUiLCJjb25zaWRlclRyYW5zaXRpb24iLCJfc3RhcnRQcm9ncmVzcyIsIl9vbkJlZm9yZVN0YXJ0Q2FsbGJhY2siLCJfY3JlYXRlQ29udGFpbmVyIiwiZWxtc0xlbmd0aCIsIl9zZXRQcm9ncmVzcyIsInRhcmdldEVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJ0YXJnZXRFbGVtZW50T2Zmc2V0IiwiX2dldE9mZnNldCIsInNldEF0dHJpYnV0ZSIsInByb2dyZXNzRWxlbWVudENvbnRhaW5lciIsImNsYXNzTmFtZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBvc2l0aW9uIiwicHJvZ3Jlc3NFbGVtZW50IiwicHJvZ3Jlc3NQZXJjZW50RWxlbWVudCIsImlubmVySFRNTCIsInJpZ2h0IiwiYm90dG9tIiwibm9kZU5hbWUiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiX3NldFBlcmNlbnRGb3IiLCJfc2V0UGVyY2VudCIsInBlcmNlbnQiLCJzZWxmIiwic2V0VGltZW91dCIsIl9vblByb2dyZXNzQ2FsbGJhY2siLCJwZXJjZW50RWxlbWVudCIsIl9nZXRQZXJjZW50RWxlbWVudCIsInBhcnNlSW50IiwiZXhpc3RpbmdQZXJjZW50IiwicmVwbGFjZSIsImN1cnJlbnRQZXJjZW50IiwiaW5jcmVhc2VtZW50IiwiaW50ZXJ2YWxJbiIsImNoYW5nZVBlcmNlbnRUaW1lciIsImRpc3RhbmNlIiwiTWF0aCIsImFicyIsImludGVydmFuSW4iLCJwcm9ncmVzc2pzSWQiLCJnZXRBdHRyaWJ1dGUiLCJfYXV0b0luY3JlYXNlIiwic2l6ZSIsIm1pbGxpc2Vjb25kIiwidGFyZ2V0IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiX2luY3JlYXNlUGVyY2VudCIsImN1cnJlbnRFbGVtZW50IiwiX2VuZCIsIl9vbkJlZm9yZUVuZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndoaWNoVHJhbnNpdGlvbkV2ZW50IiwidGltZW91dFNlYyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImV4IiwiX2tpbGwiLCJjb250YWluZXJFbGVtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiX3giLCJfeSIsIm9mZnNldFBhcmVudCIsIl9tZXJnZU9wdGlvbnMiLCJvYmoxIiwib2JqMiIsIm9iajMiLCJhdHRybmFtZSIsInByb2dyZXNzSnMiLCJ0YXJnZXRFbG0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiRXJyb3IiLCJ0IiwiZWwiLCJ0cmFuc2l0aW9ucyIsInVuZGVmaW5lZCIsInZlcnNpb24iLCJmbiIsImNsb25lIiwic2V0T3B0aW9uIiwib3B0aW9uIiwic2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJzdGFydCIsImluY3JlYXNlIiwiYXV0b0luY3JlYXNlIiwiZW5kIiwia2lsbCIsIm9uYmVmb3JlZW5kIiwicHJvdmlkZWRDYWxsYmFjayIsIm9uYmVmb3Jlc3RhcnQiLCJvbnByb2dyZXNzIiwiaW50ZXJ2YWxzIiwid2FpdHJlc3NUb0hpZGUiLCJ3YWl0cmVzc2VzIiwicG9zaXRpb25Ub0Nvb3JkcyIsInBvcyIsImJhc2VfeSIsImN1cnJlbnRfbm90aWZpY2F0aW9ucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTaGlueSIsImFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyIiwib3B0cyIsIm5vdGlmaWNhdGlvbiIsInByb2ciLCJub3RpZnkiLCJjb2xvciIsInRleHRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImh0bWwiLCJ6SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJleGlzdHMiLCJkb20iLCJvdmVybGF5Iiwib3ZlcmxheUNvbnRlbnQiLCJoaWRlT25SZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImluZmluaXRlIiwiaW5jIiwicm91bmQiLCJOdW1iZXIiLCJFUFNJTE9OIiwibXMiLCJpc05vdGlmaWNhdGlvbiIsIiQiLCJyZW1vdmUiLCJvbiIsImV2ZW50IiwidyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLHNCQUFWLEVBQWtDO0FBQ2pELE1BQUlDLElBQUksR0FBRyxFQUFYLENBRGlELENBQ2xDOztBQUVmQSxNQUFJ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QUFJM0QsU0FBUixFQUNFO0FBRUYsTUFBRzJELENBQUMsQ0FBQ1gsUUFBTCxFQUNFakYsYUFBYSxDQUFDa0QsU0FBUyxDQUFDM0gsR0FBVixDQUFjb0ssS0FBSyxDQUFDbk4sSUFBcEIsQ0FBRCxDQUFiO0FBRUY0SyxZQUFVLENBQUM3SCxHQUFYLENBQWVxSyxDQUFDLENBQUNwTixJQUFqQixFQUF1Qm9LLEdBQXZCOztBQUVBLE1BQUdnRCxDQUFDLENBQUNMLGNBQUwsRUFBb0I7QUFDbEI7QUFDQTVHLGNBQVUsQ0FBQyxZQUFVO0FBQ25CNkcsT0FBQyxDQUFFLElBQUdHLEtBQUssQ0FBQ25OLElBQUssRUFBaEIsQ0FBRCxDQUFvQmlOLE1BQXBCO0FBQ0QsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBRUYsQ0FsQkQsRSIsImZpbGUiOiJ3YWl0cmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlNoaW55XCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlNoaW55XCIsIFwialF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndhaXRyZXNzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiU2hpbnlcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndhaXRyZXNzXCJdID0gZmFjdG9yeShyb290W1wiU2hpbnlcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zaGlueV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgY29uc3QgZ2V0RGltZW5zaW9ucyA9IChlbGVtZW50LCBvZmZzZXRUb3AgPSAwLCBvZmZzZXRIZWlnaHQgPSAwKSA9PiB7XG4gIHZhciBlbGVtZW50UG9zaXRpb24gPSB7XG5cdFx0d2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdFx0aGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIG9mZnNldEhlaWdodCxcblx0XHR0b3A6IGlzTmFOKGVsZW1lbnQub2Zmc2V0VG9wKSA/IG9mZnNldFRvcCA6IGVsZW1lbnQub2Zmc2V0VG9wICsgb2Zmc2V0VG9wLFxuXHRcdGxlZnQ6IGlzTmFOKGVsZW1lbnQub2Zmc2V0TGVmdCkgPyAwIDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuXHR9O1xuXG4gIHJldHVybiBlbGVtZW50UG9zaXRpb247XG59IiwiLy8gc3RvcmFnZSB0byBhdm9pZCBtdWx0aXBsZSBDU1MgaW5qZWN0aW9uc1xubGV0IGhpZGRlblJlY2FsY3VsYXRpbmcgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBjb25zdCBoaWRlUmVjYWxjdWxhdGUgPSAoaWQpID0+IHtcblxuICBpZihpZCA9PT0gbnVsbClcbiAgICByZXR1cm4gO1xuICBcbiAgaWYoaGlkZGVuUmVjYWxjdWxhdGluZy5nZXQoaWQpKVxuICAgIHJldHVybjtcbiAgXG4gIGhpZGRlblJlY2FsY3VsYXRpbmcuc2V0KGlkLCB0cnVlKTtcblxuICB2YXIgY3NzID0gJyMnICsgaWQgKyAnLnJlY2FsY3VsYXRpbmcge29wYWNpdHk6IDEuMCAhaW1wb3J0YW50OyB9JyxcbiAgICAgIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgc3R5bGUuaWQgPSBpZCArIFwiLXdhaXRlci1yZWNhbGN1bGF0aW5nXCI7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KXtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cblxuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbiIsIi8qKlxuICogUHJvZ3Jlc3MuanMgdjAuMS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdXNhYmxpY2EvcHJvZ3Jlc3MuanNcbiAqIE1JVCBsaWNlbnNlZFxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxMyB1c2FibGkuY2EgLSBBZnNoaW4gTWVocmFiYW5pIChAYWZzaGlubWVoKVxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGZhY3Rvcnkocm9vdCk7XG4gIH1cbn0gKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIC8vRGVmYXVsdCBjb25maWcvdmFyaWFibGVzXG4gIHZhciBWRVJTSU9OID0gJzAuMS4wJztcblxuICAvKipcbiAgICogUHJvZ3Jlc3NKcyBtYWluIGNsYXNzXG4gICAqXG4gICAqIEBjbGFzcyBQcm9ncmVzc0pzXG4gICAqL1xuICBmdW5jdGlvbiBQcm9ncmVzc0pzKG9iaikge1xuXG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl90YXJnZXRFbGVtZW50ID0gb2JqOyBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGFyZ2V0RWxlbWVudCA9IFtvYmpdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9wcm9ncmVzc2pzSWQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgd2luZG93Ll9wcm9ncmVzc2pzSWQgPSAxO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHMgPT09ICd1bmRlZmluZWQnKSBcbiAgICAgIHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFscyA9IHt9O1xuXG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIC8vcHJvZ3Jlc3MgYmFyIHRoZW1lXG4gICAgICB0aGVtZTogJ2JsdWUnLFxuICAgICAgLy9vdmVybGF5IG1vZGUgbWFrZXMgYW4gb3ZlcmxheSBsYXllciBpbiB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgIG92ZXJsYXlNb2RlOiBmYWxzZSxcbiAgICAgIC8vdG8gY29uc2lkZXIgQ1NTMyB0cmFuc2l0aW9ucyBpbiBldmVudHNcbiAgICAgIGNvbnNpZGVyVHJhbnNpdGlvbjogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgcHJvZ3Jlc3MgZm9yIHNwZWNpZmljIGVsZW1lbnQocylcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX2NyZWF0ZUNvbnRhaW5lciBcbiAgICovXG4gIGZ1bmN0aW9uIF9zdGFydFByb2dyZXNzKCkge1xuXG4gICAgLy9jYWxsIG9uQmVmb3JlU3RhcnQgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMuX29uQmVmb3JlU3RhcnRDYWxsYmFjayAhPSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fb25CZWZvcmVTdGFydENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgdGhlIGNvbnRhaW5lciBmb3IgcHJvZ3Jlc3MgYmFyXG4gICAgX2NyZWF0ZUNvbnRhaW5lci5jYWxsKHRoaXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDsgaSA8IGVsbXNMZW5ndGg7IGkrKykge1xuICAgICAgX3NldFByb2dyZXNzLmNhbGwodGhpcywgdGhpcy5fdGFyZ2V0RWxlbWVudFtpXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm9ncmVzcyBiYXIgZm9yIHNwZWNpZmljIGVsZW1lbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX3NldFByb2dyZXNzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRFbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBfc2V0UHJvZ3Jlc3ModGFyZ2V0RWxlbWVudCkge1xuICAgIFxuICAgIC8vaWYgdGhlIHRhcmdldCBlbGVtZW50IGFscmVhZHkgYXMgYGRhdGEtcHJvZ3Jlc3Nqc2AsIGlnbm9yZSB0aGUgaW5pdFxuICAgIGlmICh0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3Nqc1wiKSlcbiAgICAgIHJldHVybjtcblxuICAgIC8vZ2V0IHRhcmdldCBlbGVtZW50IHBvc2l0aW9uXG4gICAgdmFyIHRhcmdldEVsZW1lbnRPZmZzZXQgPSBfZ2V0T2Zmc2V0LmNhbGwodGhpcywgdGFyZ2V0RWxlbWVudCk7XG5cbiAgICB0YXJnZXRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3Nqc1wiLCB3aW5kb3cuX3Byb2dyZXNzanNJZCk7XG4gICAgXG4gICAgdmFyIHByb2dyZXNzRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvZ3Jlc3Nqcy1wcm9ncmVzcyBwcm9ncmVzc2pzLXRoZW1lLScgKyB0aGlzLl9vcHRpb25zLnRoZW1lO1xuXG5cbiAgICAvL3NldCB0aGUgcG9zaXRpb24gcGVyY2VudCBlbGVtZW50cywgaXQgZGVwZW5kcyBvbiB0YXJnZXRFbGVtZW50IHRhZ1xuICAgIGlmICh0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2JvZHknKSB7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH1cblxuICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIiwgd2luZG93Ll9wcm9ncmVzc2pzSWQpO1xuICAgIHZhciBwcm9ncmVzc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2dyZXNzRWxlbWVudC5jbGFzc05hbWUgPSBcInByb2dyZXNzanMtaW5uZXJcIjtcblxuICAgIC8vY3JlYXRlIGFuIGVsZW1lbnQgZm9yIGN1cnJlbnQgcGVyY2VudCBvZiBwcm9ncmVzcyBiYXJcbiAgICB2YXIgcHJvZ3Jlc3NQZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2dyZXNzUGVyY2VudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJwcm9ncmVzc2pzLXBlcmNlbnRcIjtcbiAgICBwcm9ncmVzc1BlcmNlbnRFbGVtZW50LmlubmVySFRNTCA9IFwiMSVcIjtcblxuICAgIHByb2dyZXNzRWxlbWVudC5hcHBlbmRDaGlsZChwcm9ncmVzc1BlcmNlbnRFbGVtZW50KTtcbiAgICBcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5vdmVybGF5TW9kZSAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2JvZHknKSB7XG4gICAgICAvL2lmIHdlIGhhdmUgYGJvZHlgIGZvciB0YXJnZXQgZWxlbWVudCBhbmQgYWxzbyBvdmVybGF5IG1vZGUgaXMgZW5hYmxlLCB3ZSBzaG91bGQgdXNlIGEgZGlmZmVyZW50XG4gICAgICAvL3Bvc2l0aW9uIGZvciBwcm9ncmVzcyBiYXIgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5sZWZ0ICAgPSAwO1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnJpZ2h0ICA9IDA7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUudG9wICAgID0gMDtcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5ib3R0b20gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3NldCBwcm9ncmVzcyBiYXIgY29udGFpbmVyIHNpemUgYW5kIG9mZnNldFxuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLmxlZnQgID0gdGFyZ2V0RWxlbWVudE9mZnNldC5sZWZ0ICsgJ3B4JztcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS50b3AgICA9IHRhcmdldEVsZW1lbnRPZmZzZXQudG9wICsgJ3B4JztcbiAgICAgIC8vaWYgdGFyZ2V0RWxlbWVudCBpcyBib2R5IHNldCB0byBwZXJjZW50IHNvIGl0IHNjYWxlcyB3aXRoIGJyb3dzZXIgcmVzaXplXG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5ub2RlTmFtZSA9PSAnQk9EWScpIHtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGFyZ2V0RWxlbWVudE9mZnNldC53aWR0aCArICdweCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLm92ZXJsYXlNb2RlKSB7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0YXJnZXRFbGVtZW50T2Zmc2V0LmhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzRWxlbWVudCk7XG5cbiAgICAvL2FwcGVuZCB0aGUgZWxlbWVudCB0byBjb250YWluZXJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzanMtY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzRWxlbWVudENvbnRhaW5lcik7XG5cbiAgICBfc2V0UGVyY2VudEZvcih0YXJnZXRFbGVtZW50LCAxKTtcblxuICAgIC8vYW5kIGluY3JlYXNlIHRoZSBwcm9ncmVzc0lkXG4gICAgKyt3aW5kb3cuX3Byb2dyZXNzanNJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGVyY2VudCBmb3IgYWxsIGVsZW1lbnRzXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9zZXRQZXJjZW50XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50XG4gICAqL1xuICBmdW5jdGlvbiBfc2V0UGVyY2VudChwZXJjZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDsgaSA8IGVsbXNMZW5ndGg7IGkrKykge1xuICAgICAgX3NldFBlcmNlbnRGb3IuY2FsbCh0aGlzLCB0aGlzLl90YXJnZXRFbGVtZW50W2ldLCBwZXJjZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBlcmNlbnQgZm9yIHNwZWNpZmljIGVsZW1lbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX3NldFBlcmNlbnRGb3JcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEVsZW1lbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9zZXRQZXJjZW50Rm9yKHRhcmdldEVsZW1lbnQsIHBlcmNlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgLy9wcmV2ZW50IG92ZXJmbG93IVxuICAgIGlmIChwZXJjZW50ID49IDEwMClcbiAgICAgIHBlcmNlbnQgPSAxMDA7XG5cbiAgICBpZiAodGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIikpIHtcbiAgICAgIC8vc2V0VGltZW91dCBmb3IgYmV0dGVyIENTUzMgYW5pbWF0aW9uIGFwcGx5aW5nIGluIHNvbWUgY2FzZXNcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy9jYWxsIHRoZSBvbnByb2dyZXNzIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5fb25Qcm9ncmVzc0NhbGxiYWNrICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fb25Qcm9ncmVzc0NhbGxiYWNrLmNhbGwoc2VsZiwgdGFyZ2V0RWxlbWVudCwgcGVyY2VudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGVyY2VudEVsZW1lbnQgPSBfZ2V0UGVyY2VudEVsZW1lbnQodGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIHBlcmNlbnRFbGVtZW50LnN0eWxlLndpZHRoID0gcGFyc2VJbnQocGVyY2VudCkgKyAnJSc7XG5cbiAgICAgICAgdmFyIHBlcmNlbnRFbGVtZW50ICA9IHBlcmNlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3Nqcy1wZXJjZW50XCIpO1xuICAgICAgICB2YXIgZXhpc3RpbmdQZXJjZW50ID0gcGFyc2VJbnQocGVyY2VudEVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoJyUnLCAnJykpO1xuXG4gICAgICAgIC8vc3RhcnQgaW5jcmVhc2UvZGVjcmVhc2UgdGhlIHBlcmNlbnQgZWxlbWVudCB3aXRoIGFuaW1hdGlvblxuICAgICAgICAoZnVuY3Rpb24ocGVyY2VudEVsZW1lbnQsIGV4aXN0aW5nUGVyY2VudCwgY3VycmVudFBlcmNlbnQpIHtcblxuICAgICAgICAgIHZhciBpbmNyZWFzZW1lbnQgPSB0cnVlO1xuICAgICAgICAgIGlmIChleGlzdGluZ1BlcmNlbnQgPiBjdXJyZW50UGVyY2VudCkge1xuICAgICAgICAgICAgaW5jcmVhc2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHZhciBpbnRlcnZhbEluID0gMTA7XG4gICAgICAgICAgZnVuY3Rpb24gY2hhbmdlUGVyY2VudFRpbWVyKHBlcmNlbnRFbGVtZW50LCBleGlzdGluZ1BlcmNlbnQsIGN1cnJlbnRQZXJjZW50KSB7XG4gICAgICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gcGVyY2VudHNcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKGV4aXN0aW5nUGVyY2VudCAtIGN1cnJlbnRQZXJjZW50KTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDMpIHtcbiAgICAgICAgICAgICAgaW50ZXJ2YWxJbiA9IDMwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IDIwKSB7XG4gICAgICAgICAgICAgIGludGVydmFsSW4gPSAyMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGludGVydmFuSW4gPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKGV4aXN0aW5nUGVyY2VudCAtIGN1cnJlbnRQZXJjZW50KSAhPSAwKSB7XG4gICAgICAgICAgICAgIC8vc2V0IHRoZSBwZXJjZW50XG4gICAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LmlubmVySFRNTCA9IChpbmNyZWFzZW1lbnQgPyAoKytleGlzdGluZ1BlcmNlbnQpIDogKC0tZXhpc3RpbmdQZXJjZW50KSkgKyAnJSc7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNoYW5nZVBlcmNlbnRUaW1lcihwZXJjZW50RWxlbWVudCwgZXhpc3RpbmdQZXJjZW50LCBjdXJyZW50UGVyY2VudCk7IH0sIGludGVydmFsSW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjaGFuZ2VQZXJjZW50VGltZXIocGVyY2VudEVsZW1lbnQsIGV4aXN0aW5nUGVyY2VudCwgY3VycmVudFBlcmNlbnQpO1xuICAgICAgICAgIFxuICAgICAgICB9KShwZXJjZW50RWxlbWVudCwgZXhpc3RpbmdQZXJjZW50LCBwYXJzZUludChwZXJjZW50KSk7XG4gICAgICAgIFxuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHByb2dyZXNzIGJhciBlbGVtZW50IFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfZ2V0UGVyY2VudEVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9nZXRQZXJjZW50RWxlbWVudCh0YXJnZXRFbGVtZW50KSB7XG4gICAgdmFyIHByb2dyZXNzanNJZCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzanMnKSk7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc2pzLWNvbnRhaW5lciA+IC5wcm9ncmVzc2pzLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3Nqcz1cIicgKyBwcm9ncmVzc2pzSWQgKyAnXCJdID4gLnByb2dyZXNzanMtaW5uZXInKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIEF1dG8gaW5jcmVhc2UgdGhlIHByb2dyZXNzIGJhciBldmVyeSBYIG1pbGxpc2Vjb25kc1xuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfYXV0b0luY3JlYXNlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaXplXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtaWxsaXNlY29uZFxuICAgKi9cbiAgZnVuY3Rpb24gX2F1dG9JbmNyZWFzZShzaXplLCBtaWxsaXNlY29uZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXRFbGVtZW50WzBdO1xuICAgIGlmKCF0YXJnZXQpIHJldHVybjtcbiAgICB2YXIgcHJvZ3Jlc3Nqc0lkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzc2pzJykpO1xuICAgIFxuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwod2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0pO1xuICAgIH1cbiAgICB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgX2luY3JlYXNlUGVyY2VudC5jYWxsKHNlbGYsIHNpemUpO1xuICAgIH0sIG1pbGxpc2Vjb25kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgc2l6ZSBvZiBwcm9ncmVzcyBiYXJcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX2luY3JlYXNlUGVyY2VudFxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2luY3JlYXNlUGVyY2VudChzaXplKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDsgaSA8IGVsbXNMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5fdGFyZ2V0RWxlbWVudFtpXTtcbiAgICAgIGlmIChjdXJyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvZ3Jlc3NqcycpKSB7XG4gICAgICAgIHZhciBwZXJjZW50RWxlbWVudCAgPSBfZ2V0UGVyY2VudEVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICB2YXIgZXhpc3RpbmdQZXJjZW50ID0gcGFyc2VJbnQocGVyY2VudEVsZW1lbnQuc3R5bGUud2lkdGgucmVwbGFjZSgnJScsICcnKSk7XG4gICAgICAgIGlmIChleGlzdGluZ1BlcmNlbnQpIHtcbiAgICAgICAgICBfc2V0UGVyY2VudEZvci5jYWxsKHRoaXMsIGN1cnJlbnRFbGVtZW50LCBleGlzdGluZ1BlcmNlbnQgKyAoc2l6ZSB8fCAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYW5kIHJlbW92ZSBwcm9ncmVzcyBiYXIgXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9lbmRcbiAgICovXG4gIGZ1bmN0aW9uIF9lbmQoKSB7XG5cbiAgICAvL2NhbGwgb25CZWZvcmVFbmQgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMuX29uQmVmb3JlRW5kQ2FsbGJhY2sgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmNvbnNpZGVyVHJhbnNpdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAvL3dlIGNhbiBzYWZldHkgYXNzdW1lIHRoYXQgYWxsIGxheWVycyB3b3VsZCBiZSB0aGUgc2FtZSwgc28gYHRoaXMuX3RhcmdldEVsZW1lbnRbMF1gIGlzIHRoZSBzYW1lIGFzIGB0aGlzLl90YXJnZXRFbGVtZW50WzFdYFxuICAgICAgICBfZ2V0UGVyY2VudEVsZW1lbnQodGhpcy5fdGFyZ2V0RWxlbWVudFswXSkuYWRkRXZlbnRMaXN0ZW5lcih3aGljaFRyYW5zaXRpb25FdmVudCgpLCB0aGlzLl9vbkJlZm9yZUVuZENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkJlZm9yZUVuZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldEVsZW1lbnRbMF07XG4gICAgaWYoIXRhcmdldCkgcmV0dXJuO1xuICAgIHZhciBwcm9ncmVzc2pzSWQgPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzanMnKSk7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDsgaSA8IGVsbXNMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5fdGFyZ2V0RWxlbWVudFtpXTtcbiAgICAgIHZhciBwZXJjZW50RWxlbWVudCA9IF9nZXRQZXJjZW50RWxlbWVudChjdXJyZW50RWxlbWVudCk7XG5cbiAgICAgIGlmICghcGVyY2VudEVsZW1lbnQpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdmFyIGV4aXN0aW5nUGVyY2VudCA9IHBhcnNlSW50KHBlcmNlbnRFbGVtZW50LnN0eWxlLndpZHRoLnJlcGxhY2UoJyUnLCAnJykpO1xuICAgICAgXG4gICAgICB2YXIgdGltZW91dFNlYyA9IDE7XG4gICAgICBpZiAoZXhpc3RpbmdQZXJjZW50IDwgMTAwKSB7XG4gICAgICAgIF9zZXRQZXJjZW50Rm9yLmNhbGwodGhpcywgY3VycmVudEVsZW1lbnQsIDEwMCk7XG4gICAgICAgIHRpbWVvdXRTZWMgPSA1MDA7XG4gICAgICB9XG5cbiAgICAgIC8vSSBiZWxpZXZlIEkgc2hvdWxkIGhhbmRsZSB0aGlzIHNpdHVhdGlvbiB3aXRoIGV2ZW50TGlzdGVuZXIgYW5kIGB0cmFuc2l0aW9uZW5kYCBldmVudCBidXQgSSdtIG5vdCBzdXJlXG4gICAgICAvL2Fib3V0IGNvbXBhdGliaWxpdHkgd2l0aCBJRXMuIFNob3VsZCBiZSBmaXhlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLlxuICAgICAgKGZ1bmN0aW9uKHBlcmNlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lICs9IFwiIHByb2dyZXNzanMtZW5kXCI7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9yZW1vdmUgdGhlIHBlcmNlbnQgZWxlbWVudCBmcm9tIHBhZ2VcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwZXJjZW50RWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIC8vYW5kIHJlbW92ZSB0aGUgYXR0cmlidXRlXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sIHRpbWVvdXRTZWMpO1xuICAgICAgfSkocGVyY2VudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvL2NsZWFuIHRoZSBzZXRJbnRlcnZhbCBmb3IgYXV0b0luY3JlYXNlIGZ1bmN0aW9uXG4gICAgaWYgKHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFsc1twcm9ncmVzc2pzSWRdKSB7XG4gICAgICAvL2BkZWxldGVgIGtleXdvcmQgaGFzIHNvbWUgcHJvYmxlbXMgaW4gSUVcbiAgICAgIHRyeSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwod2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0pO1xuICAgICAgICB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXTtcbiAgICAgIH0gY2F0Y2goZXgpIHsgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgcHJvZ3Jlc3MgYmFyIHdpdGhvdXQgZmluaXNoaW5nXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9raWxsXG4gICAqL1xuICBmdW5jdGlvbiBfa2lsbCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0RWxlbWVudFswXTtcbiAgICBpZighdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIHByb2dyZXNzanNJZCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZ3Jlc3NqcycpKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBlbG1zTGVuZ3RoID0gdGhpcy5fdGFyZ2V0RWxlbWVudC5sZW5ndGg7IGkgPCBlbG1zTGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuX3RhcmdldEVsZW1lbnRbaV07XG4gICAgICB2YXIgcGVyY2VudEVsZW1lbnQgPSBfZ2V0UGVyY2VudEVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuXG4gICAgICBpZiAoIXBlcmNlbnRFbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIC8vSSBiZWxpZXZlIEkgc2hvdWxkIGhhbmRsZSB0aGlzIHNpdHVhdGlvbiB3aXRoIGV2ZW50TGlzdGVuZXIgYW5kIGB0cmFuc2l0aW9uZW5kYCBldmVudCBidXQgSSdtIG5vdCBzdXJlXG4gICAgICAvL2Fib3V0IGNvbXBhdGliaWxpdHkgd2l0aCBJRXMuIFNob3VsZCBiZSBmaXhlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLlxuICAgICAgKGZ1bmN0aW9uKHBlcmNlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudCkge1xuICAgICAgICBwZXJjZW50RWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSBcIiBwcm9ncmVzc2pzLWVuZFwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy9yZW1vdmUgdGhlIHBlcmNlbnQgZWxlbWVudCBmcm9tIHBhZ2VcbiAgICAgICAgICBwZXJjZW50RWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGVyY2VudEVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgLy9hbmQgcmVtb3ZlIHRoZSBhdHRyaWJ1dGVcbiAgICAgICAgICBjdXJyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIik7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSkocGVyY2VudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvL2NsZWFuIHRoZSBzZXRJbnRlcnZhbCBmb3IgYXV0b0luY3JlYXNlIGZ1bmN0aW9uXG4gICAgaWYgKHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFsc1twcm9ncmVzc2pzSWRdKSB7XG4gICAgICAvL2BkZWxldGVgIGtleXdvcmQgaGFzIHNvbWUgcHJvYmxlbXMgaW4gSUVcbiAgICAgIHRyeSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwod2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0pO1xuICAgICAgICB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXTtcbiAgICAgIH0gY2F0Y2goZXgpIHsgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHByb2dyZXNzIGJhciBjb250YWluZXJcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX2NyZWF0ZUNvbnRhaW5lclxuICAgKi9cbiAgZnVuY3Rpb24gX2NyZWF0ZUNvbnRhaW5lcigpIHtcbiAgICAvL2ZpcnN0IGNoZWNrIGlmIHdlIGhhdmUgYW4gY29udGFpbmVyIGFscmVhZHksIHdlIGRvbid0IG5lZWQgdG8gY3JlYXRlIGl0IGFnYWluXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzanMtY29udGFpbmVyXCIpKSB7XG4gICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9IFwicHJvZ3Jlc3Nqcy1jb250YWluZXJcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBlbGVtZW50IHBvc2l0aW9uIG9uIHRoZSBwYWdlXG4gICAqIFRoYW5rcyB0byBgbWVvdXdgOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NDI0NzQvMzc1OTY2XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9nZXRPZmZzZXRcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAgICogQHJldHVybnMgRWxlbWVudCdzIHBvc2l0aW9uIGluZm9cbiAgICovXG4gIGZ1bmN0aW9uIF9nZXRPZmZzZXQoZWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50UG9zaXRpb24gPSB7fTtcblxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2JvZHknKSB7XG4gICAgICAvL3NldCB3aWR0aFxuICAgICAgZWxlbWVudFBvc2l0aW9uLndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIC8vc2V0IGhlaWdodFxuICAgICAgZWxlbWVudFBvc2l0aW9uLmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3NldCB3aWR0aFxuICAgICAgZWxlbWVudFBvc2l0aW9uLndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIC8vc2V0IGhlaWdodFxuICAgICAgZWxlbWVudFBvc2l0aW9uLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIC8vY2FsY3VsYXRlIGVsZW1lbnQgdG9wIGFuZCBsZWZ0XG4gICAgdmFyIF94ID0gMDtcbiAgICB2YXIgX3kgPSAwO1xuICAgIHdoaWxlIChlbGVtZW50ICYmICFpc05hTihlbGVtZW50Lm9mZnNldExlZnQpICYmICFpc05hTihlbGVtZW50Lm9mZnNldFRvcCkpIHtcbiAgICAgIF94ICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgIF95ICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICAvL3NldCB0b3BcbiAgICBlbGVtZW50UG9zaXRpb24udG9wID0gX3k7XG4gICAgLy9zZXQgbGVmdFxuICAgIGVsZW1lbnRQb3NpdGlvbi5sZWZ0ID0gX3g7XG5cbiAgICByZXR1cm4gZWxlbWVudFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgb2JqMSdzIHZhbHVlcyB3aXRoIG9iajIncyBhbmQgYWRkcyBvYmoyJ3MgaWYgbm9uIGV4aXN0ZW50IGluIG9iajFcbiAgICogdmlhOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3MTI1MS9ob3ctY2FuLWktbWVyZ2UtcHJvcGVydGllcy1vZi10d28tamF2YXNjcmlwdC1vYmplY3RzLWR5bmFtaWNhbGx5XG4gICAqXG4gICAqIEBwYXJhbSBvYmoxXG4gICAqIEBwYXJhbSBvYmoyXG4gICAqIEByZXR1cm5zIG9iajMgYSBuZXcgb2JqZWN0IGJhc2VkIG9uIG9iajEgYW5kIG9iajJcbiAgICovXG4gIGZ1bmN0aW9uIF9tZXJnZU9wdGlvbnMob2JqMSwgb2JqMikge1xuICAgIHZhciBvYmozID0ge307XG4gICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMSkgeyBvYmozW2F0dHJuYW1lXSA9IG9iajFbYXR0cm5hbWVdOyB9XG4gICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMikgeyBvYmozW2F0dHJuYW1lXSA9IG9iajJbYXR0cm5hbWVdOyB9XG4gICAgcmV0dXJuIG9iajM7XG4gIH1cblxuICB2YXIgcHJvZ3Jlc3NKcyA9IGZ1bmN0aW9uICh0YXJnZXRFbG0pIHtcbiAgICBpZiAodHlwZW9mICh0YXJnZXRFbG0pID09PSAnb2JqZWN0Jykge1xuICAgICAgLy9PaywgY3JlYXRlIGEgbmV3IGluc3RhbmNlXG4gICAgICByZXR1cm4gbmV3IFByb2dyZXNzSnModGFyZ2V0RWxtKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mICh0YXJnZXRFbG0pID09PSAnc3RyaW5nJykge1xuICAgICAgLy9zZWxlY3QgdGhlIHRhcmdldCBlbGVtZW50IHdpdGggcXVlcnkgc2VsZWN0b3JcbiAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRFbG0pO1xuICAgICAgIFxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9ncmVzc0pzKHRhcmdldEVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyBlbGVtZW50IHdpdGggZ2l2ZW4gc2VsZWN0b3IuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvZ3Jlc3NKcyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjb3JyZWN0IHRyYW5zaXRpb24gY2FsbGJhY2tcbiAgICogVGhhbmtzIEB3ZWJpbmlzdGE6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzkwOTAxMjgvMzc1OTY2XG4gICAqXG4gICAqIEByZXR1cm5zIHRyYW5zaXRpb24gbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSB7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfVxuXG4gICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgUHJvZ3Jlc3NKcyB2ZXJzaW9uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB2ZXJzaW9uXG4gICAqIEB0eXBlIFN0cmluZ1xuICAgKi9cbiAgcHJvZ3Jlc3NKcy52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAvL1Byb3RvdHlwZVxuICBwcm9ncmVzc0pzLmZuID0gUHJvZ3Jlc3NKcy5wcm90b3R5cGUgPSB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvZ3Jlc3NKcyh0aGlzKTtcbiAgICB9LFxuICAgIHNldE9wdGlvbjogZnVuY3Rpb24ob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBfbWVyZ2VPcHRpb25zKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBfc3RhcnRQcm9ncmVzcy5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHBlcmNlbnQpIHtcbiAgICAgIF9zZXRQZXJjZW50LmNhbGwodGhpcywgcGVyY2VudCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGluY3JlYXNlOiBmdW5jdGlvbihzaXplKSB7XG4gICAgICBfaW5jcmVhc2VQZXJjZW50LmNhbGwodGhpcywgc2l6ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGF1dG9JbmNyZWFzZTogZnVuY3Rpb24oc2l6ZSwgbWlsbGlzZWNvbmQpIHtcbiAgICAgIF9hdXRvSW5jcmVhc2UuY2FsbCh0aGlzLCBzaXplLCBtaWxsaXNlY29uZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICBfZW5kLmNhbGwodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGtpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgX2tpbGwuY2FsbCh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb25iZWZvcmVlbmQ6IGZ1bmN0aW9uKHByb3ZpZGVkQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgKHByb3ZpZGVkQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlRW5kQ2FsbGJhY2sgPSBwcm92aWRlZENhbGxiYWNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlZCBjYWxsYmFjayBmb3Igb25iZWZvcmVlbmQgd2FzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIG9uYmVmb3Jlc3RhcnQ6IGZ1bmN0aW9uKHByb3ZpZGVkQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgKHByb3ZpZGVkQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlU3RhcnRDYWxsYmFjayA9IHByb3ZpZGVkQ2FsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmJlZm9yZXN0YXJ0IHdhcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBvbnByb2dyZXNzOiBmdW5jdGlvbihwcm92aWRlZENhbGxiYWNrKSB7XG4gICAgICBpZiAodHlwZW9mIChwcm92aWRlZENhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9vblByb2dyZXNzQ2FsbGJhY2sgPSBwcm92aWRlZENhbGxiYWNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlZCBjYWxsYmFjayBmb3Igb25wcm9ncmVzcyB3YXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBleHBvcnRzLnByb2dyZXNzSnMgPSBwcm9ncmVzc0pzO1xuICByZXR1cm4gcHJvZ3Jlc3NKcztcbn0pKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ3VzdG9tICovXFxuLndhaXRyZXNzLW92ZXJsYXl7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4Ojk5OTtcXG59XFxuXFxuLndhaXRyZXNzLW92ZXJsYXktY29udGVudHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLndhaXRyZXNzLW5vdGlmaWNhdGlvbntcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZmljYXRpb25ze1xcbiAgYm94LXNoYWRvdzpcXG4gICAgMCAzLjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAyKSxcXG4gICAgMCA2LjlweCA0LjdweCByZ2JhKDAsIDAsIDAsIDAuMDI4KSxcXG4gICAgMCAxMi44cHggOC45cHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXFxuICAgIDAgMjMuMXB4IDE1LjlweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSxcXG4gICAgMCA0My4ycHggMjkuN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSksXFxuICAgIDAgMTAwcHggNzFweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHsgXFxuICAud2FpdHJlc3Mtbm90aWZpY2F0aW9uIHtcXG4gICAgd2lkdGg6IDk0JTtcXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmNqcy9leHRzL3dhaXRyZXNzL2Nzcy9vdmVybGF5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFOzs7Ozs7b0NBTWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtZQUNyQixxQkFBcUI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtZQUNuQixtQkFBbUI7RUFDN0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSw2QkFBNkI7WUFDckIscUJBQXFCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7WUFDbkIsbUJBQW1CO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tICovXFxuLndhaXRyZXNzLW92ZXJsYXl7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4Ojk5OTtcXG59XFxuXFxuLndhaXRyZXNzLW92ZXJsYXktY29udGVudHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLndhaXRyZXNzLW5vdGlmaWNhdGlvbntcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZmljYXRpb25ze1xcbiAgYm94LXNoYWRvdzpcXG4gICAgMCAzLjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAyKSxcXG4gICAgMCA2LjlweCA0LjdweCByZ2JhKDAsIDAsIDAsIDAuMDI4KSxcXG4gICAgMCAxMi44cHggOC45cHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXFxuICAgIDAgMjMuMXB4IDE1LjlweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSxcXG4gICAgMCA0My4ycHggMjkuN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSksXFxuICAgIDAgMTAwcHggNzFweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHsgXFxuICAud2FpdHJlc3Mtbm90aWZpY2F0aW9uIHtcXG4gICAgd2lkdGg6IDk0JTtcXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG4ucHJvZ3Jlc3Nqcy1wcm9ncmVzcyB7XFxuICAgIHotaW5kZXg6IDk5OTk5OTk7XFxufVxcblxcbi8qIGJsdWUgdGhlbWUsIGxpa2UgaU9TIDcgcHJvZ3Jlc3MgYmFyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZSAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWUucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlIC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBibHVlIHRoZW1lIHdpdGggb3ZlcmxheSBsYXllciwgbm8gcGVyY2VudCBiYXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5LnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYmx1ZSB0aGVtZSB3aXRoIG92ZXJsYXkgbGF5ZXIsIG5vIHBlcmNlbnQgYmFyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheS5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEJsdWUgdGhlbWUgd2l0aCBib3JkZXIgcmFkaXVzIGFuZCBvdmVybGF5IGxheWVyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzIC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXMucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzIC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBCbHVlIHRoZW1lIHdpdGggYm9yZGVyIHJhZGl1cyBhbmQgb3ZlcmxheSBsYXllciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzSGFsZk9wYWNpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c0hhbGZPcGFjaXR5IC5wcm9ncmVzc2pzLWlubmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNIYWxmT3BhY2l0eS5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNIYWxmT3BhY2l0eSAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQmx1ZSB0aGVtZSB3aXRoIGJvcmRlciByYWRpdXMsIG92ZXJsYXkgbGF5ZXIgYW5kIHBlcmNlbnQgYmFyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNXaXRoUGVyY2VudEJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNXaXRoUGVyY2VudEJhciAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzV2l0aFBlcmNlbnRCYXIucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzV2l0aFBlcmNlbnRCYXIgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsYWNrUmFkaXVzSW5wdXRzIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibGFja1JhZGl1c0lucHV0cyAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibGFja1JhZGl1c0lucHV0cy5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsYWNrUmFkaXVzSW5wdXRzIC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmNqcy9leHRzL3dhaXRyZXNzL2Nzcy9wcm9ncmVzcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsb0RBQW9EO0FBQ3BEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0dBQ2IscUNBQXFDO0lBQ3BDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsaUVBQWlFO0FBQ2pFO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICB3aWR0aDogMDtcXG59XFxuLnByb2dyZXNzanMtcHJvZ3Jlc3Mge1xcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xcbn1cXG5cXG4vKiBibHVlIHRoZW1lLCBsaWtlIGlPUyA3IHByb2dyZXNzIGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWUgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlLnByb2dyZXNzanMtZW5kIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZSAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYmx1ZSB0aGVtZSB3aXRoIG92ZXJsYXkgbGF5ZXIsIG5vIHBlcmNlbnQgYmFyICovXFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheSAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheS5wcm9ncmVzc2pzLWVuZCB7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGJsdWUgdGhlbWUgd2l0aCBvdmVybGF5IGxheWVyLCBubyBwZXJjZW50IGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXkucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5IC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBCbHVlIHRoZW1lIHdpdGggYm9yZGVyIHJhZGl1cyBhbmQgb3ZlcmxheSBsYXllciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1cyAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzLnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1cyAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQmx1ZSB0aGVtZSB3aXRoIGJvcmRlciByYWRpdXMgYW5kIG92ZXJsYXkgbGF5ZXIgKi9cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c0hhbGZPcGFjaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmx1ZU92ZXJsYXlSYWRpdXNIYWxmT3BhY2l0eSAucHJvZ3Jlc3Nqcy1pbm5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzSGFsZk9wYWNpdHkucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzSGFsZk9wYWNpdHkgLnByb2dyZXNzanMtcGVyY2VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEJsdWUgdGhlbWUgd2l0aCBib3JkZXIgcmFkaXVzLCBvdmVybGF5IGxheWVyIGFuZCBwZXJjZW50IGJhciAqL1xcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzV2l0aFBlcmNlbnRCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9ncmVzc2pzLXRoZW1lLWJsdWVPdmVybGF5UmFkaXVzV2l0aFBlcmNlbnRCYXIgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c1dpdGhQZXJjZW50QmFyLnByb2dyZXNzanMtZW5kIHtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibHVlT3ZlcmxheVJhZGl1c1dpdGhQZXJjZW50QmFyIC5wcm9ncmVzc2pzLXBlcmNlbnQge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibGFja1JhZGl1c0lucHV0cyB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmxhY2tSYWRpdXNJbnB1dHMgLnByb2dyZXNzanMtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1ZTtcXG59XFxuLnByb2dyZXNzanMtdGhlbWUtYmxhY2tSYWRpdXNJbnB1dHMucHJvZ3Jlc3Nqcy1lbmQge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJvZ3Jlc3Nqcy10aGVtZS1ibGFja1JhZGl1c0lucHV0cyAucHJvZ3Jlc3Nqcy1wZXJjZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL292ZXJsYXkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL292ZXJsYXkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZ3Jlc3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2dyZXNzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3NoaW55X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ3NoaW55JztcbmltcG9ydCAnanF1ZXJ5JztcblxuaW1wb3J0IHtwcm9ncmVzc0pzfSBmcm9tICcuL3Byb2dyZXNzJztcbmltcG9ydCB7IGhpZGVSZWNhbGN1bGF0ZSB9IGZyb20gJy4uL3JlY2FsY3VsYXRlJztcbmltcG9ydCB7IGdldERpbWVuc2lvbnMgfSBmcm9tICcuLi9kaW1lbnNpb25zJztcblxuaW1wb3J0ICcuL2Nzcy9wcm9ncmVzcy5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9vdmVybGF5LmNzcyc7XG5cbi8vIGtlZXAgaW5maW5pdGUgdG8gbGF0ZXIgY2xlYXJcbmxldCBpbnRlcnZhbHMgPSBuZXcgTWFwKCk7XG4vLyBlbGVtZW50cyB0byBoaWRlIG9uIHJlY29tcHV0ZWRcbmxldCB3YWl0cmVzc1RvSGlkZSA9IG5ldyBNYXAoKTtcblxubGV0IHdhaXRyZXNzZXMgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9Db29yZHMocG9zaXRpb24pe1xuICB2YXIgcG9zID0ge307XG5cbiAgdmFyIGJhc2VfeSA9IDA7XG4gIHZhciBjdXJyZW50X25vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2FpdHJlc3Mtbm90aWZpY2F0aW9uXCIpO1xuICBmb3IodmFyIG4gb2YgY3VycmVudF9ub3RpZmljYXRpb25zKXtcbiAgICBiYXNlX3kgPSBiYXNlX3kgKyAxMCArIG4ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgaWYocG9zaXRpb24gPT0gXCJibFwiKXtcbiAgICBwb3MudG9wID0gXCJhdXRvXCI7XG4gICAgcG9zLmJvdHRvbSA9IChiYXNlX3kgKyAxMCkgKyAncHgnO1xuICAgIHBvcy5sZWZ0ID0gXCIxMHB4XCI7XG4gICAgcG9zLnJpZ2h0ID0gXCJhdXRvXCI7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT0gXCJ0bFwiKXtcbiAgICBwb3MudG9wID0gKGJhc2VfeSArIDEwKSArIFwicHhcIjtcbiAgICBwb3MuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgcG9zLmxlZnQgPSBcIjEwcHhcIjtcbiAgICBwb3MucmlnaHQgPSBcImF1dG9cIjtcbiAgfSBlbHNlIGlmKHBvc2l0aW9uID09IFwiYnJcIil7XG4gICAgcG9zLnRvcCA9IFwiYXV0b1wiO1xuICAgIHBvcy5ib3R0b20gPSAoYmFzZV95ICsgMTApICsgJ3B4JztcbiAgICBwb3MubGVmdCA9IFwiYXV0b1wiO1xuICAgIHBvcy5yaWdodCA9IFwiMTBweFwiO1xuICB9IGVsc2UgaWYocG9zaXRpb24gPT0gXCJ0clwiKXtcbiAgICBwb3MudG9wID0gKGJhc2VfeSArIDEwKSArICdweCc7XG4gICAgcG9zLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgIHBvcy5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgcG9zLnJpZ2h0ID0gXCIxMHB4XCI7XG4gIH1cblxuICByZXR1cm4gcG9zO1xufVxuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignd2FpdHJlc3MtaW5pdCcsIGZ1bmN0aW9uKG9wdHMpIHtcblxuXHRpZih3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpICE9IHVuZGVmaW5lZClcbiAgICByZXR1cm47IFxuICBcbiAgbGV0IG5vdGlmaWNhdGlvbiwgcHJvZztcblxuICBpZihvcHRzLm5vdGlmeSl7XG4gICAgLy8gY3JlYXRlIGRpdlxuICAgIG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG5cbiAgICAvLyBwb3NpdGlvbiBkaXZcbiAgICBsZXQgcG9zID0gcG9zaXRpb25Ub0Nvb3JkcyhvcHRzLnBvc2l0aW9uKTtcbiAgICBub3RpZmljYXRpb24uc3R5bGUuYm90dG9tID0gcG9zLmJvdHRvbTtcbiAgICBub3RpZmljYXRpb24uc3R5bGUucmlnaHQgPSBwb3MucmlnaHQ7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgICBub3RpZmljYXRpb24uc3R5bGUudG9wID0gcG9zLnRvcDtcblxuICAgIC8vbm90aWZpY2F0aW9uLndpZHRoID0gJzEwMHB4JztcbiAgICBub3RpZmljYXRpb24uaGVpZ2h0ID0gJzUwcHgnO1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5jb2xvciA9IG9wdHMudGV4dENvbG9yO1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRzLmJhY2tncm91bmRDb2xvcjtcbiAgICBub3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IG9wdHMuaHRtbDtcbiAgICBub3RpZmljYXRpb24uc3R5bGUuekluZGV4ID0gOTk5OTtcbiAgICBub3RpZmljYXRpb24uaWQgPSBvcHRzLmlkO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwid2FpdHJlc3Mtbm90aWZpY2F0aW9uXCIpO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uc1wiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG4gICAgb3B0cy5pZCA9ICcjJyArIG9wdHMuaWQ7XG4gIH1cblxuXHRpZihvcHRzLmlkICE9IG51bGwpXG5cdFx0cHJvZyA9IHByb2dyZXNzSnMob3B0cy5pZCk7XG5cdGVsc2Vcblx0XHRwcm9nID0gcHJvZ3Jlc3NKcygpO1xuXG5cdHByb2cgPSBwcm9nLnNldE9wdGlvbnMob3B0cy5vcHRpb25zKTtcblxuXHR3YWl0cmVzc2VzLnNldChvcHRzLm5hbWUsIHByb2cpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCd3YWl0cmVzcy1zdGFydCcsIGZ1bmN0aW9uKG9wdHMpIHtcbiAgXG4gIHdhaXRyZXNzZXMuZ2V0KG9wdHMubmFtZSkuc3RhcnQoKTtcbiAgbGV0IGV4aXN0cyA9IGZhbHNlLCBcbiAgICAgIGRvbSxcbiAgICAgIG92ZXJsYXksXG4gICAgICBvdmVybGF5Q29udGVudDtcbiAgXG4gIGlmKG9wdHMuaGlkZU9uUmVuZGVyKVxuICAgIHdhaXRyZXNzVG9IaWRlLnNldChvcHRzLmlkLCBvcHRzKTtcblxuICAvLyBjb250ZW50XG4gIGlmKG9wdHMuaHRtbCl7XG5cbiAgICBoaWRlUmVjYWxjdWxhdGUob3B0cy5pZCk7XG5cbiAgICAvLyBnZXQgcGFyZW50XG4gICAgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5pZCk7XG4gICAgaWYoZG9tID09IHVuZGVmaW5lZCl7XG4gICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBmaW5kXCIsIG9wdHMuaWQpO1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICBsZXQgZWwgPSBnZXREaW1lbnNpb25zKGRvbSwgMiwgLTIpOyBcblxuICAgIC8vIGNoZWNrIGlmIG92ZXJsYXkgZXhpc3RzXG4gICAgZG9tLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICBpZihlbC5jbGFzc05hbWUgPT09ICd3YWl0cmVzcy1vdmVybGF5JylcbiAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmKGV4aXN0cyl7XG4gICAgICBjb25zb2xlLmxvZyhcIndhaXRyZXNzIG9uXCIsIG9wdHMuaWQsIFwiYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIG92ZXJsYXlcbiAgICBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICAvLyBjcmVhdGUgb3ZlcmxheSBjb250ZW50XG4gICAgb3ZlcmxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAgIC8vIGluc2VydCBodG1sXG4gICAgb3ZlcmxheUNvbnRlbnQuaW5uZXJIVE1MID0gb3B0cy5odG1sO1xuICAgIG92ZXJsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ3YWl0cmVzcy1vdmVybGF5LWNvbnRlbnRcIik7XG5cbiAgICAvLyBhZGQgc3R5bGVzXG4gICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBlbC5oZWlnaHQgKyAncHgnO1xuICAgIG92ZXJsYXkuc3R5bGUud2lkdGggPSBlbC53aWR0aCArICdweCc7XG4gICAgb3ZlcmxheS5zdHlsZS50b3AgPSBlbC50b3AgKyAncHgnO1xuICAgIG92ZXJsYXkuc3R5bGUubGVmdCA9IGVsLmxlZnQgKyAncHgnO1xuICAgIG92ZXJsYXkuc3R5bGUuY29sb3IgPSBvcHRzLnRleHRDb2xvcjtcbiAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdHMuYmFja2dyb3VuZENvbG9yO1xuICAgIG92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgb3ZlcmxheS5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ3YWl0cmVzcy1vdmVybGF5XCIpO1xuXG4gICAgLy8gYXBwZW5kIG92ZXJsYXkgY29udGVudCBpbiBvdmVybGF5XG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChvdmVybGF5Q29udGVudCk7XG5cbiAgICAvLyBhcHBlbmQgb3ZlcmxheSB0byBkb21cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBkb20uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5Db2VuZS93YWl0ZXIvaXNzdWVzLzYzXG4gIGlmKG9wdHMuaW5maW5pdGUpe1xuICAgIGxldCB2YWx1ZSA9IDAsXG4gICAgICAgIGluYyA9IDAsXG4gICAgICAgIGVuZCA9IDEwMDtcblxuICAgIGludGVydmFscy5zZXQoXG4gICAgICBvcHRzLm5hbWUsIFxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgaW5jID0gKChlbmQgLSB2YWx1ZSkgLyAoZW5kICsgdmFsdWUpKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKCh2YWx1ZSArIGluYyArIE51bWJlci5FUFNJTE9OKSAqIDEwMDApIC8gMTAwMFxuICAgICAgICB3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpLnNldCh2YWx1ZSk7XG4gICAgICB9LCAzNTApXG4gICAgKTtcbiAgfVxufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCd3YWl0cmVzcy1zZXQnLCBmdW5jdGlvbihvcHRzKSB7XG5cdHdhaXRyZXNzZXMuZ2V0KG9wdHMubmFtZSkuc2V0KG9wdHMucGVyY2VudCk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ3dhaXRyZXNzLWF1dG8nLCBmdW5jdGlvbihvcHRzKSB7XG5cdHdhaXRyZXNzZXMuZ2V0KG9wdHMubmFtZSkuYXV0b0luY3JlYXNlKG9wdHMucGVyY2VudCwgb3B0cy5tcyk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ3dhaXRyZXNzLWluY3JlYXNlJywgZnVuY3Rpb24ob3B0cykge1xuXHR3YWl0cmVzc2VzLmdldChvcHRzLm5hbWUpLmluY3JlYXNlKG9wdHMucGVyY2VudCk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ3dhaXRyZXNzLWVuZCcsIGZ1bmN0aW9uKG9wdHMpIHtcbiAgd2FpdHJlc3Nlcy5nZXQob3B0cy5uYW1lKS5lbmQoKTtcblxuICBpZihvcHRzLmlkKXtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5pZCk7XG4gICAgdmFyIG92ZXJsYXkgPSBkb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndhaXRyZXNzLW92ZXJsYXlcIik7XG4gIFxuICAgIGlmKG92ZXJsYXkubGVuZ3RoID4gMClcbiAgICAgIGRvbS5yZW1vdmVDaGlsZChvdmVybGF5WzBdKTtcbiAgfVxuXG4gIGlmKG9wdHMuaW5maW5pdGUpXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbHMuZ2V0KG9wdHMubmFtZSkpO1xuICBcbiAgICBpZihvcHRzLmlzTm90aWZpY2F0aW9uKXtcbiAgICAvLyBzbWFsbCBkZWxheSB0byBhbGxvdyB0aGUgbG9hZGluZyBiYXIgdG8gZW5kXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgJChgIyR7b3B0cy5uYW1lfWApLnJlbW92ZSgpO1xuICAgIH0sIDQwMCk7XG4gIH1cblxufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdzaGlueTp2YWx1ZSBzaGlueTplcnJvciBzaGlueTpyZWNhbGN1bGF0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICBsZXQgdyA9IHdhaXRyZXNzVG9IaWRlLmdldChldmVudC5uYW1lKTtcblxuICBpZih3ID09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gO1xuICBcbiAgaWYody5pbmZpbml0ZSlcbiAgICBjbGVhckludGVydmFsKGludGVydmFscy5nZXQoZXZlbnQubmFtZSkpO1xuICBcbiAgd2FpdHJlc3Nlcy5nZXQody5uYW1lKS5lbmQoKTtcblxuICBpZih3LmlzTm90aWZpY2F0aW9uKXtcbiAgICAvLyBzbWFsbCBkZWxheSB0byBhbGxvdyB0aGUgbG9hZGluZyBiYXIgdG8gZW5kXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgJChgIyR7ZXZlbnQubmFtZX1gKS5yZW1vdmUoKTtcbiAgICB9LCA0MDApO1xuICB9XG4gIFxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==