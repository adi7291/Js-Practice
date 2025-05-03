let num = 12345;

function sunOfDigit(num) {
  let sum = 0;
  for (let item of String(num)) {
    sum +=  +item;
 
  }
  return sum;
}
console.log(sunOfDigit(num));
