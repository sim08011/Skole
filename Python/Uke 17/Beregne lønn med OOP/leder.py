import person

class Leder(person.Person):
    def __init__(self, fornavn, etternavn, id, timelonn, bonus):
        super().__init__(fornavn, etternavn, id, timelonn)
        self.bonus = bonus
        self.timelonn = timelonn * (1+bonus/100)

    def SkrivUt(self):
        print(f"{self.fornavn} {self.etternavn} med ID {self.id} har en timelønn på {self.timelonn}. Bonusen er {self.bonus}%")


