// keep infinite to later clear
var intervals = [];
// elements to hide on recomputed
var waitress_to_hide = [];

Shiny.addCustomMessageHandler('waitress-init', function(opts) {
	
	if(opts.id != null)
		prog = progressJs(opts.id);
	else
		prog = progressJs();

	prog = prog.setOptions(opts.options);

	window.waitress[opts.name] = prog;
});

Shiny.addCustomMessageHandler('waitress-start', function(opts) {
  
  window.waitress[opts.name].start();
  var el,
      id = opts.id, 
      exists = false, 
      dom;
  
  if(opts.hide_on_render)
    waitress_to_hide.push({id: opts.id.substr(1), name: opts.name, infinite: opts.infinite})

  // content
  if(opts.html){

    hide_recalculate(id);
    // get parent
    dom = document.getElementById(id);
    if(dom == undefined){
      console.log("Cannot find", id);
      return ;
    }

    el = get_offset(dom); 

    // check if overlay exists
    dom.childNodes.forEach(function(el){
      if(el.className === 'waiter-overlay')
        exists = true;
    });

    if(exists === true){
      console.log("waitress on", id, "already exists");
      return;
    }

    // create overlay
    var overlay = document.createElement("DIV");
    // create overlay content
    var overlay_content = document.createElement("DIV");
    // insert html
    overlay_content.innerHTML = opts.html;
    overlay_content.classList.add("waiter-overlay-content");

    // add styles
    overlay.style.height = el.height + 'px';
    overlay.style.width = el.width + 'px';
    overlay.style.top = el.top + 'px';
    overlay.style.left = el.left + 'px';
    overlay.style.backgroundColor = "transparent";
    overlay.style.position = "absolute";
    overlay.style.zIndex = 99999;
    overlay.classList.add("waiter-overlay");

    // append overlay content in overlay
    overlay.appendChild(overlay_content);

    // append overlay to dom
    setTimeout(function(){
      dom.appendChild(overlay);
    }, 300);
  }

  if(opts.infinite){
    var value = 0,
        inc = 0,
        end = 100;

    intervals[opts.name] = setInterval(function(){
      inc = ((end - value) / 50);
      value = value + inc;
      window.waitress[opts.name].set(value);
     }, 200);
  }
});

Shiny.addCustomMessageHandler('waitress-set', function(opts) {
	window.waitress[opts.name].set(opts.percent);
});

Shiny.addCustomMessageHandler('waitress-auto', function(opts) {
	window.waitress[opts.name].autoIncrease(opts.percent, opts.ms);
});

Shiny.addCustomMessageHandler('waitress-increase', function(opts) {
	window.waitress[opts.name].increase(opts.percent);
});

Shiny.addCustomMessageHandler('waitress-end', function(opts) {
  window.waitress[opts.name].end();

  if(opts.id){
    var dom = document.getElementById(opts.id);
    var overlay = dom.getElementsByClassName("waiter-overlay");
  
    if(overlay.length > 0)
      dom.removeChild(overlay[0]);
  }

  if(opts.infinite)
    clearInterval(intervals[opts.name]);
});

// compute offset position of waiter overlay
function get_offset(element) {
  var elementPosition = {};

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = element.offsetWidth -2;
  elementPosition.height = element.offsetHeight -2;

  //calculate element top and left
  var _x = element.offsetLeft;
  var _y = element.offsetTop;
  if(isNaN(_x))
    _x = 0;
  if(isNaN(_y))
    _y = 0;
  
  //set top and left
  //use 3 margin (6/2)
  elementPosition.top = _y + 1;
  elementPosition.left = _x + 1;

  return elementPosition;
}

function hide_recalculate(id){
  var css = '#' + id + '.recalculating {opacity: 1.0 !important; }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
}

$(document).on('shiny:value shiny:error shiny:recalculated', function(event) {
  waitress_to_hide.forEach(function(w){
    if(w.id == event.name){
      if(w.infinite)
        clearInterval(intervals[w.name]);
      
      window.waitress[w.name].end();
    }
      
  });
});