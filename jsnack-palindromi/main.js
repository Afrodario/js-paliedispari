function verificatorePalindromi(parolaScelta) {

    //Determino la lunghezza della parola in caratteri
    let lunghezzaParola = parolaScelta.length;
    console.log(lunghezzaParola);

    //Inizializzo delle variabili per immagazzinare i caratteri e la risposta della funzione
    let carattere = "";
    let parolaRovesciata = "";
    let palindromo = "";

    //Inizio un ciclo alla rovescia e assegno ogni carattere ad una variabile
    for (let i = lunghezzaParola - 1; i >= 0; i--) {
        carattere = parolaScelta[i];
        console.log(carattere);

        parolaRovesciata += carattere;
    }

    console.log(parolaRovesciata);

    //Procedo alla verifica della parola per accertarmi sia un palindromo e do il risultato
    if (parolaScelta == parolaRovesciata) {
        palindromo = alert("Questa parola è palindroma.");
    } else {
        palindromo = alert("Questa parola NON è palindroma.")
    }
    
    return palindromo;
}

verificatorePalindromi(prompt("Digita una parola.").toLowerCase());