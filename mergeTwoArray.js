const arr1 = [
  { id: 1, x: "old" },
  { id: 2, x: "old" },
];
const arr2 = [
  { id: 1, x: "new" },
  { id: 3, x: "new" },
];
//Merge array with id old value and another with new value...

function mergeArrayWithNewValue(arr1, arr2) {
  let obj = {};
  for (let item of arr1) {
    obj[item.id] = item;
  }
  for (let item of arr2) {
    obj[item.id] = item;
  }
  console.log(obj);
}
mergeArrayWithNewValue(arr1, arr2);
// {
//   '1': { id: 1, x: 'new' },
//   '2': { id: 2, x: 'old' },
//   '3': { id: 3, x: 'new' }
// }

function mergeArrayWithOldValue(arr1, arr2) {
  let obj = {};
  for (let item of arr1) {
    obj[item.id] = item;
  }
  for (let item of arr2) {
    if (!obj[item.id]) {
      obj[item.id] = item;
    }
  }
  console.log(obj);
}
mergeArrayWithOldValue(arr1, arr2);
// {
//   '1': { id: 1, x: 'old' },
//   '2': { id: 2, x: 'old' },
//   '3': { id: 3, x: 'new' }
// }
