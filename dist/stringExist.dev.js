"use strict";

// let str1 = "abcdefgh";
// let str2 = "defm";
// function stringExist(str1, str2) {
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] == str2[j]) {
//         i++;
//       } else {
//         break;
//       }
//     }
//   }
// }
// console.log(stringExist(str1, str2));
// //i=0 j=0 break
// //i=1 j=0 break
// //i=2 j=0 break 
// //i=3 j=0  i=4 j=1 i=5 j=2 i=6 j=3 i=7
var str1 = "abcdefgh";
var str2 = "defm";

function stringExist(str1, str2) {
  if (str2.length === 0) return true;

  for (var i = 0; i <= str1.length - str2.length; i++) {
    var match = true;

    for (var j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
}

console.log(stringExist(str1, str2)); // Output: false