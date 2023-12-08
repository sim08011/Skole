//Skrevet av Simon Johnsen, 1IKA, Porsgrunn VGS
//Til bruk til nettsiden

var bensinPris = 23.21;
var avslag = 0;
var literBensin = 0;
var kanSkriveUt = true;

function regnUtBensinPris(){
    if(kanSkriveUt){
        avslag = 0;
        literBensin = document.getElementById("literBensin").value;
        console.log(literBensin * bensinPris + " er prisen på bensinen du vil fylle.");

        if(literBensin < 0){
            document.getElementById("feilmelding").innerHTML = "Vi tar ikke bensin i retur.";
        }
        else if(literBensin <= 5){
            document.getElementById("feilmelding").innerHTML = "Du må fylle mer enn 5 liter.";
        }
        else if(literBensin >= 80){
            document.getElementById("feilmelding").innerHTML = "Tanken din er ikke stor nok.";
        }
        else if(literBensin >= 50){
            avslag = (literBensin * bensinPris) * 0.1;
            skrivUtPris();
        }
        else{
            skrivUtPris();
        }
        
        kanSkriveUt = false;
    }
}

function reset(){
    kanSkriveUt = true;
    literBensin = 0;
    document.getElementById("pris").innerHTML = "";
    document.getElementById("avslag").innerHTML = "";
    document.getElementById("mva").innerHTML = "";
    document.getElementById("totalpris").innerHTML = "";
    document.getElementById("feilmelding").innerHTML = "";
}

function bensinPrisTekst(){
    document.getElementById("bensinPris").innerHTML = "Dagens bensinpris: " + bensinPris + " kr";
}

function skrivUtPris(){
    document.getElementById("pris").innerHTML = "Pris: " + literBensin * bensinPris + "kr";
    document.getElementById("avslag").innerHTML = "Avslag: " + avslag + "kr";
    document.getElementById("mva").innerHTML = "MVA: " + (literBensin * bensinPris - avslag) * 0.25 + "kr";
    document.getElementById("totalpris").innerHTML = "Totalpris: " + (literBensin * bensinPris - avslag) + "kr";
}

