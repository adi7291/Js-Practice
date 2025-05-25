"use strict";

// need ot find the first non repeating character in the string
// function firstNonRepeatingCharacter(str) {
//   for (let i = 0; i < str.length; i++) {
//     let isUnique = true;
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         isUnique = false;
//       }
//     }
//     if (isUnique) {
//       return str[i];
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeatingCharacter("abab"));
// console.log(firstNonRepeatingCharacter("aaa"));
// console.log(firstNonRepeatingCharacter("hello"));
// console.log(firstNonRepeatingCharacter(""));
// console.log(firstNonRepeatingCharacter("aabb"));
// console.log(firstNonRepeatingCharacter("aabbcd"));
var str = "ababcaabcd";

function first(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      var isu = true;

      for (var j = i + 1; j < str.length; j++) {
        if (!arr.includes(str[j])) {
          if (str[i] == str[j]) {
            arr.push(str[i]);
            isu = false;
            break;
          }
        }
      }

      if (isu) {
        return str[i];
      }
    }
  }

  return null;
}

console.log(first(str)); //Have to find the first non repeating character in string:::