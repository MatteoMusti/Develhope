function calculateSalary(role) {
  switch (role) {
    case 'ceo':
     return 'The salary of a ceo is 2200€'
      break
    case 'manager':
     return 'The salary of a manager is 1800€'
      break
    case 'cto':
     return 'The salary of a cto is 1800€'
      break
    case 'developer':
     return 'The salary of a developer is 1500€'
      break
    default:
     return 'The default salary is 1000€'
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