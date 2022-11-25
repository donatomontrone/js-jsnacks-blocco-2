/**
 * 
 * 
 * Calcola la somma dei primi 10 numeri di un array.
 */


const numberArray = [1, 2, 3, 4, 5, 7, 9, 11, 13, 45, 67, 89];

let sum =  0;
let average = 0;

for (let index = 0; index < 10; index++) {
    sum += numberArray[index]

}

console.log(sum)

average = sum / 10;

console.log(average)