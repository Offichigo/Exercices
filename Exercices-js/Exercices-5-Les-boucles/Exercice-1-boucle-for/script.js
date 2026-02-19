// Nous souhaitons créer des compteur.

//     Écris une boucle FOR qui affiche dans la console tous les nombres de 0 à 99.

for (let position = 0; position < 100; position++) {
  console.log("Count: ", position);
}
//     Écris le même compteur avec une boucle WHILE.

// let count = 0;

// while (count < 100) {
//   console.log("Count: " + count);
//   count++;
// }

//     Réflexion : Quel type de boucle te semble le plus approprié pour cette application ?
//La boucle for me semble plus approprié, plus simple et moins de risque de créér une boucle infini

//     Ecris un compteur qui affiche tous les nombres de 50 à 99 (avec la boucle de ton choix).
for (let position = 50; position < 100; position++) {
  console.log("Count: ", position);
}
//     Ecris un compteur qui affiche tous les nombre de 49 à 1 (avec la boucle de ton choix).
//j'ai testé les deux méthodes pout m'entrainer
//boucle while
let count = 50;

while (count > 0) {
  console.log(count);
  count--;
}
//boucle for
for (let position = 49; position > 0; position--) {
  console.log("Count: ", position);
}
