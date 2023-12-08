//Løkkeoppgaver
//Simon Johnsen, 1IKA

function tellTil100(){ // Skriver ned antallStjernerene fra 0 til 100
    document.getElementById("resultat").innerHTML = ""; //Reseter paragrafen
    for(let i=0;i<101;i++){
        document.getElementById("resultat").innerHTML += (i + ", ");
    }
}

function partallOgOddetallTil100(){ //Skriver ned parantallStjerner og oddeantallStjerner separat
    document.getElementById("resultat").innerHTML = ""; //Reseter paragrafen
    for(let i=0;i<101;i++){
        if(i % 2){
            document.getElementById("resultat").innerHTML += i + " er oddetall. ";
        }
        else{
            document.getElementById("resultat").innerHTML += i + " er partall. ";
            document.getElementById("resultat").innerHTML += "<br>"; //Legger til en break for å få det mer oversiktlig
        }
    }
}

function deligMed5(){ //Skriver ned antallStjerner som er delige med 5
    document.getElementById("resultat").innerHTML = ""; //Reseter paragrafen
    for(let i=0;i<101;i+=5){ //I stedet for å sjekke om det er delig med 5 med en valgsetning kan det gjøres fortere ved å telle 5 om gangen i løkka
        document.getElementById("resultat").innerHTML += i + " er delig med 5. ";
    }
}

function deligMed5OgPartall(){ //Skriver ned  partall og tall som er delige med 5 
    document.getElementById("resultat").innerHTML = ""; //Reseter paragrafen
    for(let i=0;i<101;i++){
        if(i%2 == 0){
            document.getElementById("resultat").innerHTML += i + " er partall. ";
        }
        if(i%5 == 0){ //Denne er ikke else if på grunn av at det er tall som både er delige med 5 og partall. 
            document.getElementById("resultat").innerHTML += i + " er delig med 5.";
            document.getElementById("resultat").innerHTML += "<br>"; //Legger til en break for å få mer orden
        }
    }
}

function tellTilMinus100(){ //Teller fra 0 til minus 100 og skriver det ned
    document.getElementById("resultat").innerHTML = ""; //Reseter paragrafen
    for(let i=0;i>-101;i--){
        document.getElementById("resultat").innerHTML += i + ", ";
    }
}

function tallIFunksjon(){
    document.getElementById("resultat").innerHTML = ""; //Reseter paragrafen
    for(i=-10; i<=10; i++){
        document.getElementById("resultat").innerHTML += (i + ", ");
    }
}


//Stjerneoppgaver
function oppgave2(){ //Skriver "*" fem ganger på rad.
    document.getElementById("stjerneTekst").innerHTML = ""; //Reseter paragrafen
    for(let i=0; i<5; i++){
        document.getElementById("stjerneTekst").innerHTML += "*";
    }
}
function oppgave3(){ //Skriver "*" fem ganger på rad på 4 linjer.
    document.getElementById("stjerneTekst").innerHTML = ""; //Reseter paragrafen
    for(let i=0; i<20; i++){
        if(i % 5 == 0){
            document.getElementById("stjerneTekst").innerHTML += "<br>";
        }
        document.getElementById("stjerneTekst").innerHTML += "*";
    }
}
function oppgave4(){ //Skriver en trapp med stjerner ved hjelp av to for loops.
    document.getElementById("stjerneTekst").innerHTML = ""; //Reseter paragrafen
    let antallStjerner = 1;
    for(let i=0; i<5; i++) {
        for(let i=0; i<antallStjerner; i++){
            document.getElementById("stjerneTekst").innerHTML += "*";       
        }
        antallStjerner++; 
        document.getElementById("stjerneTekst").innerHTML += "<br>";
    }
}
function oppgave5(){ //Skriver en motsatt trapp med stjerner ved hjelp av to for loops.
    document.getElementById("stjerneTekst").innerHTML = ""; //Reseter paragrafen
    let antallStjerner = 5;
    for(let i=0; i<5; i++) {
        for(let i=0; i<antallStjerner; i++){
            document.getElementById("stjerneTekst").innerHTML += "*";       
        }
        antallStjerner--; 
        document.getElementById("stjerneTekst").innerHTML += "<br>";
    }
}
function oppgave6(){ //Skriver en E med stjerner
    document.getElementById("stjerneTekst").innerHTML = ""; //Reseter paragrafen
    let antallStjerner = 5;
    let linje = 1;
    for(let i=0; i<5; i++) {
        for(let i=0; i<antallStjerner; i++){
            document.getElementById("stjerneTekst").innerHTML += "*";       
        }
        linje++

        document.getElementById("stjerneTekst").innerHTML += "<br>";

        //Endrer hvor mange stjerner som skal på linja løkka har kommet til, ved hjelp av valgsetninger.
        if(linje == 2 || linje == 4){
            antallStjerner=1;
        }
        else if(linje == 3){
            antallStjerner=3;
        }
        else{
            antallStjerner=5;
        }
    }
}