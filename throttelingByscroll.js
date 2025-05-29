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
//Higher order function which takes a function and add delay(extra feature) in it.
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
const throttled = throttle(delayedFunction, 1000);ś
window.addEventListener("scroll", throttled);
