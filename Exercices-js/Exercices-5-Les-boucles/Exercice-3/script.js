// Nous souhaitons créer un décompte.

//     Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
//     Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).

// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

function numbers(countdown) {
  let give = prompt("Donne un nombre entre 0 et 10");
  for (let position = 10; position > -1; position--) {
    console.log("Count: ", position);
    if (give > 4) {
      console.log();
    }
  }
}
numbers(prompt);
