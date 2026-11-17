/**
 * BIBBIA JAVASCRIPT SNIPPETS
 * ==========================================
 * Questo file contiene una collezione "iper dettagliata" di snippet JavaScript.
 * Ogni blocco include il "TRIGGER" (la scorciatoia da digitare) e il codice espanso.
 * 
 * NOTA: Per usare questi snippet in VS Code, copia il contenuto del file JSON allegato
 * nelle tue "User Snippets" (File > Preferences > User Snippets > javascript.json).
 */

// ==========================================
// 1. CONSOLE & DEBUGGING
// ==========================================

/* ------------------------------------------
   TRIGGER: clg
   DESC: Console log standard
------------------------------------------ */
console.log($1);

/* ------------------------------------------
   TRIGGER: cer
   DESC: Console error (Testo rosso)
------------------------------------------ */
console.error($1);

/* ------------------------------------------
   TRIGGER: cwa
   DESC: Console warning (Testo giallo)
------------------------------------------ */
console.warn($1);

/* ------------------------------------------
   TRIGGER: cta
   DESC: Console table (Visualizza array/oggetti come tabella)
------------------------------------------ */
console.table($1);

/* ------------------------------------------
   TRIGGER: ctime
   DESC: Avvia un timer per misurare prestazioni
------------------------------------------ */
console.time('${1:label}');

/* ------------------------------------------
   TRIGGER: ctimeEnd
   DESC: Ferma il timer e stampa il tempo trascorso
------------------------------------------ */
console.timeEnd('${1:label}');

/* ------------------------------------------
   TRIGGER: ctrace
   DESC: Stampa lo stack trace (chi ha chiamato chi)
------------------------------------------ */
console.trace('${1:message}');


// ==========================================
// 2. VARIABILI & DICHIARAZIONI
// ==========================================

/* ------------------------------------------
   TRIGGER: let
   DESC: Variabile mutabile (block scope)
------------------------------------------ */
let ${ 1: name } = ${ 2: value };

/* ------------------------------------------
   TRIGGER: const
   DESC: Costante immutabile (block scope)
------------------------------------------ */
const ${ 1: name } = ${ 2: value };

/* ------------------------------------------
   TRIGGER: dest
   DESC: Destructuring di un oggetto
------------------------------------------ */
const { ${ 1: prop } } = ${ 2: object };

/* ------------------------------------------
   TRIGGER: desta
   DESC: Destructuring di un array
------------------------------------------ */
const [${ 1: first }, ${ 2: second }] = ${ 3: array };


// ==========================================
// 3. FUNZIONI
// ==========================================

/* ------------------------------------------
   TRIGGER: fn
   DESC: Funzione nominata standard
------------------------------------------ */
function ${ 1: name } (${ 2: params }) {
    ${ 3 }
}

/* ------------------------------------------
   TRIGGER: afn
   DESC: Arrow Function (Anonima)
------------------------------------------ */
const ${ 1: name } = (${ 2: params }) => {
    ${ 3 }
};

/* ------------------------------------------
   TRIGGER: afns
   DESC: Arrow Function (Short - Return implicito)
------------------------------------------ */
const ${ 1: name } = (${ 2: params }) => ${ 3: value };

/* ------------------------------------------
   TRIGGER: iife
   DESC: Immediately Invoked Function Expression
------------------------------------------ */
(function () {
    ${ 1 }
})();

/* ------------------------------------------
   TRIGGER: gen
   DESC: Generator Function (per iteratori custom)
------------------------------------------ */
function* ${ 1: name } () {
    yield ${ 2: value };
}


// ==========================================
// 4. FLUSSO DI CONTROLLO (LOOPS & COND)
// ==========================================

/* ------------------------------------------
   TRIGGER: if
   DESC: If statement standard
------------------------------------------ */
if (${ 1: condition }) {
    ${ 2 }
}

/* ------------------------------------------
   TRIGGER: ife
   DESC: If-Else statement
------------------------------------------ */
if (${ 1: condition }) {
    ${ 2 }
} else {
    ${ 3 }
}

/* ------------------------------------------
   TRIGGER: ter
   DESC: Operatore Ternario
------------------------------------------ */
${ 1: condition } ? ${ 2: trueVal } : ${ 3: falseVal }

/* ------------------------------------------
   TRIGGER: for
   DESC: Ciclo For classico
------------------------------------------ */
for (let ${ 1: i } = 0; ${ 1: i } < ${ 2: array }.length; ${ 1: i } ++) {
    const ${ 3: element } = ${ 2: array }[${ 1: i }];
    ${ 4 }
}

