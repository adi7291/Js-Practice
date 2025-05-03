"use strict";

var arr = [12, 16, 14, 10, 8, 15];

function findLargestAndSecondLargest(arr) {
  if (arr.length === 0) return {
    error: "Array is empty"
  };
  if (arr.length === 1) return {
    largest: arr[0],
    secondLargest: null
  };
  var largest = -Infinity;
  var secondLargest = -Infinity;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item > largest) {
        secondLargest = largest;
        largest = item;
      } else if (secondLargest < item && item < largest) {
        secondLargest = item;
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

  return {
    largest: largest,
    secondLargest: secondLargest
  };
}

console.log(findLargestAndSecondLargest(arr));
console.log(findLargestAndSecondLargest([]));
console.log(findLargestAndSecondLargest([100]));

function alternate(arr) {
  var newArr = [];

  for (var item in arr) {
    if (item % 2 !== 0) {
      newArr.push(arr[item]);
    }
  }

  return newArr;
}

console.log(alternate(arr));