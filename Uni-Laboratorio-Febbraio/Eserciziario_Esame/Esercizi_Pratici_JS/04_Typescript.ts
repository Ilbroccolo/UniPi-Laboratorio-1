// ==========================================
// CAPITOLO 4: TYPESCRIPT E TIPI
// (Nota: Copia questo codice in un playground TS o usa 'tsc')
// ==========================================

/*
ESERCIZIO 13: Interfacce e Tipi Opzionali
TRACCIA: Definire un'interfaccia `Studente` con: matricola (number), nome (string), 
votoLaurea (number, opzionale).
Scrivere `isLaureato(s)` che ritorna true se il voto esiste.
*/

// DEFINISCI QUI L'INTERFACCIA
// interface Studente ...

function isLaureato(s) {
    // SCRIVI QUI LA RISPOSTA
    return false;
}


/*
ESERCIZIO 14: Generics (Scatola)
TRACCIA: Scrivere una classe `Scatola<T>` che puo' contenere un valore di tipo T.
Metodi: `inserisci(val: T)` e `estrai(): T`.
*/

class Scatola {
    // SCRIVI QUI LA IMPLEMENTAZIONE
}


/*
ESERCIZIO 15: Tuple e Array
TRACCIA: Definire un tipo `Punto3D` come una Tripla (Tupla) di 3 numeri [x, y, z].
Scrivere una funzione che somma due punti.
*/

// type Punto3D = ...
function sommaPunti(p1, p2) {
    // SCRIVI QUI LA IMPLEMENTAZIONE
    return [0, 0, 0];
}


/*
ESERCIZIO 16: Type Guards
TRACCIA: Una funzione accetta `input: string | number`.
Se e' una stringa, ritorna la lunghezza. Se e' un numero, ritorna il numero * 2.
*/

function processa(input) {
    // SCRIVI QUI LA IMPLEMENTAZIONE
    return 0;
}


/*
ESERCIZIO 25: Discriminated Union (Result Type)
TRACCIA: Definire un tipo `Result<T>` che puo' essere { success: true, data: T } 
OPPURE { success: false, error: string }.
Scrivere una funzione che gestisce entrambi i casi stampando il dato o l'errore.
*/

// type Result<T> = ...
function gestisci(res) {
    // SCRIVI QUI LA IMPLEMENTAZIONE
}
