let arr = [12, 16, 14, 10, 8, 15];

function findLargestAndSecondLargest(arr) {
  if (arr.length === 0) return { error: "Array is empty" };
  if (arr.length === 1) return { largest: arr[0], secondLargest: null };

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let item of arr) {
    if (item > largest) {
      secondLargest = largest;
      largest = item;
    } else if (secondLargest < item && item < largest) {
      secondLargest = item;
    }
  }
  return { largest: largest, secondLargest: secondLargest };
}

console.log(findLargestAndSecondLargest(arr));
console.log(findLargestAndSecondLargest([]));
console.log(findLargestAndSecondLargest([100]));

function alternate(arr) {
  let newArr = [];
  for (let item in arr) {
    if (item % 2 !== 0) {
      newArr.push(arr[item]);
    }
  }
  return newArr;
}

console.log(alternate(arr));
