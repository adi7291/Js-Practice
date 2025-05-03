// let str = "This is the front end development using react";

let str='ramesh lal das'

function removeDuplicateOfStr(str) {
  let newStr = str.toLowerCase().split(" ").join("");
  let newArr = [];
  for (let index in newStr) {
    if (index == newStr.indexOf(newStr[index])) {
      newArr = newArr.concat(newStr[index]);
    }
  }
  return newArr.join('')
}
console.log(removeDuplicateOfStr(str));
