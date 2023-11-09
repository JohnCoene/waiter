(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hostess"] = factory();
	else
		root["hostess"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@loadingio/loading-bar/lib/loading-bar.js":
/*!****************************************************************!*\
  !*** ./node_modules/@loadingio/loading-bar/lib/loading-bar.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var presets,
  simpleStr,
  wrap,
  slice$ = [].slice,
  toString$ = {}.toString;
presets = (__webpack_require__(/*! ./presets */ "./node_modules/@loadingio/loading-bar/lib/presets.js").presets);
simpleStr = function (arr) {
  return arr.join('');
};
wrap = function (content) {
  return "data:image/svg+xml;base64," + btoa(content);
};
(function () {
  var make, handler, ldBar;
  make = {
    head: function (viewBox) {
      return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + viewBox + "\">";
    },
    gradient: function (dir, dur) {
      var colors, ret, len, gx, gy, x, y, i$, i, idx;
      dir == null && (dir = 45);
      dur == null && (dur = 1);
      colors = slice$.call(arguments, 2);
      ret = [this.head("0 0 100 100")];
      len = colors.length * 4 + 1;
      dir = dir * Math.PI / 180;
      gx = Math.pow(Math.cos(dir), 2);
      gy = Math.sqrt(gx - Math.pow(gx, 2));
      if (dir > Math.PI * 0.25) {
        gy = Math.pow(Math.sin(dir), 2);
        gx = Math.sqrt(gy - Math.pow(gy, 2));
      }
      x = gx * 100;
      y = gy * 100;
      ret.push("<defs><linearGradient id=\"gradient\" x1=\"0\" x2=\"" + gx + "\" y1=\"0\" y2=\"" + gy + "\">");
      for (i$ = 0; i$ < len; ++i$) {
        i = i$;
        idx = i * 100 / (len - 1);
        ret.push("<stop offset=\"" + idx + "%\" stop-color=\"" + colors[i % colors.length] + "\"/>");
      }
      ret.push("</linearGradient></defs>\n<rect x=\"0\" y=\"0\" width=\"400\" height=\"400\" fill=\"url(#gradient)\">\n<animateTransform attributeName=\"transform\" type=\"translate\" from=\"-" + x + ",-" + y + "\"\nto=\"0,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></rect></svg>");
      return wrap(ret.join(""));
    },
    stripe: function (c1, c2, dur) {
      var ret, i;
      c1 == null && (c1 = '#b4b4b4');
      c2 == null && (c2 = '#e6e6e6');
      dur == null && (dur = 1);
      ret = [this.head("0 0 100 100")];
      ret = ret.concat(["<rect fill=\"" + c2 + "\" width=\"100\" height=\"100\"/>", "<g><g>", function () {
        var i$,
          results$ = [];
        for (i$ = 0; i$ < 13; ++i$) {
          i = i$;
          results$.push("<polygon fill=\"" + c1 + "\" " + ("points=\"" + (-90 + i * 20) + ",100 " + (-100 + i * 20) + ",") + ("100 " + (-60 + i * 20) + ",0 " + (-50 + i * 20) + ",0 \"/>"));
        }
        return results$;
      }().join(""), "</g><animateTransform attributeName=\"transform\" type=\"translate\" ", "from=\"0,0\" to=\"20,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></g></svg>"].join(""));
      return wrap(ret);
    },
    bubble: function (c1, c2, count, dur, size, sw) {
      var ret, i$, i, idx, x, r, d;
      c1 == null && (c1 = '#39d');
      c2 == null && (c2 = '#9cf');
      count == null && (count = 15);
      dur == null && (dur = 1);
      size == null && (size = 6);
      sw == null && (sw = 1);
      ret = [this.head("0 0 200 200"), "<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"" + c1 + "\"/>"];
      for (i$ = 0; i$ < count; ++i$) {
        i = i$;
        idx = -(i / count) * dur;
        x = Math.random() * 184 + 8;
        r = (Math.random() * 0.7 + 0.3) * size;
        d = dur * (1 + Math.random() * 0.5);
        ret.push(["<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"190;-10\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>", "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"390;190\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>"].join(""));
      }
      return wrap(ret.join("") + "</svg>");
    }
  };
  handler = {
    queue: {},
    running: false,
    main: function (timestamp) {
      var keepon,
        removed,
        k,
        ref$,
        func,
        ret,
        this$ = this;
      keepon = false;
      removed = [];
      for (k in ref$ = this.queue) {
        func = ref$[k];
        ret = func(timestamp);
        if (!ret) {
          removed.push(func);
        }
        keepon = keepon || ret;
      }
      for (k in ref$ = this.queue) {
        func = ref$[k];
        if (removed.indexOf(func) >= 0) {
          delete this.queue[k];
        }
      }
      if (keepon) {
        return requestAnimationFrame(function (it) {
          return this$.main(it);
        });
      } else {
        return this.running = false;
      }
    },
    add: function (key, f) {
      var this$ = this;
      if (!this.queue[key]) {
        this.queue[key] = f;
      }
      if (!this.running) {
        this.running = true;
        return requestAnimationFrame(function (it) {
          return this$.main(it);
        });
      }
    }
  };
  window.ldBar = ldBar = function (selector, option) {
    var xmlns,
      root,
      cls,
      idPrefix,
      id,
      domTree,
      newNode,
      x$,
      config,
      attr,
      that,
      isStroke,
      parseRes,
      dom,
      svg,
      text,
      group,
      length,
      path0,
      path1,
      patimg,
      img,
      ret,
      size,
      this$ = this;
    option == null && (option = {});
    xmlns = {
      xlink: "http://www.w3.org/1999/xlink"
    };
    root = toString$.call(selector).slice(8, -1) === 'String' ? document.querySelector(selector) : selector;
    if (!root.ldBar) {
      root.ldBar = this;
    } else {
      return root.ldBar;
    }
    cls = root.getAttribute('class') || '';
    if (!~cls.indexOf('ldBar')) {
      root.setAttribute('class', cls + " ldBar");
    }
    idPrefix = "ldBar-" + Math.random().toString(16).substring(2);
    id = {
      key: idPrefix,
      clip: idPrefix + "-clip",
      filter: idPrefix + "-filter",
      pattern: idPrefix + "-pattern",
      mask: idPrefix + "-mask",
      maskPath: idPrefix + "-mask-path"
    };
    domTree = function (n, o) {
      var k, v;
      n = newNode(n);
      for (k in o) {
        v = o[k];
        if (k !== 'attr') {
          n.appendChild(domTree(k, v || {}));
        }
      }
      n.attrs(o.attr || {});
      return n;
    };
    newNode = function (n) {
      return document.createElementNS("http://www.w3.org/2000/svg", n);
    };
    x$ = document.body.__proto__.__proto__.__proto__;
    x$.text = function (t) {
      return this.appendChild(document.createTextNode(t));
    };
    x$.attrs = function (o) {
      var k,
        v,
        ret,
        results$ = [];
      for (k in o) {
        v = o[k];
        ret = /([^:]+):([^:]+)/.exec(k);
        if (!ret || !xmlns[ret[1]]) {
          results$.push(this.setAttribute(k, v));
        } else {
          results$.push(this.setAttributeNS(xmlns[ret[1]], k, v));
        }
      }
      return results$;
    };
    x$.styles = function (o) {
      var k,
        v,
        results$ = [];
      for (k in o) {
        v = o[k];
        results$.push(this.style[k] = v);
      }
      return results$;
    };
    x$.append = function (n) {
      var r;
      return this.appendChild(r = document.createElementNS("http://www.w3.og/2000/svg", n));
    };
    x$.attr = function (n, v) {
      if (v != null) {
        return this.setAttribute(n, v);
      } else {
        return this.getAttribute(n);
      }
    };
    config = {
      "type": 'stroke',
      "img": '',
      "path": 'M10 10L90 10',
      "fill-dir": 'btt',
      "fill": '#25b',
      "fill-background": '#ddd',
      "fill-background-extrude": 3,
      "pattern-size": null,
      "stroke-dir": 'normal',
      "stroke": '#25b',
      "stroke-width": '3',
      "stroke-trail": '#ddd',
      "stroke-trail-width": 0.5,
      "duration": 1,
      "easing": 'linear',
      "value": 0,
      "img-size": null,
      "bbox": null,
      "set-dim": true,
      "aspect-ratio": "xMidYMid"
    };
    config["preset"] = root.attr("data-preset") || option["preset"];
    if (config.preset != null) {
      import$(config, presets[config.preset]);
    }
    for (attr in config) {
      if (that = that = root.attr("data-" + attr)) {
        config[attr] = that;
      }
    }
    import$(config, option);
    if (config.img) {
      config.path = null;
    }
    isStroke = config.type === 'stroke';
    parseRes = function (v) {
      var parser, ret;
      parser = /data:ldbar\/res,([^()]+)\(([^)]+)\)/;
      ret = parser.exec(v);
      if (!ret) {
        return v;
      }
      return ret = make[ret[1]].apply(make, ret[2].split(','));
    };
    config.fill = parseRes(config.fill);
    config.stroke = parseRes(config.stroke);
    if (config["set-dim"] === 'false') {
      config["set-dim"] = false;
    }
    dom = {
      attr: {
        "xmlns:xlink": 'http://www.w3.org/1999/xlink',
        preserveAspectRatio: config["aspect-ratio"],
        width: "100%",
        height: "100%"
      },
      defs: {
        filter: {
          attr: {
            id: id.filter,
            x: -1,
            y: -1,
            width: 3,
            height: 3
          },
          feMorphology: {
            attr: {
              operator: +config["fill-background-extrude"] >= 0 ? 'dilate' : 'erode',
              radius: Math.abs(+config["fill-background-extrude"])
            }
          },
          feColorMatrix: {
            attr: {
              values: '0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0',
              result: "cm"
            }
          }
        },
        mask: {
          attr: {
            id: id.mask
          },
          image: {
            attr: {
              "xlink:href": config.img,
              filter: "url(#" + id.filter + ")",
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              preserveAspectRatio: config["aspect-ratio"]
            }
          }
        },
        g: {
          mask: {
            attr: {
              id: id.maskPath
            },
            path: {
              attr: {
                d: config.path || "",
                fill: '#fff',
                stroke: '#fff',
                filter: "url(#" + id.filter + ")"
              }
            }
          }
        },
        clipPath: {
          attr: {
            id: id.clip
          },
          rect: {
            attr: {
              'class': 'mask',
              fill: '#000'
            }
          }
        },
        pattern: {
          attr: {
            id: id.pattern,
            patternUnits: 'userSpaceOnUse',
            x: 0,
            y: 0,
            width: 300,
            height: 300
          },
          image: {
            attr: {
              x: 0,
              y: 0,
              width: 300,
              height: 300
            }
          }
        }
      }
    };
    svg = domTree('svg', dom);
    text = document.createElement('div');
    text.setAttribute('class', 'ldBar-label');
    root.appendChild(svg);
    root.appendChild(text);
    group = [0, 0];
    length = 0;
    this.fit = function () {
      var that, box, d, rect;
      if (that = config["bbox"]) {
        box = that.split(' ').map(function (it) {
          return +it.trim();
        });
        box = {
          x: box[0],
          y: box[1],
          width: box[2],
          height: box[3]
        };
      } else {
        box = group[1].getBBox();
      }
      if (!box || box.width === 0 || box.height === 0) {
        box = {
          x: 0,
          y: 0,
          width: 100,
          height: 100
        };
      }
      d = Math.max.apply(null, ['stroke-width', 'stroke-trail-width', 'fill-background-extrude'].map(function (it) {
        return config[it];
      })) * 1.5;
      svg.attrs({
        viewBox: [box.x - d, box.y - d, box.width + d * 2, box.height + d * 2].join(" ")
      });
      if (config["set-dim"]) {
        ['width', 'height'].map(function (it) {
          if (!root.style[it] || this$.fit[it]) {
            root.style[it] = box[it] + d * 2 + "px";
            return this$.fit[it] = true;
          }
        });
      }
      rect = group[0].querySelector('rect');
      if (rect) {
        return rect.attrs({
          x: box.x - d,
          y: box.y - d,
          width: box.width + d * 2,
          height: box.height + d * 2
        });
      }
    };
    if (config.path) {
      if (isStroke) {
        group[0] = domTree('g', {
          path: {
            attr: {
              d: config.path,
              fill: 'none',
              'class': 'baseline'
            }
          }
        });
      } else {
        group[0] = domTree('g', {
          rect: {
            attr: {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              mask: "url(#" + id.maskPath + ")",
              fill: config["fill-background"],
              'class': 'frame'
            }
          }
        });
      }
      svg.appendChild(group[0]);
      group[1] = domTree('g', {
        path: {
          attr: {
            d: config.path,
            'class': isStroke ? 'mainline' : 'solid',
            "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : ''
          }
        }
      });
      svg.appendChild(group[1]);
      path0 = group[0].querySelector(isStroke ? 'path' : 'rect');
      path1 = group[1].querySelector('path');
      if (isStroke) {
        path1.attrs({
          fill: 'none'
        });
      }
      patimg = svg.querySelector('pattern image');
      img = new Image();
      img.addEventListener('load', function () {
        var box, that;
        box = (that = config["pattern-size"]) ? {
          width: +that,
          height: +that
        } : img.width && img.height ? {
          width: img.width,
          height: img.height
        } : {
          width: 300,
          height: 300
        };
        svg.querySelector('pattern').attrs({
          width: box.width,
          height: box.height
        });
        return patimg.attrs({
          width: box.width,
          height: box.height
        });
      });
      if (/.+\..+|^data:/.exec(!isStroke ? config.fill : config.stroke)) {
        img.src = !isStroke ? config.fill : config.stroke;
        patimg.attrs({
          "xlink:href": img.src
        });
      }
      if (isStroke) {
        path0.attrs({
          stroke: config["stroke-trail"],
          "stroke-width": config["stroke-trail-width"]
        });
        path1.attrs({
          "stroke-width": config["stroke-width"],
          stroke: /.+\..+|^data:/.exec(config.stroke) ? "url(#" + id.pattern + ")" : config.stroke
        });
      }
      if (config.fill && !isStroke) {
        path1.attrs({
          fill: /.+\..+|^data:/.exec(config.fill) ? "url(#" + id.pattern + ")" : config.fill
        });
      }
      length = path1.getTotalLength();
      this.fit();
      this.inited = true;
    } else if (config.img) {
      if (config["img-size"]) {
        ret = config["img-size"].split(',');
        size = {
          width: +ret[0],
          height: +ret[1]
        };
      } else {
        size = {
          width: 100,
          height: 100
        };
      }
      group[0] = domTree('g', {
        rect: {
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            mask: "url(#" + id.mask + ")",
            fill: config["fill-background"]
          }
        }
      });
      svg.querySelector('mask image').attrs({
        width: size.width,
        height: size.height
      });
      group[1] = domTree('g', {
        image: {
          attr: {
            width: size.width,
            height: size.height,
            x: 0,
            y: 0,
            preserveAspectRatio: config["aspect-ratio"],
            "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : '',
            "xlink:href": config.img,
            'class': 'solid'
          }
        }
      });
      img = new Image();
      img.addEventListener('load', function () {
        var ret, size;
        if (config["img-size"]) {
          ret = config["img-size"].split(',');
          size = {
            width: +ret[0],
            height: +ret[1]
          };
        } else if (img.width && img.height) {
          size = {
            width: img.width,
            height: img.height
          };
        } else {
          size = {
            width: 100,
            height: 100
          };
        }
        svg.querySelector('mask image').attrs({
          width: size.width,
          height: size.height
        });
        group[1].querySelector('image').attrs({
          width: size.width,
          height: size.height
        });
        this$.fit();
        this$.set(undefined, false);
        return this$.inited = true;
      });
      img.src = config.img;
      svg.appendChild(group[0]);
      svg.appendChild(group[1]);
    }
    svg.attrs({
      width: '100%',
      height: '100%'
    });
    this.transition = {
      value: {
        src: 0,
        des: 0
      },
      time: {},
      ease: function (t, b, c, d) {
        t = t / (d * 0.5);
        if (t < 1) {
          return c * 0.5 * t * t + b;
        }
        t = t - 1;
        return -c * 0.5 * (t * (t - 2) - 1) + b;
      },
      handler: function (time, doTransition) {
        var ref$, dv, dt, dur, v, node, style, box, dir;
        doTransition == null && (doTransition = true);
        if (this.time.src == null) {
          this.time.src = time;
        }
        ref$ = [this.value.des - this.value.src, (time - this.time.src) * 0.001, +config["duration"] || 1], dv = ref$[0], dt = ref$[1], dur = ref$[2];
        text.textContent = v = doTransition ? Math.round(this.ease(dt, this.value.src, dv, dur)) : this.value.des;
        if (isStroke) {
          node = path1;
          style = {
            "stroke-dasharray": config["stroke-dir"] === 'reverse' ? "0 " + length * (100 - v) * 0.01 + " " + length * v * 0.01 + " 0" : v * 0.01 * length + " " + ((100 - v) * 0.01 * length + 1)
          };
        } else {
          box = group[1].getBBox();
          dir = config["fill-dir"];
          style = dir === 'btt' || !dir ? {
            y: box.y + box.height * (100 - v) * 0.01,
            height: box.height * v * 0.01,
            x: box.x,
            width: box.width
          } : dir === 'ttb' ? {
            y: box.y,
            height: box.height * v * 0.01,
            x: box.x,
            width: box.width
          } : dir === 'ltr' ? {
            y: box.y,
            height: box.height,
            x: box.x,
            width: box.width * v * 0.01
          } : dir === 'rtl' ? {
            y: box.y,
            height: box.height,
            x: box.x + box.width * (100 - v) * 0.01,
            width: box.width * v * 0.01
          } : void 8;
          node = svg.querySelector('rect');
        }
        node.attrs(style);
        if (dt >= dur) {
          delete this.time.src;
          return false;
        }
        return true;
      },
      start: function (src, des, doTransition) {
        var ref$,
          this$ = this;
        ref$ = this.value;
        ref$.src = src;
        ref$.des = des;
        !!(root.offsetWidth || root.offsetHeight || root.getClientRects().length);
        if (!doTransition || !(root.offsetWidth || root.offsetHeight || root.getClientRects().length)) {
          this.time.src = 0;
          this.handler(1000, false);
          return;
        }
        return handler.add(id.key, function (time) {
          return this$.handler(time);
        });
      }
    };
    this.set = function (v, doTransition) {
      var src, des;
      doTransition == null && (doTransition = true);
      src = this.value || 0;
      if (v != null) {
        this.value = v;
      } else {
        v = this.value;
      }
      des = this.value;
      return this.transition.start(src, des, doTransition);
    };
    this.set(+config.value || 0, false);
    return this;
  };
  return window.addEventListener('load', function () {
    var i$,
      ref$,
      len$,
      node,
      results$ = [];
    for (i$ = 0, len$ = (ref$ = document.querySelectorAll('.ldBar')).length; i$ < len$; ++i$) {
      node = ref$[i$];
      if (!node.ldBar) {
        results$.push(node.ldBar = new ldBar(node));
      }
    }
    return results$;
  }, false);
})();
module.exports = ldBar;
function import$(obj, src) {
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}

