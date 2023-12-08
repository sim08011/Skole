var fag = ["Engelsk", "Gym", "Konseptutvikling og programmering", "Matte", "Naturfag", "Produksjon og historiefortelling", "Teknologiforståelse", "Yrkesfaglig fordypning"]

var fagAdd;
var indeksAdd;

var fagDropdown;

function skrivUtFag(){ //Skriver ut fag i rekkefølge ved hjelp av en løkke
    for(i=0; i < fag.length; i++){ //Løkke som går igjennom alle arrayindeksene
        console.log(fag[i]);
    }
}

function skrivUtFagBaklengs(){ //Skriver ut fagene i lista baklengs
    for(i=fag.length-1; i >= 0; i--){ //Løkke som går igjennom alle arrayindeksene
        console.log(fag[i]);
    }
}

function gjørAlfabetisk(){ //Skriver ut fagene i lista i alfabetisk rekkefølge
    fag.sort();
}

function leggTilFag(){ //Legger til fag med input feltene på nettsiden
    fagAdd = document.getElementById("fagAdd").value;

    fag.push(fagAdd);
    console.log(fag);
    ordneDropDown();
}

function slettFag(){ //Sletter det valgte fagen
    fag.splice(fagDropdown.selectedIndex, 1); //Sletter den valgte indeksen i arrayen
    ordneDropDown();
}

function ordneDropDown(){ //Lager en dropdown med alle fagene i arrayen
    fagDropdown = document.getElementById("dropdown");
    fagDropdown.innerHTML = 0; //Reseter dropdown
    
    for(i = 0; i < fag.length; i++) {
        var fagAdd = fag[i];
        var valg = document.createElement("option");
        valg.textContent = fagAdd;
        valg.value = fagAdd;
        fagDropdown.appendChild(valg);
    }
}