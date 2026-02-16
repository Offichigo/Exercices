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

// ```;

function totalCaluculated(panier) {
  let pricebasket = 0;
  const lengthbasket = panier.length;
  for (let position = 0; position < lengthbasket; position++) {
    console.log(panier[position]);
  }
  return pricebasket;
}

const basket = [
  { name: "Pain", price: 1.5, quantity: 2 },
  { name: "Lait", price: 0.99, quantity: 1 },
  { name: "Œufs", price: 3.2, quantity: 3 },
];

totalCaluculated(basket);
