//Skrevet av Simon Johnsen, 1IKA, Porsgrunn VGS 2022
//Til bruk til nettsiden

var navn;
var alder;
var høyde;

function spaa(){
    navn = document.getElementById("navnInput").value;
    alder = document.getElementById("alderInput").value;
    høyde = document.getElementById("høydeInput").value;

    if((høyde*alder) % 2)
    {
        document.getElementById("resultat").innerHTML = "Det vil gå deg godt her i verden, " + navn +  "<br> For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
    }
    else
    {
        document.getElementById("resultat").innerHTML = "Stakkars deg! Alt kommer til å gå deg galt, " + navn +  "<br>For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
    }
}
