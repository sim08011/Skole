# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Palindromsjekker

inputStreng = input("Skriv inn en tekststrenge (et ord): ")

inputStreng = inputStreng.lower()


motsattStreng = ""

# Kjører for-løkka baklegns fordi vi skal sette opp en strenge fra den bakerste bokstaven i inputStreng
for i in reversed(range(len(inputStreng))):
    motsattStreng += inputStreng[i]


if(motsattStreng == inputStreng):
    print("Strengen din er palindrom!")

print(motsattStreng)
