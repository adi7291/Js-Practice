"use strict";

var arr = [1, 2, 3, [4, [5, 6, [7, 8, [9, 10, [11, 12]]], 13], [14, 24], 22]]; // function flatArray(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatArray(item));
//     } else {
//       result = result.concat(item);
//     }
//   }
//   return result;
// }
// console.log(flatArray(arr));
// let nestedArr = [1, 2, 3, [4, 5, 6]];
// function flatArray(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (!Array.isArray(item)) {
//       result.push(item);
//     } else {
//       result = result.push(flatArray(item));
//     }
//   }
//   return result;
// }
// console.log(flatArray(nestedArr));

var nestedArr = [1, 2, 3, [4, 5, 6]];

function flatArray(arr) {
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (Array.isArray(item)) {
        result = result.concat(flatArray(item));
      } else {
        result = result.concat(item);
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

  return result;
}

console.log(flatArray(nestedArr));