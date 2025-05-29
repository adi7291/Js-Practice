"use strict";

var hammingDistance = function hammingDistance(x, y) {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length !== y.length) {
      x = "0" + x;
    }
  } else {
    while (x.length !== y.length) {
      y = "0" + y;
    }
  }

  console.log(x, y);
  var dist = 0;

  for (var i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      dist++;
    }
  }

  return dist;
};

console.log(hammingDistance(9, 35));