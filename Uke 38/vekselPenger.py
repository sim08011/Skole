# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Vekselpengekalkulator

import math
import sys

# Printe ut forklaring av programmet
print("Dette er en kalkulator som regner ut hvor mye penger i form av kontanter man får i veksel dersom man betaler en sum for et innkjøp.")

# Definere en funksjon som heter vekselPenger.
def vekselPenger():

    # Definere en inputvariabel der brukeren kan skrive inn hvor mye penger som er kjøpesummen.
    kjopeSum = input("Skriv inn kjøpesum: ")
    kjopeSum = int(kjopeSum)
    # Definere en inputvariabel der brukeren kan skrive inn hvor mye penger som skal betales med.
    betalingSum = input("Skriv inn hvor mye du betaler med: ")
    betalingSum = int(betalingSum)

    # Finne ut hvor mye penger det blir i veksel ved å subtrahere betalingsum med kjøpesum.
    veksel = betalingSum-kjopeSum

    # Valgsetning for å sjekke om vekselvariabelen er over 0, hvis ikke vil kjøpet ikke kunne gjennomføres.
    if veksel >= 0:

        # Valgsetninger for å sjekke hvor mange ganger tallet er delelige i disse tallene i rekkefølge: 1000, 500, 200, 100, 50, 20, 10, 5, 1.

        # I hver valgsetning skrives det ut hvor mange av den seddelen eller mynten som blir i veksel.
        # Dette skal subtraheres fra vekselsummen ved hjelp av modulus.
        if veksel >= 1000:
            print("Det får " + str(math.floor(veksel/1000)) + " 1000-lapp(er)")
            veksel%=1000
        if veksel >= 500:
            print("Det får " + str(math.floor(veksel/500)) + " 500-lapp(er)")
            veksel%=500
        if veksel >= 200:
            print("Det får " + str(math.floor(veksel/200)) + " 200-lapp(er)")
            veksel%=200
        if veksel >= 100:
            print("Det får " + str(math.floor(veksel/100)) + " 100-lapp(er)")
            veksel%=100
        if veksel >= 50:
            print("Det får " + str(math.floor(veksel/50)) + " 50-lapp(er)")
            veksel%=50
        if veksel >= 20:
            print("Det får " + str(math.floor(veksel/20)) + " 20-kroning(er)")
            veksel%=20
        if veksel >= 10:
            print("Det får " + str(math.floor(veksel/10)) + " 10-kroning(er)")
            veksel%=10
        if veksel >= 5:
            print("Det får " + str(math.floor(veksel/5)) + " 5-kroning(er)")
            veksel%=5
        if veksel >= 1:
            print("Det får " + str(math.floor(veksel/1)) + " 1-kroning(er)")
    else:
        print("Enten er kjøpesummen større enn betalingsummen eller så har du skrevet inn ugyldig verdi. Prøv igjen.")
        vekselPenger()

    # Definere en variabel som sjekker om brukeren har valgt å restarte programmet. Denne skal starte som usann.
    harRestartet = False

    # Definere en while-løkke som sjekker kjører så lenge variabelen harRestartet ikke er sann.
    while harRestartet == False:

        # Definere en inputvariabel der brukeren skal skrive j eller n.
        restart = input("Vil du kjøre programmet igjen? J/N: ")
        
        # Valgsetning som sjekker hva brukeren har skrevet, der den velger om programmet skal kjøres på nytt eller avsluttes.
        if restart.lower() == "j":
            vekselPenger()
            harRestartet = True
        elif restart.lower() == "n":
            sys.exit()
        else:
            print("Du må skrive inn bare bokstaven j eller n.")


# Kjører funksjonen en gang, slik at programmet starter.
vekselPenger()