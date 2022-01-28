//Funzione di generazione numero casuale da 1 a 5 per computer
function randomGeneratorPc () {
    let risultatoNumerico;
    risultatoNumerico = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    return risultatoNumerico;
}

//Funzione di determinazione pari o dispari
function pariDispari (num) {
    let modulo = num % 2;
    if (modulo == 0) {
        risultatoTesto = ("pari");
    } else {
        risultatoTesto = ("dispari");
    }
    return risultatoTesto;
}

//Il giocatore sceglie di puntare su pari o dispari
let sceltaPuntata = prompt("Scegli pari o dispari.");
console.log(`Hai puntato su ${sceltaPuntata}`);

//Il giocatore sceglie un numero da 1 a 5
let sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`Hai scelto il numero ${sceltaNumero}`);

//Al computer viene assegnato un numero casuale da 1 a 5
let numeroComputer = randomGeneratorPc();
console.log(`Il computer ha avuto il numero ${numeroComputer}`);

//I due numeri vengono sommati
let sommaNumeri = sceltaNumero + numeroComputer;
console.log(`La somma dei due numeri è ${sommaNumeri}`);

//La funzione pariDispari determina se la somma dei numeri è pari o dispari
let confronto = pariDispari(sommaNumeri);
console.log(`La somma dei due numeri è ${confronto}`);

//Le condizioni di vittoria o sconfitta vengono determinate, se il giocatore ha puntato su pari o dispari e la somma dei due numeri corrisponde alla puntata
if (sceltaPuntata == "pari" && confronto == "pari") {
    console.log(`La somma di ${sceltaNumero} e ${numeroComputer} equivale a ${sommaNumeri}. Hai vinto!`);      
    } else if (sceltaPuntata == "dispari" && confronto == "dispari") {
    console.log(`La somma di ${sceltaNumero} e ${numeroComputer} equivale a ${sommaNumeri}. Hai vinto!`); 
    } else {
    console.log(`La somma di ${sceltaNumero} e ${numeroComputer} equivale a ${sommaNumeri}. Hai perso!`); 
}
