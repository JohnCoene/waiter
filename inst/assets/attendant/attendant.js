(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.RsupProgress = factory());
}(this, (function () { 'use strict';

  var PERSIST_TIME = 150;
  var Progress = /** @class */ (function () {
      function Progress(userOpts) {
          if (userOpts === void 0) { userOpts = {}; }
          this._isInProgress = false;
          this._isHiding = false;
          this._willRestart = false;
          this._rafId = null;
          this._promises = [];
          this._el = document.createElement('div');
          this.setOptions(userOpts);
      }
      Progress.prototype.setOptions = function (userOpts) {
          assertPropType(userOpts, 'maxWidth', ['number', 'string']);
          assertPropType(userOpts, 'height', ['number', 'string']);
          assertPropType(userOpts, 'duration', 'number');
          assertPropType(userOpts, 'hideDuration', 'number');
          assertPropType(userOpts, 'zIndex', ['number', 'string']);
          assertPropType(userOpts, 'className', 'string');
          assertPropType(userOpts, 'color', 'string');
          assertPropType(userOpts, 'timing', 'string');
          if (userOpts.position && !~['top', 'bottom', 'none'].indexOf(userOpts.position)) {
              throw new TypeError("Expected \"position\" to be [top|bottom|none], but \"" + userOpts.position + "\".");
          }
          if (userOpts.container && !(userOpts.container instanceof HTMLElement)) {
              throw new TypeError('Expected "container" to be [HTMLElement] type.');
          }
          var opts = this._opts = normalizeOptions(userOpts);
          this._el.className = opts.className;
          this._css({
              height: opts.height,
              background: opts.color,
              zIndex: opts.zIndex
          });
          this._css(opts.position === 'none' ? {
              position: '',
              left: '',
              top: '',
              bottom: ''
          } : {
              position: 'fixed',
              left: '0',
              top: opts.position === 'top' ? '0' : '',
              bottom: opts.position === 'bottom' ? '0' : ''
          });
      };
      Progress.prototype._css = function (style) {
          assign(this._el.style, style);
      };
      Object.defineProperty(Progress.prototype, "isProgress", {
          /**
           * @deprecated
           */
          get: function () {
              return this._isInProgress;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Progress.prototype, "isInProgress", {
          get: function () {
              return this._isInProgress;
          },
          enumerable: true,
          configurable: true
      });
      Progress.prototype.start = function () {
          var _this = this;
          if (this._isInProgress) {
              if (this._isHiding)
                  this._willRestart = true;
              return;
          }
          this._isInProgress = true;
          var transition = "width " + this._opts.duration + "ms " + this._opts.timing;
          this._css({
              width: '0',
              opacity: '1',
              transition: transition,
              webkitTransition: transition
          });
          this._opts.container.appendChild(this._el);
          this._nextFrame(function () { return _this._css({ width: _this._opts.maxWidth }); });
      };
      Progress.prototype._nextFrame = function (cb) {
          var _this = this;
          this._rafId = requestAnimationFrame(function () { return (_this._rafId = requestAnimationFrame(function () {
              _this._rafId = null;
              cb();
          })); });
      };
      Progress.prototype.end = function (immediately) {
          var _this = this;
          this._promises = [];
          if (this._willRestart)
              this._willRestart = false;
          if (!this._isInProgress || (this._isHiding && !immediately))
              return;
          if (immediately || this._rafId) {
              if (this._rafId) {
                  cancelAnimationFrame(this._rafId);
                  this._rafId = null;
              }
              this._isInProgress = false;
              this._isHiding = false;
              return detach(this._el);
          }
          this._isHiding = true;
          var transition = "width 50ms, opacity " + this._opts.hideDuration + "ms " + PERSIST_TIME + "ms";
          this._css({
              width: '100%',
              opacity: '0',
              transition: transition,
              webkitTransition: transition
          });
          setTimeout(function () {
              if (!_this._isHiding)
                  return;
              _this._isHiding = false;
              _this._isInProgress = false;
              detach(_this._el);
              if (_this._willRestart) {
                  _this._willRestart = false;
                  _this.start();
              }
          }, this._opts.hideDuration + PERSIST_TIME);
      };
      Progress.prototype.promise = function (promise, delay) {
          var _this = this;
          if (delay === void 0) { delay = 0; }
          var timerId = null;
          var start = function () {
              timerId = null;
              _this._promises.push(promise);
              _this.start();
          };
          if (delay > 0) {
              timerId = setTimeout(start, delay);
          }
          else {
              start();
          }
          var onFinally = function () {
              if (timerId) {
                  return clearTimeout(timerId);
              }
              var promises = _this._promises;
              var idx = promises.indexOf(promise);
              if (~idx) {
                  promises.splice(idx, 1);
                  if (promises.length === 0)
                      _this.end();
              }
          };
          return promise.then(function (v) { return (onFinally(), v); }, function (err) { return (onFinally(), Promise.reject(err)); });
      };
      Progress.default = Progress; // for compatibility
      return Progress;
  }());
  function normalizeOptions(opts) {
      opts = assign({
          maxWidth: '99.8%',
          height: '4px',
          duration: 60000,
          hideDuration: 400,
          zIndex: '9999',
          color: '#ff1a59',
          className: '',
          timing: 'cubic-bezier(0,1,0,1)',
          position: 'top',
          container: document.body
      }, opts);
      if (typeof opts.maxWidth === 'number')
          opts.maxWidth = opts.maxWidth + 'px';
      if (typeof opts.height === 'number')
          opts.height = opts.height + 'px';
      if (typeof opts.zIndex === 'number')
          opts.zIndex = String(opts.zIndex);
      return opts;
  }
  function assign(t, src) {
      for (var k in src) {
          if (Object.prototype.hasOwnProperty.call(src, k))
              t[k] = src[k];
      }
      return t;
  }
  function assertPropType(o, prop, expected) {
      var type = typeof o[prop];
      if (type === 'undefined')
          return;
      if (typeof expected === 'string')
          expected = [expected];
      if (~expected.indexOf(type))
          return;
      throw new TypeError("Expected \"" + prop + "\" to be of type [" + expected.join('|') + "], but \"" + type + "\".");
  }
  function detach(el) {
      if (el.parentNode)
          el.parentNode.removeChild(el);
  }

  return Progress;

})));