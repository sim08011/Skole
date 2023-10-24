# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Gjett ord-oppgave
 
ord = ["H", "I", "S", "T", "O", "G", "R", "A", "M"] # Liste med ordet splittet opp i individuelle bokstaver

gjettOrd = ["-", "-", "-", "-", "-", "-", "-", "-", "-"] # Liste der det blir lagret hvilke bokstaver brukeren har gjettet riktig

harVunnet = False

print("Velkommen til Gjett ord-spill! Her skal du prøve å gjette deg frem til ordet ved å skrive inn en bokstav av gangen.")

# Definerer en while løkke som vil kjøre helt til at harVunnet-variabelen har blitt True
while not harVunnet:
    inputBokstav = input("GJETT BOKSTAV: ")

    # Definerer en for-løkke som kjører antall ganger som det er bokstaver i ordet
    for i in range(len(ord)):

        # Valgsetning som kjører dersom brukeren har gjettet riktig bokstav
        if ord[i] == inputBokstav.upper():
            print("Riktig! Bokstav " + str(ord[i]) + " er på plass " + str(i) + " i ordet.")
            gjettOrd[i] = inputBokstav.upper()

    # Sjekker om brukeren har gjettet hele ordet, og dersom det er sant vil den endre harVunnet-variabelen til True
    if ord == gjettOrd:
        print("Du har vunnet!")
        harVunnet = True
    
    print(gjettOrd)
        