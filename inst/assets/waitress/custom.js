// keep infinite to later clear
var intervals = [];
// elements to hide on recomputed
var waitress_to_hide = [];

function position_to_coords(position){
  var pos = {};

  if(position == "bl"){
    pos.top = "auto";
    pos.bottom = "10px";
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl"){
    pos.top = "10px";
    pos.bottom = "auto";
    pos.left = "10px";
    pos.right = "auto";
  } else if(position == "br"){
    pos.top = "auto";
    pos.bottom = "10px";
    pos.left = "auto";
    pos.right = "10px";
  } else if(position == "tr"){
    pos.top = "10px";
    pos.bottom = "auto";
    pos.left = "auto";
    pos.right = "10px";
  }

  return pos;
}

Shiny.addCustomMessageHandler('waitress-init', function(opts) {
  
  var notification;

  if(opts.notify){
    // create div
    notification = document.createElement("DIV");

    // position div
    var pos = position_to_coords(opts.position);
    notification.style.bottom = pos.bottom;
    notification.style.right = pos.right;
    notification.style.left = pos.left;
    notification.style.top = pos.top;

    //notification.width = '100px';
    notification.height = '50px';
    notification.style.color = opts.text_color;
    notification.style.backgroundColor = opts.background_color;
    notification.style.position = "fixed";
    notification.innerHTML = opts.html;
    notification.style.zIndex = 9999;
    notification.id = opts.id;
    notification.classList.add("waitress-notification");
    document.body.appendChild(notification);
    opts.id = '#' + opts.id;
  }

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
      dom,
      overlay,
      overlay_content;
  
  if(opts.hide_on_render)
    waitress_to_hide.push({
      id: opts.id, 
      name: opts.name, 
      infinite: opts.infinite, 
      is_notification: opts.is_notification
    });

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
      if(el.className === 'waitress-overlay')
        exists = true;
    });

    if(exists === true){
      console.log("waitress on", id, "already exists");
      return;
    }

    // create overlay
    overlay = document.createElement("DIV");
    // create overlay content
    overlay_content = document.createElement("DIV");
    // insert html
    overlay_content.innerHTML = opts.html;
    overlay_content.classList.add("waitress-overlay-content");

    // add styles
    overlay.style.height = el.height + 'px';
    overlay.style.width = el.width + 'px';
    overlay.style.top = el.top + 'px';
    overlay.style.left = el.left + 'px';
    overlay.style.color = opts.text_color;
    overlay.style.backgroundColor = opts.background_color;
    overlay.style.position = "absolute";
    overlay.style.zIndex = 99999999;
    overlay.classList.add("waitress-overlay");

    // append overlay content in overlay
    overlay.appendChild(overlay_content);

    // append overlay to dom
    setTimeout(function(){
      dom.appendChild(overlay);
    }, 10);
  }

  if(opts.infinite){
    var value = 0,
        inc = 0,
        end = 100;

    intervals[opts.name] = setInterval(function(){
      inc = ((end - value) / 50);
      value = Math.ceil(value + inc);
      window.waitress[opts.name].set(value);
     }, 350);
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
    var overlay = dom.getElementsByClassName("waitress-overlay");
  
    if(overlay.length > 0)
      dom.removeChild(overlay[0]);
  }

  if(opts.infinite)
    clearInterval(intervals[opts.name]);

  if(opts.is_notification){
    var notif = document.getElementById(opts.name);

    // small delay to allow the loading bar to end
    setTimeout(function(){
      notif.remove();
    }, 400)
  }
});

// compute offset position of waiter overlay
function get_offset(element) {
  var elementPosition = {};

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = element.offsetWidth;
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
  elementPosition.top = _y + 2;
  elementPosition.left = _x;

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

      if(w.is_notification){
        var notif = document.getElementById(w.name);
    
        // small delay to allow the loading bar to end
        setTimeout(function(){
          notif.remove();
        }, 400)
      }
    }
      
  });
});