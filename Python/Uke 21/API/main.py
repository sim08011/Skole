
import requests as req

url = "http://numbersapi.com/8/"

resultat = req.get(url)

print(f"Statuskode: {resultat.status_code}")

print(resultat.text)