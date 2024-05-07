import tkinter as tk
from tkinter import ttk
from tkinter import filedialog as fd
from tkinter import messagebox
from tkinter.messagebox import showinfo
from classes import *

i54460 = Processor("Processor", "Intel", "i5 4460", 19, 2013, 4, 3.4, 22)
Ryzen95900x = Processor("Processor", "AMD", "Ryzen 9 5900x", 300, 2020, 12, 4.6, 7)
Rx6800Xt = VideoCard("VideoCard", "AMD", "RX 6800 XT", 359, 2020, 16)
GTX1050Ti = VideoCard("VideoCard", "NVIDIA", "GTX 1050 Ti", 139, 2016, 4)
AsrockFatal1tyB360GamingK4 = Motherboard("Motherboard", "ASRock", "Fatal1ty B360 Gaming K4", 79, 2018, "1151", "ATX", 4)
SeagateBarracuda2TB = StorageDrive("StorageDrive", "Seagate", "Barracuda 2TB", 39, 2017, "Hard Drive", 2000, "3.5 inch", "SATA")
Evga600Br = PowerSupply("PowerSupply", "EVGA", "600BR", 59, 2017, 600, "ATX")
Evga600Br = PowerSupply("PowerSupply", "EVGA", "600BR", 59, 2017, 600, "ATX")


components = [i54460, Ryzen95900x, Rx6800Xt, GTX1050Ti, AsrockFatal1tyB360GamingK4, SeagateBarracuda2TB, Evga600Br]


def saveJson():
    save_components_to_file(components, "components.json")

def loadJson():
    loaded_components = load_components_from_file("components.json")

    for component in loaded_components:
        print(vars(component))

def addComponent():
    print("Add Component")

def sortPrice():
    sorted_components = sorted(components, key=lambda x: x.price)
    sorted_info = "Components sorted by price:\n"
    for component in sorted_components:
        sorted_info += f"{component.name}: ${component.price}\n"

    showinfo("Sorted Components", sorted_info)

def updatePrice():
    print("Test.")


# Tkinter (GUi)

root = tk.Tk() 
root.title('PC-Components')
root.geometry('300x150')

saveJsonButton = ttk.Button(
    root,
    text='Save JSON',
    command=saveJson
)

loadJsonButton = ttk.Button(
    root,
    text='Load JSON',
    command=loadJson
)

addComponentButton = ttk.Button(
    root,
    text='Add Component',
    command=addComponent
)

sortPriceButton = ttk.Button(
    root,
    text='Sort Price',
    command=sortPrice
)

updatePriceButton = ttk.Button(
    root,
    text='Update Price',
    command=updatePrice
)

saveJsonButton.pack(expand=True)
loadJsonButton.pack(expand=True) # ffffff
addComponentButton.pack(expand=True)
sortPriceButton.pack(expand=True)
updatePriceButton.pack(expand=True)

root.mainloop() #