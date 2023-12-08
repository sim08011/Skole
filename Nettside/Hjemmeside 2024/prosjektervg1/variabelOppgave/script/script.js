//Laget av Simon
//Variabeltesting

let førsteTall = 10; // Deklarerer variablen førsteTall og tilordner den verdien 7.
let andreTall = 7; // Deklarerer variablen andreTall og tilordner den verdien 10.
let sum = 0; // Deklarerer variablen usm og tilordner den verdien 0.
let diff = 0;
let produkt = 0;

let forNavn = "Simon";
let etterNavn = "Johnsen";
let fulltNavn = "";

sum = førsteTall+andreTall; // Legger sammen variablene
diff = førsteTall-andreTall; // Subtraherervariablene.
produkt = førsteTall*andreTall; // Ganger variablene.

fulltNavn=forNavn+" "+etterNavn;

console.log(førsteTall + " + " + andreTall + " = " + sum + " | Her adderte jeg begge variablene for å finne summen.") // Skriver ut summen til konsollen.
console.log(førsteTall + " - " + andreTall + " = " + diff + " | Her subtraherte jeg begge variablene for å finne differansen.") // Skriver ut differansen til konsollen.
console.log(førsteTall + " * " + andreTall + " = " + produkt + " | Her multipliserte jeg begge variablene for å finne produktet.") // Skriver ut produktet til konsollen.

console.log("Jeg heter " + fulltNavn + "."); // Skriver ut fullt navn til konsollen.
