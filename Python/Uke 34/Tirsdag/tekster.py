#Oppgaver om tekster og lignende

#Finne indeks i string:

sitat = "Det finnes mange forskjellige land i verden, men enda flere språk"

print("Sitatets lengde:", len(sitat))
print("Tegnet med indeks 26:", sitat[26])
print("Tegnene til og med indeks 11:", sitat[:12])
print("Tegnene fra og med indeks 28:", sitat[28:])
print("Tegnene med indeks 16 til 25:", sitat[16:26])


#Oppgave 16 - Finn lengden av teksten "Hallo!", og bruk verdien for å hente ut det siste tallet

ord = "Hallo!" #Deklarerer variabelen ord og tilordner den verdien "Hallo!", som er av type string
ordlengde = len(ord) #Deklarerer variabelen ordlengde og tilordner den verdien av antall tegn i variabelen "ord"

sisteBokstav = ord[ordlengde-1] #Deklarerer variabelen sisteBokstav og tilordner den verdien av det siste tegnet i stringvariabelen "ord"

print(sisteBokstav) #Printer ut verdien av variabelen "sisteBokstav" til konsoll



#Oppgave 17 - Lag et program med teksten «HALLO!». Bruk string-metoder for å gjøre om teksten til «Hallo!», og skriv den ut

ord2 = "HALLO!"
ordFiks = ord2.capitalize()

print(ordFiks)



#Oppgave 18 - Skriv et program som tar utgangspunkt i teksten "Datamaskiner er ubrukelige. De kan bare gi oss svar." og skriver ut «Datamaskiner kan gi oss svar.».

tekst = "Datamaskiner er ubrukelige. De kan bare gi oss svar." #Deklarerer en variabel og tilordner den en stringverdi
sluttSetning = tekst.index("De kan bare gi oss svar.") #Deklarerer en variabel og tilordner den verdien av indeksen til posisjonen der den andre setningen starter i "tekst" variabelen

print(tekst[sluttSetning:]) #Printer ut alle tegn som kommer etter indeksen(sluttSetning) i variabelen "tekst"



#Oppgave 19

fornavn = "jens" #Deklarerer en variabel og tilordner den verdien "jens". Type: string
etternavn = "stoltenberg" #Deklarerer en variabel og tilordner den verdien "stoltenberg". Type. string
telefonNr = 98547323 #Deklarerer en variabel og tilordner den verdien 98547323. Type: int

print(fornavn, etternavn + " har telefonnummer " + str(telefonNr)) #Printer ut disse variabelene ovenfor og gjør telefonNr-variabelen om til en string slik at den kan skrives ut med resten av setningen.



#Oppgave 20

print(int("100 m".replace("m",""))) #Printer kun ut 100, fordi vi fjerner alle forekomster av "m"
print(int("300000 km/s".replace("km/s",""))) #Printer kun ut 300000, fordi vi fjerner alle forekomster av "km/s"
print(float("2, 718 281 828 459 045".replace(",", ".").replace(" ", ""))) #Printer kun ut tallet, siden vi fjerner alle mellomrom og gjør komma om til punktum slik at det blir forstått som en gyldig float.

#Oppgave 21

#Ordet som vil skrives ut i denne oppgaven er is

#Eksempelkode fra oppgaven:
ord = "spiser"
lengde = len(ord)
nyttOrd = ord[2] + ord[lengde - 3]
print(nyttOrd)
print(lengde)