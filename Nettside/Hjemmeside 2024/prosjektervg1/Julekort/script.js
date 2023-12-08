var kort = document.getElementsByClassName("kort")[0];
var xPos = 0;
var yPos = 0;
var xRetning = 1; //1 hvis fremover, -1 hvis bakover
var yRetning = 1; //1 hvis fremover, -1 hvis bakover

var bevegelseAktivert = true;

var pauseKnapp = document.getElementById("pauseKnapp");

setInterval(flyttKort, 10)


function kortBevegingAktivering(){
    bevegelseAktivert = !bevegelseAktivert;
    if(bevegelseAktivert){
        pauseKnapp.innerHTML = "Pause";
    } 
    else{
        pauseKnapp.innerHTML = "Play";
    }
}


function flyttKort(){
    if (bevegelseAktivert){
    kort.style.left =xPos + "%";
    kort.style.top =yPos + "%";
    
    //xRetningbehandling
    if(xPos >= 80){
        xRetning = -1;
    }
    else if(xPos <= 0){
        xRetning = 1;
    }
    if(yPos >= 50){
        yRetning = -1;
    }
    else if(yPos <= 0){
        yRetning = 1;
    }
    xPos+= 0.1 * xRetning;
    yPos+= 0.15 * yRetning;
    }
    
}