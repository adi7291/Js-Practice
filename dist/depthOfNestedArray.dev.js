"use strict";

// let arr = [1, 2, 3, 4, [1, 2, 3, [12, 3], 4, 5, [1, 2, 3], 12, 3], 3, 4, 5];
var arr = [1, 2, 3, [4, [5, 6, [7, 8, [9, 10, [11, 12]]], 13], [14, 24], 22]];

function outer(arr, count) {
  function flattArray(arr) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (Array.isArray(item)) {
          count = count + 1;
          flattArray(item);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return count;
  }

  return flattArray(arr);
}

console.log(outer(arr, 0));