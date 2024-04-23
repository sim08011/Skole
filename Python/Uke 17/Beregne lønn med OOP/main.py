import person, ansatt, leder

ansatt1 = ansatt.Ansatt("Odd", "Gunnersen", 1, 190)
ansatt2 = ansatt.Ansatt("Bjørn", "Sandersen", 2, 190)
leder1 = leder.Leder("Pål", "Andreasen", 3, 250, 5)

ansatt1.SkrivUt()
ansatt2.SkrivUt()
leder1.SkrivUt()

ansatt1.BeregnLonn(8)
ansatt1.EndreLonn(230)
ansatt1.BeregnLonn(8)