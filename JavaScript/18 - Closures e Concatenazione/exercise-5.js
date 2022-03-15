function memoize(fn) {
  let cache = {};
  // ...
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      cache[n] = fn(n);
      return cache[n];
    }
  }
}

//FUNZIONE CALCOLO FATTORIALE
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}


factorial = memoize(factorial);

console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));