/* ------------------------------------------
   TRIGGER: forr
   DESC: Ciclo For INVERSO (utile per rimuovere elementi)
------------------------------------------ */
for (let ${ 1: i } = ${ 2: array }.length - 1; ${ 1: i } >= 0; ${ 1: i } --) {
    const ${ 3: element } = ${ 2: array }[${ 1: i }];
    ${ 4 }
}

/* ------------------------------------------
   TRIGGER: forof
   DESC: Ciclo For-Of (Itera sui VALORI di array/iterable)
------------------------------------------ */
for (const ${ 1: element } of ${ 2: iterable }) {
    ${ 3 }
}

/* ------------------------------------------
   TRIGGER: forin
   DESC: Ciclo For-In (Itera sulle CHIAVI di un oggetto - OCCHIO AI PROTO!)
------------------------------------------ */
for (const ${ 1: key } in ${ 2: object }) {
    if (Object.hasOwnProperty.call(${ 2: object }, ${ 1: key })) {
        const ${ 3: element } = ${ 2: object }[${ 1: key }];
        ${ 4 }
    }
}

/* ------------------------------------------
   TRIGGER: tc
   DESC: Try-Catch block (Gestione errori)
------------------------------------------ */
try {
    ${ 1 }
} catch (error) {
    console.error(error);
}


// ==========================================
// 5. ARRAY METHODS (PROGRAMMAZIONE FUNZIONALE)
// ==========================================

/* ------------------------------------------
   TRIGGER: map
   DESC: Trasforma ogni elemento (ritorna NUOVO array)
------------------------------------------ */
const ${ 1: newArray } = ${ 2: array }.map((${ 3: item }) => {
    return ${ 4: transform };
});

/* ------------------------------------------
   TRIGGER: filter
   DESC: Filtra elementi (ritorna NUOVO array con elementi validi)
------------------------------------------ */
const ${ 1: filtered } = ${ 2: array }.filter((${ 3: item }) => {
    return ${ 4: condition };
});

/* ------------------------------------------
   TRIGGER: reduce
   DESC: Accumula valori in un unico risultato
------------------------------------------ */
const ${ 1: sum } = ${ 2: array }.reduce((acc, ${ 3: curr }) => {
    return acc + ${ 3: curr };
}, ${ 4: initialValue });

/* ------------------------------------------
   TRIGGER: find
   DESC: Trova il PRIMO elemento che soddisfa la condizione
------------------------------------------ */
const ${ 1: found } = ${ 2: array }.find((${ 3: item }) => ${ 4: item.id === targetId });

/* ------------------------------------------
   TRIGGER: some
   DESC: Ritorna TRUE se ALMENO UNO soddisfa la condizione
------------------------------------------ */
const ${ 1: hasItem } = ${ 2: array }.some((${ 3: item }) => ${ 4: condition });

/* ------------------------------------------
   TRIGGER: every
   DESC: Ritorna TRUE se TUTTI soddisfano la condizione
------------------------------------------ */
const ${ 1: allValid } = ${ 2: array }.every((${ 3: item }) => ${ 4: condition });

/* ------------------------------------------
   TRIGGER: sortn
   DESC: Ordina NUMERI (sort di default è alfabetico!)
------------------------------------------ */
${ 1: array }.sort((a, b) => a - b);

/* ------------------------------------------
   TRIGGER: toSorted
   DESC: Ordina SENZA modificare l'originale (ES2023)
------------------------------------------ */
const ${ 1: sorted } = ${ 2: array }.toSorted((a, b) => a - b);


// ==========================================
// 6. OGGETTI (OBJECT)
// ==========================================

/* ------------------------------------------
   TRIGGER: ok
   DESC: Array delle CHIAVI dell'oggetto
------------------------------------------ */
const keys = Object.keys(${ 1: object });

/* ------------------------------------------
   TRIGGER: ov
   DESC: Array dei VALORI dell'oggetto
------------------------------------------ */
const values = Object.values(${ 1: object });

/* ------------------------------------------
   TRIGGER: oe
   DESC: Array delle coppie [chiave, valore]
------------------------------------------ */
const entries = Object.entries(${ 1: object });

/* ------------------------------------------
   TRIGGER: oassign
   DESC: Merge di oggetti (Shallow copy)
------------------------------------------ */
const ${ 1: merged } = Object.assign({}, ${ 2: obj1 }, ${ 3: obj2 });

/* ------------------------------------------
   TRIGGER: ofreeze
   DESC: Rende l'oggetto immutabile
------------------------------------------ */
Object.freeze(${ 1: object });


