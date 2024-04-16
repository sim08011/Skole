class Vehicle: 
    capacity = 0

    def __init__(self, name, max_speed,mileage): 
        self.name = name 
        self.max_speed = max_speed 
        self.mileage = mileage

class Bus(Vehicle):
    capacity = 50
    pass


School_bus = Bus("Skolebuss", 100, 15000)

print(School_bus.capacity)