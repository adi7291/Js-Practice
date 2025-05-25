let arr = [1, 2, 3, [4, [5, 6, [7, 8, [9, 10, [11, 12]]], 13], [14, 24], 22]];

// function flatArray(arr) {
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

let nestedArr = [1, 2, 3, [4, 5, 6]];
function flatArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatArray(item));
    } else {
      result = result.concat(item);
    }
  }
  return result;
}
console.log(flatArray(nestedArr));
