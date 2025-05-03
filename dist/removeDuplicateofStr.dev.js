"use strict";

// let str = "This is the front end development using react";
var str = 'ramesh lal das';

function removeDuplicateOfStr(str) {
  var newStr = str.toLowerCase().split(" ").join("");
  var newArr = [];

  for (var index in newStr) {
    if (index == newStr.indexOf(newStr[index])) {
      newArr = newArr.concat(newStr[index]);
    }
  }

  return newArr.join('');
}

console.log(removeDuplicateOfStr(str));