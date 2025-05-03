"use strict";

// function palindrome(str) {
//   let reverseStr = str.split("").reverse().join("");
//   console.log(reverseStr);
//   if (reverseStr == str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindrome("racecar"));
function palindrome(str) {
  var revStr = "";

  for (var item in str) {
    revStr = revStr + str[str.length - 1 - item];
  }

  if (revStr == str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("rama"));
console.log(palindrome("racecar"));