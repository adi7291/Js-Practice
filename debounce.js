const delayedFunction = async (e) => {
  console.log(e.target.value);
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
};

const debounce = (func, delay) => {
  let timerRef;
  return (...args) => {
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounced = debounce(delayedFunction, 1000);

let inputElement = document.getElementsByClassName("debouncing")[0];

inputElement.addEventListener("input", debounced);
