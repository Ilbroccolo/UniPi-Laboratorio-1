// ============================================================
// INSIEMI
// ============================================================

// --- Rappresentazione ---
let insieme = {}
let frutta = {'mela': 1, 'pera': 1, 'banana': 1}
console.log(frutta)

// --- Inserimento ---
function inserisci(insieme, elemento) {
  insieme[elemento] = 1
}

let A = {'x': 1, 'y': 1}
inserisci(A, 'z')
inserisci(A, 'x')  // Già presente, resta 1
console.log(A)

// --- Eliminazione: undefined vs delete ---
let test1 = {'a': 1, 'b': 1, 'c': 1}
test1['b'] = undefined  // SBAGLIATO
console.log(test1)
console.log('b' in test1)  // true! L'elemento c'è ancora

let test2 = {'a': 1, 'b': 1, 'c': 1}
delete test2['b']  // CORRETTO
console.log(test2)
console.log('b' in test2)  // false! Elemento rimosso

// Perché? L'operatore 'in' controlla se la CHIAVE esiste,
// non il valore. undefined è un valore valido

function elimina(insieme, elemento) {
  delete insieme[elemento]
}

// --- Appartenenza ---
function appartiene(insieme, elemento) {
  return elemento in insieme
}

let animali = {'gatto': 1, 'cane': 1, 'pesce': 1}
console.log(appartiene(animali, 'gatto'))  // true
console.log(appartiene(animali, 'elefante'))  // false

// --- Unione ---
function unione(A, B) {
  let C = {}
  for (let el in A) {
    C[el] = 1
  }
  for (let el in B) {
    C[el] = 1
  }
  return C
}

let A1 = {'a': 1, 'b': 1, 'c': 1}
let B1 = {'c': 1, 'd': 1, 'e': 1}
console.log(unione(A1, B1))  // 'c' resta :1

// --- Intersezione ---
function intersezione(A, B) {
  let C = {}
  for (let el in A) {
    if (el in B) {
      C[el] = 1
    }
  }
  return C
}

let X = {'a': 1, 'b': 1, 'c': 1}
let Y = {'c': 1, 'd': 1, 'e': 1}
console.log(intersezione(X, Y))  // {'c': 1}

// --- Differenza ---
function differenza(A, B) {
  let C = {}
  for (let el in A) {
    if (!(el in B)) {
      C[el] = 1
    }
  }
  return C
}

console.log(differenza(A1, B1))  // {'a': 1, 'b': 1}

// --- Sottoinsieme ---
function sottoinsieme(A, B) {
  for (let el in A) {
    if (!(el in B)) {
      return false
    }
  }
  return true
}

let Sub1 = {1: 1, 2: 1}
let Sub2 = {1: 1, 2: 1, 3: 1}
console.log(sottoinsieme(Sub1, Sub2))  // true
console.log(sottoinsieme(Sub2, Sub1))  // false

// --- Uguaglianza ---
function uguali(A, B) {
  return sottoinsieme(A, B) && sottoinsieme(B, A)
}

let U1 = {'x': 1, 'y': 1}
let U2 = {'y': 1, 'x': 1}
console.log(U1 == U2)  // false! Confronta riferimenti... Vediamo alla prossima lezione
console.log(uguali(U1, U2))  // true! Confronta contenuto

// ============================================================
// MULTI-INSIEMI
// ============================================================

// --- Introduzione ---
let multiinsieme = {'mela': 3, 'pera': 2, 'banana': 1}
console.log(multiinsieme)  // 3 mele, 2 pere, 1 banana

let carrello = {'pasta': 2, 'pane': 1, 'latte': 3}
let voti = {30: 4, 28: 2, 27: 1}  // quattro 30, due 28, un 27

// --- Inserimento Multi ---
function inserisciMulti(M, elemento, quantita = 1) {
  if (elemento in M) {
    M[elemento] += quantita
  } else {
    M[elemento] = quantita
  }
}

let spesa = {}
inserisciMulti(spesa, 'mela', 3)
console.log(spesa)  // {'mela': 3}

