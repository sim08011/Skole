# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Gangetabell

# Henter inn input fra brukeren på hva slags tall som programmet skal skrive
inputTall = input("Skriv inn et tall du vil se gangetabellen til: ")


# Definerer en funskjon som heter gangeTabell.
def gangeTabell(tall):
    print("Her er gangetabellen til " + tall)

    # Løkke som kjører igjennom fra 0 til 10
    for i in range(11):
        print(int(tall) * i)

# Kjører funksjonen gangetabell og henter inn inputTall-variabelen
gangeTabell(inputTall)
