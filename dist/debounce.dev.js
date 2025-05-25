"use strict";

var delayedFunction = function delayedFunction(e) {
  var response, data;
  return regeneratorRuntime.async(function delayedFunction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(e.target.value);
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          console.log(data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var debounce = function debounce(func, delay) {
  var timerRef;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timerRef);
    timerRef = setTimeout(function () {
      func.apply(void 0, args);
    }, delay);
  };
};

var debounced = debounce(delayedFunction, 1000);
var inputElement = document.getElementsByClassName("debouncing")[0];
inputElement.addEventListener("input", debounced);