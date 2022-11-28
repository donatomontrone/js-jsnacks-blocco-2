

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbersInt = [3,7,5,34,65,87,23,567,6577,3243,654,7869,786,12,3454,6432532];
let sum = 0;
for (let index = 0; index < numbersInt.length; index++) {
    if (numbersInt[index] % 2 == 1) {
        sum += numbersInt[index];
    }
}
console.log(sum);