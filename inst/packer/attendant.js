(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Shiny"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["Shiny", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["attendant"] = factory(require("Shiny"), require("jQuery"));
	else
		root["attendant"] = factory(root["Shiny"], root["jQuery"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_shiny__, __WEBPACK_EXTERNAL_MODULE_jquery__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_shiny__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./srcjs/exts/attendant/attendant.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


let attendants = new Map();

/**
 * Handles messages from the shiny server to set the progress
 * of the bar and optionally its text.
 * @function
 * @param  {JSON} msg - JSON object sent from shiny server.
 */
const handleProgress = msg => {
  let $el = $(`#${msg.id} .progress-bar`);
  let w = getWidth(msg.id, msg.value);
  $(`#${msg.id}`).show();
  $el.attr("aria-valuenow", msg.value).css("width", w + "%");
  if (msg.text) $el.html(msg.text);
  if (msg.hideOnEnd && getMax(msg.id) <= msg.value) $(`#${msg.id}`).hide();
};

/**
 * Get the max value from a progress bar.
 * @function
 * @param  {string} id - Id of the progress bar.
 */
const getMax = id => {
  let max = $(`#${id} .progress-bar`).attr("aria-valuemax");
  return parseFloat(max);
};

/**
 * Get the width the progress bar should be set to.
 * @function
 * @param  {string} id - Id of the progress bar.
 * @param  {number} value - Value sent from the server
 * must be more than the 'min' of the progress bar and less
 * than the 'max'.
 */
const getWidth = (id, value) => {
  let max = getMax(id);
  return value / max * 100;
};
Shiny.addCustomMessageHandler("attendant-set-min", msg => {
  $(`#${msg.id} .progress-bar`).attr("aria-valuemin", msg.min);
});
Shiny.addCustomMessageHandler("attendant-set-max", msg => {
  $(`#${msg.id} .progress-bar`).attr("aria-valuemax", msg.max);
});
Shiny.addCustomMessageHandler("attendant-set", handleProgress);
Shiny.addCustomMessageHandler("attendant-done", msg => {
  let existingAttendant = attendants.get(msg.id);
  if (existingAttendant != undefined) clearInterval(existingAttendant);
  msg.value = getMax(msg.id);
  handleProgress(msg);
});
Shiny.addCustomMessageHandler("attendant-auto", msg => {
  let $el = $(`#${msg.id} .progress-bar`);
  let max = getMax(msg.id);
  let value = parseFloat($el.attr("aria-valuenow"));
  let sequence = setInterval(() => {
    if (value > max) return;
    value = value + 1;
    let w = getWidth(msg.id, value);
    $(`#${msg.id} .progress-bar`).attr("aria-valuenow", value).css("width", w + "%");
  }, msg.ms);
  attendants.set(msg.id, sequence);
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRUwsQ0FBQyxHQUFHLEdBQUcsQ0FBQztFQUMxQixDQUFDLEVBQUVKLEdBQUcsQ0FBQzBCLEVBQUUsQ0FBQztFQUVWN0IsVUFBVSxDQUFDOEIsR0FBRyxDQUFDM0IsR0FBRyxDQUFDRyxFQUFFLEVBQUVxQixRQUFRLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dhaXRlci9leHRlcm5hbCB1bWQgXCJTaGlueVwiIiwid2VicGFjazovL3dhaXRlci9leHRlcm5hbCB1bWQgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FpdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dhaXRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FpdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2FpdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vc3JjanMvZXh0cy9hdHRlbmRhbnQvYXR0ZW5kYW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlNoaW55XCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlNoaW55XCIsIFwialF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF0dGVuZGFudFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlNoaW55XCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdHRlbmRhbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJTaGlueVwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zaGlueV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSA9PiB7XG5yZXR1cm4gIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3NoaW55X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJzaGlueVwiO1xuaW1wb3J0IFwianF1ZXJ5XCI7XG5cbmxldCBhdHRlbmRhbnRzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIEhhbmRsZXMgbWVzc2FnZXMgZnJvbSB0aGUgc2hpbnkgc2VydmVyIHRvIHNldCB0aGUgcHJvZ3Jlc3NcbiAqIG9mIHRoZSBiYXIgYW5kIG9wdGlvbmFsbHkgaXRzIHRleHQuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSAge0pTT059IG1zZyAtIEpTT04gb2JqZWN0IHNlbnQgZnJvbSBzaGlueSBzZXJ2ZXIuXG4gKi9cbmNvbnN0IGhhbmRsZVByb2dyZXNzID0gKG1zZykgPT4ge1xuICBsZXQgJGVsID0gJChgIyR7bXNnLmlkfSAucHJvZ3Jlc3MtYmFyYCk7XG4gIGxldCB3ID0gZ2V0V2lkdGgobXNnLmlkLCBtc2cudmFsdWUpO1xuICAkKGAjJHttc2cuaWR9YCkuc2hvdygpO1xuXG4gICRlbC5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCBtc2cudmFsdWUpLmNzcyhcIndpZHRoXCIsIHcgKyBcIiVcIik7XG5cbiAgaWYgKG1zZy50ZXh0KSAkZWwuaHRtbChtc2cudGV4dCk7XG5cbiAgaWYgKG1zZy5oaWRlT25FbmQgJiYgZ2V0TWF4KG1zZy5pZCkgPD0gbXNnLnZhbHVlKSAkKGAjJHttc2cuaWR9YCkuaGlkZSgpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG1heCB2YWx1ZSBmcm9tIGEgcHJvZ3Jlc3MgYmFyLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkIC0gSWQgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAqL1xuY29uc3QgZ2V0TWF4ID0gKGlkKSA9PiB7XG4gIGxldCBtYXggPSAkKGAjJHtpZH0gLnByb2dyZXNzLWJhcmApLmF0dHIoXCJhcmlhLXZhbHVlbWF4XCIpO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KG1heCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgd2lkdGggdGhlIHByb2dyZXNzIGJhciBzaG91bGQgYmUgc2V0IHRvLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkIC0gSWQgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAqIEBwYXJhbSAge251bWJlcn0gdmFsdWUgLSBWYWx1ZSBzZW50IGZyb20gdGhlIHNlcnZlclxuICogbXVzdCBiZSBtb3JlIHRoYW4gdGhlICdtaW4nIG9mIHRoZSBwcm9ncmVzcyBiYXIgYW5kIGxlc3NcbiAqIHRoYW4gdGhlICdtYXgnLlxuICovXG5jb25zdCBnZXRXaWR0aCA9IChpZCwgdmFsdWUpID0+IHtcbiAgbGV0IG1heCA9IGdldE1heChpZCk7XG4gIHJldHVybiAodmFsdWUgLyBtYXgpICogMTAwO1xufTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJhdHRlbmRhbnQtc2V0LW1pblwiLCAobXNnKSA9PiB7XG4gICQoYCMke21zZy5pZH0gLnByb2dyZXNzLWJhcmApLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIsIG1zZy5taW4pO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwiYXR0ZW5kYW50LXNldC1tYXhcIiwgKG1zZykgPT4ge1xuICAkKGAjJHttc2cuaWR9IC5wcm9ncmVzcy1iYXJgKS5hdHRyKFwiYXJpYS12YWx1ZW1heFwiLCBtc2cubWF4KTtcbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImF0dGVuZGFudC1zZXRcIiwgaGFuZGxlUHJvZ3Jlc3MpO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImF0dGVuZGFudC1kb25lXCIsIChtc2cpID0+IHtcbiAgbGV0IGV4aXN0aW5nQXR0ZW5kYW50ID0gYXR0ZW5kYW50cy5nZXQobXNnLmlkKTtcblxuICBpZiAoZXhpc3RpbmdBdHRlbmRhbnQgIT0gdW5kZWZpbmVkKSBjbGVhckludGVydmFsKGV4aXN0aW5nQXR0ZW5kYW50KTtcblxuICBtc2cudmFsdWUgPSBnZXRNYXgobXNnLmlkKTtcbiAgaGFuZGxlUHJvZ3Jlc3MobXNnKTtcbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImF0dGVuZGFudC1hdXRvXCIsIChtc2cpID0+IHtcbiAgbGV0ICRlbCA9ICQoYCMke21zZy5pZH0gLnByb2dyZXNzLWJhcmApO1xuICBsZXQgbWF4ID0gZ2V0TWF4KG1zZy5pZCk7XG4gIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQoJGVsLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIpKTtcblxuICBsZXQgc2VxdWVuY2UgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlID4gbWF4KSByZXR1cm47XG5cbiAgICB2YWx1ZSA9IHZhbHVlICsgMTtcbiAgICBsZXQgdyA9IGdldFdpZHRoKG1zZy5pZCwgdmFsdWUpO1xuXG4gICAgJChgIyR7bXNnLmlkfSAucHJvZ3Jlc3MtYmFyYClcbiAgICAgIC5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCB2YWx1ZSlcbiAgICAgIC5jc3MoXCJ3aWR0aFwiLCB3ICsgXCIlXCIpO1xuICB9LCBtc2cubXMpO1xuXG4gIGF0dGVuZGFudHMuc2V0KG1zZy5pZCwgc2VxdWVuY2UpO1xufSk7XG4iXSwibmFtZXMiOlsiYXR0ZW5kYW50cyIsIk1hcCIsImhhbmRsZVByb2dyZXNzIiwibXNnIiwiJGVsIiwiJCIsImlkIiwidyIsImdldFdpZHRoIiwidmFsdWUiLCJzaG93IiwiYXR0ciIsImNzcyIsInRleHQiLCJodG1sIiwiaGlkZU9uRW5kIiwiZ2V0TWF4IiwiaGlkZSIsIm1heCIsInBhcnNlRmxvYXQiLCJTaGlueSIsImFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyIiwibWluIiwiZXhpc3RpbmdBdHRlbmRhbnQiLCJnZXQiLCJ1bmRlZmluZWQiLCJjbGVhckludGVydmFsIiwic2VxdWVuY2UiLCJzZXRJbnRlcnZhbCIsIm1zIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==