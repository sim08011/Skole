import requests
import json
import os

url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=2&lat=59.103515&lon=9.562148"
headers = {'User-Agent': 'Osten'}

# Vet ikke hvorfor jeg trenger dette
script_dir = os.path.dirname(os.path.abspath(__file__))
filepath = os.path.join(script_dir, "forecast.json")

result = requests.get(url, headers=headers)

print(f"Statuskode: {result.status_code}")

if result.status_code == 200:
    data = result.json()
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=4)
        print(f"Dataen er lagret som {filepath}")
else:
    print("Feil i forespørselen. Dataen ble ikke lagret.")