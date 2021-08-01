(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hostess"] = factory();
	else
		root["hostess"] = factory();
})(self, function() {
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
presets = __webpack_require__(/*! ./presets */ "./node_modules/@loadingio/loading-bar/lib/presets.js").presets;

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
/* harmony import */ var _style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js!./loading-bar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@loadingio/loading-bar/dist/loading-bar.css");

      
      
      
      
      
      
      

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
    var target = _style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_4__.default && _css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _css_loader_dist_cjs_js_loading_bar_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


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
/*!***************************************!*\
  !*** ./srcjs/exts/hostess/hostess.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadingio_loading_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadingio/loading-bar */ "./node_modules/@loadingio/loading-bar/lib/loading-bar.js");
/* harmony import */ var _loadingio_loading_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadingio_loading_bar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadingio_loading_bar_dist_loading_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadingio/loading-bar/dist/loading-bar.css */ "./node_modules/@loadingio/loading-bar/dist/loading-bar.css");


var hostesses = [];
var intervals = [];
Shiny.addCustomMessageHandler('hostess-init', opts => {
  hostesses[opts.id] = new _loadingio_loading_bar__WEBPACK_IMPORTED_MODULE_0__.ldBar("#" + opts.id);

  if (opts.infinite) {
    var value = 0,
        inc = 0,
        end = 100;
    intervals[opts.id] = setInterval(function () {
      inc = (end - value) / (end + value);
      value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000;
      hostesses[opts.id].set(value);
    }, 350);
  }
});
Shiny.addCustomMessageHandler('hostess-set', opts => {
  hostesses[opts.id].set(opts.value);

  if (opts.value == 100) {
    let notif = document.getElementById(opts.id);
    if (notif != undefined) notif.remove();
  }
});
Shiny.addCustomMessageHandler('hostess-notify', opts => {
  // create div
  let notification = document.createElement("DIV"); // position div

  let pos = position_to_coords(opts.position);
  notification.style.bottom = pos.bottom;
  notification.style.right = pos.right;
  notification.style.left = pos.left;
  notification.style.top = pos.top;
  notification.height = '100px';
  notification.style.color = opts.text_color;
  notification.style.backgroundColor = opts.background_color;
  notification.style.position = "fixed";
  notification.innerHTML = opts.html;
  notification.style.zIndex = 999;
  notification.id = opts.id;
  notification.classList.add("waitress-notification");
  document.body.appendChild(notification);
  hostesses[opts.id] = new _loadingio_loading_bar__WEBPACK_IMPORTED_MODULE_0__.ldBar("#" + opts.id);

  if (opts.infinite) {
    var value = 0,
        inc = 0,
        end = 100;
    intervals[opts.id] = setInterval(function () {
      inc = (end - value) / (end + value);
      value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000;
      hostesses[opts.id].set(value);
    }, 350);
  }
});
Shiny.addCustomMessageHandler('hostess-end', opts => {
  let bar = document.getElementById(opts.id);

  if (opts.infinite) {
    clearInterval(intervals[opts.id]);
    hostesses[opts.id].set(95);
  }

  if (bar != undefined) // small delay to allow the loading bar to end
    setTimeout(function () {
      bar.remove();
    }, 350);
});

