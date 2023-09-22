# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Tippespill

# Importere nødvendige bibliotek.
import random
import sys

# Spesifisere maksgrense av hvor høyt det tilfeldige tallet kan gå opp til i en variabel som heter maksTall.
maksTall = 100

# Printe ut forklaring av spill.
print("Velkommen til tippespillet. Her skal du prøve å gjette deg frem til et spesifikt tall på færrest antall gjett. Tallet er mellom 1 og " + str(maksTall))

# Definere en funskjon som heter tippeSpill.
def tippeSpill():
    
    # Definere en variabel som lagrer antall gjett.
    antalLGjett = 0

    # Definere en variabel som lagrer om brukeren har vunnet. Denne skal starte usann.
    harVunnet = False

    # Generere et tilfeldig tall mellom 1 og maksTall
    tall = random.randint(1, maksTall)

    # Definere en while-løkke som kjører så lenge brukeren ikke har vunnet.
    while harVunnet == False:

        # Definere en inputvariabel der brukeren kan gjette tall.
        gjett = input("Gjett et tall: ")
        gjett = int(gjett)
        
        # Øke antall gjett for hver gang løkken kjører.
        antalLGjett += 1

        # Sjekke om brukeren har skrevet et tall som er høyere, lavere eller likt det tallet man skal gjette i en valgsetning.
        if gjett == tall:
            print("Gratulerer! Du fant tallet!")
            print("Antall gjett: " + str(antalLGjett))

            # Om spilleren har vunnet skal variabelen som inneholder om brukeren har vunnet endres til sann.
            harVunnet = True
        elif gjett < tall:
            print("Tallet du skrev er for lavt.")
        elif gjett > tall:
            print("Tallet du skrev er for høyt.")
        else:
            print("Ugyldig input.")
    

    # Definere en variabel som sjekker om brukeren har valgt å restarte programmet. Denne skal starte som usann.
    harRestartet = False

    # Definere en while-løkke som sjekker kjører så lenge variabelen harRestartet ikke er sann.
    while harRestartet == False:

        # Definere en inputvariabel der brukeren skal skrive j eller n.
        restart = input("Vil du kjøre programmet igjen? J/N: ")
        
        # Valgsetning som sjekker hva brukeren har skrevet, der den velger om programmet skal kjøres på nytt eller avsluttes.
        if restart.lower() == "j":
            tippeSpill()
            harRestartet = True
        elif restart.lower() == "n":
            sys.exit()
        else:
            print("Du må skrive inn bare bokstaven j eller n.")

# Kjører funksjonen en gang, slik at programmet starter.
tippeSpill()