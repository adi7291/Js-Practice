function fibonacci(num) {
  let result = null;
  if (num == 0) {
    return 1;
  } else {
    result = num * fibonacci(num - 1);
  }
  return result;
}
console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(1))
console.log(fibonacci(3))
