#Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

print("Nå skal du skrive inn et tall. Etter du har skrevet et tall finner koden frem alle primtallene frem til det tallet.")

inputTall = input("Skriv inn et tall:")

inputTall = int(inputTall)


for i in range(2, inputTall + 1): # Lager en løkke som kjører igjennom alle tall frem til tallet som brukeren skrev inn

    erPrimTall = True # Antar at tallet er et primtall til å begynne med

    for j in range(2, int(i ** 0.5) + 1): # Lager en løkke som kjører igjennom alle tall frem til kvadratroten av "i"
        if i % j == 0: # Sjekker om det ikke blir noe rest hvis i % j er 0. Da er tallet garantert ikke et primtall og vil avslutte koden med å si at det ikke er et primtall
            erPrimTall = False
            break
    
    if erPrimTall:
        print(str(i) + " er et primtall.")
    else:
        print(str(i) + " er ikke et primtall.")