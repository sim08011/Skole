import person

class Ansatt (person.Person):
    pass

    def BeregnLonn(self, antallTimer):
        print(f"{self.fornavn} {self.etternavn} sin lønn: {antallTimer * self.timelonn}")

    def SkrivUt(self):
        print(f"{self.fornavn} {self.etternavn} med ID {self.id} har en timelønn på {self.timelonn}")
