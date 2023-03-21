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

setInterval(() => {
    numbers.classList.add('opacity-0')
}, 10000);


console.log(numberPc);

const btn = document.querySelector('button');

btn.addEventListener('click', checkNumbers);

function checkNumbers() {
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let tree = document.getElementById('tree').value;
    let four = document.getElementById('four').value;
    let five = document.getElementById('five').value;

    let myNums = [one, two, tree, four, five];
    
    console.log(myNums);

    const intersection = numberPc.filter(function(obj){
        return myNums.indexOf(obj) !== -1;
        
    });

    
}