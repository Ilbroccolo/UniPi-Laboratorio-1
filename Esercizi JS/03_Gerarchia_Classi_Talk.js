Si consideri un sistema di gestione di talk, dove un generico talk è rappresentabile mediante la classe Talk, i cui campi sono title(stringa), speaker(stringa) e duration(numerico, in minuti).Il sistema prevede la possibilità di definire tre tipi specifici di Talk, ovvero Lecture, Seminar e Webinar:
La classe Lecture rappresenta una lezione di un dato course, indicato nel costruttore, e fornisce un getter - setter teacher che corrisponde allo speaker del talk in questione.
La classe Seminar rappresenta un seminario tenuto all'interno di un dato event, indicato nel costruttore.
La classe Webinar che rappresenta anch'essa un seminario tenuto all'interno di un event, con tale evento però tenuto online.
Si noti quindi che Webinar costituisce un caso specifico di Seminar.

Si implementino le classi Talk, Lecture, Seminar e Webinar, organizzandole in modo da sfruttare al meglio l'ereditarietà. Si implementi inoltre una funzione pickSeminar che, dato un array talks di Talk, restituisce il titolo del seminario più breve contenuto in talks. Se non ci sono seminari, restituisce undefined.

// 1. Classe Base
class Talk {
    constructor(title, speaker, duration) {
        this.title = title;
        this.speaker = speaker;
        this.duration = duration; // in minuti
    }
}

// 2. Sottoclasse Lecture
class Lecture extends Talk {
    constructor(title, speaker, duration, course) {
        super(title, speaker, duration);
        this.course = course;
    }

    // Getter che mappa 'teacher' su 'speaker'
    get teacher() {
        return this.speaker;
    }

    // Setter che mappa 'teacher' su 'speaker'
    set teacher(newTeacher) {
        this.speaker = newTeacher;
    }
}

// 3. Sottoclasse Seminar
class Seminar extends Talk {
    constructor(title, speaker, duration, event) {
        super(title, speaker, duration);
        this.event = event;
    }
}

// 4. Sottoclasse Webinar (caso specifico di Seminar)
class Webinar extends Seminar {
    constructor(title, speaker, duration, event) {

        super(title, speaker, duration, event);
        this.online = true;
    }
}

// 5. Funzione per trovare il seminario più breve
function pickSeminar(talks) {

    let seminari = talks.filter(talk => talk instanceof Seminar);

    // Se non ci sono seminari, ritorniamo undefined
    if (seminari.length === 0) {
        return undefined;
    }




}