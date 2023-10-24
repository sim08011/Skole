# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Program som genererer passord til bruker med tegn

# Importere biblitekene random
import random

# Velkomstmelding
print("Velkommen til passordgeneratoren.")

# Definere en inputvariabel der brukeren skriver inn antall tegn som skal være i Passordgenerator
antallTegn = input("Hvor langt skal passordet være (Skriv tall): ")
antallTegn = int(antallTegn)

# Definere en funksjon som tar inn variabel
def genererPassord(tegn):
    # Definere en variabel av typen string som blir passordet
    passord = ""

    # Definere en for-løkke som kjører så mange ganger som inputvariabelen er
    for i in range(tegn):
        # Definere en variabel som generer et ascii tegn med en tilfeldig desimal mellom 33 og 126
        asciiTegn = chr(random.randint(33, 126))

        # Legge til tegnet til passordvariabelen
        passord+=str(asciiTegn)

    # Printe ut passord til bruker
    print(passord)

# Kjøre funksjonen
genererPassord(antallTegn)