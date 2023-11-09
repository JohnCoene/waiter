(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["placeholder"] = factory();
	else
		root["placeholder"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./srcjs/exts/placeholder/placeholder.js ***!
  \***********************************************/
const placeholderShow = opts => {
  $('body').addClass(`placeholder-${opts.type}`);
  $(opts.target).addClass('placeholder');
};

const placeholderHide = opts => {
  $('body').removeClass(`placeholder-${opts.type}`);
  $(opts.target).removeClass('placeholder');
};

Shiny.addCustomMessageHandler('placeholder-show', function (msg) {
  placeholderShow(msg);
});
Shiny.addCustomMessageHandler('placeholder-hide', function (msg) {
  placeholderHide(msg);
});
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7O0FDVkEsTUFBTUEsZUFBZSxHQUFJQyxJQUFELElBQVU7QUFDaENDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsUUFBVixDQUFvQixlQUFjRixJQUFJLENBQUNHLElBQUssRUFBNUM7QUFDQUYsRUFBQUEsQ0FBQyxDQUFDRCxJQUFJLENBQUNJLE1BQU4sQ0FBRCxDQUFlRixRQUFmLENBQXdCLGFBQXhCO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNRyxlQUFlLEdBQUlMLElBQUQsSUFBVTtBQUNoQ0MsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSyxXQUFWLENBQXVCLGVBQWNOLElBQUksQ0FBQ0csSUFBSyxFQUEvQztBQUNBRixFQUFBQSxDQUFDLENBQUNELElBQUksQ0FBQ0ksTUFBTixDQUFELENBQWVFLFdBQWYsQ0FBMkIsYUFBM0I7QUFDRCxDQUhEOztBQUtBQyxLQUFLLENBQUNDLHVCQUFOLENBQThCLGtCQUE5QixFQUFrRCxVQUFTQyxHQUFULEVBQWM7QUFDOURWLEVBQUFBLGVBQWUsQ0FBQ1UsR0FBRCxDQUFmO0FBQ0QsQ0FGRDtBQUlBRixLQUFLLENBQUNDLHVCQUFOLENBQThCLGtCQUE5QixFQUFrRCxVQUFTQyxHQUFULEVBQWM7QUFDOURKLEVBQUFBLGVBQWUsQ0FBQ0ksR0FBRCxDQUFmO0FBQ0QsQ0FGRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmNqcy9leHRzL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBsYWNlaG9sZGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBsYWNlaG9sZGVyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgcGxhY2Vob2xkZXJTaG93ID0gKG9wdHMpID0+IHtcbiAgJCgnYm9keScpLmFkZENsYXNzKGBwbGFjZWhvbGRlci0ke29wdHMudHlwZX1gKTtcbiAgJChvcHRzLnRhcmdldCkuYWRkQ2xhc3MoJ3BsYWNlaG9sZGVyJyk7XG59XG5cbmNvbnN0IHBsYWNlaG9sZGVySGlkZSA9IChvcHRzKSA9PiB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhgcGxhY2Vob2xkZXItJHtvcHRzLnR5cGV9YCk7XG4gICQob3B0cy50YXJnZXQpLnJlbW92ZUNsYXNzKCdwbGFjZWhvbGRlcicpO1xufVxuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcigncGxhY2Vob2xkZXItc2hvdycsIGZ1bmN0aW9uKG1zZykge1xuICBwbGFjZWhvbGRlclNob3cobXNnKTtcbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcigncGxhY2Vob2xkZXItaGlkZScsIGZ1bmN0aW9uKG1zZykge1xuICBwbGFjZWhvbGRlckhpZGUobXNnKTtcbn0pO1xuIl0sIm5hbWVzIjpbInBsYWNlaG9sZGVyU2hvdyIsIm9wdHMiLCIkIiwiYWRkQ2xhc3MiLCJ0eXBlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXJIaWRlIiwicmVtb3ZlQ2xhc3MiLCJTaGlueSIsImFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==