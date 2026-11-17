// ============================
// 1) UNIONE SENZA OUTLIER
// =============================
function unioneSenzaOutlier(A,B,epsilon) {
  // calcola la media dei numeri contenuti in A e B
  let media = 0
  let quanti = 0
  for (let n in A) {
    media += Number(n)
    quanti++
  }
  for (let n in B) {
    media += Number(n) 
    quanti++
  }
  media = media / quanti
  // calcola insieme risultato
  let uso = {}
  for (let n in A)
    if (Math.abs(media - n) < epsilon) 
      uso[n] = 1
  for (let n in B)
    if (Math.abs(media - n) < epsilon) 
      uso[n] = 1
  return uso
}

// Esempio 
let A = {}, B = {}
for (let x=0; x<10; x++) A[x] = 1
for (let x=5; x<15; x++) B[x] = 1
// NB: La media dei numeri in A e B è 7
console.log(unioneSenzaOutlier(A,B,4)) // -> {4,5,6,7,8,9,10}
console.log(unioneSenzaOutlier(A,B,2)) // -> {6,7,8}

// ============================
// 2) IMMAGINE
// =============================
function immagine(f,D) {
  let img = {}
  for (let x in D) {
    img[f(x)] = 1
  }
  return img
}

// Esempio
let D = {}
for (let x=0; x<3; x++) D[x] = 1
console.log(immagine(x=>x*2,D)) // -> { 0, 2, 4 }
console.log(immagine(x=>2,D)) // -> { 2 }

// ============================
// 3) COMPONI
// =============================
function componi(f,g) {
  return x => f(g(x))
}

// Esempio
let doppio = x => x*2
let quad = x => x*x
console.log(componi(doppio,quad)(3)) // = (3^2)*2 = 18
console.log(componi(quad,doppio)(3)) // = (3*2)^2 = 36

// ============================
// 4) POLY
// =============================
function poly(a,b,c) {
  return x => (a*x**2 + b*x + c)
}

// Esempio
let pol = poly(2,1,3) // -> 2*x^2 + x + 3 
let cst = poly(0,0,4) // -> 4
console.log(pol(5),pol(2)) // -> 58 13  
console.log(cst(5),cst(2)) // -> 4 4