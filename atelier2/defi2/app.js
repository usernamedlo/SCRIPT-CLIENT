/*
Crée un fct convertDogAgeToHumanAge() qui reprend 1 argument: âge du chien
et qui retourne l'âge du chien en âge humain (*7)

Et écris dans le document "Votre chien a xxx ans humains."

Bonus 1: Crée un second argument qui reprend le taux de conversion (7)
Bonus 2: Fais en sorte qu'on ne se soucie pas de l'ordre des arguments
  */
 
const convertDogAgeToHumanAge = ({dogAge = 0, conversion = 7} = {}) => 
    `Votre chien a ${dogAge} ans, ce qui correspond à ${dogAge * conversion} ans humains.`;

console.log(convertDogAgeToHumanAge({dogAge: 5, conversion: 7}));
console.log(convertDogAgeToHumanAge({dogAge: 10, conversion: 7}));