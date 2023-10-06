# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Kalkulering av hvordan man kan brette et a4-ark for å få størst volum.

arkL = 297 # Definere variabel for a4 lengde i millimeter
arkB = 210 # Definere variabel for a4 bredde i millimeter

hoyde = 0 # Definere variabel for høyde i millimeter

storsteVolum = 0 # Definere variabel som skal lagre det største volumet vi har fått så langt i liter
gjeldendeVolum = 0 # Definere variabel som skal lagre det gjeldene volumet som har blitt regnet ut


# Definere en while-løkke som kjører så lenge det gjeldende volumet ikke er mindre en det største vi har funnet ut av
while storsteVolum == gjeldendeVolum:
     nyArkL = arkL-(hoyde*2) # Definere en variabel som lagrer den nye lengden til arket med tanke på at høyden tar litt av sidene
     nyArkB = arkB-(hoyde*2) # Definere en variabel som lagrer den nye lengden til arket med tanke på at bredden tar litt av sidene

     gjeldendeVolum = (nyArkL * nyArkB * hoyde) / 1000000 # Tilordne volumet av arket i antall liter

     print("Volum: " + str((gjeldendeVolum))) # Skrive ut volum
     
     # Definere en valgsetning som sjekker om det gjeldende volumet er større enn det forrige største volumet
     if gjeldendeVolum > storsteVolum: 
          storsteVolum = gjeldendeVolum # Deretter skal det største volumet endres til det nye største volumet (gjeldendeVolum)

     hoyde+=1 # Legge til litt høyde for neste gang programmet skal kjøre


# Skrive ut resultat til bruker
print(str(storsteVolum) + " er det største volumet man kan få ved å brette et A4 ark.")
print(str(hoyde-1) + " blir høyden for å få størst volum.")