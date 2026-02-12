function numbertosquare(x) {
  const resultat = x * x;
  console.log(resultat);
  return resultat;
}

function times10(a) {
  const resultat = a * 10;
  console.log(resultat);
  return resultat;
}

const functionresultat = numbertosquare(3);

let resultat = times10(functionresultat);

let number = prompt("Entrez un nombre :");
const timesnumber = numbertosquare(number);
times10(timesnumber);
