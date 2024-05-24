import requests

headers = {'User-Agent': 'Osten'}


urlNuuk = "https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=2&lat=64.173903&lon=-51.734690"
resultNuuk = requests.get(urlNuuk, headers=headers)
dataNuuk = resultNuuk.json()

urlStathelle = "https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=2&lat=59.042150&lon=9.697342"
resultStathelle = requests.get(urlStathelle, headers=headers)
dataStathelle = resultStathelle.json()

# Hent ut temperaturen 
for i in range(0,24):
    temperatureNuuk = dataNuuk['properties']['timeseries'][i]['data']['instant']['details']['air_temperature']
    temperatureStathelle = dataStathelle['properties']['timeseries'][i]['data']['instant']['details']['air_temperature']
    print(f"Temperaturen kl {i}:00 i Nuuk er: {temperatureNuuk}")
    print(f"Temperaturen kl {i}:00 i Stathelle er: {temperatureStathelle}")

