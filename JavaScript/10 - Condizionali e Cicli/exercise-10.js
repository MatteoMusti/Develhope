function sumUntil(maxValue) {
  let number = 0; 
  let i = 0;
  while (i<maxValue){
    number += (i + 1);
    i++
  }
  return number
}

console.log(sumUntil(5));