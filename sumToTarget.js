function sumToTarget(arr, target) {
  let arr1 = [];

  for (let item of arr) {
    let anotherNumber = target - item;
    if (arr.includes(anotherNumber)) {
      arr1.push(arr.indexOf(item));
    }
  }
  return arr1;
}
console.log(sumToTarget([1, 2, 5, 8, 9, 11, 0, 4, 7, 19], 9));

/*
[
  1, 2, 5, 8,
  9, 0, 4, 7
]

[
  0, 1, 2, 3,
  4, 6, 7, 8
]

*/
