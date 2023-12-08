var lengde;
var passasjerer;
var resultat;

function regnUt() // Regner ut resultatet i gram
{   
    //Henter verdiene for lengde og passasjerer fra bruker
    lengde = document.getElementById("lengdeInput").value; 
    passasjerer = document.getElementById("passasjerInput").value;

    resultat = (lengde * 150) / passasjerer; // Tilordner resultat variablen til riktig verdi

    document.getElementById("resultat").innerHTML = "Resultatet er: " + resultat + " gram Co2 utslipp per person."; //Skriver ut resultat
    document.getElementById("tallResultat").innerHTML = resultat; //Skriver ut resultat
    document.getElementById("bil").style.height = resultat/2+"px"; //Endrer høyde på bilutslippssøylen

    if(resultat/2 > 500) //Sjekker om resultatet er høyere enn maks høyde for histogrammet.
    {
        document.getElementById("advarsel").innerHTML = "Advarsel: Co2 utslippet er så høyt at det har nådd høydegrensen for histogrammet.";
    }
    else
    {
        document.getElementById("advarsel").innerHTML = "";
    }
}