const x = {
    nouveauPricePomme : 0,
    nouveauPricePoire : 0,
    nouveauPricePeche : 0,
    QtePomme : 0,
    QtePeche : 0,
    QtePoire : 0,
}
class fruit{
    pomme = 0;
    poire = 0;
    peche = 0;
    constructor(peche, poire, pomme){
        this.peche = peche;
        this.poire = poire;
        this.pomme = pomme;
    }
    toString(){
        return "Pêches : " +this.peche + "\nPoires : " + this.poire + "\nPommes : " + this.pomme;
    }
    AjouterTotal(){
        let prixTotal = x.nouveauPricePeche + x.nouveauPricePoire + x.nouveauPricePomme;
        document.querySelector("#total").textContent = +prixTotal + " $";
    }
}
class Panier{
    prixtotal = 0;
    constructor(qte, prix, prixtotal){
        this.qte = qte;
        this.prix = prix;
        this.prixtotal = prixtotal;
    }
    toString(){
        return "Quantité : " +this.qte + "\nPrix : " + this.prix + "\nPrix total : " + this.prixtotal;
    }
    Afficher(fruit){
        if (fruit === "pomme"){
            // this.prixtotal.innerText = +this.prixtotal + " $";
            return document.querySelector(".totalPomme").textContent = +this.prixtotal + " $";
        }
        else if(fruit === "peche"){
            // this.prixtotal.innerText = +this.prixtotal + " $";
            return document.querySelector(".totalPeche").textContent = +this.prixtotal + " $";
        }
        else{
            // this.prixtotal.innerText = +this.prixtotal + " $";
            return document.querySelector(".totalPoire").textContent = +this.prixtotal + " $";
        }
    }
    UpdateQte(fruit){
        if (fruit === "pomme"){
            x.QtePomme = x.QtePomme + this.qte;
        }
        else if(fruit === "peche"){
            x.QtePeche = x.QtePeche + this.qte;
        }
        else{
            x.QtePoire = x.QtePoire + this.qte;
        }
    }
}
const Total = new fruit(x.nouveauPricePeche, x.nouveauPricePoire, x.nouveauPricePomme);

function ajouterPomme(){
    // let nouveauPricePomme = 0;
    let QtePomme = document.getElementById("nbPommes").value;
    let prixPomme = 11;
    //let prixPomme = document.getElementById("prixPommes").value;
    x.nouveauPricePomme = prixPomme * QtePomme;
    const Pomme = new Panier(QtePomme, prixPomme, x.nouveauPricePomme);
    Pomme.Afficher("pomme");
    Pomme.UpdateQte("pomme")
    Total.AjouterTotal();

}

function ajouterPoire(){
    // let nouveauPricePoire = 0;
    let QtePoire = document.getElementById("nbPoires").value;
    let prixPoire = 12;
    //let prixPoire = document.getElementById("prixPoires").value;
    x.nouveauPricePoire = prixPoire * QtePoire;
    const Poire = new Panier(QtePoire, prixPoire, x.nouveauPricePoire);
    Poire.Afficher("poire");
    Poire.UpdateQte("poire")
    Total.AjouterTotal();
}

function ajouterPeche(){
    // let nouveauPricePeche = 0;
    let QtePeche= document.getElementById("nbPeches").value;
    let prixPeche = 10;
    //let prixPeche = document.getElementById("prixPeches").value;
    x.nouveauPricePeche = prixPeche * QtePeche;
    const Peche = new Panier(QtePeche, prixPeche, x.nouveauPricePeche);
    Peche.Afficher("peche");
    Peche.UpdateQte("peche")
    Total.AjouterTotal();
}
// fonction qui fonctionne pas
function valider(){
    /*let element = document.getElementById("conditions").value;
    let submit = document.getElementById("submit").value;
    if (element === true){
        submit = required;
    }
    else {
        submit = disabled;
    }*/
    // fonctionne pas
    // let prixTotal = document.getElementById("total").value;
    let prixTotal = document.forms[0]["total"].value;
    let qteTotal = x.QtePeche + x.QtePoire + x.QtePomme;
    if (prixTotal > 20 && qteTotal < 25){
        document.getElementById("erreur").setAttribute("class", "invisible");
        return true;
    }
    else{
        document.getElementById("erreur").setAttribute("class", "error");
        return false;
    }
}