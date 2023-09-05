#Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

#Oppretter variabelene sirkel og firkant, og tilordner de verdiene "rød" og "blå"

sirkel = "rød"
firkant = "blå"

#Oppretter variabelen temp, slik at vi har et mellomledd når vi skal bytte plassene på sirkel og firkant variabelene

#temp blir tilordnet verdien av sirkel
temp = sirkel

#Endrer verdien til sirkel om til verdien i firkant-variabelen
sirkel = firkant

#Endrer verdien til firkant om til verdien i temp-variabelen
firkant = temp

#Skriver ut verdiene til sirkel og firkant til konsoll
print("Sirkel inneholder:" + sirkel + ". Firkant inneholder: " + firkant + ".")

