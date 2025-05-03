"use strict";

var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 3, 3, 3, 3, 4];

function maxCountOfOccurrence(arr) {
  var obj = {};
  var maxCount = 0;
  var maxOccurrence = null;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item] += 1;
      }

      if (obj[item] > maxCount) {
        maxCount = obj[item];
        maxOccurrence = item;
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

  return ["the Number occurred  number is ".concat(maxOccurrence, ", ").concat(maxCount, " times")];
}

console.log(maxCountOfOccurrence(arr));