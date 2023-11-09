import "./css/style.css";

const randomWidth = () => {
  const r = Math.random();

  if (r > 0.9) return "p-w-90";
  if (r > 0.75) return "p-w-75";
  if (r > 0.6) return "p-w-60";
  if (r > 0.45) return "p-w-45";
  if (r > 0.3) return "p-w-30";
  if (r >= 0.15) return "p-w-15";

  return "p-w-100";
};

let showing;

const placeholderShow = (opts) => {
  showing = new Map();
  opts.target.map((el) => {
    let w = randomWidth();
    $(el).addClass("placeholder");
    $(el).addClass(w);
    showing.set(el, w);
  });
  $("body").addClass(`placeholder-${opts.type}`);
};

const placeholderHide = (opts) => {
  opts.target.map((el) => {
    let w = showing.get(el);
    $(el).removeClass("placeholder");
    $(el).removeClass(w);
  });
  $("body").removeClass(`placeholder-${opts.type}`);
};

Shiny.addCustomMessageHandler("placeholder-show", function (msg) {
  placeholderShow(msg);
});

Shiny.addCustomMessageHandler("placeholder-hide", function (msg) {
  placeholderHide(msg);
});
