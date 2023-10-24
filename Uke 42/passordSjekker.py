# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Velkomstmelding
print("Velkommen til dette passordsjekkingsprogrammet. Dette programmet vil teste om passordet ditt er sikkert.")

# Definere inputvariabel der brukeren kan skrive inn passordet
brukerPassord = input("Skriv inn passord: ")

# Lage boolvariabeler som inneholder krav til passord

harStorBokstav = False
harLitenBokstav = False
harTall = False
harSpesialTegn = False
har8Tegn = False

# Sjekker først om passordet er større eller lik 8 og gjør variabelen har8Tegn til True dersom det er sant
if len(brukerPassord) >= 8:
    har8Tegn = True

# Definere en for-løkke som kjører igjennom alle bokstavene i passordet
for i in range(0, len(brukerPassord)):

    # Sjekke om passordet oppfyller de ulike resterende kravene ved å teste den spesifikke bokstaven som er valgt i denne iterasjonen av løkka oppfyller et av kravene
    if brukerPassord[i].isupper():
        harStorBokstav = True
    elif brukerPassord[i].islower():
        harLitenBokstav = True
    elif brukerPassord[i].isnumeric():
        harTall = True
    else:
        harSpesialTegn = True


# Printe ut hva som eventuelt bør endres på passordet
if not harStorBokstav: print("Du bør legge til en stor bokstav")
if not harLitenBokstav: print("Du bør legge til en liten bokstav")
if not harTall: print("Du bør legge til et tall")
if not harSpesialTegn: print("Du bør legge til et spesialtegn")
if not har8Tegn: print("Du bør legge til flere tegn, slik at du har minst 8")

# Hvis alle kravene er fylt, printes det ut en hyggelig beskjed til brukeren
if harStorBokstav and harLitenBokstav and harTall and harSpesialTegn and har8Tegn:
    print("Du har et bra passord som oppfyller kravene!")

