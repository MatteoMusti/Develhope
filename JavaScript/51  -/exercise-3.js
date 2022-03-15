const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

// const person2 = { ...person1 };
const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);


//La shallow copy non copia anche gli oggetti annidati, ma solo il 
// riferimento ad essi, quindi modificando le prop della copia si 
// modificano anche quelle dell'originale

// Convertiamo quindi l'oggetto in una stringa JSON e subito lo ritrosformiamo
// in un oggetto, in modo da avere un nuovo oggetto con le stesse proprietà 
// ed indipendente dal primo