var bok = document.getElementById("bok");

var knapp1 = document.getElementById("knapp1");
var knapp2 = document.getElementById("knapp2");
var knapp3 = document.getElementById("knapp3");
const knapper = document.querySelectorAll('button');

function deaktiverKnapper(){
    knapper.forEach(knapper => {
        knapper.style.backgroundColor = 'black';
        knapper.style.color = "white";
        knapper.innerHTML = "Vent litt";
        knapper.remove();
    });
    knapp1.disabled = true;
    knapp2.disabled = true;
    knapp3.disabled = true;
}

//Vitsfortelling

function regnskyVits(){
    bok.innerHTML = "<div id='snakkeBobleVenstre'>Hvorfor er regnskyer så gode på matematikk? Fordi de regner mye!</div>";
    setTimeout(vitsReaksjon1, 6500);
    deaktiverKnapper();
}

function tareVits(){
    bok.innerHTML = "<div id='snakkeBobleVenstre'>Hvorfor var skyen trist? Fordi han hadde en tåre i øyet!</div>";
    setTimeout(vitsReaksjon2, 6500);
    deaktiverKnapper();
}

function vitsReaksjon1(){
    bok.style.backgroundImage = "url('../bilder/lysbilder/vitsReaksjon1.png')";
    bok.innerHTML = "<div id='snakkeBobleHoyre'>Haha det var en morsom vits!</div>";
    setTimeout(etterReaksjon, 4500);
}

function vitsReaksjon2(){
    bok.style.backgroundImage = "url('../bilder/lysbilder/vitsReaksjon2.png')";
    bok.innerHTML = "<div id='snakkeBobleHoyre'>Hæ?</div>";
    setTimeout(etterReaksjon, 4500);
}

function etterReaksjon(){
    bok.innerHTML = "<div id='tekstBoks'>Plutselig merker de at det begynner å blåse.</div>";
    setTimeout(skynnoveBlaser, 4000);
}
function skynnoveBlaser(){
    bok.style.backgroundImage = "url('../bilder/lysbilder/skynnoveBlaser.gif";
    bok.innerHTML = "<div id='tekstBoks'>Ånei! Skynnøve begynner å blåse vekk fra vennene hennes!</div>";
    setTimeout(sendTilSkynnoveSinReise, 6800);
}
function sendTilSkynnoveSinReise(){window.location.replace("../historieSider/skynnoveBlaser.html");}








function skynnoveBlaserVidere(){
    bok.style.backgroundImage = "url('../bilder/lysbilder/skynnoveBlaserVidere.gif";
}

function fjellet(){
    bok.style.backgroundImage = "url('../bilder/lysbilder/fjellet.png";
}