inserisciMulti(spesa, 'mela', 2)
console.log(spesa)  // {'mela': 5} - si somma!

// --- Rimozione Multi ---
function rimuoviMulti(M, elemento, quantita = 1) {
  if (elemento in M) {
    M[elemento] -= quantita
    if (M[elemento] <= 0) {
      delete M[elemento]
    }
  }
}

let inventario = {'mela': 5, 'pera': 2}
rimuoviMulti(inventario, 'mela', 2)
console.log(inventario)  // {'mela': 3, 'pera': 2}

rimuoviMulti(inventario, 'pera', 3)
console.log(inventario)  // {'mela': 3} - pera sparisce

// --- Unione Multi ---
function unioneMulti(A, B) {
  let C = {...A}
  for (let el in B) {
    if (el in C) {
      C[el] += B[el]  // SOMMA!
    } else {
      C[el] = B[el]
    }
  }
  return C
}

let MA = {'x': 3, 'y': 2}
let MB = {'y': 1, 'z': 4}
console.log(unioneMulti(MA, MB))  // {'x': 3, 'y': 3, 'z': 4}

// --- Intersezione Multi ---
function intersezioneMulti(A, B) {
  let C = {}
  for (let el in A) {
    if (el in B) {
      C[el] = Math.min(A[el], B[el])  // MINIMO!
    }
  }
  return C
}

let MC = {'a': 5, 'b': 3, 'c': 1}
let MD = {'a': 2, 'b': 4, 'd': 2}
console.log(intersezioneMulti(MC, MD))  // {'a': 2, 'b': 3}

// --- Differenza Multi ---
function differenzaMulti(A, B) {
  let C = {}
  for (let el in A) {
    if (el in B) {
      let diff = A[el] - B[el]
      if (diff > 0) {
        C[el] = diff
      }
    } else {
      C[el] = A[el]
    }
  }
  return C
}

let ME = {'x': 7, 'y': 3, 'z': 2}
let MF = {'x': 3, 'y': 5, 'w': 1}
console.log(differenzaMulti(ME, MF))  // {'x': 4, 'z': 2}

// --- Cardinalità Multi ---
function cardinalitaMulti(M) {
  let somma = 0
  for (let el in M) {
    somma += M[el]
  }
  return somma
}

let MG = {'mela': 3, 'pera': 2, 'banana': 5}
console.log(cardinalitaMulti(MG))  // 10 (3+2+5)

// --- Conversioni ---

// Array → Multi-insieme (conta occorrenze)
function arrayToMultiinsieme(arr) {
  let M = {}
  for (let el of arr) {
    if (el in M) {
      M[el]++
    } else {
      M[el] = 1
    }
  }
  return M
}

let parole = ['mela', 'pera', 'mela', 'banana', 'mela']
console.log(arrayToMultiinsieme(parole))  // {'mela': 3, 'pera': 1, 'banana': 1}

// Multi-insieme → Array (ripete elementi)
function multiinsiemeToArray(M) {
  let arr = []
  for (let el in M) {
    for (let i = 0; i < M[el]; i++) {
      arr.push(el)
    }
  }
  return arr
}

let MH = {'a': 3, 'b': 2}
console.log(multiinsiemeToArray(MH))  // ['a', 'a', 'a', 'b', 'b']

// ============================================================
// CONFRONTO FINALE
// ============================================================

console.log("\n=== INSIEMI vs MULTI-INSIEMI ===")

// Insiemi: molteplicità sempre :1
let A_ins = {'x': 1, 'y': 1}
let B_ins = {'y': 1, 'z': 1}
console.log("Unione insiemi:", unione(A_ins, B_ins))
// {'x': 1, 'y': 1, 'z': 1} - 'y' resta :1

// Multi-insiemi: molteplicità variabile
let A_multi = {'x': 3, 'y': 2}
let B_multi = {'y': 1, 'z': 4}
console.log("Unione multi:", unioneMulti(A_multi, B_multi))
// {'x': 3, 'y': 3, 'z': 4} - 'y' diventa 2+1=3
