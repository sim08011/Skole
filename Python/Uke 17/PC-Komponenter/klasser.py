class Component:
    def __init__(self, brand, name, price, year):
        self.brand = brand
        self.name = name
        self.price = price
        self.year = year


class Processor (Component):
    pass

    def __init__(self, cores, clockspeedInGhz, lithography):
        self.cores = cores
        self.clockspeedInGhz = clockspeedInGhz
        self.lithography = lithography


class Memory (Component):
    pass

    def __init__(self, sizeInGb, speedInMhz):
        self.sizeInGb = sizeInGb
        self.speedInMhz = speedInMhz

class Motherboard (Component):
    pass

    def __init__(self, socket, formFactor, ramSlots):
        self.socket = socket
        self.formFactor = formFactor
        self.ramSlots = ramSlots


class VideoCard (Component):
    def __init__(self, brand, name, price, year, memoryInGb):
        super().__init__(brand, name, price, year)
        self.memoryInGb = memoryInGb


class PowerSupply (Component):
    pass

    def __init__(self, wattage, formFactor):
        self.wattage = wattage
        self.formFactor = formFactor

class StorageDrive (Component):
    pass

    def __init__(self, diskType, sizeInGb, formFactor, interface):
        self.diskType = diskType
        self.sizeIngb = sizeInGb
        self.formFactor = formFactor
        self.interface = interface




GTX1050Ti = VideoCard("NVIDIA", "GTX 1050 Ti", 139, 2016, 4)

print(GTX1050Ti.brand)