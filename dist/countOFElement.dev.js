"use strict";

// function CountOfElement(arr) {
//   let count1 = 0;
//   maxElement = null;
//   let visitedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count2 = 0;
//     if (!visitedArr.includes(arr[i]))
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//           count2++;
//         }
//       }
//     visitedArr.push(arr[i]);
//     if (count2 > count1) {
//       count1 = count2;
//       maxElement = arr[i];
//     }
//   }
//   return { element: maxElement, count: count1 + 1 };
// }
// console.log(CountOfElement([1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 2]));
var arr = [1, 2, 3, 1, 2, 3, 3, 3, 4, 5, 4, 1, 1, 3]; // function maxCount(arr) {
//   if (arr.length == 0) {
//     return { error: "Array is empty" };
//   }
//   let obj = {};
//   let maxCount = 0;
//   let maxElement = [];
//   for (let item of arr) {
//     if (typeof item !== "number") continue;
//     if (!obj[item]) {
//       obj[item] = 1;
//     } else {
//       obj[item]++;
//     }
//     if (obj[item] > maxCount) {
//       maxCount = obj[item];
//       maxElement = [item];
//     } else if (obj[item] === maxCount) {
//       maxElement.push(item);
//     }
//     if (maxElement === null) {
//       return { error: "No valid elements found" };
//     }
//   }
//   return { element: maxElement, count: maxCount };
// }

var maxCount = function maxCount(arr) {
  if (arr.length === 0) return {
    error: "Array is empty"
  };
  if (arr.length === 1) return {
    element: arr[0],
    count: 1
  };
  var maxElement = [];
  var maxCount = null;
  var obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      if (typeof item != "number") continue;

      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item]++;
      }

      if (obj[item] > maxCount) {
        maxCount = obj[item];
        maxElement = [item];
      } else if (maxCount === obj[item]) {
        maxElement.push(item);
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
};

console.log(maxCount(arr));
console.log(maxCount([]));
console.log(maxCount([1]));
console.log(maxCount([-1, -1, -1, 2, 2, 2]));
console.log(maxCount([1,, 2,, 3]));
console.log(maxCount([1, "1", true, null]));
console.log(maxCount([1, 1, 1, 2, 2, 2, 3, 3, 3]));