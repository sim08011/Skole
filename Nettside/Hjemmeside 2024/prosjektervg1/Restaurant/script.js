let mvaProsent = 0.15;
let pris = 850;
let doneringPris = 100;
let studentRabattProsent = 0.25;
let tipsProsent = 0.1;

let totalPris = 0;
let pengerPerPers = 0;
let mvaPris = 0;
let tipsPris = 0;
let studentRabattPris = 0;
let donasjon = 0;


//letiabler som brukeren må sette verdien til:
let antallPersoner;
let ekstraTips;
let studentRabattSjekkBoks;
let miljøAgenteneSjekkboks;

function regnUtKvittering(){ //Funksjon som regner ut og skriver ut kvittering
    //Henter verdier fra bruker
    antallPersoner = document.getElementById("antallPersoner").value;
    ekstraTips = document.getElementById("ekstraTipsInput").value;
    studentRabattSjekkBoks = document.getElementById("studentRabattSjekkBoks");
    miljøAgenteneSjekkboks = document.getElementById("miljøAgenteneSjekkBoks");


    if(antallPersoner > 0){
        document.getElementById("feilMelding").innerHTML = ""; //Fjerner feilmelding hvis den eksisterer.

        if(studentRabattSjekkBoks.checked == true){
            studentRabattPris = pris * -studentRabattProsent;
            document.getElementById("studentRabatt").innerHTML = "Studentrabatt: " + studentRabattPris + "kr.";
        }
        else{
            studentRabattPris = 0;
            document.getElementById("studentRabatt").innerHTML = "";
        }

        if(miljøAgenteneSjekkboks.checked == true){ 
            donasjon = doneringPris; //Legger til 100kr på totalprisen
            document.getElementById("donasjon").innerHTML = "Donasjon: " + donasjon + "kr.";
        }
        else{
            donasjon = 0;
            document.getElementById("donasjon").innerHTML = "";
        }

        if(ekstraTips > 0){ //Sjekker om brukeren har lagt til ekstra tips
            document.getElementById("ekstraTipsTekst").innerHTML = "Ekstra tips: " +  ekstraTips + "kr.";
        }
        else{

            document.getElementById("ekstraTipsTekst").innerHTML = "";
        }
        mvaPris = pris*mvaProsent; //Regner ut hvor mye som må betales i moms
        tipsPris = pris*tipsProsent; //Regner ut hvor mye som må betales i tips

        
        totalPris = Number(pris) + Number(studentRabattPris) + Number(mvaPris) + Number(tipsPris) + Number(ekstraTips) + Number(donasjon);
        console.log(totalPris);
        pengerPerPers = totalPris / antallPersoner;


        //Utskrift:
        document.getElementById("pris").innerHTML = "Pris: " + pris + "kr.";
        document.getElementById("mva").innerHTML = "MVA: " +  mvaPris + "kr.";
        document.getElementById("tips").innerHTML = "Tips: " +  tipsPris + "kr.";
        document.getElementById("totalPris").innerHTML = "Total pris: " +  totalPris + "kr.";
        document.getElementById("prisPerPers").innerHTML = "Pris per person: " +  pengerPerPers + "kr.";
    }
    else{ //Skriver ut feilmelding
        document.getElementById("feilMelding").innerHTML = "Du må skrive inn antall personer.";
    }
}