/***/ }),

/***/ "./node_modules/@loadingio/loading-bar/lib/presets.js":
/*!************************************************************!*\
  !*** ./node_modules/@loadingio/loading-bar/lib/presets.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var presets,
  out$ =  true && exports || this;
out$.presets = presets = {
  rainbow: {
    "type": 'stroke',
    "path": 'M10 10L90 10',
    "stroke": 'data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)',
    "bbox": "10 10 80 10"
  },
  energy: {
    "type": 'fill',
    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
    "stroke": '#f00',
    "fill": 'data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)',
    "fill-dir": "ltr",
    "fill-background": '#444',
    "fill-background-extrude": 1,
    "bbox": "10 5 80 10"
  },
  stripe: {
    "type": 'fill',
    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
    "stroke": '#f00',
    "fill": 'data:ldbar/res,stripe(#25b,#58e,1)',
    "fill-dir": "ltr",
    "fill-background": '#ddd',
    "fill-background-extrude": 1,
    "bbox": "10 5 80 10"
  },
  text: {
    "type": 'fill',
    "img": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"20\" viewBox=\"0 0 70 20\"><text x=\"35\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"arial\">LOADING</text></svg>",
    "fill-background-extrude": 1.3,
    "pattern-size": 100,
    "fill-dir": "ltr",
    "img-size": "70,20",
    "bbox": "0 0 70 20"
  },
  line: {
    "type": 'stroke',
    "path": 'M10 10L90 10',
    "stroke": '#25b',
    "stroke-width": 3,
    "stroke-trail": '#ddd',
    "stroke-trail-width": 1,
    "bbox": "10 10 80 10"
  },
  fan: {
    "type": 'stroke',
    "path": 'M10 90A40 40 0 0 1 90 90',
    "fill-dir": 'btt',
    "fill": '#25b',
    "fill-background": '#ddd',
    "fill-background-extrude": 3,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5,
    "bbox": "10 50 80 40"
  },
  circle: {
    "type": 'stroke',
    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
    "fill-dir": 'btt',
    "fill": '#25b',
    "fill-background": '#ddd',
    "fill-background-extrude": 3,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5,
    "bbox": "10 10 80 80"
  },
  bubble: {
    "type": 'fill',
    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
    "fill-dir": 'btt',
    "fill": 'data:ldbar/res,bubble(#39d,#cef)',
    "pattern-size": "150",
    "fill-background": '#ddd',
    "fill-background-extrude": 2,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5,
    "bbox": "10 10 80 80"
  }
};

/***/ }),

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@loadingio/loading-bar/dist/loading-bar.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@loadingio/loading-bar/dist/loading-bar.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ldBar{position:relative;}.ldBar.label-center > .ldBar-label{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-shadow:0 0 3px #fff}.ldBar-label:after{content:\"%\";display:inline}.ldBar.no-percent .ldBar-label:after{content:\"\"}", "",{"version":3,"sources":["webpack://./node_modules/@loadingio/loading-bar/dist/loading-bar.css"],"names":[],"mappings":"AAAA,OAAO,iBAAiB,CAAC,CAAC,mCAAmC,iBAAiB,CAAC,OAAO,CAAC,QAAQ,CAAC,sCAAsC,CAAC,8BAA8B,CAAC,wBAAwB,CAAC,mBAAmB,WAAW,CAAC,cAAc,CAAC,qCAAqC,UAAU","sourcesContent":[".ldBar{position:relative;}.ldBar.label-center > .ldBar-label{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-shadow:0 0 3px #fff}.ldBar-label:after{content:\"%\";display:inline}.ldBar.no-percent .ldBar-label:after{content:\"\"}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@loadingio/loading-bar/dist/loading-bar.css":
/*!******************************************************************!*\
  !*** ./node_modules/@loadingio/loading-bar/dist/loading-bar.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js!./loading-bar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@loadingio/loading-bar/dist/loading-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!***************************************!*\
  !*** ./srcjs/exts/hostess/hostess.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadingio_loading_bar_lib_loading_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadingio/loading-bar/lib/loading-bar.js */ "./node_modules/@loadingio/loading-bar/lib/loading-bar.js");
