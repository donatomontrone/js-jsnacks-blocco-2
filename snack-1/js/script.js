/**
 * 
 * 
 * 
    L'utente inserisce un numero, con un prompt.
    Il software stampa se l'utente è maggiorenne, se è anziano (>65) o se un bambino (<14), oppure se l'età non è valida.
 * 
 * 
 * 
    **/

// * Chiedi l'età all'utente //
const age = parseInt(prompt('Inserisci la tua età.'));

if (age > 120){
    console.warn('l\'utente ha inserito un\'età inverosimile')
} else if (age > 65){
    console.log('l\'utente ha più di 65 anni ' + age)
} else if (age >= 18) {
    console.log('l\'utente è maggiorenne ' + age)
} else if (age >= 14 && age < 18) {
    console.log('l\'utente è adolescente ' + age)
} else if (age > 0 && age < 14) {
    console.log('l\'utente ha meno di 14 anni ' + age)
} else {
    console.warn('l\'utente ha inserito un\'età non valida')
}

