// const delayedFunction = (e) => {
//   console.log("inputChange");
// };
// const debounce = (func, delay) => {
//   let timerId;
//   return (...args) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };
// const debounced = debounce(delayedFunction, 1000);

// let inputElement = document.getElementById("input");
// inputElement.addEventListener("input", debounced);

const add = (...args) => {
  if (args.length === 0) return null;
  return args.reduce((total, current) => {
    if (typeof current === "string") {
      return null;
    }
    return total + current;
  }, 0);
};

console.log(add(1, 2, 10));
console.log(add());
console.log(add(1, 2, "a"));

const withMultiply = (func, num) => {
  return (...args) => {
    return func(...args) * num;
  };
};
const advancedFunction = withMultiply(add, 100);

console.log(advancedFunction(1,2,3))