/* harmony import */ var _loadingio_loading_bar_lib_loading_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadingio_loading_bar_lib_loading_bar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadingio_loading_bar_dist_loading_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadingio/loading-bar/dist/loading-bar.css */ "./node_modules/@loadingio/loading-bar/dist/loading-bar.css");


let hostesses = [];
let intervals = [];
Shiny.addCustomMessageHandler("hostess-init", opts => {
  hostesses[opts.id] = new (_loadingio_loading_bar_lib_loading_bar_js__WEBPACK_IMPORTED_MODULE_0___default())("#" + opts.id);
  if (!opts.infinite) return;
  let value = 0,
    inc = 0,
    end = 100;
  intervals[opts.id] = setInterval(function () {
    inc = (end - value) / (end + value);
    value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000;
    hostesses[opts.id].set(value);
  }, 350);
});
Shiny.addCustomMessageHandler("hostess-set", opts => {
  hostesses[opts.id].set(opts.value);
  if (opts.value != 100) return;
  let notif = document.getElementById(opts.id);
  if (notif != undefined) notif.remove();
});
Shiny.addCustomMessageHandler("hostess-notify", opts => {
  // create div
  let notification = document.createElement("DIV");

  // position div
  let pos = position_to_coords(opts.position);
  notification.style.bottom = pos.bottom;
  notification.style.right = pos.right;
  notification.style.left = pos.left;
  notification.style.top = pos.top;
  notification.height = "100px";
  notification.style.color = opts.text_color;
  notification.style.backgroundColor = opts.background_color;
  notification.style.position = "fixed";
  notification.innerHTML = opts.html;
  notification.style.zIndex = 999;
  notification.id = opts.id;
  notification.classList.add("waitress-notification");
  document.body.appendChild(notification);
  hostesses[opts.id] = new (_loadingio_loading_bar_lib_loading_bar_js__WEBPACK_IMPORTED_MODULE_0___default())("#" + opts.id);
  if (!opts.infinite) return;
  let value = 0,
    inc = 0,
    end = 100;
  intervals[opts.id] = setInterval(function () {
    inc = (end - value) / (end + value);
    value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000;
    hostesses[opts.id].set(value);
  }, 350);
});
Shiny.addCustomMessageHandler("hostess-end", opts => {
  let bar = document.getElementById(opts.id);
  if (opts.infinite) {
    clearInterval(intervals[opts.id]);
    hostesses[opts.id].set(95);
  }
  if (bar != undefined) setTimeout(function () {
    bar.remove();
  }, 350);
});

/**
 * Convert position of to coordinates.
 * @function
 * @param {string} position - Convert position to an array of
 * coordinates.
 */
