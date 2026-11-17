Creare una classe ContoBancario che implementi i seguenti metodi:
Costruttore(saldoIniziale, massimale); Inizializza l'oggetto settando le proprietà saldo e massimale. Se uno qualsiasi dei due valori è negativo lancia una eccezione con tipo InvalidMoney.
deposito(valore); incrementa il saldo del valore passato come argomento e ritorna il nuovo saldo.Se il valore è negativo lancia una eccezione con tipo InvalidMoney, se il saldo supererebbe il massimale lancia l'eccezione ExcessiveMoney e non aggiorna il saldo.
prelievo(valore); riduce il saldo del valore passato come argomento e ritorna il nuovo saldo.Se il valore è negativo lancia una eccezione con tipo InvalidMoney, se il valore è maggiore del saldo lancia l'eccezione InsufficientMoney e non aggiorna il saldo.

Successivamente, definire una funzione applica(conto, depositi, prelievi) che prenda come argomento un oggetto conto di tipo ContoBancario e due array di interi depositi e prelievi di lunghezza identica.
La funzione alterna sul conto corrente ogni deposito ed ogni prelievo e ritorna true se tutte le operazioni sono eseguibili sul conto bancario, altrimenti ritorna false.
Nel caso gli array contengano dei valori negativi, la funzione propaga l'eccezione InvalidMoney.
Il saldo del conto deve essere invariato se la funzione applica ritorna false o propaga un'eccezione.

Hint: Strutturare le eccezioni in maniera da non doverle gestire individualmente all'interno della funzione applica.

Esempio:
var conto = new ContoBancario(5, 10)
applica(conto, [6, 2], [3, 1]) -> false
var conto = new ContoBancario(5, 10)
applica(conto, [2, 2], [2, 3]) -> true


class InvalidMoney extends Error {
    constructor(message = "Importo non valido: i valori non possono essere negativi.") {
        super(message);
        this.name = "InvalidMoney";
    }
}

class OperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "OperationError";
    }
}

class ExcessiveMoney extends OperationError {
    constructor(message = "Operazione annullata: il saldo supererebbe il massimale.") {
        super(message);
        this.name = "ExcessiveMoney";
    }
}

class InsufficientMoney extends OperationError {
    constructor(message = "Operazione annullata: saldo insufficiente per il prelievo.") {
        super(message);
        this.name = "InsufficientMoney";
    }
}

class ContoBancario {
    constructor(saldoIniziale, massimale) {
        if (saldoIniziale < 0 || massimale < 0) {
            throw new InvalidMoney();
        }
        this.saldo = saldoIniziale;
        this.massimale = massimale;
    }

    deposito(valore) {
        if (valore < 0) throw new InvalidMoney();
        if (this.saldo + valore > this.massimale) throw new ExcessiveMoney();

        this.saldo += valore;
        return this.saldo;
    }

    prelievo(valore) {
        if (valore < 0) throw new InvalidMoney();
        if (valore > this.saldo) throw new InsufficientMoney();

        this.saldo -= valore;
        return this.saldo;
    }
}


function applica(conto, depositi, prelievi) {
    const saldoOriginale = conto.saldo;

    try {
        for (let i = 0; i < depositi.length; i++) {
            conto.deposito(depositi[i]);
            conto.prelievo(prelievi[i]);
        }
        // Se il ciclo finisce senza errori, tutte le operazioni sono valide
        return true;

    } catch (errore) {
        // ripristiniamo il saldo 
        conto.saldo = saldoOriginale;

        if (errore instanceof OperationError) {
            // Cattura sia ExcessiveMoney che InsufficientMoney
            return false;
        }

        throw errore;
    }
}