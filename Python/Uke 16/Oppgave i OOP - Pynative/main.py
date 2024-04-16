class Vehicle: 
    def __init__(self, name, max_speed,mileage): 
        self.name = name 
        self.max_speed = max_speed 
        self.mileage = mileage
    
    def description(self):
        return f"The {self.name} has a top speed of {self.max_speed} and a mileage of {self.mileage}"

class Bus(Vehicle): 
    def __init__(self, name, max_speed, mileage, capacity): 
        super().__init__(name, max_speed, mileage) 
        self.capacity = capacity
    def description(self):
        return f"The {self.name} bus has a top speed of {self.max_speed} and a mileage of {self.mileage}. It has a total of {self.capacity} seats."

    def fare(self):
        return self.capacity * 100
    
    def seating_capacity(self, capacity):
        return f"The seating capacity of a {self.name} is {capacity} passengers"



bus1 = Bus("Scania Banan", 240, 70000, 45) 

print(bus1.max_speed, bus1.mileage, bus1.capacity)
print(bus1.fare())
print(bus1.description()) 