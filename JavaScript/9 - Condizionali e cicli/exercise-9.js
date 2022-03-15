function getKeys(obj) {
  let keyList = [];
  for (let prop in obj) {
    keyList.push(prop);
  }
  return keyList;
}


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);