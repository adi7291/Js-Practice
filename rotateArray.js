function rotateArray(arr, n) {
  let temp = null;
  for (let i = 0; i <= n; i++) {
    temp = arr.shift();
    arr.push(temp);
  }
  return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 5));
