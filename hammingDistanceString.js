function hammingDistance(x,y){
  if(x.length !==y.length) throw new Error('Length of the string must be same!!')
    let dist=0
  for(let i=0;i<x.length;i++){
    if(x[i]!==y[i]){
      dist++
    }
  }
  return dist
}
console.log(hammingDistance('hellooo','dhllwsd'))