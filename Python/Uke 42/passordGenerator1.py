# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Program som genererer passord til bruker med tall

# Importere bibliteket random
import random

# Velkomstmelding
print("Velkommen til passordgeneratoren.")

# Definere en inputvariabel der brukeren skriver inn antall siffer som skal være i Passordgenerator
antallSiffer = input("Hvor langt skal passordet være (Skriv tall): ")
antallSiffer = int(antallSiffer)

# Definere en funksjon som tar inn variabel
def genererPassord(siffer):
    # Definere en variabel av typen string som blir passordet
    passord = ""

    # Definere en for-løkke som kjører så mange ganger som inputvariabelen er
    for i in range(siffer):
        # Generere et tilfeldig tall og legge det til passordvariabelen
        passord+=str(random.randint(0,9))

    # Printe ut passord til bruker
    print(passord)

# Kjøre funksjonen
genererPassord(antallSiffer)