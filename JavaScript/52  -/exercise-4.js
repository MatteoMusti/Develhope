const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
}

// Utilizzo una funzione replacer per filtrare solo i valori numerici
function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

const json = JSON.stringify(person, replacer);


// Alternativa usando un replacer array
// const json = JSON.stringify(person, ['id', 'age']);



