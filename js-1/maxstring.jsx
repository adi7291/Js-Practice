// let obj = ["ramesh", { name: "ramesh", state: "Bihar" }];
// //DeepCopy
// let obj1 = JSON.parse(JSON.stringify(obj));
// //Shallow Copy
// let obj2 = Object.assign({}, obj);
// //===
// let obj3 = obj;
// console.log(obj == obj1);
// console.log(obj == obj2);
// console.log(obj == obj3);

// console.log(obj[1] == obj1[1]); //false  Deep copy create the deep level copy to
// console.log(obj[1] == obj2[1]); //true
// // shallow copy do the copy to surface level for deep level the address will be save as the source

function maximum(...args) {
  console.log(args);
  return args.reduce((max, curr) => (max = max > curr), 0);
}
console.log(maximum(2,1));
