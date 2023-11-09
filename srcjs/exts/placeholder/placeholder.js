const placeholderShow = (opts) => {
  $("body").addClass(`placeholder-${opts.type}`);
  $(opts.target).addClass("placeholder");
};

const placeholderHide = (opts) => {
  $("body").removeClass(`placeholder-${opts.type}`);
  $(opts.target).removeClass("placeholder");
};

Shiny.addCustomMessageHandler("placeholder-show", function (msg) {
  placeholderShow(msg);
});

Shiny.addCustomMessageHandler("placeholder-hide", function (msg) {
  placeholderHide(msg);
});
