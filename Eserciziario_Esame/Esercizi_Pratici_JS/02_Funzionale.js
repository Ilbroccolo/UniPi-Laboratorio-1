// ==========================================
// CAPITOLO 2: PROGRAMMAZIONE FUNZIONALE
// ==========================================

/*
ESERCIZIO 5: Pipeline di Composizione
TRACCIA: Scrivere una funzione `pipeline(funzioni)` che accetta un array di funzioni [f1, f2, ...] 
e restituisce una nuova funzione che applica le f in sequenza all'input.
Result = f_n(... f2(f1(x)) ...)
*/

function pipeline(funzioni) {
    // SCRIVI QUI LA TUA RISPOSTA (Ritorna una funzione)
    return function (x) { return x; };
}

// TEST
const pipe = pipeline([x => x + 1, x => x * 2]);
console.log("Es 5:", pipe(5)); // (5+1)*2 = 12


/*
ESERCIZIO 6: Filtro Asimmetrico (Partition)
TRACCIA: Scrivere `partition(arr, predicato)` che restituisce un oggetto { pass: [...], fail: [...] }.
In `pass` vanno gli elementi per cui il predicato e' true, in `fail` gli altri.
Vincolo: Scorrere l'array una sola volta.
*/

function partition(arr, predicato) {
    // SCRIVI QUI LA TUA RISPOSTA
    return { pass: [], fail: [] };
}

// TEST
console.log("Es 6:", partition([1, 2, 3, 4], x => x % 2 === 0));
// Atteso: { pass: [2, 4], fail: [1, 3] }


/*
ESERCIZIO 7: Generatore di Contatori (Closure)
TRACCIA: Scrivere `creaContatori(n)` che restituisce un array di `n` funzioni.
La funzione all'indice `i` deve ritornare `i` quando chiamata.
Attenzione all'errore classico del `var` nei cicli!
*/

function creaContatori(n) {
    // SCRIVI QUI LA TUA RISPOSTA
    return [];
}

// TEST
let fns = creaContatori(3);
console.log("Es 7:", fns[0](), fns[1](), fns[2]()); // Atteso: 0 1 2


/*
ESERCIZIO 8: Map su Albero (Tree Map)
TRACCIA: Scrivere una funzione ricorsiva `alberoMap(nodo, f)` che restituisce un NUOVO albero 
strutturalmente identico, ma dove ogni valore `val` e' trasformato dalla funzione `f`.
*/

function alberoMap(nodo, f) {
    // SCRIVI QUI LA TUA RISPOSTA
    return null;
}

// TEST
let root = { val: 10, sx: null, dx: null };
console.log("Es 8:", alberoMap(root, x => x * 2)); // { val: 20, ... }


/*
ESERCIZIO 20: Memoization (Cache Semplice)
TRACCIA: Scrivere una funzione `memoize(f)` che accetta una funzione (che prende 1 argomento) 
e ne restituisce una versione "con memoria". Se richiamata con lo stesso input, non ricalcola.
*/

function memoize(f) {
    // SCRIVI QUI LA TUA RISPOSTA
    return f;
}

// TEST
let callCount = 0;
const slowSquare = memoize((n) => { callCount++; return n * n; });
console.log("Es 20:", slowSquare(5), slowSquare(5)); // 25 25
console.log("Chiamate reali:", callCount); // Deve essere 1, non 2


/*
ESERCIZIO 21: Currying (Somma a Catena)
TRACCIA: Scrivere una funzione `somma(a)` che puo' essere chiamata cosi': `somma(2)(3)(4)` 
e restituisce la somma finale (versione semplice a 3 livelli).
*/

function somma(a) {
    // SCRIVI QUI LA TUA RISPOSTA
    return function (b) { return 0; };
}

// TEST
console.log("Es 21:", somma(1)(2)(3)); // 6


/*
ESERCIZIO 22: Implementazione Manuale di 'Every'
TRACCIA: Scrivere `myEvery(arr, predicato)` che torna true se TUTTI gli elementi soddisfano il predicato.
Appena ne trovi uno falso, devi fermarti (short-circuit).
*/

function myEvery(arr, predicato) {
    // SCRIVI QUI LA TUA RISPOSTA
    return true;
}

// TEST
console.log("Es 22:", myEvery([2, 4, 6], x => x % 2 === 0)); // true

/*
ESERCIZIO 47: Map tramite Reduce
TRACCIA: Implementare `myMap(arr, f)` usando SOLO `reduce`.
*/

function myMap(arr, f) {
    // SCRIVI QUI LA TUA RISPOSTA
    return [];
}

// TEST
console.log("Es 47:", myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]


/*
ESERCIZIO 48: Filter tramite Reduce
TRACCIA: Implementare `myFilter(arr, pred)` usando SOLO `reduce`.
*/

function myFilter(arr, predicato) {
    // SCRIVI QUI LA TUA RISPOSTA
    return [];
}

// TEST
console.log("Es 48:", myFilter([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]
