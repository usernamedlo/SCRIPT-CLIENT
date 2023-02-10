/*
	Crée une fonction ecrisLeStatut qui prend 4 arguments:
        - nombre d'enfants 
        - Nom du/de la partenaire 
        - La ville 
        - Le métier
    Et qui ecrit dans le document
    "Votre métier est xxx dans la ville de xxx, vous vivez avec xxx et avez xxx enfant(s)."

    Appelle 2 fois la fonction avec des valeurs différentes

    Bonus 1: fais pareil avec un return
    Bonus 2: fais en sorte qu'on puisse envoyer les valeurs dans n'importe quel ordre
*/

const ecrisLeStatut = ({ children = 0, partner = "", city = "", profession = "" } = {}) => 
  `Votre métier est ${profession} dans la ville de ${city}, vous vivez avec ${partner} et avez ${children} enfant(s).`;
  
  console.log(ecrisLeStatut({ children: 2, city: "Paris", profession: "ingénieur", partner: "Marie" }));
  console.log(ecrisLeStatut({ children: 0, partner: "John", city: "New York", profession: "avocat" }));
  