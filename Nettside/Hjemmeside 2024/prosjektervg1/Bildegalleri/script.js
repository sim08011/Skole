
var bilder = [ "bilde.jpg", "bilde2.jpg", "bilde3.jpg", "bilde4.jpg", "bilde5.jpg", "bilde6.jpg", "bilde7.jpg", "bilde8.jpg", "bilde9.jpg", "bilde10.jpg", "bilde11.jpg", "bilde12.jpg", "bilde13.jpg"];
var bildeTekster = [ "Windows 1.0", "Windows 2.0", "Windows 3.1", "Windows 95", "Windows 98", "Windows 2000", "Windows ME", "Windows XP", "Windows Vista", "Windows 7", "Windows 8", "Windows 10", "Windows 11"];
var i = 0;

var nyttBilde;  
  
nyttBilde = setInterval(nesteBilde, 5000);  

function nesteBilde(){
    i++;

    if(i>=bilder.length){i=0}
        document.getElementById("gjeldendeBilde").innerHTML="<img src=img/"+bilder[i]+"></img>";
        document.getElementById("bildeTekst").innerHTML=bildeTekster[i];
    console.log(i);
}

function forrigeBilde(){
    i--;

    if(i<0){i=bilder.length-1}
        document.getElementById("gjeldendeBilde").innerHTML="<img src=img/"+bilder[i]+"></img>";
        document.getElementById("bildeTekst").innerHTML=bildeTekster[i];
    console.log(i);
}
