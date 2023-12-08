//Laget av Simon, Porsgrunn VGS
//Kode for hangman nettside

//Ordrekker med forskjellige antall bokstaver i seg
var ordRekke2 = ["YT", "RO", "HI", "KU", "DO", "TO", "EN", "IS", "OS", "UR", "ÅS", "UT", "UL"];
var ordRekke3 = ["OST", "ORD", "LYN", "LYS", "ENG", "TAK", "BRO", "RAS", "DØR", "FIL", "BÅL", "PIL", "FYR", "LUE", "MUS", "TOG", "BIL", "SIL", "GÅS", "LUS", "HUS", "SAK", "EGG", "ØKS", "DYR", "SAU", "JUL", "RØR"]
var ordRekke4 = ["BRØD", "GRØT", "KRAN", "TRAN", "PYNT", "GAVE", "SKIP", "SKAP", "FILM", "PAPP", "LØVE", "KOST", "TING", "SALT", "SÅPE", "KLAN", "FLAK", "LAND", "GRAN", "PLAN", "KORT", "KORK", "STAT", "BYGG", "MYGG", "GRIS", "KATT", "HUND", "STOL", "BORD", "KANT", "VRAK", "RATT", "TANK"]
var ordRekke5 = ["KANEL", "KAMEL", "KABEL", "TRONE", "KRONE", "STERK", "PØLSE", "DRONE", "GRYTE", "PAPIR", "SERIE", "LINJE", "SLOTT", "BOLLE", "LOMME", "ALARM", "JAKKE", "ANKER", "BILDE", "PANEL", "LAMPE", "HJORT", "KNAPP", "SKILT", "VINDU", "NISSE", "MØLLE"]
var ordRekke6 = ["SKJERM", "GJERDE", "PLANKE", "MALERI", "PLANTE", "KLOKKE", "GENSER", "FLASKE", "SENTER", "ANTALL", "SLØYFE", "GJØRME", "NØKKEL", "KLASSE", "KULTUR", "SLANGE", "JAGUAR", "HJØRNE"]
var ordRekke7 = ["SNØFLAK", "BOKSTAV", "MULLDYR", "JULETRE", "LEDNING", "STJERNE", "MUFFINS", "BESKJED", "DIALEKT", "ANTONYM", "MERKNAD", "PASSORD", "SETNING"]
var ordRekke8 = ["PYRAMIDE", "KONTROLL", "BRANNBIL", "TASTATUR", "ADJEKTIV", "FLYPLASS", "INTERVJU", "TERMINAL", "LUFTHAVN", "ORDREKKE", "TIMEPLAN"]
var ordRekke9 = ["HØYTTALER", "REKTANGEL", "BLIKKBOKS", "MUSEMATTE", "MUSEPEKER", "PROSESSOR", "PROFESSOR", "SPØRREORD"]


var valgtOrd;

var ord;

var antallGjett = 0;
var spillStartet = false;
var harVunnet = false;


var ordTekst = document.getElementById("ordTekst");
var bokstavTekst = document.getElementById("bokstav");
var feilEllerRiktigTekst = document.getElementById("feilEllerRiktig");
var antallGjettTekst = document.getElementById("antallGjett");
var feilGjett = document.getElementById("feilGjett");
var gratulererTekst = document.getElementById("gratulerer");


var inputEnter = document.getElementById("bokstavInput");

var mørkModus = false;


function gjettEllerBokstavAntall(){ //Sjekker om det er antall bokstaver i ord før starten av spillet den skal hente eller om det er et gjett
    if(!spillStartet){
        bokstavAntall();
    }
    else{
        gjett();
        console.log("SPRENGERN");
    }
}

function bokstavAntall(){
    var input = parseInt(document.getElementById("bokstavInput").value);

    inputEnter.value = ""; //Reseter verdien i inputboksen
    if(input > 1 && input < 10){ //Bestemmer hvilken ordrekke som skal innhentes
        switch (input) {
            case 2:
                valgtOrd =ordRekke2[Math.floor(Math.random() * ordRekke2.length) +0];
                break;
            case 3:
                valgtOrd =ordRekke3[Math.floor(Math.random() * ordRekke3.length) +0];
                break;
            case 4:
                valgtOrd =ordRekke4[Math.floor(Math.random() * ordRekke4.length) +0];
                break;
            case 5:
                valgtOrd =ordRekke5[Math.floor(Math.random() * ordRekke5.length) +0];
                break;
            case 6:
                valgtOrd =ordRekke6[Math.floor(Math.random() * ordRekke6.length) +0];
                break;
            case 7:
                valgtOrd =ordRekke7[Math.floor(Math.random() * ordRekke7.length) +0];
                break;
            case 8:
                valgtOrd =ordRekke8[Math.floor(Math.random() * ordRekke8.length) +0];
                break;
            case 9:
                valgtOrd =ordRekke9[Math.floor(Math.random() * ordRekke9.length) +0];
                break;
        }
        spillStartet = true;
        startSpill();
    } 
    else { 
        ordTekst.innerHTML = "Skriv inn et tall mellom 2 og 9"
        gjettEllerBokstavAntall();
    }
}

