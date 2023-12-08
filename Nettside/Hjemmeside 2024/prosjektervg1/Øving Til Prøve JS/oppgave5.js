function tilfeldigTall(){
  var tall = Math.floor(Math.random() * 10)+1;

  return tall;
}

function arrayFylling(n, array){

  for(i=0; i <n; i++){
    array.push(Math.floor(Math.random() * 10) + 1);
  }
}

function fjernSyv(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      array.splice(i, 1);
      i--; // reduserer i med 1 for å unngå å hoppe over elementer
    }
  }
  return array;
}

function skrivUtArray(array){
  for(i = 0; i < array.length; i++){
    console.log("Verdi med index " + i + ": " + array[i]);
  }
}

console.log(tilfeldigTall());


var n = 1000;
var array = []



arrayFylling(n,array);

fjernSyv(array);

skrivUtArray(array);