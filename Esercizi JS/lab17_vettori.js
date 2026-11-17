/**
 * LAB 17 - ALGEBRA VETTORIALE AVANZATA & APPLICAZIONE PARZIALE
 * Esercizi estratti da LAB1_17_2526.txt
 */

// --- Esercizio 1: Math Variadico ---
function math(op, ...ns) {
    switch (op) {
        case '+': return ns.reduce((r, e) => r + e, 0);
        case '*': return ns.reduce((r, e) => r * e, 1);
        case '-': {
            let [inizio, ...resto] = ns;
            return resto.reduce((r, e) => r - e, inizio);
        }
        case '/': {
            let [inizio, ...resto] = ns;
            return resto.reduce((r, e) => r / e, inizio);
        }
    }
}
console.log("Math /:", math('/', 16, 2, 2)); // -> 4

// --- Esercizio 2: Filter In-Place (FIP) ---
function fip(a, p) {
    let aFiltrato = a.filter(p);
    a.length = 0;
    a.push(...aFiltrato);
}
let prova = [3, 5, 10, 1, 4];
fip(prova, x => x % 2);
console.log("FIP:", prova); // -> [3,5,1]

// --- Esercizio 3: Somma Variadica ---
function somma(...ns) {
    let s = 0;
    for (let n of ns) s += n;
    return s;
}
console.log("Somma:", somma(5, 7, 2)); // -> 14

// --- Esercizio 4: IsSorted (Ricorsivo) ---
function isSorted(a) {
    if (a.length < 2) return true;
    if (a[0] >= a[1]) return false;
    return isSorted(a.slice(1));
}
console.log("IsSorted:", isSorted([1, 2, 2, 3])); // -> false

// --- Esercizio 5: Deframmenta ---
function deframmenta(a) {
    if (a.length < 2) return [];
    let aDef = [];
    let tmp = [a[0]];
    for (let i = 1; i < a.length; i++) {
        if (a[i] == tmp[0]) {
            tmp.push(a[i]);
        } else {
            if (tmp.length > 1) aDef.push(...tmp);
            tmp = [a[i]];
        }
    }
    if (tmp.length > 1) aDef.push(...tmp);
    return aDef;
}
console.log("Deframmenta:", deframmenta([1, 1, 2, 3, 3, 3, 2, 2, 4]));

// --- Esercizio 6: Factory (K Combinator) ---
function fabbrica(k) {
    return () => k;
}
let f = fabbrica(1);
console.log("Factory:", f());

// --- Esercizio 7: Partial Apply ---
function partapply(bop, a) {
    return (b) => bop(a, b);
}
let r = partapply((x, y) => x + y, "d");
console.log("PartApply:", r("esisto")); // -> "desisto"
