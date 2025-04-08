//PUSH
// Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
// Modifica o array original.

let array = [1, 2, 3];
let newLength = arr.push(4, 5);
console.log(newLength); // Saída: 5
console.log(arr);       // Saída: [1, 2, 3, 4, 5]


// POP
// Remove o último elemento de um array e o retorna.
// Modifica o array original.
const array1 = [1, 2, 3];
const lastElement = arr.pop();
console.log(lastElement); // Saída: 3
console.log(arr);         // Saída: [1, 2]

// SHIFT
// Remove o primeiro elemento de um array e o retorna.
// Modifica o array original.
const array2 = [1, 2, 3];
const firstElement = arr.shift();
console.log(firstElement); // Saída: 1
console.log(arr);          // Saída: [2, 3]

// UNSHIFT
// Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
// Modifica o array original.
const array3 = [2, 3];
const newLength1 = arr.unshift(0, 1);
console.log(newLength); // Saída: 4
console.log(arr);       // Saída: [0, 1, 2, 3]

// SPLICE
// Adiciona, remove ou substitui elementos em um array em posições específicas.
// Modifica o array original.


// Remover elementos:

const array4 = [1, 2, 3, 4];
const removed = arr.splice(1, 2); // Remove 2 e 3
console.log(removed);  // Saída: [2, 3]
console.log(arr);      // Saída: [1, 4]
// Adicionar elementos:

const array5 = [1, 4];
arr.splice(1, 0, 2, 3); // Insere 2 e 3 no índice 1
console.log(arr);       // Saída: [1, 2, 3, 4]
// Substituir elementos:

const array6 = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // Substitui 2 e 3 por 'a' e 'b'
console.log(arr);           // Saída: [1, 'a', 'b', 4]

