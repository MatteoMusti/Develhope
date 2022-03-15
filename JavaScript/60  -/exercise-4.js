const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// code here
function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);
      return resolve(person)
    }, 1000)
  })
}

function fetchJobById(id) {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      const job = jobs.find((item) => item.id === id);
      return resolve(job)
    }, 1000)
  
  })
}

Promise.all([fetchPersonById(1), fetchJobById(1)]).then((values) => console.log(...values))


// Alternativa
// const person1 = fetchPersonById(1);
// const job1 = fetchJobById(1);

// Promise.all([person1, job1]).then((value) => console.log(value))