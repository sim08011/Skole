function endreLandInfo() {
    landInfo.innerHTML = "Finnland er et land med 5,5 millioner innbyggere. Størrelsen på landet er 338 424 km². <br>De tre høyeste fjellene i Finnland er: 1. Halti (1324 moh.), 2. Ridnitsohkka (1317 moh.) og 3. Kiedditsohkka (1280 moh.). <br> De tre største øyene i Finnland er Fasta Åland (685 km²), Kimitoön (	524 km²) og Hailuoto(195 km²)."    
}

function tekstTilBildeAktiver() {
    tekstTilBildet.innerHTML ="Dette er halvparten av det norske flagget og halvparten av det finske flagget."
}
function tekstTilBildeDeaktiver() {
    tekstTilBildet.innerHTML =""
}
function endreBilde() {
    if(bilde.src.match("norgeFinnland.png")) {
        bilde.src="norgeFinnland2.png";
    }
    else {
        bilde.src="norgeFinnland.png";
    }
}

function tekstHover() {
    tekst.style.color = "red";
}
function tekstNotHover() {
    tekst.style.color = "black";
}