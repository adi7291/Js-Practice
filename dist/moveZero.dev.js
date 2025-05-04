"use strict";

// // let arr1 = [0, 1, 0, 3, 12];
// function moveZeroToEnd(arr) {
//   let newArr = arr.filter((item) => item !== 0);
//   console.log(newArr);
//   let nonZeroPlace = arr.length - newArr.length;
//   console.log(nonZeroPlace);
//   for (let i = 0; i < nonZeroPlace; i++) {
//     newArr.push(0);
//   }
//   console.log(newArr)
// }
// moveZeroToEnd([0, 1, 0, 3, 12]);
var arr = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0];

function moveZeroToEnd(arr) {
  var left = 0;

  for (var right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      var _ref = [arr[right], arr[left]];
      arr[left] = _ref[0];
      arr[right] = _ref[1];
      left++;
    }
  }

  return arr;
}

console.log(moveZeroToEnd(arr));