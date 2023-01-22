const statusCodes = {
    1: "Commande en attente",
    2: "Commande en cours",
    3: "Livraison en cours",
    4: "Commande livrée"
};

const status = Number(window.prompt("Entrez un nombre"));
const message = statusCodes[status] || "Problème avec la commande";
document.write(message);