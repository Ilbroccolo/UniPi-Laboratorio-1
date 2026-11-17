class CredisError extends Error { ; }
class GradeError extends Error { ; }
class HonorError extends Error { ; }

class Grade {

    #name 
    #credis
    #grade 
    #date 
    #honos 

    constructor(n, c, d, g, l){

        if (c <= 0 ){
            throw new CredisError("credis is not correct, should be a positive",n)
        }

        if( g < 0 || g > 30 ){
            throw new GradeError("credis is not correct, should be between 0 and 30",n)
        }
        
        if ( g < 30 && l == true){
            throw new HonorError("honos is not correct, should be false if grade is less than 30",n)
        }
        this.name = n;
        this.credis = c;
        this.date =new Date (d);
        this.grade = g;
        this.honos = l
    }



    equals(g){

        // verificare se le gli esami sono uguali 
        if (g.name == this.name){
            if ( g.date.getTime() == this.date.getTime()){
                if ( g.grade == this.grade){
                    if (g.credis == this.credis ){
                        if ( g.honos == this.honos){
                            return true
                        } 
                    }
                }
            }
        }
        return false 
    }

    toString(){
        console.log("L'alunno" + "" + this.name + "" + "ha preso " + "" + this.grade + "con " + "" + this.credis + "credis il giorno" + this.date + "con honos" + this.honos)  
    }
}

class GradeBook {
    #gredes
    #totalceredis
    #credis;
    #missingcredis
    #averege
    #strtingGredes

    

    constructor(grades, totalcredis){ 
        this.#gredes = grades;
        this.#totalceredis = totalcredis;
        this.#credis = 0;
        this.#missingcredis = totalcredis;
        this.#averege = 0;
        this.#strtingGredes = "";
        
    }

    register(grade){
        // verifico se è un oggetto di tipo grade
        if (grade instanceof Grade){
            this.#gredes.push(grade);
            this.#credis = this.#credis + grade.credis;
            this.#missingcredis = this.#totalceredis - this.#credis;
            this.#averege = (this.#averege * (this.#gredes.length - 1) + grade.grade) / this.#gredes.length;
            this.#strtingGredes = this.#strtingGredes + grade.toString() + "\n";
        }
         
        toString(){
            console.log("Il libretto contiene " + this.#gredes.length + " esami, con una media di " + this.#averege + " e " + this.#missingcredis + " credis mancanti per la laurea");
            let s = "Voti:\n";
            for ( let g of this.#gredes){
                s = s + g.toString() + "\n";
            }
            return s;
        }
    }
}


let Samu = new Grade("Samu", 18 , "1999-13-11", 30, true )
let Jo = new Grade("Samu", 18 , "2010-10-10", 18, false )
let gb = new GradeBook(180)
gb.register(new Grade("Bestemmie", 18 , "1999-13-11", 30, true ))
console.log  (Samu.equals(Jo))
console.log  (Jo.equals(Jo))
console.log(Samu.toString())




