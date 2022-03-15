class Person {
  // ...
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(name) {
    this._firstName = name;
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(surname) {
    this._lastName = surname;
  }
  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
