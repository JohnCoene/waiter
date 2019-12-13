var hostesses = [];

Shiny.addCustomMessageHandler('hostess-init', function(opts) {
  hostesses[opts.id] = new ldBar("#" + opts.id);
});

Shiny.addCustomMessageHandler('hostess-set', function(opts) {
  hostesses[opts.id].set(opts.value);

  if(opts.value == 100){
    var notif = document.getElementById(opts.id);

    if(notif != undefined)
      notif.remove();

  }
});

Shiny.addCustomMessageHandler('hostess-notify', function(opts) {

  // create div
  var notification = document.createElement("DIV");

  // position div
  var pos = position_to_coords(opts.position);
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

  setTimeout(function(){
    hostesses[opts.id] = new ldBar("#" + opts.id);
  }, 100)
});

function position_to_coords(position){
  var pos = {};

  if(position == "bl"){
    pos.top = "auto";
    pos.bottom = "100px";
    pos.left = "10px";
    pos.right = "auto";
  } else if (position == "tl"){
    pos.top = "10px";
    pos.bottom = "auto";
    pos.left = "10px";
    pos.right = "auto";
  } else if(position == "br"){
    pos.top = "auto";
    pos.bottom = "100px";
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
