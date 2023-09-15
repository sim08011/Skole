#Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Quizspiel - Python

# Definere en liste med forskjellige spørsmål 

sporsmal = ["Hva er hovedstaden i Østerrike?", "Hva er hovedstaden i Danmark?", "Hva er hovedstaden i Portugal?", "Hva er hovedstaden i Australia?", "Hva er hovedstaden i Peru?", "Hva er hovedstaden i Slovenia?", "Hva er hovedstaden i Oman?", "Hva er hovedstaden i Estland?", "Hva er hovedstaden i Kamerun?", "Hva er hovedstaden i Mongolia?"]

# Definere en liste med alle de første svaralternativene
svar1 = ["Oslo", "København", "Lisboa", "Sydney", "Kiev", "Sandnes", "Stockholm", "Riga", "Yaoundé", "Astana"]
# Definere en liste med alle de andre svaralternativene
svar2 = ["Vienna", "Odense", "Boston", "Perth", "Lima", "Bratislava", "Muskat", "Vilnius", "Kinshasha", "Ulaanbaatar"]
# Definere en liste med alle de tredje svaralternativene
svar3 = ["Hamburg", "Aarhus", "Minsk", "Canberra", "Montevideo", "Ljubljana", "Athen", "Tallinn", "Lagos", "Tirana"]
# Definere en liste med riktige svaralternativer
riktigeSvar = [2, 1, 1, 3, 2, 3, 2, 3, 1, 2]
# Definere en variabel som inneholder brukerens poengsum
poengSum = 0



# Printe ut en beskrivelse av programmet
print("Velkommen til et geografi spill! Her skal du prøve å gjette hovedstedene til forskjellige land.")

# Lage en for-løkke som kjører igjennom alle spørsmålene
for i in range(len(sporsmal)):

    print("---------------------------------------")

    # Printe ut spørsmålet[i]
    print(sporsmal[i])
    # Printe ut svaralternativene
    print("Svaralternativ 1: ", svar1[i])
    print("Svaralternativ 2: ", svar2[i])
    print("Svaralternativ 3: ", svar3[i])

    # Definere en variabel(flagg) som lagrer om brukeren har skrevet inn gyldig svar
    gyldigInput = False
    
    # Lage en while-løkke som kjører så lenge gyldigSvar er false
    while not gyldigInput:

        # Hente input fra brukeren. 1, 2 eller 3 .
        brukerInput = input("Skriv inn svaralternativ (1, 2, 3): ")

        #Sjekke om brukerens input er et tall
        if brukerInput.isnumeric():
            # Sjekke om input er riktig med svaralternativene
            if int(brukerInput) == riktigeSvar[i]:
                print("Riktig svar!")
                poengSum += 1
                gyldigInput = True
            elif int(brukerInput) < 1  or int(brukerInput) > 3:
                print("Du har skrevet inn et ugyldig tall. Du må skrive inn et av tallene: 1, 2 eller 3.")
            else:
                print("Feil svar")
                gyldigInput = True
        
        #Sjekke om brukeren har skrevet tallene i bokstavform
        elif brukerInput.lower() == "tre" or brukerInput.lower() == "to" or brukerInput.lower() == "en":
            print("Du må skrive inn tallet i tallform.")
        else:
            print("Ugyldig input. Du må taste inn et tall.")



# Printe ut hvor mange spørsmål brukeren fikk riktig: poengsum/lengden av spørsmålslista
print("Du fikk ", poengSum, " poeng!")



# Lage en valgsetning som sjekker om brukeren fikk over 7: Bra jobbet
#                                                  over 4: Middels Bra
#                                                  under 4: Ikke bra

if poengSum > 7:
    print("Bra jobbet!")
elif poengSum > 4:
    print("Du klarte dette middels godt.")
else:
    print("Du klarte ikke så mange. Kanskje du bør prøve igjen?")
