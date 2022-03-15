const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;

// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

const {id, ...personInfo} = person;
// Utilizzp la destrutturazione per assegnare alla variabile id la proprietà
// 'id' di person, mentre le restanti proprietà verranno inserite all'interno di
// personInfo attraverso il REST operator

console.log(id, personInfo);