function startSpill(){
    ord = new Array(valgtOrd.length);
    for(i=0; i< ord.length; i++){ //Endrer alle verdiene i arrayen til "_" for å gjøre det lettere å se hvor det ikke er bokstaver
        ord[i] = " _ ";
    }
    bokstavTekst.innerHTML = "Gjett bokstav: ";
    feilGjett.innerHTML = "Feilgjett: ";
    skrivOrd();
    antallGjettTekst.innerHTML = "Spillet er i gang!";
}

function gjett(){
    var input = document.getElementById("bokstavInput").value.toUpperCase();
    var bokstavTall = valgtOrd.indexOf(input);

    console.log(input);
    console.log(bokstavTall);

    if(bokstavTall > -1 && !harVunnet && ord[bokstavTall] != input && input != ""){ //Sjekker om bokstaven er i ordet
        console.log("Riktig Gjett!");

        for(i=0; i< valgtOrd.length; i++){ //Sjekker om bokstaven finnes flere ganger i ordet
            if(valgtOrd.indexOf(input, i) > -1){
                bokstavTall = valgtOrd.indexOf(input, i);
                ord[bokstavTall] = input;
            }
        }

        feilEllerRiktigTekst.innerHTML= input + " er riktig!";
        feilEllerRiktigTekst.style.color="rgb(47, 255, 68)";
        antallGjett++;
    }
    else if(!harVunnet && input != ""){
        console.log("Feil Gjett!");
        feilGjett.innerHTML += input + " ";
        feilEllerRiktigTekst.innerHTML= input + " er feil!";
        feilEllerRiktigTekst.style.color="red";
        antallGjett++;
    }
    else{
        console.log("Ugyldig gjett!")
    }

    inputEnter.value = ""; //Reseter verdien i inputboksen
    skrivOrd();
}

function skrivOrd(){
    ordTekst.innerHTML = ""; // Reseter teksten slik at for loopen under ikke bygger seg på slutten av teksten, men heller starter på nytt.
    antallGjettTekst.innerHTML = "Antall gjett: " + antallGjett;
    for(i=0; i< ord.length; i++){
        ordTekst.innerHTML += ord[i];
    }

    //Om spilleren vinner
    if(ordTekst.innerHTML == valgtOrd){ //Sjekker om spiller hadde rett ord!
        gratulererTekst.innerHTML = "Ord løst! " + "Antall gjett: " + antallGjett;
        ordTekst.style.color="rgb(47, 255, 68)";
        harVunnet = true;
    }
}

function restartSpill(){ //Reseter verdier og starter spillet på nytt.
    spillStartet = false;
    harVunnet = false;
    antallGjett = 0;
    antallGjettTekst.innerHTML ="";
    feilGjett.innerHTML = "";
    gratulererTekst.innerHTML = "";
    feilEllerRiktigTekst.innerHTML ="";
    bokstavTekst.innerHTML ="Antall bokstaver: ";
    
    if(mørkModus){
        ordTekst.style.color="white"; //Endrer ordtekst tilbake til standard
    }
    else{
        ordTekst.style.color="black"; //Endrer ordtekst tilbake til standard
    }
    bokstavAntall();
}


//Kode som gjør at brukeren kan bytte mellom mørk og lys modus

function lysModus(){
    if(!mørkModus){
        document.getElementsByClassName("grid-item")[0].style.backgroundColor = "rgba(0, 0, 0, 0.85)";
        document.getElementsByClassName("grid-item")[1].style.backgroundColor = "rgba(0, 0, 0, 0.85)"; //En for hver a divene som har grid item som klasse
        document.body.style.color = "white"; //Endrer all primærtekst til hvit
        ordTekst.style.color="white";
        console.log("Mørk modus aktivert.")
    } 
    else {
        document.getElementsByClassName("grid-item")[0].style.backgroundColor = "rgba(252, 252, 252, 0.85)";
        document.getElementsByClassName("grid-item")[1].style.backgroundColor = "rgba(252, 252, 252, 0.85)"; //En for hver a divene som har grid item som klasse
        document.body.style.color = "black"; //Endrer all primærtekst til svart
        ordTekst.style.color="black";
        console.log("Lys modus aktivert.")   
    }
    mørkModus = !mørkModus;
}



inputEnter.addEventListener("keyup", function(event) { //For å sjekke om brukeren har trykket enter inne i inputboksen
    if (event.keyCode === 13) {
        gjettEllerBokstavAntall();
    }
});