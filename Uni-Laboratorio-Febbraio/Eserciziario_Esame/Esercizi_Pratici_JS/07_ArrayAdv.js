// ==========================================
// CAPITOLI 16-17: ARRAY AVANZATI E DESTRUCTURING
// ==========================================

/*
ESERCIZIO 33: Swap Variabili
TRACCIA: Scambiare i valori di due variabili senza usare una variabile temp, usando il destructuring.
*/

function swapExample() {
    let a = 1, b = 2;
    // SCRIVI QUI LO SWAP

    return [a, b];
}
console.log("Es 33:", swapExample()); // [2, 1]


/*
ESERCIZIO 34: Somma Variadica (Rest Operator)
TRACCIA: Scrivere una funzione `sommaTutto(...numeri)` che accetta un numero arbitrario 
di argomenti e li somma tutti.
*/

function sommaTutto(...numeri) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
console.log("Es 34:", sommaTutto(1, 2, 3, 4, 10)); // 20


/*
ESERCIZIO 35: Merge di Oggetti (Spread)
TRACCIA: Dati due oggetti `defaultConfig` e `userConfig`, creare un `finalConfig` che ha 
tutte le proprieta', ma `userConfig` vince in caso di conflitto.
*/

function mergeConfig(def, user) {
    // SCRIVI QUI LA TUA RISPOSTA
    return {};
}

// TEST

/*
ESERCIZIO 46: Rotazione Matrice 90 Gradi
TRACCIA: Ruotare una matrice NxN di 90 gradi in senso orario, in-place.
*/

function rotate(matrix) {
    // SCRIVI QUI LA TUA RISPOSTA
}

// TEST
let mat = [[1, 2], [3, 4]];
rotate(mat);
console.log("Es 46:", mat); // [[3, 1], [4, 2]]
