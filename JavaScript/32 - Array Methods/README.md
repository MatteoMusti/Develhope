# Array Methods - Exercise 4
Implementare la funzione `uncompletedNotes` che, dato un array di note, restituisce soltanto le note non completate.
Una nota viene considerata completata se **tutti** i todo presenti hanno il flag `done` impostato a `true`.

//FILTRARE ELEMENTI DA INSERIRE IN UN NUOVO ARRAY
//il metodo .filter permette di 'estrarre' da un array ed inserire in un nuovo array solo gli elementi che passano un test
let filter = numList.filter(number => number < 40)
console.log(filter);        // [5, 12, 8]
//La sintassi è:
array.filter(callback, contextObject)       //contextObject è opzionale
/*Questo metodo va ad iterare ciascun elemento dell'array e lo passa alla
callback function. Se questa ritorna un valore 'true', include l'elemento nel
muovo array*/