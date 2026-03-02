// Étape 1
//     Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur.
// (Attention tous les compilateurs en ligne ne permettent pas la prise d’input, prendre celui dans l’énoncé si besoin).
//     Stocker sa réponse dans une variable de type adéquat nommée givenNumber.
// Étape 2
// Pour le moment nous allons considérer que le nombre à deviner est 22.
//     Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin
//     Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
//     Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
//     Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.
//L’ordre dans lequel vous ferez vos conditions est important, le but est d’exécuter le moins de code possible.
//  Demandez-vous ce qu’il faut vérifier en premier.
//⚠️ Attention : le prompt() bloque l’exécution de la page et stoppe l’affichage du rendu.
//  Pour afficher des informations à la suite d’un prompt(), utilisez alert().
//Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.

const givenNumber = prompt("Donne un nombre : ");
function randomNumber(Number) {
  console.log(Number);
}
randomNumber();
