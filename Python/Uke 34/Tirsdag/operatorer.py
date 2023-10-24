import math

#Oppgave 7

#Kode som printer ut resultat av regnestykker
print(3+2*3) 
print(2**3 - 8/2)
print(3*4/2)

#Oppgave 11 & 12

#Program som beregner omrekts og areal av sirkel

radius = 3 #Definerer radiusvariabel og tilordner den verdien 3

areal = math.pi * radius**2 #Definerer arealvariabel og tilordner den verdien av pi * radius^2
omkrets = radius*2*math.pi #Definerer omrektsvariabel og tilordner den verdien av pi * radius*2

#Printer de 2 øvre variabelene til konsoll
print(areal)
print(omkrets)


#Oppgave 13

import calendar #Importerer kalender bibliotek

print(calendar.month(2023, 8)) #Her printer vi ut måneden august i dette året ved hjelp av biblioteket

#Oppgave 14

katet1 = 5
katet2 = 12
hypotenus = math.sqrt(katet1**2+katet2**2)

print(hypotenus)

#Oppgave 15

def tilRadianer(vinkel): #Omregner grader til radianer
    return(vinkel/180*math.pi)

print(tilRadianer(60))

print(math.cos(tilRadianer(60)))

#cos a = hosliggende katet/hypotenus

# 1/cos a = hypotenus/katet

hypotenus = 7/math.cos(tilRadianer(60)) #Hypotenus er lik katet^cosinus(vinkelen)

print(round(hypotenus))