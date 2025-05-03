function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(28));
console.log(isPrime(91));
console.log(isPrime(23));
console.log(isPrime(51));
