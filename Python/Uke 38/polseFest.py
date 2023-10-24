# Kode skrevet av simon Johnsen, 2ITA, Porsgrunn VGS

# Pølsefest

import math

# Beskrivelse av program til bruker
print("Dette er en kalkulator som regner ut hvor mange pølsepakker og pølsebrødpakker du trenger til en pølsefest.")
print("En typisk pølsepakke har 10 pølser og en typisk pølsebrødpakke har 8 pølsebrød.")

# Henter input fra bruker
antallOstePolser = input("Hvor mange personer skal ha ostepølser? ")
antallGrillPolser = input("Hvor mange personer skal ha grillpølser? ")
polserPerPerson = input("Hvor mange pølser spiser hver person? ")

# Gjør input til int
antallOstePolser = int(antallOstePolser)
antallGrillPolser = int(antallGrillPolser)
polserPerPerson = int(polserPerPerson)

# Antall stykk i pakker:
ostePolsePakke = 6
grillPolsePakke = 10
polseBrodPakke = 8


# Definerer funskjon som gjør kalkulasjonene
def kalkulator(antallOstePolser, antallGrillPolser , polserPerPerson):

    # Regner ut hvor mange pølser som trengs basert på antall personer og pølser per person
    ostePolser = antallOstePolser * polserPerPerson
    grillPolser = antallGrillPolser * polserPerPerson

    print(ostePolser)
    print(grillPolser)

    # Finner ut hvor mange pølsepakker og pølsebrødpakker som trengs. Her brukes det math.ceil slik at vi alltid runder opp.
    ostePolsePakkeKreves = math.ceil(ostePolser / ostePolsePakke)
    grillPolsePakkeKreves = math.ceil(grillPolser / grillPolsePakke)
    polseBrodPakkeKreves = math.ceil((ostePolser+grillPolser) / polseBrodPakke)

    # Regner ut hvor mange ekstra pølser og pølsebrød det blir ved hjelp av modulus, og tilføyer disse til passende variabler
    ekstraOstePolser = (ostePolsePakke * ostePolsePakkeKreves) - ostePolser
    ekstraGrillPolser = (grillPolsePakke * grillPolsePakkeKreves) - grillPolser
    ekstraPolseBrod = (polseBrodPakke * polseBrodPakkeKreves) - (ostePolser+grillPolser)

    # Printer ut resultat til konsoll
    print("Det blir totalt " + str(ostePolser+grillPolser) + " pølser.")

    print("Du trenger " + str(ostePolsePakkeKreves) + " ostepølsepakker.")
    print("Du trenger " + str(grillPolsePakkeKreves) + " grillpølsepakker.")
    print("Du trenger " + str(polseBrodPakkeKreves) + " pølsebrødpakker.")

    print("Det blir " + str(ekstraOstePolser) + " ekstra ostepølser.")
    print("Det blir " + str(ekstraGrillPolser) + " ekstra grillpølser.")
    print("Det blir " + str(ekstraPolseBrod) + " ekstra pølsebrød.")


# Kjører funksjonen
kalkulator(antallOstePolser, antallGrillPolser, polserPerPerson)
