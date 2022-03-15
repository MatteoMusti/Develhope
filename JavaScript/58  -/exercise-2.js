const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finder = persons.find((item) => item.id === id);

      if (finder) {
        return resolve(finder);
      }
      
      return reject(`La persona con l'id ${id} non esiste`);
    }, 1000);
  });
}

fetchPersonById(4)
  .then((person) => console.log(person))
  .catch((err) => console.log(err));