const position_to_coords = position => {
  let pos = {};
  let base_y = 100;
  let current_notifications = document.getElementsByClassName("waitress-notification");
  for (let n of current_notifications) {
    base_y = base_y + 100 + n.offsetHeight;
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
};
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBRyxNQUFNO0VBQ3BCLENBQUMsTUFBTSxJQUFJRixRQUFRLElBQUksSUFBSSxFQUFFO0lBQzNCRixHQUFHLENBQUNNLEdBQUcsR0FBR1ksTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQzVCbEIsR0FBRyxDQUFDRyxNQUFNLEdBQUcsTUFBTTtJQUNuQkgsR0FBRyxDQUFDSyxJQUFJLEdBQUcsTUFBTTtJQUNqQkwsR0FBRyxDQUFDSSxLQUFLLEdBQUcsTUFBTTtFQUNwQixDQUFDLE1BQU0sSUFBSUYsUUFBUSxJQUFJLElBQUksRUFBRTtJQUMzQkYsR0FBRyxDQUFDTSxHQUFHLEdBQUcsTUFBTTtJQUNoQk4sR0FBRyxDQUFDRyxNQUFNLEdBQUdlLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUMvQmxCLEdBQUcsQ0FBQ0ssSUFBSSxHQUFHLE1BQU07SUFDakJMLEdBQUcsQ0FBQ0ksS0FBSyxHQUFHLE1BQU07RUFDcEIsQ0FBQyxNQUFNLElBQUlGLFFBQVEsSUFBSSxJQUFJLEVBQUU7SUFDM0JGLEdBQUcsQ0FBQ00sR0FBRyxHQUFHWSxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDNUJsQixHQUFHLENBQUNHLE1BQU0sR0FBRyxNQUFNO0lBQ25CSCxHQUFHLENBQUNLLElBQUksR0FBRyxNQUFNO0lBQ2pCTCxHQUFHLENBQUNJLEtBQUssR0FBRyxNQUFNO0VBQ3BCO0VBRUEsT0FBT0osR0FBRztBQUNaLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhaXRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL0Bsb2FkaW5naW8vbG9hZGluZy1iYXIvbGliL2xvYWRpbmctYmFyLmpzIiwid2VicGFjazovL3dhaXRlci8uL25vZGVfbW9kdWxlcy9AbG9hZGluZ2lvL2xvYWRpbmctYmFyL2xpYi9wcmVzZXRzLmpzIiwid2VicGFjazovL3dhaXRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL0Bsb2FkaW5naW8vbG9hZGluZy1iYXIvZGlzdC9sb2FkaW5nLWJhci5jc3MiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL0Bsb2FkaW5naW8vbG9hZGluZy1iYXIvZGlzdC9sb2FkaW5nLWJhci5jc3M/NjA4NSIsIndlYnBhY2s6Ly93YWl0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93YWl0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FpdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhaXRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dhaXRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhaXRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FpdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YWl0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dhaXRlci8uL3NyY2pzL2V4dHMvaG9zdGVzcy9ob3N0ZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImhvc3Rlc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaG9zdGVzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJ2YXIgcHJlc2V0cywgc2ltcGxlU3RyLCB3cmFwLCBzbGljZSQgPSBbXS5zbGljZSwgdG9TdHJpbmckID0ge30udG9TdHJpbmc7XG5wcmVzZXRzID0gcmVxdWlyZSgnLi9wcmVzZXRzJykucHJlc2V0cztcbnNpbXBsZVN0ciA9IGZ1bmN0aW9uKGFycil7XG4gIHJldHVybiBhcnIuam9pbignJyk7XG59O1xud3JhcCA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuICByZXR1cm4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgYnRvYShjb250ZW50KTtcbn07XG4oZnVuY3Rpb24oKXtcbiAgdmFyIG1ha2UsIGhhbmRsZXIsIGxkQmFyO1xuICBtYWtlID0ge1xuICAgIGhlYWQ6IGZ1bmN0aW9uKHZpZXdCb3gpe1xuICAgICAgcmV0dXJuIFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiPz5cXG4gICAgICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCJcIiArIHZpZXdCb3ggKyBcIlxcXCI+XCI7XG4gICAgfSxcbiAgICBncmFkaWVudDogZnVuY3Rpb24oZGlyLCBkdXIpe1xuICAgICAgdmFyIGNvbG9ycywgcmV0LCBsZW4sIGd4LCBneSwgeCwgeSwgaSQsIGksIGlkeDtcbiAgICAgIGRpciA9PSBudWxsICYmIChkaXIgPSA0NSk7XG4gICAgICBkdXIgPT0gbnVsbCAmJiAoZHVyID0gMSk7XG4gICAgICBjb2xvcnMgPSBzbGljZSQuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgcmV0ID0gW3RoaXMuaGVhZChcIjAgMCAxMDAgMTAwXCIpXTtcbiAgICAgIGxlbiA9IGNvbG9ycy5sZW5ndGggKiA0ICsgMTtcbiAgICAgIGRpciA9IGRpciAqIE1hdGguUEkgLyAxODA7XG4gICAgICBneCA9IE1hdGgucG93KE1hdGguY29zKGRpciksIDIpO1xuICAgICAgZ3kgPSBNYXRoLnNxcnQoZ3ggLSBNYXRoLnBvdyhneCwgMikpO1xuICAgICAgaWYgKGRpciA+IE1hdGguUEkgKiAwLjI1KSB7XG4gICAgICAgIGd5ID0gTWF0aC5wb3coTWF0aC5zaW4oZGlyKSwgMik7XG4gICAgICAgIGd4ID0gTWF0aC5zcXJ0KGd5IC0gTWF0aC5wb3coZ3ksIDIpKTtcbiAgICAgIH1cbiAgICAgIHggPSBneCAqIDEwMDtcbiAgICAgIHkgPSBneSAqIDEwMDtcbiAgICAgIHJldC5wdXNoKFwiPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVxcXCJncmFkaWVudFxcXCIgeDE9XFxcIjBcXFwiIHgyPVxcXCJcIiArIGd4ICsgXCJcXFwiIHkxPVxcXCIwXFxcIiB5Mj1cXFwiXCIgKyBneSArIFwiXFxcIj5cIik7XG4gICAgICBmb3IgKGkkID0gMDsgaSQgPCBsZW47ICsraSQpIHtcbiAgICAgICAgaSA9IGkkO1xuICAgICAgICBpZHggPSBpICogMTAwIC8gKGxlbiAtIDEpO1xuICAgICAgICByZXQucHVzaChcIjxzdG9wIG9mZnNldD1cXFwiXCIgKyBpZHggKyBcIiVcXFwiIHN0b3AtY29sb3I9XFxcIlwiICsgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXSArIFwiXFxcIi8+XCIpO1xuICAgICAgfVxuICAgICAgcmV0LnB1c2goXCI8L2xpbmVhckdyYWRpZW50PjwvZGVmcz5cXG48cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiNDAwXFxcIiBoZWlnaHQ9XFxcIjQwMFxcXCIgZmlsbD1cXFwidXJsKCNncmFkaWVudClcXFwiPlxcbjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwidHJhbnNsYXRlXFxcIiBmcm9tPVxcXCItXCIgKyB4ICsgXCIsLVwiICsgeSArIFwiXFxcIlxcbnRvPVxcXCIwLDBcXFwiIGR1cj1cXFwiXCIgKyBkdXIgKyBcInNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIi8+PC9yZWN0Pjwvc3ZnPlwiKTtcbiAgICAgIHJldHVybiB3cmFwKHJldC5qb2luKFwiXCIpKTtcbiAgICB9LFxuICAgIHN0cmlwZTogZnVuY3Rpb24oYzEsIGMyLCBkdXIpe1xuICAgICAgdmFyIHJldCwgaTtcbiAgICAgIGMxID09IG51bGwgJiYgKGMxID0gJyNiNGI0YjQnKTtcbiAgICAgIGMyID09IG51bGwgJiYgKGMyID0gJyNlNmU2ZTYnKTtcbiAgICAgIGR1ciA9PSBudWxsICYmIChkdXIgPSAxKTtcbiAgICAgIHJldCA9IFt0aGlzLmhlYWQoXCIwIDAgMTAwIDEwMFwiKV07XG4gICAgICByZXQgPSByZXQuY29uY2F0KFtcbiAgICAgICAgXCI8cmVjdCBmaWxsPVxcXCJcIiArIGMyICsgXCJcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIi8+XCIsIFwiPGc+PGc+XCIsIChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBpJCwgcmVzdWx0cyQgPSBbXTtcbiAgICAgICAgICBmb3IgKGkkID0gMDsgaSQgPCAxMzsgKytpJCkge1xuICAgICAgICAgICAgaSA9IGkkO1xuICAgICAgICAgICAgcmVzdWx0cyQucHVzaCgoXCI8cG9seWdvbiBmaWxsPVxcXCJcIiArIGMxICsgXCJcXFwiIFwiKSArIChcInBvaW50cz1cXFwiXCIgKyAoLTkwICsgaSAqIDIwKSArIFwiLDEwMCBcIiArICgtMTAwICsgaSAqIDIwKSArIFwiLFwiKSArIChcIjEwMCBcIiArICgtNjAgKyBpICogMjApICsgXCIsMCBcIiArICgtNTAgKyBpICogMjApICsgXCIsMCBcXFwiLz5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cyQ7XG4gICAgICAgIH0oKSkuam9pbihcIlwiKSwgXCI8L2c+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJ0cmFuc2xhdGVcXFwiIFwiLCBcImZyb209XFxcIjAsMFxcXCIgdG89XFxcIjIwLDBcXFwiIGR1cj1cXFwiXCIgKyBkdXIgKyBcInNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIi8+PC9nPjwvc3ZnPlwiXG4gICAgICBdLmpvaW4oXCJcIikpO1xuICAgICAgcmV0dXJuIHdyYXAocmV0KTtcbiAgICB9LFxuICAgIGJ1YmJsZTogZnVuY3Rpb24oYzEsIGMyLCBjb3VudCwgZHVyLCBzaXplLCBzdyl7XG4gICAgICB2YXIgcmV0LCBpJCwgaSwgaWR4LCB4LCByLCBkO1xuICAgICAgYzEgPT0gbnVsbCAmJiAoYzEgPSAnIzM5ZCcpO1xuICAgICAgYzIgPT0gbnVsbCAmJiAoYzIgPSAnIzljZicpO1xuICAgICAgY291bnQgPT0gbnVsbCAmJiAoY291bnQgPSAxNSk7XG4gICAgICBkdXIgPT0gbnVsbCAmJiAoZHVyID0gMSk7XG4gICAgICBzaXplID09IG51bGwgJiYgKHNpemUgPSA2KTtcbiAgICAgIHN3ID09IG51bGwgJiYgKHN3ID0gMSk7XG4gICAgICByZXQgPSBbdGhpcy5oZWFkKFwiMCAwIDIwMCAyMDBcIiksIFwiPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiIGZpbGw9XFxcIlwiICsgYzEgKyBcIlxcXCIvPlwiXTtcbiAgICAgIGZvciAoaSQgPSAwOyBpJCA8IGNvdW50OyArK2kkKSB7XG4gICAgICAgIGkgPSBpJDtcbiAgICAgICAgaWR4ID0gLShpIC8gY291bnQpICogZHVyO1xuICAgICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIDE4NCArIDg7XG4gICAgICAgIHIgPSAoTWF0aC5yYW5kb20oKSAqIDAuNyArIDAuMykgKiBzaXplO1xuICAgICAgICBkID0gZHVyICogKDEgKyBNYXRoLnJhbmRvbSgpICogMC41KTtcbiAgICAgICAgcmV0LnB1c2goW1wiPGNpcmNsZSBjeD1cXFwiXCIgKyB4ICsgXCJcXFwiIGN5PVxcXCIwXFxcIiByPVxcXCJcIiArIHIgKyBcIlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJcIiArIGMyICsgXCJcXFwiIHN0cm9rZS13aWR0aD1cXFwiXCIgKyBzdyArIFwiXFxcIj5cIiwgXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeVxcXCIgdmFsdWVzPVxcXCIxOTA7LTEwXFxcIiB0aW1lcz1cXFwiMDsxXFxcIiBcIiwgXCJkdXI9XFxcIlwiICsgZCArIFwic1xcXCIgYmVnaW49XFxcIlwiICsgaWR4ICsgXCJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIvPlwiLCBcIjwvY2lyY2xlPlwiLCBcIjxjaXJjbGUgY3g9XFxcIlwiICsgeCArIFwiXFxcIiBjeT1cXFwiMFxcXCIgcj1cXFwiXCIgKyByICsgXCJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiXCIgKyBjMiArIFwiXFxcIiBzdHJva2Utd2lkdGg9XFxcIlwiICsgc3cgKyBcIlxcXCI+XCIsIFwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3lcXFwiIHZhbHVlcz1cXFwiMzkwOzE5MFxcXCIgdGltZXM9XFxcIjA7MVxcXCIgXCIsIFwiZHVyPVxcXCJcIiArIGQgKyBcInNcXFwiIGJlZ2luPVxcXCJcIiArIGlkeCArIFwic1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiLz5cIiwgXCI8L2NpcmNsZT5cIl0uam9pbihcIlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd3JhcChyZXQuam9pbihcIlwiKSArIFwiPC9zdmc+XCIpO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlciA9IHtcbiAgICBxdWV1ZToge30sXG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgbWFpbjogZnVuY3Rpb24odGltZXN0YW1wKXtcbiAgICAgIHZhciBrZWVwb24sIHJlbW92ZWQsIGssIHJlZiQsIGZ1bmMsIHJldCwgdGhpcyQgPSB0aGlzO1xuICAgICAga2VlcG9uID0gZmFsc2U7XG4gICAgICByZW1vdmVkID0gW107XG4gICAgICBmb3IgKGsgaW4gcmVmJCA9IHRoaXMucXVldWUpIHtcbiAgICAgICAgZnVuYyA9IHJlZiRba107XG4gICAgICAgIHJldCA9IGZ1bmModGltZXN0YW1wKTtcbiAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICByZW1vdmVkLnB1c2goZnVuYyk7XG4gICAgICAgIH1cbiAgICAgICAga2VlcG9uID0ga2VlcG9uIHx8IHJldDtcbiAgICAgIH1cbiAgICAgIGZvciAoayBpbiByZWYkID0gdGhpcy5xdWV1ZSkge1xuICAgICAgICBmdW5jID0gcmVmJFtrXTtcbiAgICAgICAgaWYgKHJlbW92ZWQuaW5kZXhPZihmdW5jKSA+PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucXVldWVba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrZWVwb24pIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbihpdCl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMkLm1haW4oaXQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oa2V5LCBmKXtcbiAgICAgIHZhciB0aGlzJCA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMucXVldWVba2V5XSkge1xuICAgICAgICB0aGlzLnF1ZXVlW2tleV0gPSBmO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbihpdCl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMkLm1haW4oaXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHdpbmRvdy5sZEJhciA9IGxkQmFyID0gZnVuY3Rpb24oc2VsZWN0b3IsIG9wdGlvbil7XG4gICAgdmFyIHhtbG5zLCByb290LCBjbHMsIGlkUHJlZml4LCBpZCwgZG9tVHJlZSwgbmV3Tm9kZSwgeCQsIGNvbmZpZywgYXR0ciwgdGhhdCwgaXNTdHJva2UsIHBhcnNlUmVzLCBkb20sIHN2ZywgdGV4dCwgZ3JvdXAsIGxlbmd0aCwgcGF0aDAsIHBhdGgxLCBwYXRpbWcsIGltZywgcmV0LCBzaXplLCB0aGlzJCA9IHRoaXM7XG4gICAgb3B0aW9uID09IG51bGwgJiYgKG9wdGlvbiA9IHt9KTtcbiAgICB4bWxucyA9IHtcbiAgICAgIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgIH07XG4gICAgcm9vdCA9IHRvU3RyaW5nJC5jYWxsKHNlbGVjdG9yKS5zbGljZSg4LCAtMSkgPT09ICdTdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICBpZiAoIXJvb3QubGRCYXIpIHtcbiAgICAgIHJvb3QubGRCYXIgPSB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm9vdC5sZEJhcjtcbiAgICB9XG4gICAgY2xzID0gcm9vdC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgaWYgKCF+Y2xzLmluZGV4T2YoJ2xkQmFyJykpIHtcbiAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyArIFwiIGxkQmFyXCIpO1xuICAgIH1cbiAgICBpZFByZWZpeCA9IFwibGRCYXItXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMik7XG4gICAgaWQgPSB7XG4gICAgICBrZXk6IGlkUHJlZml4LFxuICAgICAgY2xpcDogaWRQcmVmaXggKyBcIi1jbGlwXCIsXG4gICAgICBmaWx0ZXI6IGlkUHJlZml4ICsgXCItZmlsdGVyXCIsXG4gICAgICBwYXR0ZXJuOiBpZFByZWZpeCArIFwiLXBhdHRlcm5cIixcbiAgICAgIG1hc2s6IGlkUHJlZml4ICsgXCItbWFza1wiLFxuICAgICAgbWFza1BhdGg6IGlkUHJlZml4ICsgXCItbWFzay1wYXRoXCJcbiAgICB9O1xuICAgIGRvbVRyZWUgPSBmdW5jdGlvbihuLCBvKXtcbiAgICAgIHZhciBrLCB2O1xuICAgICAgbiA9IG5ld05vZGUobik7XG4gICAgICBmb3IgKGsgaW4gbykge1xuICAgICAgICB2ID0gb1trXTtcbiAgICAgICAgaWYgKGsgIT09ICdhdHRyJykge1xuICAgICAgICAgIG4uYXBwZW5kQ2hpbGQoZG9tVHJlZShrLCB2IHx8IHt9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG4uYXR0cnMoby5hdHRyIHx8IHt9KTtcbiAgICAgIHJldHVybiBuO1xuICAgIH07XG4gICAgbmV3Tm9kZSA9IGZ1bmN0aW9uKG4pe1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG4pO1xuICAgIH07XG4gICAgeCQgPSBkb2N1bWVudC5ib2R5Ll9fcHJvdG9fXy5fX3Byb3RvX18uX19wcm90b19fO1xuICAgIHgkLnRleHQgPSBmdW5jdGlvbih0KXtcbiAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKTtcbiAgICB9O1xuICAgIHgkLmF0dHJzID0gZnVuY3Rpb24obyl7XG4gICAgICB2YXIgaywgdiwgcmV0LCByZXN1bHRzJCA9IFtdO1xuICAgICAgZm9yIChrIGluIG8pIHtcbiAgICAgICAgdiA9IG9ba107XG4gICAgICAgIHJldCA9IC8oW146XSspOihbXjpdKykvLmV4ZWMoayk7XG4gICAgICAgIGlmICghcmV0IHx8ICF4bWxuc1tyZXRbMV1dKSB7XG4gICAgICAgICAgcmVzdWx0cyQucHVzaCh0aGlzLnNldEF0dHJpYnV0ZShrLCB2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cyQucHVzaCh0aGlzLnNldEF0dHJpYnV0ZU5TKHhtbG5zW3JldFsxXV0sIGssIHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMkO1xuICAgIH07XG4gICAgeCQuc3R5bGVzID0gZnVuY3Rpb24obyl7XG4gICAgICB2YXIgaywgdiwgcmVzdWx0cyQgPSBbXTtcbiAgICAgIGZvciAoayBpbiBvKSB7XG4gICAgICAgIHYgPSBvW2tdO1xuICAgICAgICByZXN1bHRzJC5wdXNoKHRoaXMuc3R5bGVba10gPSB2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzJDtcbiAgICB9O1xuICAgIHgkLmFwcGVuZCA9IGZ1bmN0aW9uKG4pe1xuICAgICAgdmFyIHI7XG4gICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vZy8yMDAwL3N2Z1wiLCBuKSk7XG4gICAgfTtcbiAgICB4JC5hdHRyID0gZnVuY3Rpb24obiwgdil7XG4gICAgICBpZiAodiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEF0dHJpYnV0ZShuLCB2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJyxcbiAgICAgIFwiaW1nXCI6ICcnLFxuICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnLFxuICAgICAgXCJmaWxsLWRpclwiOiAnYnR0JyxcbiAgICAgIFwiZmlsbFwiOiAnIzI1YicsXG4gICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiAnI2RkZCcsXG4gICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDMsXG4gICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsLFxuICAgICAgXCJzdHJva2UtZGlyXCI6ICdub3JtYWwnLFxuICAgICAgXCJzdHJva2VcIjogJyMyNWInLFxuICAgICAgXCJzdHJva2Utd2lkdGhcIjogJzMnLFxuICAgICAgXCJzdHJva2UtdHJhaWxcIjogJyNkZGQnLFxuICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41LFxuICAgICAgXCJkdXJhdGlvblwiOiAxLFxuICAgICAgXCJlYXNpbmdcIjogJ2xpbmVhcicsXG4gICAgICBcInZhbHVlXCI6IDAsXG4gICAgICBcImltZy1zaXplXCI6IG51bGwsXG4gICAgICBcImJib3hcIjogbnVsbCxcbiAgICAgIFwic2V0LWRpbVwiOiB0cnVlLFxuICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJ4TWlkWU1pZFwiXG4gICAgfTtcbiAgICBjb25maWdbXCJwcmVzZXRcIl0gPSByb290LmF0dHIoXCJkYXRhLXByZXNldFwiKSB8fCBvcHRpb25bXCJwcmVzZXRcIl07XG4gICAgaWYgKGNvbmZpZy5wcmVzZXQgIT0gbnVsbCkge1xuICAgICAgaW1wb3J0JChjb25maWcsIHByZXNldHNbY29uZmlnLnByZXNldF0pO1xuICAgIH1cbiAgICBmb3IgKGF0dHIgaW4gY29uZmlnKSB7XG4gICAgICBpZiAodGhhdCA9IHRoYXQgPSByb290LmF0dHIoXCJkYXRhLVwiICsgYXR0cikpIHtcbiAgICAgICAgY29uZmlnW2F0dHJdID0gdGhhdDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW1wb3J0JChjb25maWcsIG9wdGlvbik7XG4gICAgaWYgKGNvbmZpZy5pbWcpIHtcbiAgICAgIGNvbmZpZy5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgaXNTdHJva2UgPSBjb25maWcudHlwZSA9PT0gJ3N0cm9rZSc7XG4gICAgcGFyc2VSZXMgPSBmdW5jdGlvbih2KXtcbiAgICAgIHZhciBwYXJzZXIsIHJldDtcbiAgICAgIHBhcnNlciA9IC9kYXRhOmxkYmFyXFwvcmVzLChbXigpXSspXFwoKFteKV0rKVxcKS87XG4gICAgICByZXQgPSBwYXJzZXIuZXhlYyh2KTtcbiAgICAgIGlmICghcmV0KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldCA9IG1ha2VbcmV0WzFdXS5hcHBseShtYWtlLCByZXRbMl0uc3BsaXQoJywnKSk7XG4gICAgfTtcbiAgICBjb25maWcuZmlsbCA9IHBhcnNlUmVzKGNvbmZpZy5maWxsKTtcbiAgICBjb25maWcuc3Ryb2tlID0gcGFyc2VSZXMoY29uZmlnLnN0cm9rZSk7XG4gICAgaWYgKGNvbmZpZ1tcInNldC1kaW1cIl0gPT09ICdmYWxzZScpIHtcbiAgICAgIGNvbmZpZ1tcInNldC1kaW1cIl0gPSBmYWxzZTtcbiAgICB9XG4gICAgZG9tID0ge1xuICAgICAgYXR0cjoge1xuICAgICAgICBcInhtbG5zOnhsaW5rXCI6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyxcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIH0sXG4gICAgICBkZWZzOiB7XG4gICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIGlkOiBpZC5maWx0ZXIsXG4gICAgICAgICAgICB4OiAtMSxcbiAgICAgICAgICAgIHk6IC0xLFxuICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICBoZWlnaHQ6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZlTW9ycGhvbG9neToge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICBvcGVyYXRvcjogK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdID49IDAgPyAnZGlsYXRlJyA6ICdlcm9kZScsXG4gICAgICAgICAgICAgIHJhZGl1czogTWF0aC5hYnMoK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVDb2xvck1hdHJpeDoge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICB2YWx1ZXM6ICcwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAxIDAnLFxuICAgICAgICAgICAgICByZXN1bHQ6IFwiY21cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWFzazoge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIGlkOiBpZC5tYXNrXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZyxcbiAgICAgICAgICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBpZC5maWx0ZXIgKyBcIilcIixcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZzoge1xuICAgICAgICAgIG1hc2s6IHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgaWQ6IGlkLm1hc2tQYXRoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGggfHwgXCJcIixcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBpZC5maWx0ZXIgKyBcIilcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGlwUGF0aDoge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIGlkOiBpZC5jbGlwXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICdjbGFzcyc6ICdtYXNrJyxcbiAgICAgICAgICAgICAgZmlsbDogJyMwMDAnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgaWQ6IGlkLnBhdHRlcm4sXG4gICAgICAgICAgICBwYXR0ZXJuVW5pdHM6ICd1c2VyU3BhY2VPblVzZScsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHN2ZyA9IGRvbVRyZWUoJ3N2ZycsIGRvbSk7XG4gICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsZEJhci1sYWJlbCcpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICByb290LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGdyb3VwID0gWzAsIDBdO1xuICAgIGxlbmd0aCA9IDA7XG4gICAgdGhpcy5maXQgPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQsIGJveCwgZCwgcmVjdDtcbiAgICAgIGlmICh0aGF0ID0gY29uZmlnW1wiYmJveFwiXSkge1xuICAgICAgICBib3ggPSB0aGF0LnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGl0KXtcbiAgICAgICAgICByZXR1cm4gK2l0LnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJveCA9IHtcbiAgICAgICAgICB4OiBib3hbMF0sXG4gICAgICAgICAgeTogYm94WzFdLFxuICAgICAgICAgIHdpZHRoOiBib3hbMl0sXG4gICAgICAgICAgaGVpZ2h0OiBib3hbM11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJveCA9IGdyb3VwWzFdLmdldEJCb3goKTtcbiAgICAgIH1cbiAgICAgIGlmICghYm94IHx8IGJveC53aWR0aCA9PT0gMCB8fCBib3guaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIGJveCA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIFsnc3Ryb2tlLXdpZHRoJywgJ3N0cm9rZS10cmFpbC13aWR0aCcsICdmaWxsLWJhY2tncm91bmQtZXh0cnVkZSddLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICAgIHJldHVybiBjb25maWdbaXRdO1xuICAgICAgfSkpICogMS41O1xuICAgICAgc3ZnLmF0dHJzKHtcbiAgICAgICAgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuICAgICAgfSk7XG4gICAgICBpZiAoY29uZmlnW1wic2V0LWRpbVwiXSkge1xuICAgICAgICBbJ3dpZHRoJywgJ2hlaWdodCddLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICAgICAgaWYgKCFyb290LnN0eWxlW2l0XSB8fCB0aGlzJC5maXRbaXRdKSB7XG4gICAgICAgICAgICByb290LnN0eWxlW2l0XSA9IChib3hbaXRdICsgZCAqIDIpICsgXCJweFwiO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMkLmZpdFtpdF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWN0ID0gZ3JvdXBbMF0ucXVlcnlTZWxlY3RvcigncmVjdCcpO1xuICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgcmV0dXJuIHJlY3QuYXR0cnMoe1xuICAgICAgICAgIHg6IGJveC54IC0gZCxcbiAgICAgICAgICB5OiBib3gueSAtIGQsXG4gICAgICAgICAgd2lkdGg6IGJveC53aWR0aCArIGQgKiAyLFxuICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGNvbmZpZy5wYXRoKSB7XG4gICAgICBpZiAoaXNTdHJva2UpIHtcbiAgICAgICAgZ3JvdXBbMF0gPSBkb21UcmVlKCdnJywge1xuICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGgsXG4gICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgJ2NsYXNzJzogJ2Jhc2VsaW5lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cFswXSA9IGRvbVRyZWUoJ2cnLCB7XG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgbWFzazogXCJ1cmwoI1wiICsgaWQubWFza1BhdGggKyBcIilcIixcbiAgICAgICAgICAgICAgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdLFxuICAgICAgICAgICAgICAnY2xhc3MnOiAnZnJhbWUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChncm91cFswXSk7XG4gICAgICBncm91cFsxXSA9IGRvbVRyZWUoJ2cnLCB7XG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICBkOiBjb25maWcucGF0aCxcbiAgICAgICAgICAgICdjbGFzcyc6IGlzU3Ryb2tlID8gJ21haW5saW5lJyA6ICdzb2xpZCcsXG4gICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBjb25maWcudHlwZSA9PT0gJ2ZpbGwnID8gXCJ1cmwoI1wiICsgaWQuY2xpcCArIFwiKVwiIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKGdyb3VwWzFdKTtcbiAgICAgIHBhdGgwID0gZ3JvdXBbMF0ucXVlcnlTZWxlY3Rvcihpc1N0cm9rZSA/ICdwYXRoJyA6ICdyZWN0Jyk7XG4gICAgICBwYXRoMSA9IGdyb3VwWzFdLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgICBwYXRoMS5hdHRycyh7XG4gICAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGF0aW1nID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3BhdHRlcm4gaW1hZ2UnKTtcbiAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYm94LCB0aGF0O1xuICAgICAgICBib3ggPSAodGhhdCA9IGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSlcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIHdpZHRoOiArdGhhdCxcbiAgICAgICAgICAgIGhlaWdodDogK3RoYXRcbiAgICAgICAgICB9XG4gICAgICAgICAgOiBpbWcud2lkdGggJiYgaW1nLmhlaWdodFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBzdmcucXVlcnlTZWxlY3RvcigncGF0dGVybicpLmF0dHJzKHtcbiAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhdGltZy5hdHRycyh7XG4gICAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICgvLitcXC4uK3xeZGF0YTovLmV4ZWMoIWlzU3Ryb2tlXG4gICAgICAgID8gY29uZmlnLmZpbGxcbiAgICAgICAgOiBjb25maWcuc3Ryb2tlKSkge1xuICAgICAgICBpbWcuc3JjID0gIWlzU3Ryb2tlXG4gICAgICAgICAgPyBjb25maWcuZmlsbFxuICAgICAgICAgIDogY29uZmlnLnN0cm9rZTtcbiAgICAgICAgcGF0aW1nLmF0dHJzKHtcbiAgICAgICAgICBcInhsaW5rOmhyZWZcIjogaW1nLnNyY1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgICBwYXRoMC5hdHRycyh7XG4gICAgICAgICAgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sXG4gICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXRyYWlsLXdpZHRoXCJdXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoMS5hdHRycyh7XG4gICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXdpZHRoXCJdLFxuICAgICAgICAgIHN0cm9rZTogLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5zdHJva2UpXG4gICAgICAgICAgICA/IFwidXJsKCNcIiArIGlkLnBhdHRlcm4gKyBcIilcIlxuICAgICAgICAgICAgOiBjb25maWcuc3Ryb2tlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5maWxsICYmICFpc1N0cm9rZSkge1xuICAgICAgICBwYXRoMS5hdHRycyh7XG4gICAgICAgICAgZmlsbDogLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5maWxsKVxuICAgICAgICAgICAgPyBcInVybCgjXCIgKyBpZC5wYXR0ZXJuICsgXCIpXCJcbiAgICAgICAgICAgIDogY29uZmlnLmZpbGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCgpO1xuICAgICAgdGhpcy5maXQoKTtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbWcpIHtcbiAgICAgIGlmIChjb25maWdbXCJpbWctc2l6ZVwiXSkge1xuICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdCgnLCcpO1xuICAgICAgICBzaXplID0ge1xuICAgICAgICAgIHdpZHRoOiArcmV0WzBdLFxuICAgICAgICAgIGhlaWdodDogK3JldFsxXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2l6ZSA9IHtcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBncm91cFswXSA9IGRvbVRyZWUoJ2cnLCB7XG4gICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIG1hc2s6IFwidXJsKCNcIiArIGlkLm1hc2sgKyBcIilcIixcbiAgICAgICAgICAgIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzdmcucXVlcnlTZWxlY3RvcignbWFzayBpbWFnZScpLmF0dHJzKHtcbiAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgZ3JvdXBbMV0gPSBkb21UcmVlKCdnJywge1xuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodCxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdLFxuICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogY29uZmlnLnR5cGUgPT09ICdmaWxsJyA/IFwidXJsKCNcIiArIGlkLmNsaXAgKyBcIilcIiA6ICcnLFxuICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWcsXG4gICAgICAgICAgICAnY2xhc3MnOiAnc29saWQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgcmV0LCBzaXplO1xuICAgICAgICBpZiAoY29uZmlnW1wiaW1nLXNpemVcIl0pIHtcbiAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdCgnLCcpO1xuICAgICAgICAgIHNpemUgPSB7XG4gICAgICAgICAgICB3aWR0aDogK3JldFswXSxcbiAgICAgICAgICAgIGhlaWdodDogK3JldFsxXVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoaW1nLndpZHRoICYmIGltZy5oZWlnaHQpIHtcbiAgICAgICAgICBzaXplID0ge1xuICAgICAgICAgICAgd2lkdGg6IGltZy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IoJ21hc2sgaW1hZ2UnKS5hdHRycyh7XG4gICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXBbMV0ucXVlcnlTZWxlY3RvcignaW1hZ2UnKS5hdHRycyh7XG4gICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcyQuZml0KCk7XG4gICAgICAgIHRoaXMkLnNldCh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMkLmluaXRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIGltZy5zcmMgPSBjb25maWcuaW1nO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKGdyb3VwWzBdKTtcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChncm91cFsxXSk7XG4gICAgfVxuICAgIHN2Zy5hdHRycyh7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zaXRpb24gPSB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBzcmM6IDAsXG4gICAgICAgIGRlczogMFxuICAgICAgfSxcbiAgICAgIHRpbWU6IHt9LFxuICAgICAgZWFzZTogZnVuY3Rpb24odCwgYiwgYywgZCl7XG4gICAgICAgIHQgPSB0IC8gKGQgKiAwLjUpO1xuICAgICAgICBpZiAodCA8IDEpIHtcbiAgICAgICAgICByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYjtcbiAgICAgICAgfVxuICAgICAgICB0ID0gdCAtIDE7XG4gICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih0aW1lLCBkb1RyYW5zaXRpb24pe1xuICAgICAgICB2YXIgcmVmJCwgZHYsIGR0LCBkdXIsIHYsIG5vZGUsIHN0eWxlLCBib3gsIGRpcjtcbiAgICAgICAgZG9UcmFuc2l0aW9uID09IG51bGwgJiYgKGRvVHJhbnNpdGlvbiA9IHRydWUpO1xuICAgICAgICBpZiAodGhpcy50aW1lLnNyYyA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50aW1lLnNyYyA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVmJCA9IFt0aGlzLnZhbHVlLmRlcyAtIHRoaXMudmFsdWUuc3JjLCAodGltZSAtIHRoaXMudGltZS5zcmMpICogMC4wMDEsICtjb25maWdbXCJkdXJhdGlvblwiXSB8fCAxXSwgZHYgPSByZWYkWzBdLCBkdCA9IHJlZiRbMV0sIGR1ciA9IHJlZiRbMl07XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2ID0gZG9UcmFuc2l0aW9uXG4gICAgICAgICAgPyBNYXRoLnJvdW5kKHRoaXMuZWFzZShkdCwgdGhpcy52YWx1ZS5zcmMsIGR2LCBkdXIpKVxuICAgICAgICAgIDogdGhpcy52YWx1ZS5kZXM7XG4gICAgICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgICAgIG5vZGUgPSBwYXRoMTtcbiAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiOiBjb25maWdbXCJzdHJva2UtZGlyXCJdID09PSAncmV2ZXJzZSdcbiAgICAgICAgICAgICAgPyBcIjAgXCIgKyBsZW5ndGggKiAoMTAwIC0gdikgKiAwLjAxICsgXCIgXCIgKyBsZW5ndGggKiB2ICogMC4wMSArIFwiIDBcIlxuICAgICAgICAgICAgICA6IHYgKiAwLjAxICogbGVuZ3RoICsgXCIgXCIgKyAoKDEwMCAtIHYpICogMC4wMSAqIGxlbmd0aCArIDEpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3ggPSBncm91cFsxXS5nZXRCQm94KCk7XG4gICAgICAgICAgZGlyID0gY29uZmlnW1wiZmlsbC1kaXJcIl07XG4gICAgICAgICAgc3R5bGUgPSBkaXIgPT09ICdidHQnIHx8ICFkaXJcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB5OiBib3gueSArIGJveC5oZWlnaHQgKiAoMTAwIC0gdikgKiAwLjAxLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgKiB2ICogMC4wMSxcbiAgICAgICAgICAgICAgeDogYm94LngsXG4gICAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZGlyID09PSAndHRiJ1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB5OiBib3gueSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgKiB2ICogMC4wMSxcbiAgICAgICAgICAgICAgICB4OiBib3gueCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBkaXIgPT09ICdsdHInXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICB5OiBib3gueSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgIHg6IGJveC54LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIHYgKiAwLjAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZGlyID09PSAncnRsJyA/IHtcbiAgICAgICAgICAgICAgICAgIHk6IGJveC55LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gdikgKiAwLjAxLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIHYgKiAwLjAxXG4gICAgICAgICAgICAgICAgfSA6IHZvaWQgODtcbiAgICAgICAgICBub2RlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3JlY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmF0dHJzKHN0eWxlKTtcbiAgICAgICAgaWYgKGR0ID49IGR1cikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnRpbWUuc3JjO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBzdGFydDogZnVuY3Rpb24oc3JjLCBkZXMsIGRvVHJhbnNpdGlvbil7XG4gICAgICAgIHZhciByZWYkLCB0aGlzJCA9IHRoaXM7XG4gICAgICAgIHJlZiQgPSB0aGlzLnZhbHVlO1xuICAgICAgICByZWYkLnNyYyA9IHNyYztcbiAgICAgICAgcmVmJC5kZXMgPSBkZXM7XG4gICAgICAgICEhKHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG4gICAgICAgIGlmICghZG9UcmFuc2l0aW9uIHx8ICEocm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHRoaXMudGltZS5zcmMgPSAwO1xuICAgICAgICAgIHRoaXMuaGFuZGxlcigxMDAwLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyLmFkZChpZC5rZXksIGZ1bmN0aW9uKHRpbWUpe1xuICAgICAgICAgIHJldHVybiB0aGlzJC5oYW5kbGVyKHRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24odiwgZG9UcmFuc2l0aW9uKXtcbiAgICAgIHZhciBzcmMsIGRlcztcbiAgICAgIGRvVHJhbnNpdGlvbiA9PSBudWxsICYmIChkb1RyYW5zaXRpb24gPSB0cnVlKTtcbiAgICAgIHNyYyA9IHRoaXMudmFsdWUgfHwgMDtcbiAgICAgIGlmICh2ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGRlcyA9IHRoaXMudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnN0YXJ0KHNyYywgZGVzLCBkb1RyYW5zaXRpb24pO1xuICAgIH07XG4gICAgdGhpcy5zZXQoK2NvbmZpZy52YWx1ZSB8fCAwLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGkkLCByZWYkLCBsZW4kLCBub2RlLCByZXN1bHRzJCA9IFtdO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGRCYXInKSkubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIG5vZGUgPSByZWYkW2kkXTtcbiAgICAgIGlmICghbm9kZS5sZEJhcikge1xuICAgICAgICByZXN1bHRzJC5wdXNoKG5vZGUubGRCYXIgPSBuZXcgbGRCYXIobm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH0sIGZhbHNlKTtcbn0pKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGxkQmFyO1xuZnVuY3Rpb24gaW1wb3J0JChvYmosIHNyYyl7XG4gIHZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgaWYgKG93bi5jYWxsKHNyYywga2V5KSkgb2JqW2tleV0gPSBzcmNba2V5XTtcbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgcHJlc2V0cywgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbm91dCQucHJlc2V0cyA9IHByZXNldHMgPSB7XG4gIHJhaW5ib3c6IHtcbiAgICBcInR5cGVcIjogJ3N0cm9rZScsXG4gICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnLFxuICAgIFwic3Ryb2tlXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCgwLDEsI2E1NTFkZiwjZmQ1MWFkLCNmZjdmODIsI2ZmYjg3NCwjZmZlYjkwKScsXG4gICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICB9LFxuICBlbmVyZ3k6IHtcbiAgICBcInR5cGVcIjogJ2ZpbGwnLFxuICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnLFxuICAgIFwic3Ryb2tlXCI6ICcjZjAwJyxcbiAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDQ1LDIsIzRlOSwjOGZiLCM0ZTkpJyxcbiAgICBcImZpbGwtZGlyXCI6IFwibHRyXCIsXG4gICAgXCJmaWxsLWJhY2tncm91bmRcIjogJyM0NDQnLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMSxcbiAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgfSxcbiAgc3RyaXBlOiB7XG4gICAgXCJ0eXBlXCI6ICdmaWxsJyxcbiAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1JyxcbiAgICBcInN0cm9rZVwiOiAnI2YwMCcsXG4gICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxzdHJpcGUoIzI1YiwjNThlLDEpJyxcbiAgICBcImZpbGwtZGlyXCI6IFwibHRyXCIsXG4gICAgXCJmaWxsLWJhY2tncm91bmRcIjogJyNkZGQnLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMSxcbiAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgfSxcbiAgdGV4dDoge1xuICAgIFwidHlwZVwiOiAnZmlsbCcsXG4gICAgXCJpbWdcIjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI3MFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgdmlld0JveD1cXFwiMCAwIDcwIDIwXFxcIj48dGV4dCB4PVxcXCIzNVxcXCIgeT1cXFwiMTBcXFwiIHRleHQtYW5jaG9yPVxcXCJtaWRkbGVcXFwiIGRvbWluYW50LWJhc2VsaW5lPVxcXCJjZW50cmFsXFxcIiBmb250LWZhbWlseT1cXFwiYXJpYWxcXFwiPkxPQURJTkc8L3RleHQ+PC9zdmc+XCIsXG4gICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjMsXG4gICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwLFxuICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIixcbiAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIixcbiAgICBcImJib3hcIjogXCIwIDAgNzAgMjBcIlxuICB9LFxuICBsaW5lOiB7XG4gICAgXCJ0eXBlXCI6ICdzdHJva2UnLFxuICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJyxcbiAgICBcInN0cm9rZVwiOiAnIzI1YicsXG4gICAgXCJzdHJva2Utd2lkdGhcIjogMyxcbiAgICBcInN0cm9rZS10cmFpbFwiOiAnI2RkZCcsXG4gICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMSxcbiAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gIH0sXG4gIGZhbjoge1xuICAgIFwidHlwZVwiOiAnc3Ryb2tlJyxcbiAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCcsXG4gICAgXCJmaWxsLWRpclwiOiAnYnR0JyxcbiAgICBcImZpbGxcIjogJyMyNWInLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6ICcjZGRkJyxcbiAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDMsXG4gICAgXCJzdHJva2UtZGlyXCI6ICdub3JtYWwnLFxuICAgIFwic3Ryb2tlXCI6ICcjMjViJyxcbiAgICBcInN0cm9rZS13aWR0aFwiOiAnMycsXG4gICAgXCJzdHJva2UtdHJhaWxcIjogJyNkZGQnLFxuICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNSxcbiAgICBcImJib3hcIjogXCIxMCA1MCA4MCA0MFwiXG4gIH0sXG4gIGNpcmNsZToge1xuICAgIFwidHlwZVwiOiAnc3Ryb2tlJyxcbiAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCcsXG4gICAgXCJmaWxsLWRpclwiOiAnYnR0JyxcbiAgICBcImZpbGxcIjogJyMyNWInLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6ICcjZGRkJyxcbiAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDMsXG4gICAgXCJzdHJva2UtZGlyXCI6ICdub3JtYWwnLFxuICAgIFwic3Ryb2tlXCI6ICcjMjViJyxcbiAgICBcInN0cm9rZS13aWR0aFwiOiAnMycsXG4gICAgXCJzdHJva2UtdHJhaWxcIjogJyNkZGQnLFxuICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNSxcbiAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4gIH0sXG4gIGJ1YmJsZToge1xuICAgIFwidHlwZVwiOiAnZmlsbCcsXG4gICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnLFxuICAgIFwiZmlsbC1kaXJcIjogJ2J0dCcsXG4gICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxidWJibGUoIzM5ZCwjY2VmKScsXG4gICAgXCJwYXR0ZXJuLXNpemVcIjogXCIxNTBcIixcbiAgICBcImZpbGwtYmFja2dyb3VuZFwiOiAnI2RkZCcsXG4gICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAyLFxuICAgIFwic3Ryb2tlLWRpclwiOiAnbm9ybWFsJyxcbiAgICBcInN0cm9rZVwiOiAnIzI1YicsXG4gICAgXCJzdHJva2Utd2lkdGhcIjogJzMnLFxuICAgIFwic3Ryb2tlLXRyYWlsXCI6ICcjZGRkJyxcbiAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjUsXG4gICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGRCYXJ7cG9zaXRpb246cmVsYXRpdmU7fS5sZEJhci5sYWJlbC1jZW50ZXIgPiAubGRCYXItbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dGV4dC1zaGFkb3c6MCAwIDNweCAjZmZmfS5sZEJhci1sYWJlbDphZnRlcntjb250ZW50OlxcXCIlXFxcIjtkaXNwbGF5OmlubGluZX0ubGRCYXIubm8tcGVyY2VudCAubGRCYXItbGFiZWw6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGxvYWRpbmdpby9sb2FkaW5nLWJhci9kaXN0L2xvYWRpbmctYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxPQUFPLGlCQUFpQixDQUFDLENBQUMsbUNBQW1DLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMsOEJBQThCLENBQUMsd0JBQXdCLENBQUMsbUJBQW1CLFdBQVcsQ0FBQyxjQUFjLENBQUMscUNBQXFDLFVBQVVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxkQmFye3Bvc2l0aW9uOnJlbGF0aXZlO30ubGRCYXIubGFiZWwtY2VudGVyID4gLmxkQmFyLWxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtc2hhZG93OjAgMCAzcHggI2ZmZn0ubGRCYXItbGFiZWw6YWZ0ZXJ7Y29udGVudDpcXFwiJVxcXCI7ZGlzcGxheTppbmxpbmV9LmxkQmFyLm5vLXBlcmNlbnQgLmxkQmFyLWxhYmVsOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCJ9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRpbmctYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkaW5nLWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxkQmFyIGZyb20gXCJAbG9hZGluZ2lvL2xvYWRpbmctYmFyL2xpYi9sb2FkaW5nLWJhci5qc1wiO1xuaW1wb3J0IFwiQGxvYWRpbmdpby9sb2FkaW5nLWJhci9kaXN0L2xvYWRpbmctYmFyLmNzc1wiO1xuXG5sZXQgaG9zdGVzc2VzID0gW107XG5sZXQgaW50ZXJ2YWxzID0gW107XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwiaG9zdGVzcy1pbml0XCIsIChvcHRzKSA9PiB7XG4gIGhvc3Rlc3Nlc1tvcHRzLmlkXSA9IG5ldyBsZEJhcihcIiNcIiArIG9wdHMuaWQpO1xuXG4gIGlmICghb3B0cy5pbmZpbml0ZSkgcmV0dXJuO1xuXG4gIGxldCB2YWx1ZSA9IDAsXG4gICAgaW5jID0gMCxcbiAgICBlbmQgPSAxMDA7XG5cbiAgaW50ZXJ2YWxzW29wdHMuaWRdID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGluYyA9IChlbmQgLSB2YWx1ZSkgLyAoZW5kICsgdmFsdWUpO1xuICAgIHZhbHVlID0gTWF0aC5yb3VuZCgodmFsdWUgKyBpbmMgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAwKSAvIDEwMDA7XG4gICAgaG9zdGVzc2VzW29wdHMuaWRdLnNldCh2YWx1ZSk7XG4gIH0sIDM1MCk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJob3N0ZXNzLXNldFwiLCAob3B0cykgPT4ge1xuICBob3N0ZXNzZXNbb3B0cy5pZF0uc2V0KG9wdHMudmFsdWUpO1xuXG4gIGlmIChvcHRzLnZhbHVlICE9IDEwMCkgcmV0dXJuO1xuXG4gIGxldCBub3RpZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuaWQpO1xuXG4gIGlmIChub3RpZiAhPSB1bmRlZmluZWQpIG5vdGlmLnJlbW92ZSgpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwiaG9zdGVzcy1ub3RpZnlcIiwgKG9wdHMpID0+IHtcbiAgLy8gY3JlYXRlIGRpdlxuICBsZXQgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcblxuICAvLyBwb3NpdGlvbiBkaXZcbiAgbGV0IHBvcyA9IHBvc2l0aW9uX3RvX2Nvb3JkcyhvcHRzLnBvc2l0aW9uKTtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJvdHRvbSA9IHBvcy5ib3R0b207XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5yaWdodCA9IHBvcy5yaWdodDtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLnRvcCA9IHBvcy50b3A7XG5cbiAgbm90aWZpY2F0aW9uLmhlaWdodCA9IFwiMTAwcHhcIjtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmNvbG9yID0gb3B0cy50ZXh0X2NvbG9yO1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0cy5iYWNrZ3JvdW5kX2NvbG9yO1xuICBub3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBvcHRzLmh0bWw7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS56SW5kZXggPSA5OTk7XG4gIG5vdGlmaWNhdGlvbi5pZCA9IG9wdHMuaWQ7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwid2FpdHJlc3Mtbm90aWZpY2F0aW9uXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG5cbiAgaG9zdGVzc2VzW29wdHMuaWRdID0gbmV3IGxkQmFyKFwiI1wiICsgb3B0cy5pZCk7XG5cbiAgaWYgKCFvcHRzLmluZmluaXRlKSByZXR1cm47XG5cbiAgbGV0IHZhbHVlID0gMCxcbiAgICBpbmMgPSAwLFxuICAgIGVuZCA9IDEwMDtcblxuICBpbnRlcnZhbHNbb3B0cy5pZF0gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgaW5jID0gKGVuZCAtIHZhbHVlKSAvIChlbmQgKyB2YWx1ZSk7XG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKCh2YWx1ZSArIGluYyArIE51bWJlci5FUFNJTE9OKSAqIDEwMDApIC8gMTAwMDtcbiAgICBob3N0ZXNzZXNbb3B0cy5pZF0uc2V0KHZhbHVlKTtcbiAgfSwgMzUwKTtcbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImhvc3Rlc3MtZW5kXCIsIChvcHRzKSA9PiB7XG4gIGxldCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmlkKTtcblxuICBpZiAob3B0cy5pbmZpbml0ZSkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxzW29wdHMuaWRdKTtcbiAgICBob3N0ZXNzZXNbb3B0cy5pZF0uc2V0KDk1KTtcbiAgfVxuXG4gIGlmIChiYXIgIT0gdW5kZWZpbmVkKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYmFyLnJlbW92ZSgpO1xuICAgIH0sIDM1MCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IHBvc2l0aW9uIG9mIHRvIGNvb3JkaW5hdGVzLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcG9zaXRpb24gLSBDb252ZXJ0IHBvc2l0aW9uIHRvIGFuIGFycmF5IG9mXG4gKiBjb29yZGluYXRlcy5cbiAqL1xuY29uc3QgcG9zaXRpb25fdG9fY29vcmRzID0gKHBvc2l0aW9uKSA9PiB7XG4gIGxldCBwb3MgPSB7fTtcblxuICBsZXQgYmFzZV95ID0gMTAwO1xuICBsZXQgY3VycmVudF9ub3RpZmljYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcIndhaXRyZXNzLW5vdGlmaWNhdGlvblwiLFxuICApO1xuXG4gIGZvciAobGV0IG4gb2YgY3VycmVudF9ub3RpZmljYXRpb25zKSB7XG4gICAgYmFzZV95ID0gYmFzZV95ICsgMTAwICsgbi5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBpZiAocG9zaXRpb24gPT0gXCJibFwiKSB7XG4gICAgcG9zLnRvcCA9IFwiYXV0b1wiO1xuICAgIHBvcy5ib3R0b20gPSBiYXNlX3kgKyAxMCArIFwicHhcIjtcbiAgICBwb3MubGVmdCA9IFwiMTBweFwiO1xuICAgIHBvcy5yaWdodCA9IFwiYXV0b1wiO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09IFwidGxcIikge1xuICAgIHBvcy50b3AgPSBiYXNlX3kgKyAxMCArIFwicHhcIjtcbiAgICBwb3MuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgcG9zLmxlZnQgPSBcIjEwcHhcIjtcbiAgICBwb3MucmlnaHQgPSBcImF1dG9cIjtcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PSBcImJyXCIpIHtcbiAgICBwb3MudG9wID0gXCJhdXRvXCI7XG4gICAgcG9zLmJvdHRvbSA9IGJhc2VfeSArIDEwICsgXCJweFwiO1xuICAgIHBvcy5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgcG9zLnJpZ2h0ID0gXCIxMHB4XCI7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT0gXCJ0clwiKSB7XG4gICAgcG9zLnRvcCA9IGJhc2VfeSArIDEwICsgXCJweFwiO1xuICAgIHBvcy5ib3R0b20gPSBcImF1dG9cIjtcbiAgICBwb3MubGVmdCA9IFwiYXV0b1wiO1xuICAgIHBvcy5yaWdodCA9IFwiMTBweFwiO1xuICB9XG5cbiAgcmV0dXJuIHBvcztcbn07XG4iXSwibmFtZXMiOlsicHJlc2V0cyIsInNpbXBsZVN0ciIsIndyYXAiLCJzbGljZSQiLCJzbGljZSIsInRvU3RyaW5nJCIsInRvU3RyaW5nIiwicmVxdWlyZSIsImFyciIsImpvaW4iLCJjb250ZW50IiwiYnRvYSIsIm1ha2UiLCJoYW5kbGVyIiwibGRCYXIiLCJoZWFkIiwidmlld0JveCIsImdyYWRpZW50IiwiZGlyIiwiZHVyIiwiY29sb3JzIiwicmV0IiwibGVuIiwiZ3giLCJneSIsIngiLCJ5IiwiaSQiLCJpIiwiaWR4IiwiY2FsbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIk1hdGgiLCJQSSIsInBvdyIsImNvcyIsInNxcnQiLCJzaW4iLCJwdXNoIiwic3RyaXBlIiwiYzEiLCJjMiIsImNvbmNhdCIsInJlc3VsdHMkIiwiYnViYmxlIiwiY291bnQiLCJzaXplIiwic3ciLCJyIiwiZCIsInJhbmRvbSIsInF1ZXVlIiwicnVubmluZyIsIm1haW4iLCJ0aW1lc3RhbXAiLCJrZWVwb24iLCJyZW1vdmVkIiwiayIsInJlZiQiLCJmdW5jIiwidGhpcyQiLCJpbmRleE9mIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXQiLCJhZGQiLCJrZXkiLCJmIiwid2luZG93Iiwic2VsZWN0b3IiLCJvcHRpb24iLCJ4bWxucyIsInJvb3QiLCJjbHMiLCJpZFByZWZpeCIsImlkIiwiZG9tVHJlZSIsIm5ld05vZGUiLCJ4JCIsImNvbmZpZyIsImF0dHIiLCJ0aGF0IiwiaXNTdHJva2UiLCJwYXJzZVJlcyIsImRvbSIsInN2ZyIsInRleHQiLCJncm91cCIsInBhdGgwIiwicGF0aDEiLCJwYXRpbWciLCJpbWciLCJ4bGluayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInN1YnN0cmluZyIsImNsaXAiLCJmaWx0ZXIiLCJwYXR0ZXJuIiwibWFzayIsIm1hc2tQYXRoIiwibiIsIm8iLCJ2IiwiYXBwZW5kQ2hpbGQiLCJhdHRycyIsImNyZWF0ZUVsZW1lbnROUyIsImJvZHkiLCJfX3Byb3RvX18iLCJ0IiwiY3JlYXRlVGV4dE5vZGUiLCJleGVjIiwic2V0QXR0cmlidXRlTlMiLCJzdHlsZXMiLCJzdHlsZSIsImFwcGVuZCIsInByZXNldCIsImltcG9ydCQiLCJwYXRoIiwidHlwZSIsInBhcnNlciIsImFwcGx5Iiwic3BsaXQiLCJmaWxsIiwic3Ryb2tlIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVmcyIsImZlTW9ycGhvbG9neSIsIm9wZXJhdG9yIiwicmFkaXVzIiwiYWJzIiwiZmVDb2xvck1hdHJpeCIsInZhbHVlcyIsInJlc3VsdCIsImltYWdlIiwiZyIsImNsaXBQYXRoIiwicmVjdCIsInBhdHRlcm5Vbml0cyIsImNyZWF0ZUVsZW1lbnQiLCJmaXQiLCJib3giLCJtYXAiLCJ0cmltIiwiZ2V0QkJveCIsIm1heCIsIkltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNyYyIsImdldFRvdGFsTGVuZ3RoIiwiaW5pdGVkIiwic2V0IiwidW5kZWZpbmVkIiwidHJhbnNpdGlvbiIsInZhbHVlIiwiZGVzIiwidGltZSIsImVhc2UiLCJiIiwiYyIsImRvVHJhbnNpdGlvbiIsImR2IiwiZHQiLCJub2RlIiwidGV4dENvbnRlbnQiLCJyb3VuZCIsInN0YXJ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsImxlbiQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9iaiIsIm93biIsImhhc093blByb3BlcnR5Iiwib3V0JCIsInJhaW5ib3ciLCJlbmVyZ3kiLCJsaW5lIiwiZmFuIiwiY2lyY2xlIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJpdGVtIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiX2kiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJhcnIyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9zIiwiX2UiLCJuZXh0IiwiZG9uZSIsImVyciIsImlzQXJyYXkiLCJfaXRlbSIsImNzc01hcHBpbmciLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImhvc3Rlc3NlcyIsImludGVydmFscyIsIlNoaW55IiwiYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIiLCJvcHRzIiwiaW5maW5pdGUiLCJpbmMiLCJlbmQiLCJzZXRJbnRlcnZhbCIsIk51bWJlciIsIkVQU0lMT04iLCJub3RpZiIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwibm90aWZpY2F0aW9uIiwicG9zIiwicG9zaXRpb25fdG9fY29vcmRzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJ0b3AiLCJjb2xvciIsInRleHRfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwiaW5uZXJIVE1MIiwiaHRtbCIsInpJbmRleCIsImNsYXNzTGlzdCIsImJhciIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwiYmFzZV95IiwiY3VycmVudF9ub3RpZmljYXRpb25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=