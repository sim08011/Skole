from klasser import *

# Components:


i54460 = Processor("Intel", "i5 4460", 19, 2013, 4, 3.4, 22)
GTX1050Ti = VideoCard("NVIDIA", "GTX 1050 Ti", 139, 2016, 4)
SeagateBarracuda2TB = StorageDrive("Seagate", "Barracuda 2TB", 39, 2017, "Hard Drive", 2000, "3.5 inch", "SATA")

# Printing components

print(vars(i54460))
print(vars(GTX1050Ti))
print(vars(SeagateBarracuda2TB))
