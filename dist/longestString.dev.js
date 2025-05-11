"use strict";

var str = "abcabcdbb";

function maxString(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    var arr1 = [];
    arr1.push(str[i]);

    for (var j = i + 1; j < str.length; j++) {
      if (!arr1.includes(str[j])) {
        arr1.push(str[j]);
      } else {
        break;
      }
    }

    if (arr.length <= arr1.length) {
      arr = arr1;
    }
  }

  return {
    length: arr.length,
    substring: arr.join("")
  };
}

console.log(maxString('pwwkew'));