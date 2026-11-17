Si scriva un frammento di codice JavaScript che aggiunga a tutti gli array del programma un metodo popMin() con il seguente funzionamento:
se l'array è vuoto, il metodo restituisce undefined
altrimenti, il metodo restituisce l'elemento di valore minimo contenuto nell'array, e lo rimuove dall'array
Per determinare il minimo, popMin() deve utilizzare gli operatori relazionali del linguaggio(<, >=, ecc.).



    Array.prototype.popMin = function () {
        if (this.length === 0) {
            return undefined;
        }
        // ric minimo
        let minIndex = 0;
        for (let i = 1; i < this.length; i++) {
            if (this[i] < this[minIndex]) {
                minIndex = i;
            }
        }
        //valore minimo da restituire
        let minValue = this[minIndex];
        this.splice(minIndex, 1);
        return minValue;
    };