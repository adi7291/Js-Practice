"use strict";

var scrollCount = 0;
var scrollElement = document.createElement("h1");
scrollElement.className = "h1scroll";
scrollElement.textContent = "Count-".concat(scrollCount);
var referenceElement = document.querySelector(".throttling");

if (referenceElement) {
  referenceElement.before(scrollElement);
}

var delayedFunction = function delayedFunction() {
  console.log("scroll");
  scrollCount++;
  scrollElement.textContent = "Count-".concat(scrollCount);
};

var throttle = function throttle(func, delay) {
  var lastCalled = 0;
  return function () {
    var currentCalled = Date.now();

    if (currentCalled - lastCalled > delay) {
      func();
      lastCalled = currentCalled;
    }
  };
};

var throttled = throttle(delayedFunction, 1000);
window.addEventListener("scroll", throttled);