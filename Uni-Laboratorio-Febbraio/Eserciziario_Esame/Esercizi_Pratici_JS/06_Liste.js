// ==========================================
// CAPITOLI 12-14: LISTE CONCATENATE
// Struttura Nodo: { val: ..., next: Nodo|null }
// ==========================================

/*
ESERCIZIO 29: Conta Occorrenze
TRACCIA: Scrivere `countVal(nodo, target)` che conta quante volte `target` appare nella lista.
*/

function countVal(nodo, target) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
let list = { val: 1, next: { val: 2, next: { val: 1, next: null } } };
console.log("Es 29:", countVal(list, 1)); // 2


/*
ESERCIZIO 30: Ultimo Elemento
TRACCIA: Restituire il valore dell'ultimo nodo della lista.
*/

function getLast(nodo) {
    // SCRIVI QUI LA TUA RISPOSTA
    return null;
}

// TEST
console.log("Es 30:", getLast(list)); // 1


/*
ESERCIZIO 31: Filtra Lista
TRACCIA: Scrivere `listFilter(nodo, predicato)` che restituisce una NUOVA lista 
contenente solo i nodi che passano il test.
*/

function listFilter(nodo, predicato) {
    // SCRIVI QUI LA TUA RISPOSTA
    return null;
}

// TEST
let filtered = listFilter(list, x => x === 2);
console.log("Es 31:", filtered.val); // 2


/*
ESERCIZIO 32: Append (Concatena Due Liste)
TRACCIA: Scrivere `listConcat(l1, l2)` che attacca `l2` in fondo a `l1`.
*/

function listConcat(l1, l2) {
    // SCRIVI QUI LA TUA RISPOSTA
    return null;
}

// TEST
console.log("Es 32:", listConcat({ val: 1, next: null }, { val: 2, next: null }));

/*
ESERCIZIO 42: Inverti Lista (Reverse)
TRACCIA: Scrivere `reverseList(head)` che inverte i puntatori della lista e restituisce la nuova testa.
*/

function reverseList(head) {
    // SCRIVI QUI LA TUA RISPOSTA
    return null;
}

// TEST
let rList = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
let reversed = reverseList(rList);
console.log("Es 42:", reversed.val, reversed.next.val); // 3 2


/*
ESERCIZIO 43: Rileva Ciclo (Floyd)
TRACCIA: Determinare se una lista ha un ciclo. Usa 'tartaruga' e 'lepre'.
*/

function hasCycle(head) {
    // SCRIVI QUI LA TUA RISPOSTA
    return false;
}
