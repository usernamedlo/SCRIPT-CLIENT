const couleurs = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "black", "grey"];

for (let i = 0; i < couleurs.length; i++) {
    document.write(`<li style="color:${couleurs[i]}">${couleurs[i]}</li>`)
}

document.write("<hr>");

for (const couleur of couleurs) {
    document.write(`<li style="color:${couleur}">${couleur}</li>`)
}

document.write("<hr>");

couleurs.forEach(couleur => {
    document.write(`<li style="color:${couleur}">${couleur}</li>`)
});