// ==========================================
// 7. CLASSI (ES6)
// ==========================================

/* ------------------------------------------
   TRIGGER: class
   DESC: Definizione Classe base
------------------------------------------ */
class $ { 1: ClassName } {
    constructor(${ 2: params }) {
        this.${ 3: prop } = ${ 2: params };
    }

    ${ 4: methodName } () {
        ${ 5 }
    }
}

/* ------------------------------------------
   TRIGGER: classext
   DESC: Classe con Ereditarietà
------------------------------------------ */
class $ { 1: Child } extends ${ 2: Parent } {
    constructor(${ 3: params }) {
        super(${ 3: params });
        this.${ 4: prop } = ${ 5: value };
    }
}


// ==========================================
// 8. ASYNC / AWAIT & PROMISES
// ==========================================

/* ------------------------------------------
   TRIGGER: prom
   DESC: Nuova Promise manuale
------------------------------------------ */
new Promise((resolve, reject) => {
    ${ 1 }
    // resolve(val);
    // reject(err);
});

/* ------------------------------------------
   TRIGGER: then
   DESC: Gestione Promise (Then/Catch)
------------------------------------------ */
${ 1: promise }
    .then((res) => {
        ${ 2 }
})
    .catch((err) => {
        console.error(err);
    });

/* ------------------------------------------
   TRIGGER: async
   DESC: Funzione Asincrona
------------------------------------------ */
async function ${ 1: name } (${ 2: params }) {
    try {
        const res = await ${ 3: promise };
    } catch (error) {
        console.error(error);
    }
}

/* ------------------------------------------
   TRIGGER: fetch
   DESC: Richiesta HTTP (Fetch API)
------------------------------------------ */
fetch('${1:url}')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

