let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 3, 3, 3, 3, 4];

function maxCountOfOccurrence(arr) {
  let obj = {};
  let maxCount = 0;
  let maxOccurrence = null;

  for (let item of arr) {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    if (obj[item] > maxCount) {
      maxCount = obj[item];
      maxOccurrence = item;
    }
  }
  return [`the Number occurred  number is ${maxOccurrence}, ${maxCount} times`];
}
console.log(maxCountOfOccurrence(arr));
