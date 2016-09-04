/* 
OpenClassroom :  Dynamisez vos sites web avec JavaScript ! 
TP 01 : Convertir un nombre en toutes lettres
*/


console.log("Bienvenue dans ce TP numéro 1 !");
var nbrUtilisateur = prompt("Entrez un nombre en 0 et 999");

// On teste si l'utilisateur a bien entré un nombre et si le nombre est bien dans la fourchette 0 - 999

    var testNumeric = parseInt(nbrUtilisateur); // Contient au final la valeur « NaN »
    if (isNaN(testNumeric) || testNumeric <0 || testNumeric> 999 ){
         console.log("Alerte !!! Votre entrée n'est pas un nombre ou n'est pas dans la fourchette 0 - 999 ");
        var nbrUtilisateur = prompt("Entrez un nombre en 0 et 999");
       
    }
else{
    console.log("Votre entrée est un nombre correct ");
}

        

var tailleNbr =  nbrUtilisateur.length;
console.log("La taille de votre nombre est : " + tailleNbr);

// création d'un tableau à trois entrées

console.log("Votre nombre est : " + nbrUtilisateur);
