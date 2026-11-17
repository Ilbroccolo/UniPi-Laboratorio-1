// ==========================================
// CAPITOLO 1: STRUTTURE DATI
// ==========================================

/*
ESERCIZIO 1: Il "Flatten" Manuale
TRACCIA: Scrivere una funzione ricorsiva `appiattisci(arr)` che prende un array che puo' contenere 
numeri o altri array (annidamento infinito) e restituisce un unico array piatto con tutti i numeri.
Non usare `flat()` nativo.
Esempio: [1, [2, [3, 4]], 5] -> [1, 2, 3, 4, 5]
*/

function appiattisci(arr) {
    // SCRIVI QUI LA TUA RISPOSTA
    A = [1, [2, [3, 4]], 5];
    B = [];
    for ( let i = 0; i < A.length; i++){
        if ( A.isArray(A[i]) ){
            appiattisci(A[i]);
        }
        else{
            B.push(B[i]); // push aggiunge in fondo all'array
        }
    }
    return B;
}

// TEST
console.log("Es 1:", appiattisci([1, [2, [3, 4]], 5]));


/*
ESERCIZIO 2: Multi-Insieme da Stringa
TRACCIA: Data una stringa, creare un oggetto che rappresenti il "Multi-Insieme" dei caratteri 
(conteggio frequenze), ma ignorando gli spazi.
Esempio: "a b a" -> { "a": 2, "b": 1 }
*/

function contaCaratteri(testo) {
    // SCRIVI QUI LA TUA RISPOSTA
    return {};
}

// TEST
console.log("Es 2:", contaCaratteri("a b a"));


/*
ESERCIZIO 3: Alberi Binari - Somma Foglie
TRACCIA: Dato un albero binario, restituire la somma dei valori delle sole FOGLIE (nodi senza figli).
Struttura Nodo: { val: number, sx: Nodo|null, dx: Nodo|null }
*/

function sommaFoglie(nodo) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
let albero = { val: 10, sx: { val: 5, sx: null, dx: null }, dx: { val: 15, sx: null, dx: null } };
console.log("Es 3:", sommaFoglie(albero)); // Deve dare 20 (5 + 15)


/*
ESERCIZIO 4: Intersezione di N Array
TRACCIA: Scrivere una funzione che accetta una matrice (array di array) e restituisce 
un array contenente solo gli elementi presenti in TUTTI i sotto-array.
Esempio: [[1, 2, 3], [2, 3, 4], [2, 5, 3]] -> [2, 3]
*/

function intersezioneTutti(matrice) {
    // SCRIVI QUI LA TUA RISPOSTA
    return [];
}

// TEST
console.log("Es 4:", intersezioneTutti([[1, 2, 3], [2, 3, 4], [2, 5, 3]]));


/*
ESERCIZIO 17: Matrice Trasposta
TRACCIA: Scrivere una funzione che accetta una matrice NxM e restituisce la sua trasposta MxN 
(scambia righe con colonne).
*/

function trasposta(matrice) {
    // SCRIVI QUI LA TUA RISPOSTA
    A = [[1, 2], [3, 4], [5, 6]];
    for ( let i = 0; i < A.length; i++){
        
    }
    return [];
}

// TEST
console.log("Es 17:", trasposta([[1, 2], [3, 4], [5, 6]]));
// Atteso: [[1, 3, 5], [2, 4, 6]]


/*
ESERCIZIO 18: Da Lista Concatenata ad Array
TRACCIA: Data una lista `head = {val: 1, next: ...}`, restituire un array con tutti i valori in ordine.
*/

function listToArray(head) {
    // SCRIVI QUI LA TUA RISPOSTA
    return [];
}

// TEST
let list = { val: 1, next: { val: 2, next: null } };
console.log("Es 18:", listToArray(list)); // [1, 2]


/*
ESERCIZIO 19: Differenza tra Insiemi (A - B)
TRACCIA: Dati due array che rappresentano insiemi (niente duplicati), restituire un array 
con gli elementi che sono in A ma NON in B.
*/

function differenza(A, B) {
    // SCRIVI QUI LA TUA RISPOSTA
    return [];
}

// TEST
console.log("Es 19:", differenza([1, 2, 3], [2, 4])); // [1, 3]
