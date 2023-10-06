# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Fibonaccisekvens med multiplisering for hvert steg


tall1 = 2
tall2 = 1

# Lager en løkke som kjører 10 ganger
for i in range(11):
    print(tall1 * tall2)

    # En midlertidig beholder for tall1, slik at den nåværende verdien av tall1 kan bli lagt til tall2 senere
    tempTall = tall1

    tall1 += tall2
    tall2 = tempTall
    

    