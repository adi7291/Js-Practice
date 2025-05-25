"use strict";

var delayedFunction = function delayedFunction(e) {
  console.log(e.target.value);
};

var throttle = function throttle(func, delay) {
  var lastTime = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var currentTime = Date.now();

    if (currentTime - lastTime > delay) {
      setTimeout(function () {
        func.apply(void 0, args);
      });
      lastTime = currentTime;
    }
  };
};

var throttled = throttle(delayedFunction, 1000);
var inputElement = document.getElementsByClassName("throttling")[0];
inputElement.addEventListener("input", throttled);