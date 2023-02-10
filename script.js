const x = {
    nouveauPricePomme : 0,
    nouveauPricePoire : 0,
    nouveauPricePeche : 0,
    PrixTotal : 0,
    QtePomme : 0,
    QtePeche : 0,
    QtePoire : 0,
    QteTotal : 0
}
class fruit{
    pomme = 0;
    poire = 0;
    peche = 0;
    constructor(peche = 0, poire = 0, pomme = 0){
        this.peche = peche;
        this.poire = poire;
        this.pomme = pomme;
    }
    ToString(){
        return "Total de pommes : " + this.pomme + "\nTotal de pêches : " + this.peche +
            "\nTotal de poires : " + this.poire;
    }
    AjouterTotal(){
        x.prixTotal = x.nouveauPricePeche + x.nouveauPricePoire + x.nouveauPricePomme;
        //document.querySelector("#totale").textContent = +prixTotal + " $";
        document.querySelector("#totale").textContent = +x.prixTotal;
    }
}
class Panier{
    prixtotal = 0;
    constructor(qte = 0, prix = 0, prixtotal = 0){
        this.qte = qte;
        this.prix = prix;
        this.prixtotal = prixtotal;
    }
    ToString(){
        return "La quantité est : " + this.qte + "Le prix est : " + this.prix +
            "Le prix total : " + this.prixtotal;
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
            x.QtePomme = this.qte;
        }
        else if(fruit === "peche"){
            x.QtePeche = this.qte;
        }
        else{
            x.QtePoire =  this.qte;
        }
    }
    UpdatePrix(){
         x.PrixTotal = x.PrixTotal + this.prix;
    }
    UpdateQteTotal(){
         x.QteTotal = x.QteTotal + this.qte;
    }
}
Total = new fruit(x.nouveauPricePeche, x.nouveauPricePoire, x.nouveauPricePomme);

function ajouterPomme(){
    // let nouveauPricePomme = 0;
    let QtePomme = document.getElementById("nbPommes").value;
    x.QtePomme = QtePomme;
    let prixPomme = 11;
    //let prixPomme = document.getElementById("prixPommes").value;
    x.nouveauPricePomme = prixPomme * QtePomme;
     Pomme = new Panier(x.QtePomme, prixPomme, x.nouveauPricePomme);
    Pomme.Afficher("pomme");
    Pomme.UpdatePrix();
    Total.AjouterTotal();
    //Pomme.UpdateQte("pomme")
    Pomme.UpdateQteTotal();
}

function ajouterPoire(){
    // let nouveauPricePoire = 0;
    let QtePoire = document.getElementById("nbPoires").value;
    x.QtePoire = QtePoire;
    let prixPoire = 12;
    //let prixPoire = document.getElementById("prixPoires").value;
    x.nouveauPricePoire = prixPoire * QtePoire;
    Poire = new Panier(x.QtePoire, prixPoire, x.nouveauPricePoire);  // regarder si le const fuck le program
    Poire.Afficher("poire");
    Poire.UpdatePrix();
    Total.AjouterTotal();
    //Poire.UpdateQte("poire")
    Poire.UpdateQteTotal();
}

function ajouterPeche(){
    // let nouveauPricePeche = 0;
    let QtePeche= document.getElementById("nbPeches").value;
    x.QtePeche = QtePeche;
    let prixPeche = 10;
    //let prixPeche = document.getElementById("prixPeches").value;
    x.nouveauPricePeche = prixPeche * QtePeche;
     Peche = new Panier(x.QtePeche, prixPeche, x.nouveauPricePeche);
    Peche.Afficher("peche");
    Peche.UpdatePrix();
    Total.AjouterTotal();
    //Peche.UpdateQte("peche")
    Peche.UpdateQteTotal();
}

// fonction qui fonctionne pas
function valider(){
    // quand la valeur à aller chercher n'est pas dans un input, ne pas mettre value mais innerText
    //let prixTotal = document.getElementById("totale")[0].innerText;
    //let prixTotal = document.querySelector("#totale").innerText;
    //let prixTotal = document.forms[0]["totale"].innerText;
    // const qteTotal = new Panier(x.QtePeche, x.QtePoire, x.QtePomme);
    /*let QtePeche = document.getElementById("nbPeches").value;
    let QtePoire = document.getElementById("nbPoires").value;
    let QtePomme = document.getElementById("nbPommes").value;
    let qteTotal = QtePeche + QtePoire + QtePomme;  // ca fonctionne pas*/
    if (x.PrixTotal >= 20 && x.QteTotal <= 25) {
        document.getElementById("erreur").setAttribute("class", "invisible");
        document.getElementById("erreur2").setAttribute("class", "invisible");
        return true;
    }
    else{
        if (x.PrixTotal <= 20){
            document.getElementById("erreur").setAttribute("class", "error");
        }
        else {
            document.getElementById("erreur").setAttribute("class", "invisible");
        }
        if (x.QteTotal >= 25){
            document.getElementById("erreur2").setAttribute("class", "error");
        }
        else{
            document.getElementById("erreur2").setAttribute("class", "invisible");
        }
        return false;
    }
}
function afficher(){
    document.writeln(Total.ToString());
    // pour inscrire les données dans la session
   // sessionStorage.setItem("nbPomme", document.getElementByID("nbPommes").value);
}

// fonction pas utile à cause le readonly fait toute la job
/*function able(){
    let element = document.getElementById("conditions").value;
    //let element = document.forms[0]["conditions"].value;
    //let submit = document.getElementById("submit").value;

    if (element === true){
        document.getElementById("submit").setAttribute("disabled", "true");
        return true;
    }
    else {
        document.getElementById("submit").setAttribute("disabled", "readonly");
        return false;
    }
}*/

/*
// récupéré les données dans l'url quand on utilise la méthod get dans le form
let data = location.search.substring(1); // trouve la location des données dans l'URL
document.write(data);
let tabDatas = data.split('&');
let nbPeches = tabDatas[0].split('=')[1];
document.write(nbPeches)

// récupérer les données de la session
let nbPommes = sessionStorage.getItem("nbPommes");
document.write(nbPommes);

document.writeln(); // cela sert à afficher des choses

let panier = sessionStorage.getItem("panier")
document.writeln(panier);
}*/
















