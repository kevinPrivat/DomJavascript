const liste = document.getElementById('container'); //getElementById: récupérer les informations d'une balise identifiée par son id.
console.log(container.firstElementChild.textContent);//firstElementChild: premier élément enfant.

console.log("----------------------------------");


/*-----------Premiere méthode-----------*/
const liPremiereMethode = document.querySelector('ul'); //querySelector: retourne le premier Element dans le document correspondant au sélecteur.
console.log(liPremiereMethode.firstElementChild.innerHTML);//innerHTML: afficher le texte HTML.

/*-----------Deuxieme méthode-----------*/
const liDeuxiemeMethode = document.querySelector('li');
console.log(liDeuxiemeMethode.innerHTML);

/*----------Troisieme méthode-----------*/
const liTroisemeMethode = document.body.querySelector('li');
console.log(liDeuxiemeMethode.innerHTML);

console.log("----------------------------------");


/*--------------- Récupérer le HTML de la dernière balise <li>-------------------------*/
const liDernierElement = document.querySelector('ul');
console.log(liDernierElement.lastElementChild.innerHTML);//lastElementChild: dernier élément enfant.

console.log("----------------------------------");


/*------------------ Récupérer le HTML de la troisième balise <li>----------------------*/
console.log(liPremiereMethode.children[2].innerHTML);//children: renvoie une collection d'éléments enfants d'un élément.

console.log("----------------------------------");


/*------------------- Récupérer le HTML du parent de la balise <ul>---------------------*/
const divMenu = document.getElementById('menu');
console.log(menu.innerHTML);

console.log("----------------------------------");


/*-------------------- Récupérer le HTML du parent de la quatrième balise <li>--------------------*/
const liTout = document.querySelectorAll('ul');//querySelectorAll: retourne tous les éléments au sélecteur, dans l'ordre dans lequel ils apparaissent dans du document
console.log(liPremiereMethode.innerHTML);

console.log("----------------------------------");


/*------------------- Quand la souris survole <ul>, tout le texte passe en rouge, sinon en noir.---------------------*/

menu.addEventListener("mouseenter", function (event) {
    event.target.style.color = "red";})
  

    menu.addEventListener("mouseleave", function (event) {
        event.target.style.color = "black";})

