class fruit{

    constructor(peche, poire, pomme){
        this.peche = peche;
        this.poire = poire;
        this.pomme = pomme;
    }

    toString(){
        return "Pêches : " +this.peche + "\nPoires : " + this.poire + "\nPommes : " + this.pomme;
    }
}
const panier = {  // faire objet avec le panier
    pommes : 0,
    poires : 0,
    prunes : 0,
}
// déclarer mes constantes
let prixPomme = 11;
let prixPoire = 12;
let prixPeche = 10;
let nouveauPricePomme = 0;
let nouveauPricePoire = 0;
let nouveauPricePeche = 0;
let nouveauPrixTotal = 0;

function ajouterPomme(){
    let QtePomme = document.getElementById("nbPommes").value;
    nouveauPricePomme = prixPomme * QtePomme;
    nouveauPricePomme.innerText = +nouveauPricePomme + " $";
    document.querySelector("#totalFruit").textContent = nouveauPrixTotal;

}

function ajouterPoire(){
    prixPoire = prixPoire + nouveauPricePoire;
    prixPoire.innerText = +prixPoire + " $";
    document.querySelector("#nbPoires").textContent = prixPoire;

    // faire le total
    nouveauPrixTotal = nouveauPrixTotal + nouveauPricePoire;
    document.querySelector("#totalFruit").textContent = nouveauPrixTotal;
}


function ajouterPeche(){
    prixPeche = prixPeche + nouveauPricePeche;
    prixPeche.innerText = +prixPeche + " $";
    document.querySelector("#nbPeches").textContent = prixPeche;
    // faire le total
    nouveauPrixTotal = nouveauPrixTotal + nouveauPricePeche;
    document.querySelector("#totalFruit").textContent = nouveauPrixTotal;
}