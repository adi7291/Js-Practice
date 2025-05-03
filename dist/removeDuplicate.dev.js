"use strict";

// let arr = [1, 2, 3, 2, 3, 4, 9, 9, 3, 8, 5];
// function removeDuplicate() {
//   let newArr = [];
//   for (let index in arr) {
//     if (index == arr.indexOf(arr[index])) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }
// console.log(removeDuplicate(arr));
// function removeDuplicate(arr) {
//   let newArr = [];
//   for (let index in arr) {
//     if (index == arr.indexOf(arr[index])) newArr.push(arr[index]);
//   }
//   return newArr.sort();
// }
// console.log(removeDuplicate(arr));
// function outer() {
//   let count = 10;
//   return function inner() {
//     count++;
//     console.log(count)
//   };
// }
// const fn = outer();
// fn()
// fn()
// fn()
// fn()
// const num =10
// console.log(typeof num.toString(),num)
// console.log(num)
var arr = [2, 4, 1, 5, 6, 7, 2];
var largest = null;
var secondLargest = null;

for (var item in arr) {
  if (arr[item] > arr[item + 1]) {
    largest = arr[item];
    secondLargest = arr[item + 1];
  }
}