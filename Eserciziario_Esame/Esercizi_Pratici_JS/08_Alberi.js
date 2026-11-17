// ==========================================
// CAPITOLO 18: ALBERI BINARI E BST
// ==========================================

/*
ESERCIZIO 36: Conteggio Nodi
TRACCIA: Scrivere una funzione ricorsiva che conta quanti nodi ci sono in totale nell'albero.
*/

function contaNodi(root) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
let albero = { val: 1, sx: { val: 2, sx: null, dx: null }, dx: null };
console.log("Es 36:", contaNodi(albero)); // 2


/*
ESERCIZIO 37: Altezza Albero
TRACCIA: Calcolare l'altezza dell'albero (il percorso piu' lungo dalla radice a una foglia).
*/

function altezza(root) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
console.log("Es 37:", altezza(albero)); // 1 (radice -> un figlio)


/*
ESERCIZIO 38: Verifica BST
TRACCIA: Controllare se un albero e' un BST valido (ogni nodo deve rispettare min/max ereditati).
*/

function isBST(nodo, min = -Infinity, max = Infinity) {
    // SCRIVI QUI LA TUA RISPOSTA
    return true;
}

// TEST
let bst = { val: 10, sx: { val: 5, sx: null, dx: null }, dx: { val: 15, sx: null, dx: null } };

/*
ESERCIZIO 44: Specchia Albero (Mirror)
TRACCIA: Scrivere una funzione che inverte speculare (sx diventa dx) tutto l'albero.
*/

function invertTree(root) {
    // SCRIVI QUI LA TUA RISPOSTA
    return root;
}

// TEST
let mTree = { val: 1, sx: { val: 2, sx: null, dx: null }, dx: { val: 3, sx: null, dx: null } };
let inverted = invertTree(mTree);
console.log("Es 44:", inverted.sx.val); // 3 (era dx)


/*
ESERCIZIO 45: Albero Simmetrico
TRACCIA: Verificare se un albero e' speculare a se stesso.
*/

function isSymmetric(root) {
    // SCRIVI QUI LA TUA RISPOSTA
    return true;
}
