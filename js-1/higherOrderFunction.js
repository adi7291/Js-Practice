function greet(name) {
  console.log(`Hello ${name}`);
}

function withGreeting(func) {
  return (name) => {
    console.log("start greeting");
    const result = func(name);
    console.log("greeting done!!");
    return result;
  };
}
const enhancedGreeting = withGreeting(greet);

console.log(enhancedGreeting("Ramesh"));
