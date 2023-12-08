var eleversHoyde = [156, 178, 187, 182, 177, 165, 172];

var tekstOutput = document.getElementById("tekstOutput");

var alleVerdierSum = 0;

var gjeldendeVerdi = 0;

function skrivUtForsteVerdi(){ //Skriver ut den første verdien i arrayen eleversHoyde
    verdiTekst.innerHTML = ""; //Fjerner verdiTekst, siden denne funksjonen ikke skal skrive det ut
    console.log(eleversHoyde[0]);
    tekstOutput.innerHTML = eleversHoyde[0];
}

function skrivUtSisteVerdi(){ //Skriver ut den siste verdien i arrayen eleversHoyde
    verdiTekst.innerHTML = ""; //Fjerner verdiTekst, siden denne funksjonen ikke skal skrive det ut
    console.log(eleversHoyde[eleversHoyde.length-1]);
    tekstOutput.innerHTML = eleversHoyde[eleversHoyde.length-1];
}

function skrivUtGjennomsnitt(){ //Skriver ut gjennomsnittet 
    var gjennomsnitt = alleVerdierSum / eleversHoyde.length;

    console.log(gjennomsnitt);
    verdiTekst.innerHTML = ""; //Fjerner verdiTekst, siden denne funksjonen ikke skal skrive det ut
    tekstOutput.innerHTML = gjennomsnitt;
}

function visNesteVerdi(){ //Funksjon som viser den neste verdien i arrayen
    if(gjeldendeVerdi<eleversHoyde.length-1){
        gjeldendeVerdi +=1;
    }
    else{
        gjeldendeVerdi =0;
    }
    skrivUtTilVerdiKnapper();  
}
function visForrigeVerdi(){ //Funksjon som viser den forrige verdien i arrayen
    if(gjeldendeVerdi>0){
        gjeldendeVerdi -=1;
    }
    else{
        gjeldendeVerdi =eleversHoyde.length-1;
    }
    skrivUtTilVerdiKnapper();
}

function skrivUtTilVerdiKnapper(){ //Skriver ut gjeldende verdi
    verdiTekst.innerHTML = "Verdi: " + gjeldendeVerdi;
    tekstOutput.innerHTML = eleversHoyde[gjeldendeVerdi];
    console.log(eleversHoyde[gjeldendeVerdi]);
}

function start(){ //Start funksjon som legger sammen verdiene for senere bruk og skriver ut arrayverdiene
    for(i=0; i< eleversHoyde.length; i++){ //Legger sammen alle verdiene i arrayen, en etter en etter hverandre
        alleVerdierSum += eleversHoyde[i];
    }
    document.getElementById("eleversHoyde").innerHTML = eleversHoyde;
}
