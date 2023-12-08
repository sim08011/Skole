function saRegnSkyVits(){
    sessionStorage.setItem("saRegnSkyVits", 1);
    console.log("Dette valget har blitt lagret!");
}

function harSagtRegnSkyVits(){
    var saRegnSkyVits = sessionStorage.getItem("saRegnSkyVits");
    console.log(sessionStorage.getItem("saRegnSkyVits"));
    if(saRegnSkyVits == 1){
        window.location.replace("regnSkyNei.html");
    }
}

function fikkDiamant(){
    sessionStorage.setItem("fikkDiamant", 1);
    console.log("Diamant lagret!");
}

function fikkFjaer(){
    sessionStorage.setItem("fikkFjaer", 1);
    console.log("Fjær lagret!");
}

function fikkKjeks(){
    sessionStorage.setItem("fikkKjeks", 1);
    console.log("Kjeks lagret!");
}




//Reseting av lagring

function reset(){
    console.log("Lagring er resatt.")
    sessionStorage.setItem("fikkDiamant", 0);
    sessionStorage.setItem("fikkFjaer", 0);
    sessionStorage.setItem("fikkKjeks", 0);
    sessionStorage.setItem("saRegnSkyVits", 0);
}




//Slutten

function slutten(){
    var fikkDiamant = sessionStorage.getItem("fikkDiamant");
    var fikkFjaer = sessionStorage.getItem("fikkFjaer");
    var fikkKjeks = sessionStorage.getItem("fikkKjeks");

    var antall = 1*(fikkDiamant)+1*(fikkFjaer)+1*(fikkKjeks);
    console.log(antall);

    if(antall == 0){
        document.getElementById("snakkeBobleHoyre").innerHTML = "Jeg møtte på noen, men det skjedde ikke så mye.";
    }
    else if(antall == 1){
        document.getElementById("snakkeBobleHoyre").innerHTML = "Jeg møtte på noen, og jeg fikk med meg 1 ting!";
    }
    else if(antall == 2){
        document.getElementById("snakkeBobleHoyre").innerHTML = "Jeg møtte på noen, og jeg fikk med meg 2 ting!";
    }
    else if(antall == 3){
        document.getElementById("snakkeBobleHoyre").innerHTML = "Jeg møtte på 3 stykker, og fikk en ting av alle!";
    }
}

function slutten2(){
    var fikkDiamant = sessionStorage.getItem("fikkDiamant");
    var fikkFjaer = sessionStorage.getItem("fikkFjaer");
    var fikkKjeks = sessionStorage.getItem("fikkKjeks");
    var fikkKjeks = sessionStorage.getItem("fikkKjeks");

    var antall = 1*(fikkDiamant)+1*(fikkFjaer)+1*(fikkKjeks);

    console.log(antall);

    if(antall == 0){
        document.getElementById("tekstBoks").innerHTML = "Slutt!<br> Det ser ikke ut som at du fikk noen ting på veien.<br> Vil du prøve igjen?";
    }
    else if(antall == 3){
        document.getElementById("tekstBoks").innerHTML = "Slutt!<br> Du klarte å få tak i alle tingene!<br> Godt jobbet!";
    }
    else{
        document.getElementById("tekstBoks").innerHTML = "Slutt!<br> Her er hva du klarte å få tak i på veien.<br> Bra jobbet!";
    }



    if(fikkDiamant == 1){
        document.getElementById("bok").innerHTML += "<img src='../bilder/Diamant.png' alt='Bilde av diamant'>"
    }
    if(fikkFjaer == 1){
        document.getElementById("bok").innerHTML += "<img src='../bilder/Fjaer.png' alt='Bilde av diamant'>"
    }
    if(fikkKjeks == 1){
        document.getElementById("bok").innerHTML += "<img src='../bilder/Kjeks.png' alt='Bilde av diamant'>"
    }n
}