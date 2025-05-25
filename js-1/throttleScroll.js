let scrollCount = 0;
const delayedFunction = () => {
  scrollCount++;
  console.log(scrollCount);
  countElement.textContent = `Count -${scrollCount}`;
};

const throttle = (func, delay) => {
  let lastCalled = 0;
  return () => {
    let currentCalled = Date.now();
    if (currentCalled - lastCalled > 1000) {
      func();
      lastCalled = currentCalled;
    }
  };
};

const throttled = throttle(delayedFunction, 1000);

let countElement = document.getElementById("counter");

countElement.textContent = `Count -${scrollCount}`;

window.addEventListener("scroll", throttled);
