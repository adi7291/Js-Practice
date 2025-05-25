let scrollCount = 0;

let scrollElement = document.createElement("h1");
scrollElement.className = "h1scroll";
scrollElement.textContent = `Count-${scrollCount}`;

let referenceElement = document.querySelector(".throttling");
if (referenceElement) {
  referenceElement.before(scrollElement);
}

let delayedFunction = () => {
  console.log("scroll");
  scrollCount++;
  scrollElement.textContent = `Count-${scrollCount}`;
};

const throttle = (func, delay) => {
  let lastCalled = 0;

  return () => {
    let currentCalled = Date.now();
    if (currentCalled - lastCalled > delay) {
      func();
      lastCalled = currentCalled;
    }
  };
};
const throttled = throttle(delayedFunction, 1000);

window.addEventListener("scroll", throttled);
