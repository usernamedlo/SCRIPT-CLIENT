// exercice_capture_2.html
// Créez un input de type button avec un id 'monBouton' 
// et faites en sorte que quand on clique dessus, 
// il y a un alert avec comme message
//     "Vous avez cliqué sur le bouton !"
// Le gestionnaire doit se trouver dans un script interne en bas du body

document.getElementById("myButton").onclick = function(){
    alert("Vous avez cliqué sur le bouton !");
}