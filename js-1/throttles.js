const delayedFunction = (e) => {
  console.log(e.target.value);
};

const throttle = (func, delay) => {
  let lastCalled = 0;
  return (...args) => {
    let currentCalled = Date.now();

    if (currentCalled - lastCalled >= delay) {
      func(...args);
      lastCalled = currentCalled;
    }
  };
};

const throttled = throttle(delayedFunction, 1000);

let inputElement = document.getElementById("input");

inputElement.addEventListener("input", throttled);
