/**
 * 
 * 
 * Calcola la somma dei primi 10 numeri di un array.
 */


const numberArray = [1, 2, 3, 4, 32, 7, 9, 11, 13, 45, 78, 98];

let sum =  0;
let average = 0;
let MaxNumber = numberArray[0];

for (let index = 0; index < 10; index++) {
    sum += numberArray[index]

    if (numberArray[index] > MaxNumber ) {
        MaxNumber = numberArray[index];
    }
}

average = sum / 10;

console.log(sum + 'somma');
console.log(average + 'media');
console.error(MaxNumber + 'numero massimo')