/* ------------------------------------------
   TRIGGER: fetchasync
   DESC: Fetch con Async/Await (Più pulito)
------------------------------------------ */
const fetchData = async () => {
    try {
        const res = await fetch('${1:url}');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


// ==========================================
// 9. DOM MANIPULATION
// ==========================================

/* ------------------------------------------
   TRIGGER: qs
   DESC: Query Selector (Primo elemento)
------------------------------------------ */
const ${ 1: el } = document.querySelector('${2:selector}');

/* ------------------------------------------
   TRIGGER: qsa
   DESC: Query Selector All (Tutti gli elementi - NodeList)
------------------------------------------ */
const ${ 1: els } = document.querySelectorAll('${2:selector}');

/* ------------------------------------------
   TRIGGER: ael
   DESC: Add Event Listener
------------------------------------------ */
${ 1: element }.addEventListener('${2:click}', (e) => {
    ${ 3 }
});

/* ------------------------------------------
   TRIGGER: cre
   DESC: Crea Elemento
------------------------------------------ */
const ${ 1: el } = document.createElement('${2:div}');

/* ------------------------------------------
   TRIGGER: ac
   DESC: Append Child (Aggiunge figlio)
------------------------------------------ */
${ 1: parent }.appendChild(${ 2: child });


// ==========================================
// 10. UTILITIES & ALGORITHMS
// ==========================================

/* ------------------------------------------
   TRIGGER: clone
   DESC: Deep Clone veloce (Hack JSON)
------------------------------------------ */
const ${ 1: clone } = JSON.parse(JSON.stringify(${ 2: original }));

/* ------------------------------------------
   TRIGGER: structClone
   DESC: Deep Clone moderno (ES2022)
------------------------------------------ */
const ${ 1: clone } = structuredClone(${ 2: original });

/* ------------------------------------------
   TRIGGER: sleep
   DESC: Funzione pausa (usare con await)
------------------------------------------ */
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
// await sleep(1000);

/* ------------------------------------------
   TRIGGER: random
   DESC: Numero random tra min e max (inclusi)
------------------------------------------ */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/* ------------------------------------------
   TRIGGER: unique
   DESC: Rimuovi duplicati da un array (Set)
------------------------------------------ */
const ${ 1: unique } = [...new Set(${ 2: array })];


// ==========================================
// 11. RICORSIONE & PATTERNS
// ==========================================

/* ------------------------------------------
   TRIGGER: rec
   DESC: Boilerplate funzione ricorsiva (Base + Passo)
------------------------------------------ */
function ${ 1: funzioneRicorsiva } (n) {
    // 1. Caso Base: mi fermo
    if (n <= ${ 2: 0 }) return ${ 3: val };

    // 2. Passo Ricorsivo: passo il problema ridotto
    return ${ 4: operazione } + ${ 1: funzioneRicorsiva } (n - 1);
}

/* ------------------------------------------
   TRIGGER: fib
   DESC: Fibonacci Ricorsivo (N-esimo numero)
------------------------------------------ */
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

/* ------------------------------------------
   TRIGGER: fibmemo
   DESC: Fibonacci Memoizzato (Cache veloce)
------------------------------------------ */
const memo = {};
function fibMemo(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    return memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
}


// ==========================================
// 12. ALBERI BINARI (BINARY TREES)
// ==========================================

/* ------------------------------------------
   TRIGGER: treeNode
   DESC: Nodo Albero Binario semplice {val, sx, dx}
------------------------------------------ */
const ${ 1: nodo } = { val: ${ 2: valore }, sx: null, dx: null };

/* ------------------------------------------
   TRIGGER: dfsPre
   DESC: Visita Pre-Order: IO -> SX -> DX
------------------------------------------ */
function preOrder(nodo) {
    if (!nodo) return;
    console.log(nodo.val); // VISITA
    preOrder(nodo.sx);
    preOrder(nodo.dx);
}

/* ------------------------------------------
   TRIGGER: dfsIn
   DESC: Visita In-Order: SX -> IO -> DX (Ordinata nei BST!)
------------------------------------------ */
function inOrder(nodo) {
    if (!nodo) return;
    inOrder(nodo.sx);
    console.log(nodo.val); // VISITA
    inOrder(nodo.dx);
}

/* ------------------------------------------
   TRIGGER: dfsPost
   DESC: Visita Post-Order: SX -> DX -> IO (Dal basso)
------------------------------------------ */
function postOrder(nodo) {
    if (!nodo) return;
    postOrder(nodo.sx);
    postOrder(nodo.dx);
    console.log(nodo.val); // VISITA
}

/* ------------------------------------------
   TRIGGER: bfs
   DESC: Visita in Ampiezza (Livelli) con CODA
------------------------------------------ */
function bfs(radice) {
    if (!radice) return;
    const coda = [radice]; // Coda FIFO

    while (coda.length > 0) {
        const nodo = coda.shift(); // Prendo il primo
        console.log(nodo.val);      // VISITA

        if (nodo.sx) coda.push(nodo.sx);   // Accodo figli
        if (nodo.dx) coda.push(nodo.dx);
    }
}

/* ------------------------------------------
   TRIGGER: bstSearch
   DESC: Ricerca Binaria in BST (Ricorsiva)
------------------------------------------ */
function search(nodo, target) {
    if (!nodo) return false;      // Non trovato
    if (nodo.val === target) return true; // Trovato!

    if (target < nodo.val) return search(nodo.sx, target); // SX
    return search(nodo.dx, target); // DX
}

/* ------------------------------------------
   TRIGGER: bstInsert
   DESC: Inserimento in BST (Ricorsivo)
------------------------------------------ */
function insert(nodo, val) {
    if (!nodo) return { val: val, sx: null, dx: null };

    if (val < nodo.val) {
        nodo.sx = insert(nodo.sx, val);
    } else {
        nodo.dx = insert(nodo.dx, val);
    }
    return nodo;
}


// ==========================================
// 13. GRAFI (GRAPHS)
// ==========================================

/* ------------------------------------------
   TRIGGER: graphBuilder
   DESC: Crea Grafo come Mappa di Adiacenza
------------------------------------------ */
const grafo = new Map();
grafo.set('A', ['B', 'C']);
grafo.set('B', ['A', 'D']);
// ...

/* ------------------------------------------
   TRIGGER: graphDFS
   DESC: Visita Grafo Profondità (con Visited Set)
------------------------------------------ */
function dfsGraph(nodo, visitati = new Set()) {
    visitati.add(nodo);
    console.log(nodo); // VISITA

    const vicini = grafo.get(nodo) || [];
    for (const vicino of vicini) {
        if (!visitati.has(vicino)) {
            dfsGraph(vicino, visitati);
        }
    }
}

/* ------------------------------------------
   TRIGGER: graphBFS
   DESC: Visita Grafo Ampiezza (con Visited Set e Coda)
------------------------------------------ */
function bfsGraph(nodoPartenza) {
    const visitati = new Set([nodoPartenza]);
    const coda = [nodoPartenza];

    while (coda.length > 0) {
        const nodo = coda.shift();
        console.log(nodo); // VISITA

        const vicini = grafo.get(nodo) || [];
        for (const vicino of vicini) {
            if (!visitati.has(vicino)) {
                visitati.add(vicino); // Segna SUBITO
                coda.push(vicino);
            }
        }
    }
}
