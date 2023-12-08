//Skrevet av Simon Johnsen, 1IKA, Porsgrunn VGS
//Til bruk til nettsiden 

function sjekkSvar(){
    var antallRiktigSvar = 0;
    
    if(document.getElementById("riktig1").value == "riktig"){
        antallRiktigSvar++;
    }
    if(document.getElementById("riktig2").value == "riktig"){
        antallRiktigSvar++;
    }
    if(document.getElementById("riktig3").value == "riktig"){
        antallRiktigSvar++;
    }

    document.getElementById("antallRiktig").innerHTML = "" + antallRiktigSvar;
}