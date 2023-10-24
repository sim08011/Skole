#Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS
#Oppgaver fra Word om valgsetninger

#Oppgave 1 - Et program som tar inn en elevs poengsum som input og gir en karakter basert på følgende skala:
#90-100: A
#80-89: B
#70-79: C
#60-69: D
#Under 60:

import random

poengSum = input("Skriv inn elevs poengsum: ")
poengSum = int(poengSum)

if poengSum >= 90:
    print("Eleven har fått karakter: A")
elif poengSum >= 80:
    print("Eleven har fått karakter: B")
elif poengSum >= 70:
    print("Eleven har fått karakter: C")
elif poengSum >= 60:
    print("Eleven har fått karakter: D")
elif poengSum < 60:
    print("Eleven har fått karakter: F")
else:
    print("Ugyldig input.")

#Oppgave 2 - En enkel kalkulator som tar inn to tall og en operator som input fra brukeren

print("Nå skal du skrive inn to tall og en operator, og finne ut av hva svaret blir av dette.")

tall1 = input("Skriv inn første tall: ")
tall2 = input("Skriv inn andre tall: ")
operator = input("Skriv inn operator (+,-,*,/):")
tall1 = float(tall1)
tall2 = float(tall2)

print("Resultat:")
#Nå sjekker vi om brukeren har skrevet inn +,-,* eller /. Hvis brukeren har skrevet noe annet skal vi printe det ut som ugyldig.
if operator == "+": 
    print(tall1+tall2)
elif operator == "-":
    print(tall1-tall2)
elif operator == "*":
    print(tall1*tall2)
elif operator == "/":
    print(tall1/tall2)
else:
    print("Ugyldig operator.")


#Oppgave 3 - Et program som spør brukeren om hvilken time det er på en 24 timers klokke som input. Basert på tiden skal programmet si en passende hilsen.

time = input("Skriv inn helt klokkeslett (24 timers klokke): ")
time = int(time)

if time < 4:
    print("God natt!")
elif time < 12:
    print("God morgen!")
elif time < 17:
    print("God ettermiddag!")
elif time <= 24:
    print("God kveld!")
else:
    print("Ugyldig klokkeslett.")


#Oppgave 4 - Et program som sjekker om tallet er et oddetall eller partall

inputTall = input("Skriv inn et heltall: ")
inputTall = int(inputTall)

if inputTall % 2 == 0:
    print(str(inputTall) + " er et partall.")
else:
    print(str(inputTall) + " er et oddetall.")

#Oppgave 5 - Et program som ber brukeren oppgi et passord. Hvis passordet er "hemmelig", skal programmet gi tilgang

passord = "hemmelig"
inputTekst = input("Skriv inn passord: ")

if inputTekst == passord:
    print("Du har fått tilgang!")
else:
    print("Feil passord.")

#Oppgave 6 - Et program som genererer et tilfeldig tall mellom 1 og 100, der brukeren skal gjette seg fram til hvilket tall det er.

tilfeldigTall = random.randint(1, 100)


def gjettTall():
    gjettInput = input("Skriv inn et tall mellom 1 og 100: ")
    gjettInput = int(gjettInput)

    if(gjettInput == tilfeldigTall):
        print("Riktig svar! Bra jobbet!")
        return
    elif(gjettInput < tilfeldigTall):
        print(str(gjettInput) + " er mindre enn tallet du søker etter.")
        gjettTall()
    elif(gjettInput > tilfeldigTall):
        print(str(gjettInput) + " er større enn tallet du søker etter.")
        gjettTall()

gjettTall()