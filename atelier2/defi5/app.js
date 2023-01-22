/*
    Crée une fct qui converti une température Celsius en Fahrenheit [(x°C * 9/5) + 32]

    Demande à l'utilisateur une température en Celsius et affiche sa température en Fahrenheit
    "<p>Votre température de x°C équivaut à y°F</p>"
  */

const convertCelsiusToFahrenheit = ({celsius = 0} = {}) => 
    `<p>Votre température de ${celsius}°C équivaut à ${(celsius * 9/5) + 32}°F</p>`;

document.write(convertCelsiusToFahrenheit({celsius: 0}));