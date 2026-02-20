//Faire disparaitre ppnone remplacer pp au clique du bouton
//Récupérer l'img ppnone
const ppnone = document.querySelector(".ppnone");
//Récupérer l'img pp
const pp = document.querySelector(".pp");

// On écoute le clique du bouton
ppnone.addEventListener("click", () => {
  ppnone.style.display = "none";
  pp.style.display = "block";
});
//Ajout du style css display none sur ppnone

// const logonav = document.querySelectorAll(".logonav");
// logonav.forEach((logo) => {
//   (logonav.addEventListener("mouseover"),
//     () => {
//       text.innerText = "Hello";
//     });
// });
//Récupérer le button pour passer de sombre claire à l'infini
// const button = document.querySelector("#switch");
