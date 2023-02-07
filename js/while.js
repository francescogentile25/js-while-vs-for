// chiedere numero utente FATTO
// IF dispari salvarlo in un array (dichiarato prima)
// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.

let userNumber= prompt("Inserisci un numero dispari")
const numberDatabase =[]
    while (numberDatabase.length<10){
        userNumber= prompt("Inserisci un numero dispari")
        if (userNumber %2 ===1 && (!isNaN(userNumber))){
            numberDatabase.push(parseInt(userNumber))
        }
    }
    console.log(numberDatabase)
    for (let i = 0; i < numberDatabase.length; i++) {
        console.log(numberDatabase[i]);
    }

    