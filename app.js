///condition start (DOM) ::
const AddBtn = document.querySelector("button");
const RemoveBtn =document.querySelector(".btn-Remove");
const totalbtn = document.querySelector(".total");

let panier = document.querySelector(".logo");
let cartNumberElement = document.querySelector(".cart-number");
let prix = document.querySelector(".prix");



//fonction add to cart ::
let count = 0;
function ajouterOuPanier(){
    count += 1;
    cartNumberElement.textContent = count;



}
AddBtn.addEventListener("click" ,ajouterOuPanier );

///fonction calcule prix ::

let prixArticles = 0;
let quantite = 0 ;

function sommePrixTotal(prixUnitaire, quantite){
    const total = prixUnitaire * quantite;
    return total;

}

const sommeTotal = sommePrixTotal(prixArticles, quantite);


//function remove :::




