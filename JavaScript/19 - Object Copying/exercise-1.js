const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

/* Modificando 'person2' viene modificato anche 'person1' poichè
gli ggetti, a differenza delle variabili, vengono copiati 'per riferimento'
piuttosto che 'per valore'. Qesto significa che gli viene assegnata la 
stessa locazione di memoria e quindi puntano al medesimo oggetto. */