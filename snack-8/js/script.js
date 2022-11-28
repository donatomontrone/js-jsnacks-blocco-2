/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor', 'Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
const guests = [];


while (guests.length < 7) {
    const randomNamesIndex = Math.floor(Math.random() * (names.length));
    const randomLastnamesIndex  = Math.floor(Math.random() * (lastnames.length));

    let guest = names[randomNamesIndex] + " " + lastnames[randomLastnamesIndex];

    guests.push(guest);
}

console.log(guests);