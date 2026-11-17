Si definisca una classe Solido che rappresenti un generico solido.A partire dalla classe Solido, si costruisca una gerarchia di classi che contenga le classi Parallelepipedo, Cubo e Sfera, in modo da consentire la rappresentazione dei solidi corrispondenti.

La classi Parallelepipedo, Cubo e Sfera dovranno fornire:
un costruttore, che presi i dati necessari alla rappresentazione del solido, generi un istanza della classe che rappresenti il solido;
un metodo superficie, che restituisca la superficie totale del solido rappresentato;
un metodo volume, che restituisca il volume totale del solido rappresentato.
Per i dati necessari e le formule di superficie / volume, si faccia riferimento a quanto riportato sotto:
Parallelepipedo: necessari larghezza l, altezza h e profondità p; superficie calcolata come S = 2 * (l + p) * h + 2 * l * p; volume calcolato come V = l * p * h.
    Cubo: necessario lato x; superficie calcolata come S = 6 * x ^ 2; volume calcolato come V = x ^ 3.
Sfera: necessario raggio; superficie calcolata come S = 12.56 * r ^ 2; volume calcolato come V = 4.19 * r ^ 3.(NB: Le costanti moltiplicative sono ottenute approssimando pi greco con 3.14, per semplicità).

    Infine, si definisca una funzione sommaVolumiParallelepipedi che, dato in input un array di solidi, calcoli la somma dei volumi di tutti i parallelepipedi in esso contenuti.Se non ci sono parallelepipedi, restituisce 0.

ATTENZIONE: Saranno considerate migliori le soluzioni che terranno conto del fatto che Cubo sia un caso speciale di Parallelepipedo, in cui l, h e p sono tutti uguali al lato x del Cubo.



// Classe base (opzionale in JS, ma ottima pratica per definire un "contratto")
class Solido {
    superficie() {
        throw new Error("Metodo 'superficie' non implementato");
    }
    volume() {
        throw new Error("Metodo 'volume' non implementato");
    }
}

// 1. Classe Parallelepipedo
class Parallelepipedo extends Solido {
    constructor(l, h, p) {
        super();
        this.l = l;
        this.h = h;
        this.p = p;
    }

    superficie() {
        return 2 * (this.l + this.p) * this.h + 2 * this.l * this.p;
    }

    volume() {
        return this.l * this.p * this.h;
    }
}

// Classe Cubo (Sottoclasse di Parallelepipedo)
class Cubo extends Parallelepipedo {
    constructor(x) {
        // Richiama il costruttore del Parallelepipedo passando x per l, h, e p
        super(x, x, x);
    }
}

// Classe Sfera
class Sfera extends Solido {

    constructor(r) {
        super();
        this.r = r;
    }

    superficie() {
        return 12.56 * Math.pow(this.r, 2);
    }

    volume() {
        return 4.19 * Math.pow(this.r, 3);
    }
}

// Funzione per sommare i volumi
function sommaVolumiParallelepipedi(solidi) {
    return solidi.filter(solido => solido instanceof Parallelepipedo)
    return solidi.reduce((somma, solido) => somma + solido.volume(), 0);
}