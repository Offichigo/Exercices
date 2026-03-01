//KATA 5 : Objets – "Gestion d'une bibliothèque”
//   Objectif pédagogique :
//   Manipuler des objets, parcourir leurs propriétés, et modéliser des relations simples.
//   Énoncé :
//   Tu créees un petit système de gestion de livres. Chaque livre a : titre, auteur, année, genre, nombreDePages.
//   Crée une fonction qui :
// Ajoute un livre à la bibliothèque
// Récupère tous les livres d'un auteur
// Filtre les livres par genre
// Calcule le nombre total de pages
// `    Exemples :

const library = {
  books: [
    {
      title: "1984",
      author: "Orwell",
      year: 1949,
      genre: "Fiction",
      pages: 328,
    },
    {
      title: "Fondation",
      author: "Asimov",
      year: 1951,
      genre: "SF",
      pages: 255,
    },
  ],
};
function addBook(library, book) {
  library.books.push(book);
}
//ajout function qui permet ajouter un livre à la library
//library et un array avec des objets
//ajouter avec .push
//les 2 paramètres à définir
addBook(library, {
  title: "Dune",
  author: "Herbert",
  year: 1965,
  genre: "SF",
  pages: 688,
});

function getBooksByAuthor(library, serchAuthor) {
  return library.books.filter((book) => book.author === serchAuthor);
}
getBooksByAuthor(library, "Orwell");

function getBooksByGenre(library, searchGenre) {
  return library.books.filter((book) => book.genre === searchGenre);
}

// / Récupère tous les livres d'un auteur

// // library.books.length === 3

// getBooksByAuthor(library, "Orwell");
// [{ title: "1984", ... }]

console.log(getBooksByGenre(library, "SF"));
// [{ title: "Fondation", ... }, { title: "Dune", ... }]

// getTotalPages(library);
// 1271
