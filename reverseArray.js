function reverseArray(arr) {
  let newArr = [];
  for (let index in arr) {
    newArr = newArr.concat(arr[arr.length - 1 - index]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4]));

console.log([1, 2, 3, 4].reverse());

function missingNumber(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
  return arr[arr.length - 1] + 1;
}
console.log(missingNumber([1, 2, 3, 5]));
console.log(missingNumber([1, 2, 3, 4, 5]));
