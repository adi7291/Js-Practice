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

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  for (left; left < right; left++) {
    right = right - left;
    if (right > left) {
      [s[left], s[right]] = [s[right], s[left]];
    }
    else{
      break
    }
  }
  return s;
};
console.log(reverseString(["r", "a", "m", "e", "s"]));
