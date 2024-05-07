import json

class Component:
    def __init__(self, type, brand, name, price, year):
        self.type = type
        self.brand = brand
        self.name = name
        self.price = price
        self.year = year

    def update_price(self, new_price):
        self.price = new_price

    def to_dict(self):
        return {
            "type": self.type,
            "brand": self.brand,
            "name": self.name,
            "price": self.price,
            "year": self.year
        }

class Processor(Component):
    def __init__(self, type, brand, name, price, year, cores, clockspeedInGhz, lithography):
        super().__init__(type, brand, name, price, year)
        self.cores = cores
        self.clockspeedInGhz = clockspeedInGhz
        self.lithography = lithography

    def to_dict(self):
        data = super().to_dict()
        data["cores"] = self.cores
        data["clockspeedInGhz"] = self.clockspeedInGhz
        data["lithography"] = self.lithography
        return data

class Memory(Component):
    def __init__(self, type, brand, name, price, year, sizeInGb, speedInMhz):
        super().__init__(type, brand, name, price, year)
        self.sizeInGb = sizeInGb
        self.speedInMhz = speedInMhz

    def to_dict(self):
        data = super().to_dict()
        data["sizeInGb"] = self.sizeInGb
        data["speedInMhz"] = self.speedInMhz
        return data

class Motherboard(Component):
    def __init__(self, type, brand, name, price, year, socket, formFactor, ramSlots):
        super().__init__(type, brand, name, price, year)
        self.socket = socket
        self.formFactor = formFactor
        self.ramSlots = ramSlots

    def to_dict(self):
        data = super().to_dict()
        data["socket"] = self.socket
        data["formFactor"] = self.formFactor
        data["ramSlots"] = self.ramSlots
        return data

class VideoCard(Component):
    def __init__(self, type, brand, name, price, year, memoryInGb):
        super().__init__(type, brand, name, price, year)
        self.memoryInGb = memoryInGb

    def to_dict(self):
        data = super().to_dict()
        data["memoryInGb"] = self.memoryInGb
        return data

class PowerSupply(Component):
    def __init__(self, type, brand, name, price, year, wattage, formFactor):
        super().__init__(type, brand, name, price, year)
        self.wattage = wattage
        self.formFactor = formFactor

    def to_dict(self):
        data = super().to_dict()
        data["wattage"] = self.wattage
        data["formFactor"] = self.formFactor
        return data

class StorageDrive(Component):
    def __init__(self, type, brand, name, price, year, diskType, sizeInGb, formFactor, interface):
        super().__init__(type, brand, name, price, year)
        self.diskType = diskType
        self.sizeInGb = sizeInGb
        self.formFactor = formFactor
        self.interface = interface

    def to_dict(self):
        data = super().to_dict()
        data["diskType"] = self.diskType
        data["sizeInGb"] = self.sizeInGb
        data["formFactor"] = self.formFactor
        data["interface"] = self.interface
        return data

def save_components_to_file(components, filename):
    with open(filename, 'w') as f:
        json.dump([comp.to_dict() for comp in components], f)

def load_components_from_file(filename):
    components = []
    try:
        with open(filename, 'r') as f:
            data = json.load(f)
            for item in data:
                component = None 
                if item.get("type") == "Processor":
                    component = Processor(item["type"], item["brand"], item["name"], item["price"], item["year"], item["cores"], item["clockspeedInGhz"], item["lithography"])
                elif item.get("type") == "Memory":
                    component = Memory(item["type"], item["brand"], item["name"], item["price"], item["year"], item["sizeInGb"], item["speedInMhz"])
                elif item.get("type") == "Motherboard":
                    component = Motherboard(item["type"], item["brand"], item["name"], item["price"], item["year"], item["socket"], item["formFactor"], item["ramSlots"])
                elif item.get("type") == "VideoCard":
                    component = VideoCard(item["type"], item["brand"], item["name"], item["price"], item["year"], item["memoryInGb"])
                elif item.get("type") == "PowerSupply":
                    component = PowerSupply(item["type"], item["brand"], item["name"], item["price"], item["year"], item["wattage"], item["formFactor"])
                elif item.get("type") == "StorageDrive":
                    component = StorageDrive(item["type"], item["brand"], item["name"], item["price"], item["year"], item["diskType"], item["sizeInGb"], item["formFactor"], item["interface"])
                if component:
                    components.append(component)
    except Exception as e:
        print("Error loading components from file:", e)
    return components