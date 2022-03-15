const Person = {

    set firstName(name) {
        this._firstName = name;
    },
    get firstName() {
        return this._firstName;
    },

    set lastName(surname) {
        this._lastName = surname;
    },
    get lastName() {
        return this._lastName;
    },
    
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const john = Object.create(Person);
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(Person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';


console.log(john.fullName()); 
console.log(simon.fullName()); 
