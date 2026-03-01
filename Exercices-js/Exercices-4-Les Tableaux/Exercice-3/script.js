// Crée une fonction qui construit un objet profil à partir d'informations utilisateur.
// Si l'email n'est pas fourni, génère-le automatiquement au format :
// prenom.nom@exemple.com
// Objectif pédagogique :
// Créer et manipuler des objets, accéder à leurs propriétés.
// Énoncé :
// Crée une fonction qui construit un objet profil à partir d'informations utilisateur. Si l'email n'est pas fourni,
// génère-le automatiquement au format : prenom.nom@exemple.com.
// Exemples :
// createProfil("Marie", "Durand", 28)
// → { lastname: "Marie", name: "Durand", age: 28, mail: "marie.durand@exemple.com" }
// createProfil("Jean", "Martin", 35, "jm@perso.fr")
// → { lastname: "Jean", name: "Martin", age: 35, mail: "jm@perso.fr" }
// Critères de réussite :
//     Retourne un objet avec 4 propriétés
//     Génère l'email en minuscules si non fourni
//     Gère les noms composés (remplace les espaces par des points)
// Code starter :
function createProfil(prenom, nom, age, mail) {
  let profil = {
    lastName: "",
    firstName: "",
    age: 0,
    mail: "",
  };

  console.log(profil);
}
createProfil();
