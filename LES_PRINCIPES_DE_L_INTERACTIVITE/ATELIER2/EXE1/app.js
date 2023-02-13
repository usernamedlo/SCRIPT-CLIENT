// exercice_capture_1.html
// Créez un simple lien et faites en sorte que lorsque 
// l'on clique dessus, faites un console.log avec comme 
// message: "Vous avez cliqué sur le lien !!!"
// Le gestionnaire doit se trouver DANS la balise HTML


// document.getElementById("link").onclick = function() {
//     alert("Vous avez cliqué sur le lien !!!");    
// }

document.querySelector("div a").onclick = function() {
    alert("Vous avez cliqué sur le lien !!!");    
}