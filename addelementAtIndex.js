function addItem(arr){
  let newArr=[];
  for(let item of arr){
    if(arr.indexOf(item)===6){
      newArr.push(100)
    }
    newArr.push(item)
  }
  return newArr
}

console.log(addItem([
  1,   2, 3, 4, 5,
  6, 100, 7, 8, 9
]))