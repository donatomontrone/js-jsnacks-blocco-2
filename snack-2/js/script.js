/**
    * 
    Il software deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
    */

// * Chiedi l'età all'utente //
let number;
let sum = 0;
for (let index = 0; index < 10; index++) {
    number = parseInt(prompt('Inserisci un numero.'));

    if (!Number.isNaN(number)){
        sum += number;
    }
}
console.log(sum)

