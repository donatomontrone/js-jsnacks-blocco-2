/***
    * 
    * 
    In un array sono contenuti i nomi degli invitati 
    alla festa del grande Gatsby, 
    chiedi all'utente il suo nome e comunicagli
    se può partecipare o no alla festa.
    * 
    */

    const invitati = ['Michela', 'Fabbia', 'Deshaun', 'Luke', 'Beatrice'];
    const userElement = document.getElementById('user-text')
    const button = document.querySelector('button');
    
    button.addEventListener('click', function(){
        const invitato = userElement.value;
        const result = document.querySelector('p')
        let findInvitato = false;

        for (let index = 0; index < invitati.length; index++) {
            if (invitato == invitati[index]) {
                findInvitato = true;
            }
        }
        if (findInvitato) {
            console.log('Sei invitato alla festa');
            result.innerHTML ='Sei invitato alla festa';
        } else {
            console.warn('Non puoi mettere piede alla festa!');
            result.innerHTML = 'Non puoi mettere piede alla festa!';
        }
    })

