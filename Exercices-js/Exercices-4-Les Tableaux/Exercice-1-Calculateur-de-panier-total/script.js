// Crée une fonction qui calcule le montant total d'un panier d'achats (prix × quantité pour chaque article).

// Utiliser reduce() pour calculer une valeur unique à partir d'un tableau.

// Crée une fonction qui calcule le montant total d'un panier d'achats (prix × quantité pour chaque article).
// const basket = [
//   { name: "Pain", price: 1.5, quantity: 2 },
//   { name: "Lait", price: 0.99, quantity: 1 },
//   { name: "Œufs", price: 3.2, quantity: 3 },
// ];

// totalCaluculated(basket); // → 13.59
// ```

// Critères de réussite :

//     Utilise reduce()
//     Retourne un nombre arrondi à 2 décimales
//     Retourne 0 si le panier est vide

// Code starter :

// // ```;
// const basket = [
//   { name: "Pain", price: 1.5, quantity: 2 },
//   { name: "Lait", price: 0.99, quantity: 1 },
//   { name: "Œufs", price: 3.2, quantity: 3 },
// ];

// totalCaluculated(basket);

// function totalCaluculated(baskets) {
//   let pricebasket = 0;
//   const lengthbasket = baskets.length;
//   for (let position = 0; position < lengthbasket; position++) {
//     console.log(pricebasket);
//   }

//   return pricebasket;
// }//Exercice 1 branche Tableau JS Moodle :

//Problème : Crée une fonction qui calcule le montant total d'un panier d'achats :

//Utiliser reduce() pour calculer une valeur unique à partir d'un tableau.
//Crée une fonction qui calcule le montant total d'un panier d'achats (prix × quantité pour chaque article).

const basket = [
  { name: "Pain", price: 1.5, quantity: 2 },
  { name: "Lait", price: 0.99, quantity: 1 },
  { name: "Œufs", price: 3.2, quantity: 3 },
];

function totalCalculated(items) {
  // calculer le prix total pour chaque item -> retourner un array avec juste les prix
  // -> .map
  // basket = [3, 0.99, 9.6]
  if (items === []) {
    return 0;
  } else {
    const prices = items.map((item) => {
      return item.price * item.quantity;
    });
    // Additionner tout le tableau -> .reduce()
    const total = prices.reduce((accumulateur, price) => {
      return accumulateur + price;
    });
    return total.toFixed(2);
  }
}

console.log(totalCalculated(basket));

//Critères de réussite :

//Utilise reduce()
//Retourne un nombre arrondi à 2 décimales
//Retourne 0 si le panier est vide
