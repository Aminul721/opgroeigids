"use strict";

var WIN = window; // eslint-disable-line no-undef

var JQ = WIN.jQuery;
var append_content = true;

var update = function update() {
  var $panel = JQ('.no5');
  var $container = JQ('.no5 .sp-container');
  var length = $container.children().length;

  if (length <= 0) {
    append_content = true;
  } else if (length >= 10) {
    append_content = false;
  }

  if (append_content) {
    $container.prepend("<div class=\"foo\">".concat(length, "</div>"));
  } else {
    $container.children().eq(0).remove();
  }

  $panel.scrollpanel('update');
};

var init = function init() {
  JQ('.scrollpanel').each(function (idx, el) {
    for (var i = 0; i < 10; i += 1) {
      JQ(el).prepend("<div class=\"foo\">".concat(i, "</div>"));
    }
  }).scrollpanel();
  WIN.setInterval(update, 1000);
};

JQ(init);