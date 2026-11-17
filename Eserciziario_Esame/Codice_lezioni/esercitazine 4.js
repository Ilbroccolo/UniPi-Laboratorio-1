class CredisError extends Error {}
class GradeError extends Error {}
class HonorError extends Error {;}

class Grade {
    #name;
    #credis;
    #grade; 
    #date;
    #honos;

    constructor(n, c, d, g, l) {
        if (c <= 0) {
            throw new CredisError("credis is not correct, should be a positive", n);
        }
        if (g < 0 || g > 30) {
            throw new GradeError("grade is not correct, should be between 0 and 30", n); 
        }
        if (g < 30 && l === true) {
            throw new HonorError("honos is not correct, should be false if grade is less than 30", n);
        }
        
        // Uso corretto dei campi privati
        this.#name = n;
        this.#credis = c;
        this.#date = new Date(d);
        this.#grade = g;
        this.#honos = l;
    }

    // Getter per permettere alle altre classi di leggere i valori privati in sola lettura
    get name() { return this.#name; }
    get credis() { return this.#credis; }
    get date() { return this.#date; }
    get grade() { return this.#grade; }
    get honos() { return this.#honos; }

    equals(g) {
        if (g.name === this.#name) {
            if (g.date.getTime() === this.#date.getTime()) {
                if (g.grade === this.#grade) {
                    if (g.credis === this.#credis) {
                        if (g.honos === this.#honos) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    toString() {
        return "L'alunno " + this.#name + " ha preso " + this.#grade + " con " + this.#credis + " crediti il giorno " + this.#date.toLocaleDateString() + " con lode " + this.#honos;
    }
}

class GradeBook {
    #grades; 
    #totalcredis;
    #credis;
    #missingcredis;
    #average; 
    #stringGrades;

    constructor(totalcredis) {
        this.#grades = []; // Inizializzato come array vuoto
        this.#totalcredis = totalcredis;
        this.#credis = 0;
        this.#missingcredis = totalcredis;
        this.#average = 0;
        this.#stringGrades = "";
    }

    register(grade) {
        if (grade instanceof Grade) {
            this.#grades.push(grade);
            this.#credis = this.#credis + grade.credis;
            this.#missingcredis = this.#totalcredis - this.#credis;
            
        
            this.#average = ((this.#average * (this.#grades.length - 1)) + grade.grade) / this.#grades.length;
            this.#stringGrades = this.#stringGrades + grade.toString() + "\n";
        }
    }

    toString() {
        let s = "Il libretto contiene " + this.#grades.length + " esami, con una media di " + this.#average + " e " + this.#missingcredis + " crediti mancanti per la laurea.\n";
        s += "Voti:\n";
        for (let g of this.#grades) {
            s += g.toString() + "\n";
        }
        return s;
    }
}

// --- Test del codice ---
let Samu = new Grade("Samu", 18, "1999-11-13", 30, true);
let Jo = new Grade("Samu", 18, "2010-10-10", 18, false);
let gb = new GradeBook(180);

gb.register(new Grade("Analisi 1", 18, "1999-11-13", 30, true));

console.log("Samu e Jo sono uguali? " + Samu.equals(Jo)); // false
console.log("Jo e Jo sono uguali? " + Jo.equals(Jo)); // true
console.log(Samu.toString());
console.log("\nStato del Libretto:\n" + gb.toString());