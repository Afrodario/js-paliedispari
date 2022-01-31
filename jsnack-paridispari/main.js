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

let primoBox = document.getElementById("even-odd");
let secondoBox = document.getElementById("chosen-number");
let terzoBox = document.getElementById("computer-number");
let quartoBox = document.getElementById("sum-result");
let spanPariDispari = document.getElementById("even-odd-result");
let esito = document.querySelector("h1");

//Il giocatore sceglie di puntare su pari o dispari
let sceltaPuntata = prompt("Scegli pari o dispari.").toLowerCase();
primoBox.append(sceltaPuntata);
console.log(`Hai puntato su ${sceltaPuntata}`);

//Il giocatore sceglie un numero da 1 a 5
let sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
secondoBox.append(sceltaNumero);
console.log(`Hai scelto il numero ${sceltaNumero}`);

//Al computer viene assegnato un numero casuale da 1 a 5
let numeroComputer = randomGeneratorPc();
terzoBox.append(numeroComputer);
console.log(`Il computer ha avuto il numero ${numeroComputer}`);

//I due numeri vengono sommati
let sommaNumeri = sceltaNumero + numeroComputer;
quartoBox.append(sommaNumeri + ", ");
console.log(`La somma dei due numeri è ${sommaNumeri}`);

//La funzione pariDispari determina se la somma dei numeri è pari o dispari
let confronto = pariDispari(sommaNumeri);
spanPariDispari.append("un numero " + confronto);
console.log(`La somma dei due numeri è ${confronto}`);

//Le condizioni di vittoria o sconfitta vengono determinate, se il giocatore ha puntato su pari o dispari e la somma dei due numeri corrisponde alla puntata
if (sceltaPuntata == "pari" && confronto == "pari") {

    esito.innerHTML = ("HAI VINTO!");
    console.log(`La somma di ${sceltaNumero} e ${numeroComputer} equivale a ${sommaNumeri}. Hai vinto!`);
    
    
    } else if (sceltaPuntata == "dispari" && confronto == "dispari") {

    esito.innerHTML = ("HAI VINTO!");
    console.log(`La somma di ${sceltaNumero} e ${numeroComputer} equivale a ${sommaNumeri}. Hai vinto!`);
     
    } else {

    esito.innerHTML = ("HAI PERSO!");    
    console.log(`La somma di ${sceltaNumero} e ${numeroComputer} equivale a ${sommaNumeri}. Hai perso!`); 
}