// ==========================================
// CAPITOLO 11: RICORSIONE
// ==========================================

/*
ESERCIZIO 26: Somma Numeri in Array
TRACCIA: Scrivere `sumRecursive(arr)` che somma gli elementi di un array usando la ricorsione.
Suggerimento: somma = testa + somma(coda).
*/

function sumRecursive(arr) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
console.log("Es 26:", sumRecursive([1, 2, 3, 4])); // 10


/*
ESERCIZIO 27: Palindroma Ricorsiva
TRACCIA: Scrivere `isPalindrome(str)` che controlla se una stringa e' palindroma ricorsivamente.
Logica: Prima lettera == Ultima lettera AND il centro e' palindromo.
*/

function isPalindrome(str) {
    // SCRIVI QUI LA TUA RISPOSTA
    return true;
}

// TEST
console.log("Es 27:", isPalindrome("anna"), isPalindrome("ciao")); // true false


/*
ESERCIZIO 28: Tartaglia (Coefficiente Binomiale)
TRACCIA: Calcolare C(n, k) ricorsivamente.
Formula: C(n, k) = C(n-1, k-1) + C(n-1, k).
*/

function tartaglia(n, k) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 1;
}

// TEST
console.log("Es 28:", tartaglia(4, 2)); // 6
