let str = "this is Ramesh lal das froiim bihar katihar";

function maxCountOfOccurrenceOFChar(str) {
  if (str.length === 0) return { error: "Sting is empty" };
  let mapperObj = {};

  let maxCount = null;
  let maxElement = [];

  for (let item of str.toLowerCase().split(" ").join("")) {
    if (!mapperObj[item]) {
      mapperObj[item] = 1;
    } else {
      mapperObj[item]++;
    }
    if (mapperObj[item] > maxCount) {
      maxCount = mapperObj[item];
      maxElement = [item];
    } else if (mapperObj[item] === maxCount) {
      maxElement.push(item);
      // [...maxElement, item];
    }
  }
  return { element: maxElement, count: maxCount };
}

// function maxCountOfOccurrenceOFChar(str) {
//   let newStr = str.split(" ").join("");
//   let obj = {};
//   let maxCount = 0;
//   let mostOccurredChar = null;
//   for (let item of newStr) {
//     if (!obj[item]) {
//       obj[item] = 1;
//     } else {
//       obj[item] += 1;
//     }
//     if (obj[item] > maxCount) {
//       maxCount = obj[item];
//       mostOccurredChar = item;
//     }
//   }
//   return `The most repeated character in string is ${mostOccurredChar}, ${maxCount}times`;
// }
// console.log(maxCountOfOccurrenceOFChar(str));




