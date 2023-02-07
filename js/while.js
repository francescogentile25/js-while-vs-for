// chiedere numero utente FATTO
// IF dispari salvarlo in un array (dichiarato prima)
// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.

let userNumber= prompt("Inserisci un numero dispari")
const numberDatabase =[]
console.log(numberDatabase)

for(i=0, numberDatabase.lenght<10; i++;){
    userNumber= prompt("Inserisci un numero dispari")
    while (userNumber %2 ===0 || (isNaN(userNumber))){
        userNumber= prompt("Inserisci un numero dispari")
    }
    numberDatabase.push(parseInt(userNumber))
}
console.log(numberDatabase[i])