const position_to_coords = position => {
  let pos = {};
  let base_y = 100;
  let current_notifications = document.getElementsByClassName("waitress-notification");

  for (let n of current_notifications) {
    base_y = base_y + 100 + n.offsetHeight;
  }

  if (position == "bl") {
    pos.top = "auto";
    pos.bottom = base_y + 10 + 'px';
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl") {
    pos.top = base_y + 10 + 'px';
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
};
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AbG9hZGluZ2lvL2xvYWRpbmctYmFyL2xpYi9sb2FkaW5nLWJhci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGxvYWRpbmdpby9sb2FkaW5nLWJhci9saWIvcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AbG9hZGluZ2lvL2xvYWRpbmctYmFyL2Rpc3QvbG9hZGluZy1iYXIuY3NzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AbG9hZGluZ2lvL2xvYWRpbmctYmFyL2Rpc3QvbG9hZGluZy1iYXIuY3NzPzYwODUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1tuYW1lXS8uL3NyY2pzL2V4dHMvaG9zdGVzcy9ob3N0ZXNzLmpzIl0sIm5hbWVzIjpbInByZXNldHMiLCJzaW1wbGVTdHIiLCJ3cmFwIiwic2xpY2UkIiwic2xpY2UiLCJ0b1N0cmluZyQiLCJ0b1N0cmluZyIsInJlcXVpcmUiLCJhcnIiLCJqb2luIiwiY29udGVudCIsImJ0b2EiLCJtYWtlIiwiaGFuZGxlciIsImxkQmFyIiwiaGVhZCIsInZpZXdCb3giLCJncmFkaWVudCIsImRpciIsImR1ciIsImNvbG9ycyIsInJldCIsImxlbiIsImd4IiwiZ3kiLCJ4IiwieSIsImkkIiwiaSIsImlkeCIsImNhbGwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJNYXRoIiwiUEkiLCJwb3ciLCJjb3MiLCJzcXJ0Iiwic2luIiwicHVzaCIsInN0cmlwZSIsImMxIiwiYzIiLCJjb25jYXQiLCJyZXN1bHRzJCIsImJ1YmJsZSIsImNvdW50Iiwic2l6ZSIsInN3IiwiciIsImQiLCJyYW5kb20iLCJxdWV1ZSIsInJ1bm5pbmciLCJtYWluIiwidGltZXN0YW1wIiwia2VlcG9uIiwicmVtb3ZlZCIsImsiLCJyZWYkIiwiZnVuYyIsInRoaXMkIiwiaW5kZXhPZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIml0IiwiYWRkIiwia2V5IiwiZiIsIndpbmRvdyIsInNlbGVjdG9yIiwib3B0aW9uIiwieG1sbnMiLCJyb290IiwiY2xzIiwiaWRQcmVmaXgiLCJpZCIsImRvbVRyZWUiLCJuZXdOb2RlIiwieCQiLCJjb25maWciLCJhdHRyIiwidGhhdCIsImlzU3Ryb2tlIiwicGFyc2VSZXMiLCJkb20iLCJzdmciLCJ0ZXh0IiwiZ3JvdXAiLCJwYXRoMCIsInBhdGgxIiwicGF0aW1nIiwiaW1nIiwieGxpbmsiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzdWJzdHJpbmciLCJjbGlwIiwiZmlsdGVyIiwicGF0dGVybiIsIm1hc2siLCJtYXNrUGF0aCIsIm4iLCJvIiwidiIsImFwcGVuZENoaWxkIiwiYXR0cnMiLCJjcmVhdGVFbGVtZW50TlMiLCJib2R5IiwiX19wcm90b19fIiwidCIsImNyZWF0ZVRleHROb2RlIiwiZXhlYyIsInNldEF0dHJpYnV0ZU5TIiwic3R5bGVzIiwic3R5bGUiLCJhcHBlbmQiLCJwcmVzZXQiLCJpbXBvcnQkIiwicGF0aCIsInR5cGUiLCJwYXJzZXIiLCJhcHBseSIsInNwbGl0IiwiZmlsbCIsInN0cm9rZSIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJ3aWR0aCIsImhlaWdodCIsImRlZnMiLCJmZU1vcnBob2xvZ3kiLCJvcGVyYXRvciIsInJhZGl1cyIsImFicyIsImZlQ29sb3JNYXRyaXgiLCJ2YWx1ZXMiLCJyZXN1bHQiLCJpbWFnZSIsImciLCJjbGlwUGF0aCIsInJlY3QiLCJwYXR0ZXJuVW5pdHMiLCJjcmVhdGVFbGVtZW50IiwiZml0IiwiYm94IiwibWFwIiwidHJpbSIsImdldEJCb3giLCJtYXgiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcmMiLCJnZXRUb3RhbExlbmd0aCIsImluaXRlZCIsInNldCIsInVuZGVmaW5lZCIsInRyYW5zaXRpb24iLCJ2YWx1ZSIsImRlcyIsInRpbWUiLCJlYXNlIiwiYiIsImMiLCJkb1RyYW5zaXRpb24iLCJkdiIsImR0Iiwibm9kZSIsInRleHRDb250ZW50Iiwicm91bmQiLCJzdGFydCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJsZW4kIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmoiLCJvd24iLCJoYXNPd25Qcm9wZXJ0eSIsIm91dCQiLCJyYWluYm93IiwiZW5lcmd5IiwibGluZSIsImZhbiIsImNpcmNsZSIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwiaXRlbSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsIl9pIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiYXJyMiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwibmV4dCIsImRvbmUiLCJlcnIiLCJpc0FycmF5IiwiX2l0ZW0iLCJjc3NNYXBwaW5nIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJob3N0ZXNzZXMiLCJpbnRlcnZhbHMiLCJTaGlueSIsImFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyIiwib3B0cyIsImluZmluaXRlIiwiaW5jIiwiZW5kIiwic2V0SW50ZXJ2YWwiLCJOdW1iZXIiLCJFUFNJTE9OIiwibm90aWYiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsIm5vdGlmaWNhdGlvbiIsInBvcyIsInBvc2l0aW9uX3RvX2Nvb3JkcyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidG9wIiwiY29sb3IiLCJ0ZXh0X2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsImlubmVySFRNTCIsImh0bWwiLCJ6SW5kZXgiLCJjbGFzc0xpc3QiLCJiYXIiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImJhc2VfeSIsImN1cnJlbnRfbm90aWZpY2F0aW9ucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQSxJQUFJQSxPQUFKO0FBQUEsSUFBYUMsU0FBYjtBQUFBLElBQXdCQyxJQUF4QjtBQUFBLElBQThCQyxNQUFNLEdBQUcsR0FBR0MsS0FBMUM7QUFBQSxJQUFpREMsU0FBUyxHQUFHLEdBQUdDLFFBQWhFO0FBQ0FOLE9BQU8sR0FBR08sb0dBQVY7O0FBQ0FOLFNBQVMsR0FBRyxVQUFTTyxHQUFULEVBQWE7QUFDdkIsU0FBT0EsR0FBRyxDQUFDQyxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0QsQ0FGRDs7QUFHQVAsSUFBSSxHQUFHLFVBQVNRLE9BQVQsRUFBaUI7QUFDdEIsU0FBTywrQkFBK0JDLElBQUksQ0FBQ0QsT0FBRCxDQUExQztBQUNELENBRkQ7O0FBR0EsQ0FBQyxZQUFVO0FBQ1QsTUFBSUUsSUFBSixFQUFVQyxPQUFWLEVBQW1CQyxLQUFuQjtBQUNBRixNQUFJLEdBQUc7QUFDTEcsUUFBSSxFQUFFLFVBQVNDLE9BQVQsRUFBaUI7QUFDckIsYUFBTyw2R0FBNkdBLE9BQTdHLEdBQXVILEtBQTlIO0FBQ0QsS0FISTtBQUlMQyxZQUFRLEVBQUUsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQWtCO0FBQzFCLFVBQUlDLE1BQUosRUFBWUMsR0FBWixFQUFpQkMsR0FBakIsRUFBc0JDLEVBQXRCLEVBQTBCQyxFQUExQixFQUE4QkMsQ0FBOUIsRUFBaUNDLENBQWpDLEVBQW9DQyxFQUFwQyxFQUF3Q0Ms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b3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJob3N0ZXNzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImhvc3Rlc3NcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJ2YXIgcHJlc2V0cywgc2ltcGxlU3RyLCB3cmFwLCBzbGljZSQgPSBbXS5zbGljZSwgdG9TdHJpbmckID0ge30udG9TdHJpbmc7XG5wcmVzZXRzID0gcmVxdWlyZSgnLi9wcmVzZXRzJykucHJlc2V0cztcbnNpbXBsZVN0ciA9IGZ1bmN0aW9uKGFycil7XG4gIHJldHVybiBhcnIuam9pbignJyk7XG59O1xud3JhcCA9IGZ1bmN0aW9uKGNvbnRlbnQpe1xuICByZXR1cm4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgYnRvYShjb250ZW50KTtcbn07XG4oZnVuY3Rpb24oKXtcbiAgdmFyIG1ha2UsIGhhbmRsZXIsIGxkQmFyO1xuICBtYWtlID0ge1xuICAgIGhlYWQ6IGZ1bmN0aW9uKHZpZXdCb3gpe1xuICAgICAgcmV0dXJuIFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiPz5cXG4gICAgICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCJcIiArIHZpZXdCb3ggKyBcIlxcXCI+XCI7XG4gICAgfSxcbiAgICBncmFkaWVudDogZnVuY3Rpb24oZGlyLCBkdXIpe1xuICAgICAgdmFyIGNvbG9ycywgcmV0LCBsZW4sIGd4LCBneSwgeCwgeSwgaSQsIGksIGlkeDtcbiAgICAgIGRpciA9PSBudWxsICYmIChkaXIgPSA0NSk7XG4gICAgICBkdXIgPT0gbnVsbCAmJiAoZHVyID0gMSk7XG4gICAgICBjb2xvcnMgPSBzbGljZSQuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgcmV0ID0gW3RoaXMuaGVhZChcIjAgMCAxMDAgMTAwXCIpXTtcbiAgICAgIGxlbiA9IGNvbG9ycy5sZW5ndGggKiA0ICsgMTtcbiAgICAgIGRpciA9IGRpciAqIE1hdGguUEkgLyAxODA7XG4gICAgICBneCA9IE1hdGgucG93KE1hdGguY29zKGRpciksIDIpO1xuICAgICAgZ3kgPSBNYXRoLnNxcnQoZ3ggLSBNYXRoLnBvdyhneCwgMikpO1xuICAgICAgaWYgKGRpciA+IE1hdGguUEkgKiAwLjI1KSB7XG4gICAgICAgIGd5ID0gTWF0aC5wb3coTWF0aC5zaW4oZGlyKSwgMik7XG4gICAgICAgIGd4ID0gTWF0aC5zcXJ0KGd5IC0gTWF0aC5wb3coZ3ksIDIpKTtcbiAgICAgIH1cbiAgICAgIHggPSBneCAqIDEwMDtcbiAgICAgIHkgPSBneSAqIDEwMDtcbiAgICAgIHJldC5wdXNoKFwiPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVxcXCJncmFkaWVudFxcXCIgeDE9XFxcIjBcXFwiIHgyPVxcXCJcIiArIGd4ICsgXCJcXFwiIHkxPVxcXCIwXFxcIiB5Mj1cXFwiXCIgKyBneSArIFwiXFxcIj5cIik7XG4gICAgICBmb3IgKGkkID0gMDsgaSQgPCBsZW47ICsraSQpIHtcbiAgICAgICAgaSA9IGkkO1xuICAgICAgICBpZHggPSBpICogMTAwIC8gKGxlbiAtIDEpO1xuICAgICAgICByZXQucHVzaChcIjxzdG9wIG9mZnNldD1cXFwiXCIgKyBpZHggKyBcIiVcXFwiIHN0b3AtY29sb3I9XFxcIlwiICsgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXSArIFwiXFxcIi8+XCIpO1xuICAgICAgfVxuICAgICAgcmV0LnB1c2goXCI8L2xpbmVhckdyYWRpZW50PjwvZGVmcz5cXG48cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiNDAwXFxcIiBoZWlnaHQ9XFxcIjQwMFxcXCIgZmlsbD1cXFwidXJsKCNncmFkaWVudClcXFwiPlxcbjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwidHJhbnNsYXRlXFxcIiBmcm9tPVxcXCItXCIgKyB4ICsgXCIsLVwiICsgeSArIFwiXFxcIlxcbnRvPVxcXCIwLDBcXFwiIGR1cj1cXFwiXCIgKyBkdXIgKyBcInNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIi8+PC9yZWN0Pjwvc3ZnPlwiKTtcbiAgICAgIHJldHVybiB3cmFwKHJldC5qb2luKFwiXCIpKTtcbiAgICB9LFxuICAgIHN0cmlwZTogZnVuY3Rpb24oYzEsIGMyLCBkdXIpe1xuICAgICAgdmFyIHJldCwgaTtcbiAgICAgIGMxID09IG51bGwgJiYgKGMxID0gJyNiNGI0YjQnKTtcbiAgICAgIGMyID09IG51bGwgJiYgKGMyID0gJyNlNmU2ZTYnKTtcbiAgICAgIGR1ciA9PSBudWxsICYmIChkdXIgPSAxKTtcbiAgICAgIHJldCA9IFt0aGlzLmhlYWQoXCIwIDAgMTAwIDEwMFwiKV07XG4gICAgICByZXQgPSByZXQuY29uY2F0KFtcbiAgICAgICAgXCI8cmVjdCBmaWxsPVxcXCJcIiArIGMyICsgXCJcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIi8+XCIsIFwiPGc+PGc+XCIsIChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBpJCwgcmVzdWx0cyQgPSBbXTtcbiAgICAgICAgICBmb3IgKGkkID0gMDsgaSQgPCAxMzsgKytpJCkge1xuICAgICAgICAgICAgaSA9IGkkO1xuICAgICAgICAgICAgcmVzdWx0cyQucHVzaCgoXCI8cG9seWdvbiBmaWxsPVxcXCJcIiArIGMxICsgXCJcXFwiIFwiKSArIChcInBvaW50cz1cXFwiXCIgKyAoLTkwICsgaSAqIDIwKSArIFwiLDEwMCBcIiArICgtMTAwICsgaSAqIDIwKSArIFwiLFwiKSArIChcIjEwMCBcIiArICgtNjAgKyBpICogMjApICsgXCIsMCBcIiArICgtNTAgKyBpICogMjApICsgXCIsMCBcXFwiLz5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cyQ7XG4gICAgICAgIH0oKSkuam9pbihcIlwiKSwgXCI8L2c+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJ0cmFuc2xhdGVcXFwiIFwiLCBcImZyb209XFxcIjAsMFxcXCIgdG89XFxcIjIwLDBcXFwiIGR1cj1cXFwiXCIgKyBkdXIgKyBcInNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIi8+PC9nPjwvc3ZnPlwiXG4gICAgICBdLmpvaW4oXCJcIikpO1xuICAgICAgcmV0dXJuIHdyYXAocmV0KTtcbiAgICB9LFxuICAgIGJ1YmJsZTogZnVuY3Rpb24oYzEsIGMyLCBjb3VudCwgZHVyLCBzaXplLCBzdyl7XG4gICAgICB2YXIgcmV0LCBpJCwgaSwgaWR4LCB4LCByLCBkO1xuICAgICAgYzEgPT0gbnVsbCAmJiAoYzEgPSAnIzM5ZCcpO1xuICAgICAgYzIgPT0gbnVsbCAmJiAoYzIgPSAnIzljZicpO1xuICAgICAgY291bnQgPT0gbnVsbCAmJiAoY291bnQgPSAxNSk7XG4gICAgICBkdXIgPT0gbnVsbCAmJiAoZHVyID0gMSk7XG4gICAgICBzaXplID09IG51bGwgJiYgKHNpemUgPSA2KTtcbiAgICAgIHN3ID09IG51bGwgJiYgKHN3ID0gMSk7XG4gICAgICByZXQgPSBbdGhpcy5oZWFkKFwiMCAwIDIwMCAyMDBcIiksIFwiPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiIGZpbGw9XFxcIlwiICsgYzEgKyBcIlxcXCIvPlwiXTtcbiAgICAgIGZvciAoaSQgPSAwOyBpJCA8IGNvdW50OyArK2kkKSB7XG4gICAgICAgIGkgPSBpJDtcbiAgICAgICAgaWR4ID0gLShpIC8gY291bnQpICogZHVyO1xuICAgICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIDE4NCArIDg7XG4gICAgICAgIHIgPSAoTWF0aC5yYW5kb20oKSAqIDAuNyArIDAuMykgKiBzaXplO1xuICAgICAgICBkID0gZHVyICogKDEgKyBNYXRoLnJhbmRvbSgpICogMC41KTtcbiAgICAgICAgcmV0LnB1c2goW1wiPGNpcmNsZSBjeD1cXFwiXCIgKyB4ICsgXCJcXFwiIGN5PVxcXCIwXFxcIiByPVxcXCJcIiArIHIgKyBcIlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJcIiArIGMyICsgXCJcXFwiIHN0cm9rZS13aWR0aD1cXFwiXCIgKyBzdyArIFwiXFxcIj5cIiwgXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeVxcXCIgdmFsdWVzPVxcXCIxOTA7LTEwXFxcIiB0aW1lcz1cXFwiMDsxXFxcIiBcIiwgXCJkdXI9XFxcIlwiICsgZCArIFwic1xcXCIgYmVnaW49XFxcIlwiICsgaWR4ICsgXCJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIvPlwiLCBcIjwvY2lyY2xlPlwiLCBcIjxjaXJjbGUgY3g9XFxcIlwiICsgeCArIFwiXFxcIiBjeT1cXFwiMFxcXCIgcj1cXFwiXCIgKyByICsgXCJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiXCIgKyBjMiArIFwiXFxcIiBzdHJva2Utd2lkdGg9XFxcIlwiICsgc3cgKyBcIlxcXCI+XCIsIFwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3lcXFwiIHZhbHVlcz1cXFwiMzkwOzE5MFxcXCIgdGltZXM9XFxcIjA7MVxcXCIgXCIsIFwiZHVyPVxcXCJcIiArIGQgKyBcInNcXFwiIGJlZ2luPVxcXCJcIiArIGlkeCArIFwic1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiLz5cIiwgXCI8L2NpcmNsZT5cIl0uam9pbihcIlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd3JhcChyZXQuam9pbihcIlwiKSArIFwiPC9zdmc+XCIpO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlciA9IHtcbiAgICBxdWV1ZToge30sXG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgbWFpbjogZnVuY3Rpb24odGltZXN0YW1wKXtcbiAgICAgIHZhciBrZWVwb24sIHJlbW92ZWQsIGssIHJlZiQsIGZ1bmMsIHJldCwgdGhpcyQgPSB0aGlzO1xuICAgICAga2VlcG9uID0gZmFsc2U7XG4gICAgICByZW1vdmVkID0gW107XG4gICAgICBmb3IgKGsgaW4gcmVmJCA9IHRoaXMucXVldWUpIHtcbiAgICAgICAgZnVuYyA9IHJlZiRba107XG4gICAgICAgIHJldCA9IGZ1bmModGltZXN0YW1wKTtcbiAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICByZW1vdmVkLnB1c2goZnVuYyk7XG4gICAgICAgIH1cbiAgICAgICAga2VlcG9uID0ga2VlcG9uIHx8IHJldDtcbiAgICAgIH1cbiAgICAgIGZvciAoayBpbiByZWYkID0gdGhpcy5xdWV1ZSkge1xuICAgICAgICBmdW5jID0gcmVmJFtrXTtcbiAgICAgICAgaWYgKHJlbW92ZWQuaW5kZXhPZihmdW5jKSA+PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucXVldWVba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrZWVwb24pIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbihpdCl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMkLm1haW4oaXQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oa2V5LCBmKXtcbiAgICAgIHZhciB0aGlzJCA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMucXVldWVba2V5XSkge1xuICAgICAgICB0aGlzLnF1ZXVlW2tleV0gPSBmO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbihpdCl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMkLm1haW4oaXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHdpbmRvdy5sZEJhciA9IGxkQmFyID0gZnVuY3Rpb24oc2VsZWN0b3IsIG9wdGlvbil7XG4gICAgdmFyIHhtbG5zLCByb290LCBjbHMsIGlkUHJlZml4LCBpZCwgZG9tVHJlZSwgbmV3Tm9kZSwgeCQsIGNvbmZpZywgYXR0ciwgdGhhdCwgaXNTdHJva2UsIHBhcnNlUmVzLCBkb20sIHN2ZywgdGV4dCwgZ3JvdXAsIGxlbmd0aCwgcGF0aDAsIHBhdGgxLCBwYXRpbWcsIGltZywgcmV0LCBzaXplLCB0aGlzJCA9IHRoaXM7XG4gICAgb3B0aW9uID09IG51bGwgJiYgKG9wdGlvbiA9IHt9KTtcbiAgICB4bWxucyA9IHtcbiAgICAgIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgIH07XG4gICAgcm9vdCA9IHRvU3RyaW5nJC5jYWxsKHNlbGVjdG9yKS5zbGljZSg4LCAtMSkgPT09ICdTdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICBpZiAoIXJvb3QubGRCYXIpIHtcbiAgICAgIHJvb3QubGRCYXIgPSB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm9vdC5sZEJhcjtcbiAgICB9XG4gICAgY2xzID0gcm9vdC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgaWYgKCF+Y2xzLmluZGV4T2YoJ2xkQmFyJykpIHtcbiAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyArIFwiIGxkQmFyXCIpO1xuICAgIH1cbiAgICBpZFByZWZpeCA9IFwibGRCYXItXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMik7XG4gICAgaWQgPSB7XG4gICAgICBrZXk6IGlkUHJlZml4LFxuICAgICAgY2xpcDogaWRQcmVmaXggKyBcIi1jbGlwXCIsXG4gICAgICBmaWx0ZXI6IGlkUHJlZml4ICsgXCItZmlsdGVyXCIsXG4gICAgICBwYXR0ZXJuOiBpZFByZWZpeCArIFwiLXBhdHRlcm5cIixcbiAgICAgIG1hc2s6IGlkUHJlZml4ICsgXCItbWFza1wiLFxuICAgICAgbWFza1BhdGg6IGlkUHJlZml4ICsgXCItbWFzay1wYXRoXCJcbiAgICB9O1xuICAgIGRvbVRyZWUgPSBmdW5jdGlvbihuLCBvKXtcbiAgICAgIHZhciBrLCB2O1xuICAgICAgbiA9IG5ld05vZGUobik7XG4gICAgICBmb3IgKGsgaW4gbykge1xuICAgICAgICB2ID0gb1trXTtcbiAgICAgICAgaWYgKGsgIT09ICdhdHRyJykge1xuICAgICAgICAgIG4uYXBwZW5kQ2hpbGQoZG9tVHJlZShrLCB2IHx8IHt9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG4uYXR0cnMoby5hdHRyIHx8IHt9KTtcbiAgICAgIHJldHVybiBuO1xuICAgIH07XG4gICAgbmV3Tm9kZSA9IGZ1bmN0aW9uKG4pe1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG4pO1xuICAgIH07XG4gICAgeCQgPSBkb2N1bWVudC5ib2R5Ll9fcHJvdG9fXy5fX3Byb3RvX18uX19wcm90b19fO1xuICAgIHgkLnRleHQgPSBmdW5jdGlvbih0KXtcbiAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKTtcbiAgICB9O1xuICAgIHgkLmF0dHJzID0gZnVuY3Rpb24obyl7XG4gICAgICB2YXIgaywgdiwgcmV0LCByZXN1bHRzJCA9IFtdO1xuICAgICAgZm9yIChrIGluIG8pIHtcbiAgICAgICAgdiA9IG9ba107XG4gICAgICAgIHJldCA9IC8oW146XSspOihbXjpdKykvLmV4ZWMoayk7XG4gICAgICAgIGlmICghcmV0IHx8ICF4bWxuc1tyZXRbMV1dKSB7XG4gICAgICAgICAgcmVzdWx0cyQucHVzaCh0aGlzLnNldEF0dHJpYnV0ZShrLCB2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cyQucHVzaCh0aGlzLnNldEF0dHJpYnV0ZU5TKHhtbG5zW3JldFsxXV0sIGssIHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMkO1xuICAgIH07XG4gICAgeCQuc3R5bGVzID0gZnVuY3Rpb24obyl7XG4gICAgICB2YXIgaywgdiwgcmVzdWx0cyQgPSBbXTtcbiAgICAgIGZvciAoayBpbiBvKSB7XG4gICAgICAgIHYgPSBvW2tdO1xuICAgICAgICByZXN1bHRzJC5wdXNoKHRoaXMuc3R5bGVba10gPSB2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzJDtcbiAgICB9O1xuICAgIHgkLmFwcGVuZCA9IGZ1bmN0aW9uKG4pe1xuICAgICAgdmFyIHI7XG4gICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vZy8yMDAwL3N2Z1wiLCBuKSk7XG4gICAgfTtcbiAgICB4JC5hdHRyID0gZnVuY3Rpb24obiwgdil7XG4gICAgICBpZiAodiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEF0dHJpYnV0ZShuLCB2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJyxcbiAgICAgIFwiaW1nXCI6ICcnLFxuICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnLFxuICAgICAgXCJmaWxsLWRpclwiOiAnYnR0JyxcbiAgICAgIFwiZmlsbFwiOiAnIzI1YicsXG4gICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiAnI2RkZCcsXG4gICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDMsXG4gICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsLFxuICAgICAgXCJzdHJva2UtZGlyXCI6ICdub3JtYWwnLFxuICAgICAgXCJzdHJva2VcIjogJyMyNWInLFxuICAgICAgXCJzdHJva2Utd2lkdGhcIjogJzMnLFxuICAgICAgXCJzdHJva2UtdHJhaWxcIjogJyNkZGQnLFxuICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41LFxuICAgICAgXCJkdXJhdGlvblwiOiAxLFxuICAgICAgXCJlYXNpbmdcIjogJ2xpbmVhcicsXG4gICAgICBcInZhbHVlXCI6IDAsXG4gICAgICBcImltZy1zaXplXCI6IG51bGwsXG4gICAgICBcImJib3hcIjogbnVsbCxcbiAgICAgIFwic2V0LWRpbVwiOiB0cnVlLFxuICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJ4TWlkWU1pZFwiXG4gICAgfTtcbiAgICBjb25maWdbXCJwcmVzZXRcIl0gPSByb290LmF0dHIoXCJkYXRhLXByZXNldFwiKSB8fCBvcHRpb25bXCJwcmVzZXRcIl07XG4gICAgaWYgKGNvbmZpZy5wcmVzZXQgIT0gbnVsbCkge1xuICAgICAgaW1wb3J0JChjb25maWcsIHByZXNldHNbY29uZmlnLnByZXNldF0pO1xuICAgIH1cbiAgICBmb3IgKGF0dHIgaW4gY29uZmlnKSB7XG4gICAgICBpZiAodGhhdCA9IHRoYXQgPSByb290LmF0dHIoXCJkYXRhLVwiICsgYXR0cikpIHtcbiAgICAgICAgY29uZmlnW2F0dHJdID0gdGhhdDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW1wb3J0JChjb25maWcsIG9wdGlvbik7XG4gICAgaWYgKGNvbmZpZy5pbWcpIHtcbiAgICAgIGNvbmZpZy5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgaXNTdHJva2UgPSBjb25maWcudHlwZSA9PT0gJ3N0cm9rZSc7XG4gICAgcGFyc2VSZXMgPSBmdW5jdGlvbih2KXtcbiAgICAgIHZhciBwYXJzZXIsIHJldDtcbiAgICAgIHBhcnNlciA9IC9kYXRhOmxkYmFyXFwvcmVzLChbXigpXSspXFwoKFteKV0rKVxcKS87XG4gICAgICByZXQgPSBwYXJzZXIuZXhlYyh2KTtcbiAgICAgIGlmICghcmV0KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldCA9IG1ha2VbcmV0WzFdXS5hcHBseShtYWtlLCByZXRbMl0uc3BsaXQoJywnKSk7XG4gICAgfTtcbiAgICBjb25maWcuZmlsbCA9IHBhcnNlUmVzKGNvbmZpZy5maWxsKTtcbiAgICBjb25maWcuc3Ryb2tlID0gcGFyc2VSZXMoY29uZmlnLnN0cm9rZSk7XG4gICAgaWYgKGNvbmZpZ1tcInNldC1kaW1cIl0gPT09ICdmYWxzZScpIHtcbiAgICAgIGNvbmZpZ1tcInNldC1kaW1cIl0gPSBmYWxzZTtcbiAgICB9XG4gICAgZG9tID0ge1xuICAgICAgYXR0cjoge1xuICAgICAgICBcInhtbG5zOnhsaW5rXCI6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyxcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIH0sXG4gICAgICBkZWZzOiB7XG4gICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIGlkOiBpZC5maWx0ZXIsXG4gICAgICAgICAgICB4OiAtMSxcbiAgICAgICAgICAgIHk6IC0xLFxuICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICBoZWlnaHQ6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZlTW9ycGhvbG9neToge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICBvcGVyYXRvcjogK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdID49IDAgPyAnZGlsYXRlJyA6ICdlcm9kZScsXG4gICAgICAgICAgICAgIHJhZGl1czogTWF0aC5hYnMoK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVDb2xvck1hdHJpeDoge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICB2YWx1ZXM6ICcwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAxIDAnLFxuICAgICAgICAgICAgICByZXN1bHQ6IFwiY21cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWFzazoge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIGlkOiBpZC5tYXNrXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZyxcbiAgICAgICAgICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBpZC5maWx0ZXIgKyBcIilcIixcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZzoge1xuICAgICAgICAgIG1hc2s6IHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgaWQ6IGlkLm1hc2tQYXRoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGggfHwgXCJcIixcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBpZC5maWx0ZXIgKyBcIilcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGlwUGF0aDoge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIGlkOiBpZC5jbGlwXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICdjbGFzcyc6ICdtYXNrJyxcbiAgICAgICAgICAgICAgZmlsbDogJyMwMDAnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgaWQ6IGlkLnBhdHRlcm4sXG4gICAgICAgICAgICBwYXR0ZXJuVW5pdHM6ICd1c2VyU3BhY2VPblVzZScsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHN2ZyA9IGRvbVRyZWUoJ3N2ZycsIGRvbSk7XG4gICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsZEJhci1sYWJlbCcpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICByb290LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGdyb3VwID0gWzAsIDBdO1xuICAgIGxlbmd0aCA9IDA7XG4gICAgdGhpcy5maXQgPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQsIGJveCwgZCwgcmVjdDtcbiAgICAgIGlmICh0aGF0ID0gY29uZmlnW1wiYmJveFwiXSkge1xuICAgICAgICBib3ggPSB0aGF0LnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGl0KXtcbiAgICAgICAgICByZXR1cm4gK2l0LnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJveCA9IHtcbiAgICAgICAgICB4OiBib3hbMF0sXG4gICAgICAgICAgeTogYm94WzFdLFxuICAgICAgICAgIHdpZHRoOiBib3hbMl0sXG4gICAgICAgICAgaGVpZ2h0OiBib3hbM11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJveCA9IGdyb3VwWzFdLmdldEJCb3goKTtcbiAgICAgIH1cbiAgICAgIGlmICghYm94IHx8IGJveC53aWR0aCA9PT0gMCB8fCBib3guaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIGJveCA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIFsnc3Ryb2tlLXdpZHRoJywgJ3N0cm9rZS10cmFpbC13aWR0aCcsICdmaWxsLWJhY2tncm91bmQtZXh0cnVkZSddLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICAgIHJldHVybiBjb25maWdbaXRdO1xuICAgICAgfSkpICogMS41O1xuICAgICAgc3ZnLmF0dHJzKHtcbiAgICAgICAgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuICAgICAgfSk7XG4gICAgICBpZiAoY29uZmlnW1wic2V0LWRpbVwiXSkge1xuICAgICAgICBbJ3dpZHRoJywgJ2hlaWdodCddLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICAgICAgaWYgKCFyb290LnN0eWxlW2l0XSB8fCB0aGlzJC5maXRbaXRdKSB7XG4gICAgICAgICAgICByb290LnN0eWxlW2l0XSA9IChib3hbaXRdICsgZCAqIDIpICsgXCJweFwiO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMkLmZpdFtpdF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWN0ID0gZ3JvdXBbMF0ucXVlcnlTZWxlY3RvcigncmVjdCcpO1xuICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgcmV0dXJuIHJlY3QuYXR0cnMoe1xuICAgICAgICAgIHg6IGJveC54IC0gZCxcbiAgICAgICAgICB5OiBib3gueSAtIGQsXG4gICAgICAgICAgd2lkdGg6IGJveC53aWR0aCArIGQgKiAyLFxuICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGNvbmZpZy5wYXRoKSB7XG4gICAgICBpZiAoaXNTdHJva2UpIHtcbiAgICAgICAgZ3JvdXBbMF0gPSBkb21UcmVlKCdnJywge1xuICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGgsXG4gICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgJ2NsYXNzJzogJ2Jhc2VsaW5lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cFswXSA9IGRvbVRyZWUoJ2cnLCB7XG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgbWFzazogXCJ1cmwoI1wiICsgaWQubWFza1BhdGggKyBcIilcIixcbiAgICAgICAgICAgICAgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdLFxuICAgICAgICAgICAgICAnY2xhc3MnOiAnZnJhbWUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChncm91cFswXSk7XG4gICAgICBncm91cFsxXSA9IGRvbVRyZWUoJ2cnLCB7XG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICBkOiBjb25maWcucGF0aCxcbiAgICAgICAgICAgICdjbGFzcyc6IGlzU3Ryb2tlID8gJ21haW5saW5lJyA6ICdzb2xpZCcsXG4gICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBjb25maWcudHlwZSA9PT0gJ2ZpbGwnID8gXCJ1cmwoI1wiICsgaWQuY2xpcCArIFwiKVwiIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKGdyb3VwWzFdKTtcbiAgICAgIHBhdGgwID0gZ3JvdXBbMF0ucXVlcnlTZWxlY3Rvcihpc1N0cm9rZSA/ICdwYXRoJyA6ICdyZWN0Jyk7XG4gICAgICBwYXRoMSA9IGdyb3VwWzFdLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgICBwYXRoMS5hdHRycyh7XG4gICAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGF0aW1nID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3BhdHRlcm4gaW1hZ2UnKTtcbiAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYm94LCB0aGF0O1xuICAgICAgICBib3ggPSAodGhhdCA9IGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSlcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIHdpZHRoOiArdGhhdCxcbiAgICAgICAgICAgIGhlaWdodDogK3RoYXRcbiAgICAgICAgICB9XG4gICAgICAgICAgOiBpbWcud2lkdGggJiYgaW1nLmhlaWdodFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBzdmcucXVlcnlTZWxlY3RvcigncGF0dGVybicpLmF0dHJzKHtcbiAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhdGltZy5hdHRycyh7XG4gICAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICgvLitcXC4uK3xeZGF0YTovLmV4ZWMoIWlzU3Ryb2tlXG4gICAgICAgID8gY29uZmlnLmZpbGxcbiAgICAgICAgOiBjb25maWcuc3Ryb2tlKSkge1xuICAgICAgICBpbWcuc3JjID0gIWlzU3Ryb2tlXG4gICAgICAgICAgPyBjb25maWcuZmlsbFxuICAgICAgICAgIDogY29uZmlnLnN0cm9rZTtcbiAgICAgICAgcGF0aW1nLmF0dHJzKHtcbiAgICAgICAgICBcInhsaW5rOmhyZWZcIjogaW1nLnNyY1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgICBwYXRoMC5hdHRycyh7XG4gICAgICAgICAgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sXG4gICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXRyYWlsLXdpZHRoXCJdXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoMS5hdHRycyh7XG4gICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXdpZHRoXCJdLFxuICAgICAgICAgIHN0cm9rZTogLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5zdHJva2UpXG4gICAgICAgICAgICA/IFwidXJsKCNcIiArIGlkLnBhdHRlcm4gKyBcIilcIlxuICAgICAgICAgICAgOiBjb25maWcuc3Ryb2tlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5maWxsICYmICFpc1N0cm9rZSkge1xuICAgICAgICBwYXRoMS5hdHRycyh7XG4gICAgICAgICAgZmlsbDogLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5maWxsKVxuICAgICAgICAgICAgPyBcInVybCgjXCIgKyBpZC5wYXR0ZXJuICsgXCIpXCJcbiAgICAgICAgICAgIDogY29uZmlnLmZpbGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCgpO1xuICAgICAgdGhpcy5maXQoKTtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbWcpIHtcbiAgICAgIGlmIChjb25maWdbXCJpbWctc2l6ZVwiXSkge1xuICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdCgnLCcpO1xuICAgICAgICBzaXplID0ge1xuICAgICAgICAgIHdpZHRoOiArcmV0WzBdLFxuICAgICAgICAgIGhlaWdodDogK3JldFsxXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2l6ZSA9IHtcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBncm91cFswXSA9IGRvbVRyZWUoJ2cnLCB7XG4gICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIG1hc2s6IFwidXJsKCNcIiArIGlkLm1hc2sgKyBcIilcIixcbiAgICAgICAgICAgIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzdmcucXVlcnlTZWxlY3RvcignbWFzayBpbWFnZScpLmF0dHJzKHtcbiAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgZ3JvdXBbMV0gPSBkb21UcmVlKCdnJywge1xuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodCxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdLFxuICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogY29uZmlnLnR5cGUgPT09ICdmaWxsJyA/IFwidXJsKCNcIiArIGlkLmNsaXAgKyBcIilcIiA6ICcnLFxuICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWcsXG4gICAgICAgICAgICAnY2xhc3MnOiAnc29saWQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgcmV0LCBzaXplO1xuICAgICAgICBpZiAoY29uZmlnW1wiaW1nLXNpemVcIl0pIHtcbiAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdCgnLCcpO1xuICAgICAgICAgIHNpemUgPSB7XG4gICAgICAgICAgICB3aWR0aDogK3JldFswXSxcbiAgICAgICAgICAgIGhlaWdodDogK3JldFsxXVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoaW1nLndpZHRoICYmIGltZy5oZWlnaHQpIHtcbiAgICAgICAgICBzaXplID0ge1xuICAgICAgICAgICAgd2lkdGg6IGltZy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IoJ21hc2sgaW1hZ2UnKS5hdHRycyh7XG4gICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXBbMV0ucXVlcnlTZWxlY3RvcignaW1hZ2UnKS5hdHRycyh7XG4gICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcyQuZml0KCk7XG4gICAgICAgIHRoaXMkLnNldCh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMkLmluaXRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIGltZy5zcmMgPSBjb25maWcuaW1nO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKGdyb3VwWzBdKTtcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChncm91cFsxXSk7XG4gICAgfVxuICAgIHN2Zy5hdHRycyh7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zaXRpb24gPSB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBzcmM6IDAsXG4gICAgICAgIGRlczogMFxuICAgICAgfSxcbiAgICAgIHRpbWU6IHt9LFxuICAgICAgZWFzZTogZnVuY3Rpb24odCwgYiwgYywgZCl7XG4gICAgICAgIHQgPSB0IC8gKGQgKiAwLjUpO1xuICAgICAgICBpZiAodCA8IDEpIHtcbiAgICAgICAgICByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYjtcbiAgICAgICAgfVxuICAgICAgICB0ID0gdCAtIDE7XG4gICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih0aW1lLCBkb1RyYW5zaXRpb24pe1xuICAgICAgICB2YXIgcmVmJCwgZHYsIGR0LCBkdXIsIHYsIG5vZGUsIHN0eWxlLCBib3gsIGRpcjtcbiAgICAgICAgZG9UcmFuc2l0aW9uID09IG51bGwgJiYgKGRvVHJhbnNpdGlvbiA9IHRydWUpO1xuICAgICAgICBpZiAodGhpcy50aW1lLnNyYyA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50aW1lLnNyYyA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVmJCA9IFt0aGlzLnZhbHVlLmRlcyAtIHRoaXMudmFsdWUuc3JjLCAodGltZSAtIHRoaXMudGltZS5zcmMpICogMC4wMDEsICtjb25maWdbXCJkdXJhdGlvblwiXSB8fCAxXSwgZHYgPSByZWYkWzBdLCBkdCA9IHJlZiRbMV0sIGR1ciA9IHJlZiRbMl07XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2ID0gZG9UcmFuc2l0aW9uXG4gICAgICAgICAgPyBNYXRoLnJvdW5kKHRoaXMuZWFzZShkdCwgdGhpcy52YWx1ZS5zcmMsIGR2LCBkdXIpKVxuICAgICAgICAgIDogdGhpcy52YWx1ZS5kZXM7XG4gICAgICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgICAgIG5vZGUgPSBwYXRoMTtcbiAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiOiBjb25maWdbXCJzdHJva2UtZGlyXCJdID09PSAncmV2ZXJzZSdcbiAgICAgICAgICAgICAgPyBcIjAgXCIgKyBsZW5ndGggKiAoMTAwIC0gdikgKiAwLjAxICsgXCIgXCIgKyBsZW5ndGggKiB2ICogMC4wMSArIFwiIDBcIlxuICAgICAgICAgICAgICA6IHYgKiAwLjAxICogbGVuZ3RoICsgXCIgXCIgKyAoKDEwMCAtIHYpICogMC4wMSAqIGxlbmd0aCArIDEpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3ggPSBncm91cFsxXS5nZXRCQm94KCk7XG4gICAgICAgICAgZGlyID0gY29uZmlnW1wiZmlsbC1kaXJcIl07XG4gICAgICAgICAgc3R5bGUgPSBkaXIgPT09ICdidHQnIHx8ICFkaXJcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB5OiBib3gueSArIGJveC5oZWlnaHQgKiAoMTAwIC0gdikgKiAwLjAxLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgKiB2ICogMC4wMSxcbiAgICAgICAgICAgICAgeDogYm94LngsXG4gICAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZGlyID09PSAndHRiJ1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB5OiBib3gueSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgKiB2ICogMC4wMSxcbiAgICAgICAgICAgICAgICB4OiBib3gueCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBkaXIgPT09ICdsdHInXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICB5OiBib3gueSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgIHg6IGJveC54LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIHYgKiAwLjAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZGlyID09PSAncnRsJyA/IHtcbiAgICAgICAgICAgICAgICAgIHk6IGJveC55LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gdikgKiAwLjAxLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIHYgKiAwLjAxXG4gICAgICAgICAgICAgICAgfSA6IHZvaWQgODtcbiAgICAgICAgICBub2RlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3JlY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmF0dHJzKHN0eWxlKTtcbiAgICAgICAgaWYgKGR0ID49IGR1cikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnRpbWUuc3JjO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBzdGFydDogZnVuY3Rpb24oc3JjLCBkZXMsIGRvVHJhbnNpdGlvbil7XG4gICAgICAgIHZhciByZWYkLCB0aGlzJCA9IHRoaXM7XG4gICAgICAgIHJlZiQgPSB0aGlzLnZhbHVlO1xuICAgICAgICByZWYkLnNyYyA9IHNyYztcbiAgICAgICAgcmVmJC5kZXMgPSBkZXM7XG4gICAgICAgICEhKHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG4gICAgICAgIGlmICghZG9UcmFuc2l0aW9uIHx8ICEocm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHRoaXMudGltZS5zcmMgPSAwO1xuICAgICAgICAgIHRoaXMuaGFuZGxlcigxMDAwLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyLmFkZChpZC5rZXksIGZ1bmN0aW9uKHRpbWUpe1xuICAgICAgICAgIHJldHVybiB0aGlzJC5oYW5kbGVyKHRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24odiwgZG9UcmFuc2l0aW9uKXtcbiAgICAgIHZhciBzcmMsIGRlcztcbiAgICAgIGRvVHJhbnNpdGlvbiA9PSBudWxsICYmIChkb1RyYW5zaXRpb24gPSB0cnVlKTtcbiAgICAgIHNyYyA9IHRoaXMudmFsdWUgfHwgMDtcbiAgICAgIGlmICh2ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGRlcyA9IHRoaXMudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnN0YXJ0KHNyYywgZGVzLCBkb1RyYW5zaXRpb24pO1xuICAgIH07XG4gICAgdGhpcy5zZXQoK2NvbmZpZy52YWx1ZSB8fCAwLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGkkLCByZWYkLCBsZW4kLCBub2RlLCByZXN1bHRzJCA9IFtdO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGRCYXInKSkubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIG5vZGUgPSByZWYkW2kkXTtcbiAgICAgIGlmICghbm9kZS5sZEJhcikge1xuICAgICAgICByZXN1bHRzJC5wdXNoKG5vZGUubGRCYXIgPSBuZXcgbGRCYXIobm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH0sIGZhbHNlKTtcbn0pKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGxkQmFyO1xuZnVuY3Rpb24gaW1wb3J0JChvYmosIHNyYyl7XG4gIHZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgaWYgKG93bi5jYWxsKHNyYywga2V5KSkgb2JqW2tleV0gPSBzcmNba2V5XTtcbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgcHJlc2V0cywgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbm91dCQucHJlc2V0cyA9IHByZXNldHMgPSB7XG4gIHJhaW5ib3c6IHtcbiAgICBcInR5cGVcIjogJ3N0cm9rZScsXG4gICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnLFxuICAgIFwic3Ryb2tlXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCgwLDEsI2E1NTFkZiwjZmQ1MWFkLCNmZjdmODIsI2ZmYjg3NCwjZmZlYjkwKScsXG4gICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICB9LFxuICBlbmVyZ3k6IHtcbiAgICBcInR5cGVcIjogJ2ZpbGwnLFxuICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnLFxuICAgIFwic3Ryb2tlXCI6ICcjZjAwJyxcbiAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDQ1LDIsIzRlOSwjOGZiLCM0ZTkpJyxcbiAgICBcImZpbGwtZGlyXCI6IFwibHRyXCIsXG4gICAgXCJmaWxsLWJhY2tncm91bmRcIjogJyM0NDQnLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMSxcbiAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgfSxcbiAgc3RyaXBlOiB7XG4gICAgXCJ0eXBlXCI6ICdmaWxsJyxcbiAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1JyxcbiAgICBcInN0cm9rZVwiOiAnI2YwMCcsXG4gICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxzdHJpcGUoIzI1YiwjNThlLDEpJyxcbiAgICBcImZpbGwtZGlyXCI6IFwibHRyXCIsXG4gICAgXCJmaWxsLWJhY2tncm91bmRcIjogJyNkZGQnLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMSxcbiAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgfSxcbiAgdGV4dDoge1xuICAgIFwidHlwZVwiOiAnZmlsbCcsXG4gICAgXCJpbWdcIjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI3MFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgdmlld0JveD1cXFwiMCAwIDcwIDIwXFxcIj48dGV4dCB4PVxcXCIzNVxcXCIgeT1cXFwiMTBcXFwiIHRleHQtYW5jaG9yPVxcXCJtaWRkbGVcXFwiIGRvbWluYW50LWJhc2VsaW5lPVxcXCJjZW50cmFsXFxcIiBmb250LWZhbWlseT1cXFwiYXJpYWxcXFwiPkxPQURJTkc8L3RleHQ+PC9zdmc+XCIsXG4gICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjMsXG4gICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwLFxuICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIixcbiAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIixcbiAgICBcImJib3hcIjogXCIwIDAgNzAgMjBcIlxuICB9LFxuICBsaW5lOiB7XG4gICAgXCJ0eXBlXCI6ICdzdHJva2UnLFxuICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJyxcbiAgICBcInN0cm9rZVwiOiAnIzI1YicsXG4gICAgXCJzdHJva2Utd2lkdGhcIjogMyxcbiAgICBcInN0cm9rZS10cmFpbFwiOiAnI2RkZCcsXG4gICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMSxcbiAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gIH0sXG4gIGZhbjoge1xuICAgIFwidHlwZVwiOiAnc3Ryb2tlJyxcbiAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCcsXG4gICAgXCJmaWxsLWRpclwiOiAnYnR0JyxcbiAgICBcImZpbGxcIjogJyMyNWInLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6ICcjZGRkJyxcbiAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDMsXG4gICAgXCJzdHJva2UtZGlyXCI6ICdub3JtYWwnLFxuICAgIFwic3Ryb2tlXCI6ICcjMjViJyxcbiAgICBcInN0cm9rZS13aWR0aFwiOiAnMycsXG4gICAgXCJzdHJva2UtdHJhaWxcIjogJyNkZGQnLFxuICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNSxcbiAgICBcImJib3hcIjogXCIxMCA1MCA4MCA0MFwiXG4gIH0sXG4gIGNpcmNsZToge1xuICAgIFwidHlwZVwiOiAnc3Ryb2tlJyxcbiAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCcsXG4gICAgXCJmaWxsLWRpclwiOiAnYnR0JyxcbiAgICBcImZpbGxcIjogJyMyNWInLFxuICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6ICcjZGRkJyxcbiAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDMsXG4gICAgXCJzdHJva2UtZGlyXCI6ICdub3JtYWwnLFxuICAgIFwic3Ryb2tlXCI6ICcjMjViJyxcbiAgICBcInN0cm9rZS13aWR0aFwiOiAnMycsXG4gICAgXCJzdHJva2UtdHJhaWxcIjogJyNkZGQnLFxuICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNSxcbiAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4gIH0sXG4gIGJ1YmJsZToge1xuICAgIFwidHlwZVwiOiAnZmlsbCcsXG4gICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnLFxuICAgIFwiZmlsbC1kaXJcIjogJ2J0dCcsXG4gICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxidWJibGUoIzM5ZCwjY2VmKScsXG4gICAgXCJwYXR0ZXJuLXNpemVcIjogXCIxNTBcIixcbiAgICBcImZpbGwtYmFja2dyb3VuZFwiOiAnI2RkZCcsXG4gICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAyLFxuICAgIFwic3Ryb2tlLWRpclwiOiAnbm9ybWFsJyxcbiAgICBcInN0cm9rZVwiOiAnIzI1YicsXG4gICAgXCJzdHJva2Utd2lkdGhcIjogJzMnLFxuICAgIFwic3Ryb2tlLXRyYWlsXCI6ICcjZGRkJyxcbiAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjUsXG4gICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxkQmFye3Bvc2l0aW9uOnJlbGF0aXZlO30ubGRCYXIubGFiZWwtY2VudGVyID4gLmxkQmFyLWxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtc2hhZG93OjAgMCAzcHggI2ZmZn0ubGRCYXItbGFiZWw6YWZ0ZXJ7Y29udGVudDpcXFwiJVxcXCI7ZGlzcGxheTppbmxpbmV9LmxkQmFyLm5vLXBlcmNlbnQgLmxkQmFyLWxhYmVsOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCJ9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bsb2FkaW5naW8vbG9hZGluZy1iYXIvZGlzdC9sb2FkaW5nLWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLG1DQUFtQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNDQUFzQyxDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLG1CQUFtQixXQUFXLENBQUMsY0FBYyxDQUFDLHFDQUFxQyxVQUFVXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZEJhcntwb3NpdGlvbjpyZWxhdGl2ZTt9LmxkQmFyLmxhYmVsLWNlbnRlciA+IC5sZEJhci1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0ZXh0LXNoYWRvdzowIDAgM3B4ICNmZmZ9LmxkQmFyLWxhYmVsOmFmdGVye2NvbnRlbnQ6XFxcIiVcXFwiO2Rpc3BsYXk6aW5saW5lfS5sZEJhci5uby1wZXJjZW50IC5sZEJhci1sYWJlbDphZnRlcntjb250ZW50OlxcXCJcXFwifVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy1iYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbGRCYXIgfSBmcm9tICdAbG9hZGluZ2lvL2xvYWRpbmctYmFyJztcbmltcG9ydCAnQGxvYWRpbmdpby9sb2FkaW5nLWJhci9kaXN0L2xvYWRpbmctYmFyLmNzcyc7XG5cbnZhciBob3N0ZXNzZXMgPSBbXTtcbnZhciBpbnRlcnZhbHMgPSBbXTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ2hvc3Rlc3MtaW5pdCcsIChvcHRzKSA9PiB7XG4gIGhvc3Rlc3Nlc1tvcHRzLmlkXSA9IG5ldyBsZEJhcihcIiNcIiArIG9wdHMuaWQpO1xuICBcbiAgaWYob3B0cy5pbmZpbml0ZSl7XG4gICAgdmFyIHZhbHVlID0gMCxcbiAgICAgICAgaW5jID0gMCxcbiAgICAgICAgZW5kID0gMTAwO1xuXG4gICAgaW50ZXJ2YWxzW29wdHMuaWRdID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgIGluYyA9ICgoZW5kIC0gdmFsdWUpIC8gKGVuZCArIHZhbHVlKSk7XG4gICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKHZhbHVlICsgaW5jICsgTnVtYmVyLkVQU0lMT04pICogMTAwMCkgLyAxMDAwXG4gICAgICBob3N0ZXNzZXNbb3B0cy5pZF0uc2V0KHZhbHVlKTtcbiAgICB9LCAzNTApO1xuICB9XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ2hvc3Rlc3Mtc2V0JywgKG9wdHMpID0+IHtcbiAgaG9zdGVzc2VzW29wdHMuaWRdLnNldChvcHRzLnZhbHVlKTtcblxuICBpZihvcHRzLnZhbHVlID09IDEwMCl7XG4gICAgbGV0IG5vdGlmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5pZCk7XG5cbiAgICBpZihub3RpZiAhPSB1bmRlZmluZWQpXG4gICAgICBub3RpZi5yZW1vdmUoKTtcblxuICB9XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ2hvc3Rlc3Mtbm90aWZ5JywgKG9wdHMpID0+IHtcblxuICAvLyBjcmVhdGUgZGl2XG4gIGxldCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuXG4gIC8vIHBvc2l0aW9uIGRpdlxuICBsZXQgcG9zID0gcG9zaXRpb25fdG9fY29vcmRzKG9wdHMucG9zaXRpb24pO1xuICBub3RpZmljYXRpb24uc3R5bGUuYm90dG9tID0gcG9zLmJvdHRvbTtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLnJpZ2h0ID0gcG9zLnJpZ2h0O1xuICBub3RpZmljYXRpb24uc3R5bGUubGVmdCA9IHBvcy5sZWZ0O1xuICBub3RpZmljYXRpb24uc3R5bGUudG9wID0gcG9zLnRvcDtcblxuICBub3RpZmljYXRpb24uaGVpZ2h0ID0gJzEwMHB4JztcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmNvbG9yID0gb3B0cy50ZXh0X2NvbG9yO1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0cy5iYWNrZ3JvdW5kX2NvbG9yO1xuICBub3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBvcHRzLmh0bWw7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS56SW5kZXggPSA5OTk7XG4gIG5vdGlmaWNhdGlvbi5pZCA9IG9wdHMuaWQ7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwid2FpdHJlc3Mtbm90aWZpY2F0aW9uXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG5cbiAgaG9zdGVzc2VzW29wdHMuaWRdID0gbmV3IGxkQmFyKFwiI1wiICsgb3B0cy5pZCk7XG4gIFxuICBpZihvcHRzLmluZmluaXRlKXtcbiAgICB2YXIgdmFsdWUgPSAwLFxuICAgICAgICBpbmMgPSAwLFxuICAgICAgICBlbmQgPSAxMDA7XG5cbiAgICBpbnRlcnZhbHNbb3B0cy5pZF0gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgaW5jID0gKChlbmQgLSB2YWx1ZSkgLyAoZW5kICsgdmFsdWUpKTtcbiAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCgodmFsdWUgKyBpbmMgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDAwKSAvIDEwMDBcbiAgICAgIGhvc3Rlc3Nlc1tvcHRzLmlkXS5zZXQodmFsdWUpO1xuICAgIH0sIDM1MCk7XG4gIH1cbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignaG9zdGVzcy1lbmQnLCAob3B0cykgPT4ge1xuICBsZXQgYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5pZCk7XG4gIFxuICBpZihvcHRzLmluZmluaXRlKXtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsc1tvcHRzLmlkXSk7XG4gICAgaG9zdGVzc2VzW29wdHMuaWRdLnNldCg5NSk7XG4gIH1cbiAgICBcbiAgXG4gIGlmKGJhciAhPSB1bmRlZmluZWQpXG4gICAgLy8gc21hbGwgZGVsYXkgdG8gYWxsb3cgdGhlIGxvYWRpbmcgYmFyIHRvIGVuZFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGJhci5yZW1vdmUoKTtcbiAgICB9LCAzNTApXG59KTtcblxuY29uc3QgcG9zaXRpb25fdG9fY29vcmRzID0gKHBvc2l0aW9uKSA9PiB7XG4gIGxldCBwb3MgPSB7fTtcblxuICBsZXQgYmFzZV95ID0gMTAwO1xuICBsZXQgY3VycmVudF9ub3RpZmljYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndhaXRyZXNzLW5vdGlmaWNhdGlvblwiKTtcblxuICBmb3IobGV0IG4gb2YgY3VycmVudF9ub3RpZmljYXRpb25zKXtcbiAgICBiYXNlX3kgPSBiYXNlX3kgKyAxMDAgKyBuLm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIGlmKHBvc2l0aW9uID09IFwiYmxcIil7XG4gICAgcG9zLnRvcCA9IFwiYXV0b1wiO1xuICAgIHBvcy5ib3R0b20gPSAoYmFzZV95ICsgMTApICsgJ3B4JztcbiAgICBwb3MubGVmdCA9IFwiMTBweFwiO1xuICAgIHBvcy5yaWdodCA9IFwiYXV0b1wiO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09IFwidGxcIil7XG4gICAgcG9zLnRvcCA9IChiYXNlX3kgKyAxMCkgKyAncHgnO1xuICAgIHBvcy5ib3R0b20gPSBcImF1dG9cIjtcbiAgICBwb3MubGVmdCA9IFwiMTBweFwiO1xuICAgIHBvcy5yaWdodCA9IFwiYXV0b1wiO1xuICB9IGVsc2UgaWYocG9zaXRpb24gPT0gXCJiclwiKXtcbiAgICBwb3MudG9wID0gXCJhdXRvXCI7XG4gICAgcG9zLmJvdHRvbSA9IChiYXNlX3kgKyAxMCkgKyAncHgnO1xuICAgIHBvcy5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgcG9zLnJpZ2h0ID0gXCIxMHB4XCI7XG4gIH0gZWxzZSBpZihwb3NpdGlvbiA9PSBcInRyXCIpe1xuICAgIHBvcy50b3AgPSAoYmFzZV95ICsgMTApICsgJ3B4JztcbiAgICBwb3MuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgcG9zLmxlZnQgPSBcImF1dG9cIjtcbiAgICBwb3MucmlnaHQgPSBcIjEwcHhcIjtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9