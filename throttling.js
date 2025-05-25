const delayedFunction = (e) => {
  console.log(e.target.value);
};

const throttle = (func, delay) => {
  let lastTime = 0;
  return (...args) => {
    let currentTime = Date.now();
    if (currentTime - lastTime > delay) {
      setTimeout(() => {
        func(...args);
      });
      lastTime = currentTime;
    }
  };
};
const throttled = throttle(delayedFunction, 1000);

let inputElement = document.getElementsByClassName("throttling")[0];

inputElement.addEventListener("input", throttled);
