// ==========================================
// CAPITOLI 20-21: GRAFI
// Grafo = Map<Nodo, Array<Vicini>>
// ==========================================

/*
ESERCIZIO 39: Grado di un Nodo
TRACCIA: Dato un grafo e un nodo, restituire il numero di vicini (grado).
*/

function grado(grafo, nodo) {
    // SCRIVI QUI LA TUA RISPOSTA
    return 0;
}

// TEST
let g = new Map();
g.set("A", ["B", "C"]);
console.log("Es 39:", grado(g, "A")); // 2


/*
ESERCIZIO 40: Esiste Percorso (DFS)
TRACCIA: Scrivere `haPercorso(g, start, end)` che ritorna true se esiste una strada.
Usa DFS e un Set `visited` per evitare loop.
*/

function haPercorso(grafo, curr, target, visited = new Set()) {
    // SCRIVI QUI LA TUA RISPOSTA
    return false;
}

// TEST
console.log("Es 40:", haPercorso(g, "A", "C")); // true


/*
ESERCIZIO 41: Distanza Minima (BFS)
TRACCIA: Trovare la distanza minima (numero di passi) tra `start` e `end`.
Usa BFS (Code).
*/

function distanzaMinima(grafo, start, end) {
    // SCRIVI QUI LA TUA RISPOSTA
    return -1;
}

// TEST
console.log("Es 41:", distanzaMinima(g, "A", "C")); // 1
