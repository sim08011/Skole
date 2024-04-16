import csv
import json
import tkinter as tk
from tkinter import ttk
from tkinter import filedialog as fd
from tkinter.messagebox import showinfo

# Importerer nødvendige biblioteker og moduler
# csv: For å håndtere CSV-filer
# json: For å håndtere JSON-filer
# tkinter og ttk: GUI-moduler for Python
# filedialog: Modul for åpning og lagring av filer i dialogboksen
# messagebox: Modul for å vise beskjeder til brukeren

def lagJson(): # Funksjon som konverterer csv-fil til json-fil
    filTyper = (
        ('CSV-Fil', '*.csv'), # Definerer filtyper som kan velges
    )
    
    filNavn = fd.askopenfilename(
        title='Åpne fil', # Tittel på dialogboksen for åpning av filer
        initialdir='/', # Startmappe for velging av fil
        filetypes=filTyper # Spesifiserer tillatte filtyper som kan velges
    )
    
    jsonFil = r'fil.json' # Navnet på JSON-filen som skal opprettes
    csvFil = filNavn # Banen til den valgte CSV-filen
    
    data = {} # Lager en tom dictionary som skal inneholde dataene fra CSV
    
    with open(csvFil) as csvf:
        leser = csv.DictReader(csvf) # Leser CSV-filen som en dictionary
        for rader in leser:
            key = rader['a-nr'] # Bruker 'a-nr' som nøkkelverdien i dictionaryen
            data[key] = rader # Legger til hver rad i CSV som en verdi i dictionaryen
    
    with open(jsonFil, 'w') as jsonf:
        jsonf.write(json.dumps(data, indent=4)) # Konverterer dataene til JSON og skriver det til filen
    
    showinfo(
        title='Valgt fil',
        message="CSV-fil konvertert til fil.json." # Viser en melding til brukeren når konverteringen er fullført
    )

root = tk.Tk() # Oppretter et vindu
root.title('Tkinter Open File Dialog') # Setter tittelen på vinduet
root.geometry('300x150') # Setter størrelsen på vinduet

lagJsonKnapp = ttk.Button(
    root,
    text='Lag JSON',
    command=lagJson
) # Knapp som kaller 'lagJson' funksjonen når den klikkes

lagJsonKnapp.pack(expand=True) # Plasserer knappen i vinduet

root.mainloop() # Starter GUI