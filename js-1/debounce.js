function debounce(func, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

let delayedFunction = async (e) => {
  const product = await fetch(
    `https://dummyjson.com/products/search?q=${e.target.value}`
  );
  const data = await product.json();
  console.log(data.products);
  console.log();
};

let debouncedFunction = debounce(delayedFunction, 300);

let input = document.getElementById("input");
input.addEventListener("input", debouncedFunction);
