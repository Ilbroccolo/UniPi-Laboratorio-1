Si definisca una classe Stadio per rappresentare i posti a sedere di uno stadio, suddivisi per settore casa e settore ospiti.
Al costruttore della classe vengono forniti n e m che sono rispettivamente il numero totale dei posti del settore ospiti e del settore casa.
 
La classe deve fornire i seguenti metodi:
prenota_posto(s, i): prenota l'i-esimo posto nel settore s e restituisce true se il posto è disponibile, false altrimenti; 
posti_liberi(s): restituisce il numero di posti liberi del settore s;
is_full(): restituisce true se lo stadio è pieno(non ci sono posti liberi in nessun settore), false altrimenti;
svuota_stadio(): svuota tutti i posti di entrambi i settori dello stadio.
Se la stringa s non corrisponde a "ospiti" o "casa", lanciare l'eccezione SectorError con il messaggio "Settore non esistente" in ogni metodo della classe.



// 1. Definizione dell'eccezione personalizzata
class SectorError extends Error {
    constructor(message = "Settore non esistente") {
        super(message);
        this.name = "SectorError";
    }
}

// 2. Definizione della classe principale
class Stadio {
    #ospiti;
    #casa;

    constructor(n, m) {
        // Inizializziamo i settori con array di booleani (false = posto libero)
        this.#ospiti = new Array(n).fill(false);
        this.#casa = new Array(m).fill(false);
    }

    // Metodo  di utilita' per validare e recuperare il settore
    getSector(s) {
        if (s === "ospiti") return this.#ospiti;
        if (s === "casa") return this.#casa;
        throw new SectorError(); // Lancia eccezione se s non e' valido
    }

    prenota_posto(s, i) {
        let settore = this.getSector(s);

        // Controllo opzionale: verifica che l'indice i sia nei limiti dell'array
        if (i < 0 || i >= settore.length) {
            return false;
        }

        // Se il posto e' libero (false), lo prenotiamo (true)
        if (!settore[i]) {
            settore[i] = true;
            return true;
        }

        // Se era gia' prenotato
        return false;
    }

    posti_liberi(s) {
        let settore = this.getSector(s);
        // filter() mantiene solo i posti non occupati (!booked === true)
        return settore.filter(occupato => !occupato).length;
    }

    is_full() {

        let ospitiPieno = this.#ospiti.every(occupato => occupato);
        let casaPieno = this.#casa.every(occupato => occupato);
        return ospitiPieno && casaPieno;
    }

    svuota_stadio() {
        // fill() resetta l'array mutando i valori esistenti
        this.#ospiti.fill(false);
        this.#casa.fill(false);
    }
}