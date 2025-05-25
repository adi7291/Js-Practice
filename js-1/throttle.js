let scrollCount = 0;
const delayedFunction = () => {
  scrollCount++;
  createElement.textContent = `Count-${scrollCount}`;
};

const throttle = (func, delay) => {
  let lastCalled = 0;
  return (...args) => {
    let currentCalled = Date.now();

    if (currentCalled - lastCalled > delay) {
      func(...args);
      lastCalled = currentCalled;
    }
  };
};

const throttled = throttle(delayedFunction, 400);

const createElement = document.createElement("div");
createElement.className = "counter";
document.body.appendChild(createElement);
createElement.textContent = "Count";

window.addEventListener("scroll", throttled);
