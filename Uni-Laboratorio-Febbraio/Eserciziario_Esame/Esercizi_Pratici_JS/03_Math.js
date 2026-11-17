// ==========================================
// CAPITOLO 3: MATEMATICA E ALGORITMI
// ==========================================

/*
ESERCIZIO 9: Funzione Iniettiva
TRACCIA: Scrivere `isIniettiva(f, dominio)` che restituisce true se la funzione 
non produce mai lo stesso output per due input diversi nel dominio.
*/

function isIniettiva(f, dominio) {
    // SCRIVI QUI LA TUA RISPOSTA
    return true;
}

// TEST
console.log("Es 9:", isIniettiva(x => x * x, [-2, 2])); // false (4 == 4)


/*
ESERCIZIO 10: Convoluzione Discreta (Prodotto Scalare)
TRACCIA: Dati due array A e B della stessa lunghezza, calcolare la somma dei prodotti elemento per elemento.
S = A[0]*B[0] + A[1]*B[1] + ...
*/

function prodottoScalare(A, B) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
console.log("Es 10:", prodottoScalare([1, 2], [3, 4])); // 1*3 + 2*4 = 11


/*
ESERCIZIO 11: Punto Fisso
TRACCIA: Cercare se esiste un numero intero x tra `min` e `max` tale che f(x) == x. 
Se esiste ritornalo, altrimenti null.
*/

function trovaPuntoFisso(f, min, max) {
    // SCRIVI QUI LA TUA RISPOSTA
    return null;
}

// TEST
console.log("Es 11:", trovaPuntoFisso(x => x, -5, 5)); // Qualsiasi numero va bene, es. -5


/*
ESERCIZIO 12: Numeri Triangolari Ricorsivi
TRACCIA: L'n-esimo numero triangolare e' la somma dei numeri da 1 a n. Scrivere una funzione ricorsiva.
*/

function triangolare(n) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
console.log("Es 12:", triangolare(4)); // 1+2+3+4 = 10


/*
ESERCIZIO 23: Numero Primo (IsPrime)
TRACCIA: Scrivere `isPrime(n)` che torna true se n e' primo.
*/

function isPrime(n) {
    // SCRIVI QUI LA TUA RISPOSTA
    return false;
}

// TEST
console.log("Es 23:", isPrime(7), isPrime(10)); // true false


/*
ESERCIZIO 24: MCD (Algoritmo di Euclide)
TRACCIA: Calcolare il Massimo Comune Divisore tra `a` e `b`.
Se b=0, MCD e' a. Altrimenti MCD(b, a % b).
*/

function mcd(a, b) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 1;
}

// TEST
console.log("Es 24:", mcd(12, 18)); // 6
