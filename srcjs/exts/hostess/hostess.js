import { ldBar } from '@loadingio/loading-bar';
import '@loadingio/loading-bar/dist/loading-bar.css';

let hostesses = [];
let intervals = [];

Shiny.addCustomMessageHandler('hostess-init', (opts) => {
  hostesses[opts.id] = new ldBar("#" + opts.id);
  
  if(!opts.infinite)
    return ;

  let value = 0,
      inc = 0,
      end = 100;

  intervals[opts.id] = setInterval(function(){
    inc = ((end - value) / (end + value));
    value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000
    hostesses[opts.id].set(value);
  }, 350);
});

Shiny.addCustomMessageHandler('hostess-set', (opts) => {
  hostesses[opts.id].set(opts.value);

  if(opts.value != 100)
    return ;
  
  let notif = document.getElementById(opts.id);

  if(notif != undefined)
    notif.remove();
});

Shiny.addCustomMessageHandler('hostess-notify', (opts) => {

  // create div
  let notification = document.createElement("DIV");

  // position div
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

  hostesses[opts.id] = new ldBar("#" + opts.id);
  
  if(!opts.infinite)
    return ;

  let value = 0,
      inc = 0,
      end = 100;

  intervals[opts.id] = setInterval(function(){
    inc = ((end - value) / (end + value));
    value = Math.round((value + inc + Number.EPSILON) * 1000) / 1000
    hostesses[opts.id].set(value);
  }, 350);
});

Shiny.addCustomMessageHandler('hostess-end', (opts) => {
  let bar = document.getElementById(opts.id);
  
  if(opts.infinite){
    clearInterval(intervals[opts.id]);
    hostesses[opts.id].set(95);
  }
  
  if(bar != undefined)
    setTimeout(function(){
      bar.remove();
    }, 350);
});

const position_to_coords = (position) => {
  let pos = {};

  let base_y = 100;
  let current_notifications = document.getElementsByClassName("waitress-notification");

  for(let n of current_notifications){
    base_y = base_y + 100 + n.offsetHeight;
  }

  if(position == "bl"){
    pos.top = "auto";
    pos.bottom = (base_y + 10) + 'px';
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl"){
    pos.top = (base_y + 10) + 'px';
    pos.bottom = "auto";
    pos.left = "10px";
    pos.right = "auto";
  } else if(position == "br"){
    pos.top = "auto";
    pos.bottom = (base_y + 10) + 'px';
    pos.left = "auto";
    pos.right = "10px";
  } else if(position == "tr"){
    pos.top = (base_y + 10) + 'px';
    pos.bottom = "auto";
    pos.left = "auto";
    pos.right = "10px";
  }

  return pos;
}
