"use strict";

// let reverseString =function(str){
//     let newStr=''
//     let temp=''
//     for(let i=0;i<Math.floor(str.length/2);i++){
//         temp=str[i]
//         str[i]=str[str.length-1-i]
//         str[str.length-1-i]=temp
//     }
//     console.log(str)
// }
// reverseString('hello')
var reverseString = function reverseString(s) {
  var left = 0;
  var right = s.length - 1;

  for (left; left < right; left++) {
    right = right - left;

    if (right > left) {
      var _ref = [s[right], s[left]];
      s[left] = _ref[0];
      s[right] = _ref[1];
    } else {
      break;
    }
  }

  return s;
};

console.log(reverseString(["r", "a", "m", "e", "s"]));