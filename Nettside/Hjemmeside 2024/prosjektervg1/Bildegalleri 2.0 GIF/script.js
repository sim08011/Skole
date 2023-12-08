var musX;
var musY;
  
function musOver(){
    musX = event.clientX;
    musY = event.clientY;
    document.getElementById("koordinater").innerText="MusX: " + musX + "  MusY: " + musY;
    console.log("Funksjonen: musOver har kjørt!");
}

function openW3(){
    if(musX > 1000){
        window.open("http://www.w3schools.com");
    }
}
