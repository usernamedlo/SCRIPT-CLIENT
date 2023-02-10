/*
    Crée 2 fcts qui calculent 
        - la circonférence d'un cercle à partir de son rayon
        2 * Pi * Rayon (recherche pour trouver comment on écrit Pi en JS)
        - l'aire d'un cercle à partir de son rayon
        Pi Rayon au carré (comment en JS on fait un carré)

    On leur envoie juste le rayon en argument...
    et on affiche 2 messages:
    "<p>La circonférence de votre cercle est de ...</p>"
    "<p>L'aire de votre cercle est de ...</p>"
*/

const calculateCircumference = ({radius = 0} = {}) => 
    `<p>La circonférence de votre cercle est de ${(2 * Math.PI * radius).toFixed(1)}.</p>`;

const calculateArea = ({radius = 0} = {}) => 
    `<p>L'aire de votre cercle est de ${(Math.PI * Math.pow(radius, 2)).toFixed(1)}.</p>`;

document.write(`${calculateCircumference({radius: 5})} ${calculateArea({radius: 5})}`);