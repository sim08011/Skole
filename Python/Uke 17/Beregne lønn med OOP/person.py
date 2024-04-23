class Person:
    def __init__(self, fornavn, etternavn, id, timelonn):
        self.fornavn = fornavn
        self.etternavn = etternavn
        self.id = id
        self.timelonn = timelonn
    
    def EndreLonn(self,nylonn):
        self.timelonn = nylonn
