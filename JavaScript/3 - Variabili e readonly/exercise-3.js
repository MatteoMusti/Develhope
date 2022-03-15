const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student)
}

addStudent('Marco');
console.log(students);

/*La variabile readonly const non definisce un array costante, ma un 
riferimento costante all'array. Il riferimento non può essere modificato
mentre è possibile modificare gli elementi dell'array */