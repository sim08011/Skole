var level = 1; // Hvilket nummer levelet er
var levelFremgang = localStorage.getItem("levelFremgang"); // Inneholder fremgangen til brukeren

function lagreLevelFremgang(){
    if(levelFremgang < level){ // Hvis brukeren sin levelFremgang er mindre enn levelet de har kommet til, lagrer den levelnummeret til levelFremgang på 
        localStorage.setItem("levelFremgang", level);
    }
}