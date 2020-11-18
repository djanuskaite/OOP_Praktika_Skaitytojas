"Use strict"

// Apsirasome objekta.

class Skaitytojas{
  constructor(vardas, pavarde, kortelesNr, adresas, telNr){
    this.vardas=vardas;
    this.pavarde=pavarde;
    this.kortelesNr=kortelesNr;
    this.adresas=adresas;
    this.telNr=telNr;
    this.knygos=[]
  }

  // Pasakom, kad is knygu masyvu parsipushinsim jame esancius elementus.
 
  paimtos_knygos(knygos){
    this.knygos.push(knygos);
  }

  // Uzsukam cikla kuris isprintintu tuos masyvo elementus, kuriuOs veliau priskirsim + varda.

  check(){
    console.log(this.vardas+ ' turi pasiemusi sias knygas: ');
    for (let i = 0; i < this.knygos.length; i++){
      console.log(this.knygos[i])
    }
  }
}


let ana = new Skaitytojas("Ana", "Petrova", 7835988, "Liepu g. 58-98, Kelme", 86256632)

ana.paimtos_knygos("'Pepe Ilgakojine'");
ana.paimtos_knygos("'Karlsonas, kuris gyvena ant stogo'");
ana.paimtos_knygos("'Emilis is Lionebergos'");
ana.check();


let lena = new Skaitytojas("Lena", "Ivanovna", 6856988, "Juros g. 65-11, Kernave", 862547989)

lena.paimtos_knygos("'Mes Varnu saloje'");
lena.paimtos_knygos("'Ronja, plesiko dukte'");
lena.paimtos_knygos("'Broliai Liutasirdziai'");
lena.check();





  


