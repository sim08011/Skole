#Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

#Oppgaver om valgsetninger på Aunivers.no: https://innhold.aunivers.no/fagpakker/realfag/informasjonsteknologi-1-2/it-2/1-grunnleggende-programmering-i-python/1b-valg-og-betingelser/valg


#Oppgave 1:
#Et program som sjekker om et tall osm skrives inn av brukeren, er positivt, negativt eller 0

inputTall = input("Skriv inn et tall: ")
inputTall = int(inputTall)

if inputTall < 0:
    print(str(inputTall) + " er mindre enn 0. (Negativt)")
elif inputTall > 0:
    print(str(inputTall) + " er større enn 0. (Positivt)")
else:
    print(str(inputTall) + " er 0.")


#Oppgave 2
#Et program som tar inn et tall fra brukeren og sjekker om tallet er énsifret, tosifret, tresifret, firesifret og mer enn firesifret.

inputTall2 = input("Skriv inn et positivt tall: ")
inputTall2 = int(inputTall2)

if inputTall2 < 0:
    print(str(inputTall2) + " er ikke et positivt tall.")
elif inputTall2 < 10:
    print(str(inputTall2) + " er énsifret.")
elif inputTall2 < 100:
    print(str(inputTall2) + " er tosifret.")
elif inputTall2 < 1000:
    print(str(inputTall2) + " er tresifret.")
elif inputTall2 < 10000:
    print(str(inputTall2) + " er firesifret.")
else:
    print(str(inputTall2) + " er femsifret eller mer.")


#Oppgave 3
#Et program som sjekker om et tall som skrives inn av brukeren, ligger mellom 50 og 100.

inputTall3 = input("Skriv inn enda et tall: ")
inputTall3 = int(inputTall3)

if inputTall3 < 100 and inputTall3 > 50:
    print(str(inputTall3) + " er et tall mellom 50 og 100.")
else:
    print(str(inputTall3) + " er ikke et tall mellom 50 og 100.")

#Oppgave 4
#Problemet i denne viste koden er at da den sjekker om at vannet er over 100 grader bør være flyttet til den første if-setningen.

#temperatur = input("Oppgi vannets temperatur: ")
#temperatur = float(temperatur)

#if temperatur > 0:
  #print("Vannet er i flytende form.")
#elif temperatur > 100:
  #print("Vannet koker.")
#else:
  #print("Vannet fryser til is.")


#Oppgave 5
#Et program som sjekker om tallet er positivt eller negativt. Hvis tallet er positivt, skal programmet sjekke om tallet er større enn 100. Hvis taller er negativt, skal programmet sjekke om tallet er mindre enn -100

inputTall4 = input("Skriv inn det siste tallet: ")
inputTall4 = int(inputTall4)

if inputTall4 < 0:
    print(str(inputTall4) + " er et negativt tall.")
    if inputTall4 < -100:
        print(str(inputTall4) + " er også mindre enn -100.")
elif inputTall4 > 0:
    print(str(inputTall4) + " er et positivt tall.")
    if inputTall4 > 100:
        print(str(inputTall4) + " er også over 100.")
else:
    print(str(inputTall4) + " er et ugyldig tall eller 0.")
