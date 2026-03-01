// function sayHello(firstName, hour) {
//   let message = "Bonjour ";
//   let message2 = "Bonsoir ";
//   if (hour >= 18) {
//     console.log(`${message2}${firstName} !`);
//   } else {
//     console.log(`${message}${firstName} !`);
//   }
// }
// sayHello(`Beyonce`, 11);
// sayHello(`Beyonce`, 18);
// sayHello(`Beyonce`, 17);
const givename = prompt("donne ton prénom");

function sayHello2(nameUser) {
  let message = "Bonjour ";
  document.querySelector("h1").innerText = `${message} ${nameUser} ! `;
}
sayHello2(givename);
