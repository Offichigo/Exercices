//Faire disparaitre ppnone remplacer pp au clique du bouton
//Récupérer l'img ppnone
const ppnone = document.querySelector(".ppnone");
//Récupérer l'img pp
const pp = document.querySelector(".pp");
//Récupérer button switch
const button = document.querySelector("#switch");
// On écoute le clique du bouton
button.addEventListener("click", () => {
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
