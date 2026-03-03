const button = document.querySelector("button");
const titre = document.querySelector("h1");
const list = document.querySelector("li");
button.addEventListener("click", () => {
  titre.innerText = "Prout !";
  list.innerText = "Prout !";
});
const buttonSwitchColor = document.querySelector("#switch");
buttonSwitchColor.addEventListener("click", () => {
  //   if (buttonSwitchColor.style.color === "black") {
  //     buttonSwitchColor.style.color = "pink";
  //   } else {
  //     buttonSwitchColor.style.color = "black";
  //   }

  switch (buttonSwitchColor.style.color) {
    case "black":
      buttonSwitchColor.style.color = "pink";
      break;
    case "pink":
      buttonSwitchColor.style.color = "blue";
      break;
    case "blue":
      buttonSwitchColor.style.color = "green";
      break;
    case "green":
      buttonSwitchColor.style.color = "purple";
      break;
    default:
      buttonSwitchColor.style.color = "black";
  }
});

// EXERCICES
// Crée une liste HTML (ul).
// Avec JavaScript :
// sélectionne la liste
// ajoute un nouvel élément
// (li) au clic sur un bouton
// Crée un bouton.
// Avec Javascript :
// Ajouter un event listener
// sur le clic
// À chaque clic, change la
// couleur du bouton
