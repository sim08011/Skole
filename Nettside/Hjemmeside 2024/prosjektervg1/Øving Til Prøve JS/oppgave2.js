var personAlder = 5;
var billettPris = 25;
var rabatt = 0.5;

function VYBillettpris(){
    if(personAlder <= 3){
        billettPris = 0;
    }
    else if(personAlder <= 15 || personAlder >= 67){
        billettPris *= rabatt;
    }

    console.log("Billettpris: " + billettPris);
}



let tall1 = 10;
let tall2 = 5;

if (tall1 > tall2) {
  console.log(tall1 + " er større enn " + tall2);
} else if (tall2 > tall1) {
  console.log(tall2 + " er større enn " + tall1);
} else {
  console.log("Tallene er like");
}
