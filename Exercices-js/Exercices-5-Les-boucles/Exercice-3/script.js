// Nous souhaitons créer un décompte.
//     Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
//     Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

let give = prompt("Donne un nombre entre 0 et 10");
give = parseInt(give);

if (give >= 0 && give <= 10) {
  showCountdown(give);
} else {
  console.log("Relis la consigne!");
}

//faire une condition pour tester que give est bien un nombre sinon n'appelle pas la fonction

function showCountdown(countdown) {
  for (let position = countdown; position > -1; position--) {
    console.log("Count: ", position);
  }
}

//Fonction montre dans la console d'un décompte à partir du numéro donné par l'utilisateur en paramètre
//stocké le résultat du prompt dans give
//apellé la fonction en donnant le paramètre
