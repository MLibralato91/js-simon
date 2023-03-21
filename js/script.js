/**
 * Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

 */


const numberPc = [];
let numbers = document.getElementById('numbers');

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


setInterval(() => {
    while (numberPc.length < 5) {
        // genero numeri random tra 1 e 100
        num = getRndNumber(1, 100);
        if (!numberPc.includes(num))
            numberPc.push(num);
        
        
        // verifico con includes e poi pusho
    
    }
    numbers.innerText = numberPc;
    

}, 5000);




console.log(numberPc);