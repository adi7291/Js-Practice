function allArgs(...args) {
  let sum = 0;
  if (args.length == 0) return null;
  for (let item of args) {
    if (typeof item === "string") return null;
    sum = sum + item;
  }
  return sum;
}
console.log(allArgs(1, 2));

console.log(allArgs());
console.log(allArgs(1, 2, 3, 4));
console.log(allArgs(5, 100));

console.log(allArgs(5, 100, "a"));

function add(...args) {
  return args.reduce((total, current) => total + current, 0);
}

function withMultiplication(func, num) {
  return (...args) => {
    let result = func(...args) * num;
    return result;
  };
}
console.log(add(1, 2, 3));
const finalFunction = withMultiplication(add, 100);
console.log(finalFunction(1, 2, 3));

function counter(count = 0) {
  for (let i = 0; i < 5; i++) {
    count++;
  }
  return count;
}

function countWithText(func, msg) {
  return () => {
    console.log("count started");
    console.log(func());
    console.log(msg);
  };
}

const ModifiedFunction = countWithText(counter, "count ends");
ModifiedFunction()