function uncompletedNotes(notes) {
  let filter = notes.filter(note => note.todos.some(todo => todo.done === false));
  return filter;
}

// Utilizziamo il metodo filter per filtrare nell'array notes
// Questa ci restituirà solo gle elementi che passano il test

// Siccome però 'todos' è anch'esso un array, all'interno delle funzione filter 
// utilizziamo il metodo some() per valutare se almeno un elemento 'done' risulta false
// se è cosi la funzione ritorna true.

//Questo significa che l'elemento supera il test del filter che quindi tornerò un
// array contenente solo gli oggetti che hanno almeno un false per la 
// prop done, ovvero le note incomplete.

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 3,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

const notesInProgress = uncompletedNotes(notes);
console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);