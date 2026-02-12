sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

function sendMessage(message, fromName, toName) {
  console.log(
    "From : " + fromName + " to : " + toName + " Message : " + message,
  );
}
sendMessage("Super on se voit mardi !", "Linda", "Marc");

let contactName = "Jean";
const myName = "Ada";
const myMessage = "Je t'apprends à coder tes premières fonctions";

function newsendMessage(message, fromName, toName) {
  console.log(
    "From : " + myName + " to : " + contactName + " Message : " + myMessage,
  );
}
newsendMessage(myMessage, myName, contactName);
