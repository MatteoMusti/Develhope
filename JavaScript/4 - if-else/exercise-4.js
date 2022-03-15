function calculateSalary(role) {
  if (role === 'ceo'){
    return 'the salary of a ceo is 2200€';
  } 
  else if (role === 'manager'){
    return 'the salary of a manager is 1800€';
  } 
  else if (role === 'cto'){
    return 'the salary of a cto is 1800€';
  }
  else if (role === 'developer'){
    return 'the salary of a developer is 1500€';
  }
  else{
    return 'the default salary is 1000€';
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);