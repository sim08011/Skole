//Laget av Simon, Porsgrunn VGS
//Kode for hangman nettside

var ordRekke = ["KRUS", "TÅKEN", "BRØD", "HJORT", "KANEL", "KAMEL", "MELK", "GAVE", "LAMPE", "PANEL", "BOKSTAV", "PØLSE", "BILDE", "SNØFLAK", "PLANKE", "SVAMP", "TRAN", "KONGLE", "PLANTE", "ANKER", "PYNT", "GRØT", "SKIP", "SKAP", "SKJERM", "FILM", "PYRAMIDE", "VINDU", "STERK", "TORDEN", "STEIN", "KOST", "OST", "LYN", "TOG", "TING", "KABEL", "KRONE", "TRONE", "SPADE", "ØKS", "HJØRNE", "HJØRNESOFA", "LASER", "TERMOS", "FLASKE", "SALT", "VARMEOVN"];

var valgtOrd = ordRekke[Math.floor(Math.random() * ordRekke.length) +0];
var ord = new Array(valgtOrd.length);

var poeng;
var harVunnet = false;

for(i=0; i< ord.length; i++){ //Endrer alle verdiene i arrayen til "_" for å gjøre det lettere å se hvor det ikke er bokstaver
    ord[i] = " _ ";
}

var poeng = 0;

var ordTekst = document.getElementById("ordTekst");
var feilEllerRiktigTekst = document.getElementById("feilEllerRiktig");
var poengTekst = document.getElementById("poeng");
var feilGjett = document.getElementById("feilGjett");
var gratulererTekst = document.getElementById("gratulerer");


var inputEnter = document.getElementById("bokstavInput");

console.log(valgtOrd);

function gjett(){
    var input = document.getElementById("bokstavInput").value.toUpperCase();
    var bokstavTall = valgtOrd.indexOf(input);

    console.log(input);
    console.log(bokstavTall);

    if(bokstavTall > -1 && !harVunnet && ord[bokstavTall] != input && input != ""){ //Sjekker om bokstaven er i ordet
        console.log("Riktig gjett!");
        ord[bokstavTall] = input;
        feilEllerRiktigTekst.innerHTML= input + " er riktig! +3 poeng!";
        feilEllerRiktigTekst.style.color="greenyellow";
        poeng+=3;
    }
    else if(!harVunnet && input != ""){
        console.log("Feil gjett!");
        feilGjett.innerHTML += input + " ";
        feilEllerRiktigTekst.innerHTML= input + " er feil! -1 poeng!";
        feilEllerRiktigTekst.style.color="red";
        poeng--;
    }
    else{
        console.log("Ugyldig gjett!")
    }

    inputEnter.value = ""; //Reseter verdien i inputboksen
    skrivOrd();
}

function skrivOrd(){
    ordTekst.innerHTML = ""; // Reseter teksten slik at for loopen under ikke bygger seg på slutten av teksten, men heller starter på nytt.
    poengTekst.innerHTML = "Poeng: " + poeng;
    for(i=0; i< ord.length; i++){
        ordTekst.innerHTML += ord[i];
    }

    //Om spilleren vinner
    if(ordTekst.innerHTML == valgtOrd){ //Sjekker om spiller hadde rett ord!
        gratulererTekst.innerHTML = "Ord løst! " + "Poeng: " + poeng;
        ordTekst.style.color="greenyellow";
        harVunnet = true;
    }
}



inputEnter.addEventListener("keyup", function(event) { //For å sjekke om brukeren har trykket enter inne i inputboksen
    if (event.keyCode === 13) {
        gjett();
    }
});