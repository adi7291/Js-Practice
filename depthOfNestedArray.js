// let arr = [1, 2, 3, 4, [1, 2, 3, [12, 3], 4, 5, [1, 2, 3], 12, 3], 3, 4, 5];

let arr = [1, 2, 3, [4, [5, 6, [7, 8, [9, 10, [11, 12]]], 13], [14, 24], 22]];

function outer(arr, count) {
  function flattArray(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        count = count + 1;
        flattArray(item);
      }
    }
    return count;
  }
  return flattArray(arr);
}

console.log(outer(arr, 0));
