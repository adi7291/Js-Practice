"use strict";

// // let arr1 = [0, 1, 0, 3, 12];
// function moveZeroToEnd(arr) {
//   let newArr = arr.filter((item) => item !== 0);
//   console.log(newArr);
//   let nonZeroPlace = arr.length - newArr.length;
//   console.log(nonZeroPlace);
//   for (let i = 0; i < nonZeroPlace; i++) {
//     newArr.push(0);
//   }
//   console.log(newArr)
// }
// moveZeroToEnd([0, 1, 0, 3, 12]);
// function moveZeroToEnd(arr) {
//   let left = 0;
//   for (let right = 0; right < arr.length; right++) {
//     if (arr[right] !== 0) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//     }
//   }
//   return arr;
// }
// console.log(moveZeroToEnd(arr));
var arr = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0];

function moveZeroToEnd() {
  var zeroPosition = 0;

  for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
    var item = _arr[_i];

    if (item !== 0) {
      arr[zeroPosition] = item;
      zeroPosition++;
    }
  }

  while (zeroPosition < arr.length) {
    arr[zeroPosition] = 0;
    zeroPosition++;
  }

  return arr;
}

console.log(moveZeroToEnd(arr)); //item=0 skip      =>[0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=0
//item=1 a[0]=1    =>[1, 1, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=1
//item=0 skip      =>[1, 1, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=1
//item=2 a[1]=2    =>[1, 2, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=2
//item=0 skip      =>[1, 2, 0, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=2
//item=3 ar[2]=3   =>[1, 2, 3, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=3
//item=0 skip      =>[1, 2, 3, 2, 0, 3, 0, 4, 0, 5, 12, 0]; z=3
//item=4 ar[3]=4   =>[1, 2, 3, 4, 0, 3, 0, 4, 0, 5, 12, 0]; z=4
//item=0 skip      =>[1, 2, 3, 4, 0, 3, 0, 4, 0, 5, 12, 0]; z=4
//item=5 ar[4]=5   =>[1, 2, 3, 4, 5, 3, 0, 4, 0, 5, 12, 0]; z=5
//item=12 ar[5]=12 =>[1, 2, 3, 4, 5,12, 0, 4, 0, 5, 12, 0]; z=6
//item=0 skip      =>[1, 2, 3, 4, 5, 12, 0, 4, 0, 5, 12, 0];z=6
//z=6<12 ar[6]=0   =>[1, 2, 3, 4, 5, 12, 0, 4, 0, 5, 12, 0];z=7
//z=7<12 ar[7]=0   =>[1, 2, 3, 4, 5, 12, 0, 0, 0, 5, 12, 0];z=8
//z=8<12 ar[8]=0   =>[1, 2, 3, 4, 5, 12, 0, 0, 0, 5, 12, 0];z=9
//z=9<12 ar[9]=0   =>[1, 2, 3, 4, 5, 12, 0, 0, 0, 0, 12, 0];z=10
//z=10<12 ar[10]=0  =>[1, 2, 3, 4, 5, 12, 0, 0, 0, 0, 0, 0];z=11
//z=11<12 ar[10]=0  =>[1, 2, 3, 4, 5, 12, 0, 0, 0, 0, 0, 0];z=12
//z=12<12 stop.