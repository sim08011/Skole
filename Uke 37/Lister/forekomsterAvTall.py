# Kode skrevet av Simon Johnsen, 2ITA, Porsgrunn VGS

# Finne forekomster av tall i en liste

tallListe = [1, 2, 4, 5, 2, 9, 7, 2, 3, 5, 7, 2, 9, 4, 2, 1, 2, 0, 0, 9, 9, 8, 1, 3]


for i in range(10):
    antall = 0
    for j in range(len(tallListe)):
        if tallListe[j] == i:
            antall += 1



    print("Det forekommer " + str(antall) + " av " + str(i))