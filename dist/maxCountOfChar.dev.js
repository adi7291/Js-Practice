"use strict";

var str = "this is Ramesh lal das froiim bihar katihar";

function maxCountOfOccurrenceOFChar(str) {
  if (str.length === 0) return {
    error: "Sting is empty"
  };
  var mapperObj = {};
  var maxCount = null;
  var maxElement = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str.toLowerCase().split(" ").join("")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (!mapperObj[item]) {
        mapperObj[item] = 1;
      } else {
        mapperObj[item]++;
      }

      if (mapperObj[item] > maxCount) {
        maxCount = mapperObj[item];
        maxElement = [item];
      } else if (mapperObj[item] === maxCount) {
        maxElement.push(item); // [...maxElement, item];
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
    element: maxElement,
    count: maxCount
  };
} // function maxCountOfOccurrenceOFChar(str) {
//   let newStr = str.split(" ").join("");
//   let obj = {};
//   let maxCount = 0;
//   let mostOccurredChar = null;
//   for (let item of newStr) {
//     if (!obj[item]) {
//       obj[item] = 1;
//     } else {
//       obj[item] += 1;
//     }
//     if (obj[item] > maxCount) {
//       maxCount = obj[item];
//       mostOccurredChar = item;
//     }
//   }
//   return `The most repeated character in string is ${mostOccurredChar}, ${maxCount}times`;
// }
// console.log(maxCountOfOccurrenceOFChar(str));