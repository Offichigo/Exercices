// Consignes : Implémentez les fonctions suivantes :

//     Calculer la moyenne de chaque étudiant·e

const students = {
  A001: {
    id: "A001",
    name: "Alice Martin",
    age: 22,
    major: "Computer Science",
    grades: [14, 16, 12, 18, 15],
    absences: 3,
    courses: ["JavaScript", "Algorithms", "Database"],
  },
  A002: {
    id: "A002",
    name: "Bob Dupont",
    age: 24,
    major: "Mathematics",
    grades: [11, 9, 15, 8, 13],
    absences: 7,
    courses: ["Calculus", "Statistics", "Algebra"],
  },
  A003: {
    id: "A003",
    name: "Claire Leroy",
    age: 21,
    major: "Computer Science",
    grades: [17, 19, 16, 18, 20],
    absences: 1,
    courses: ["JavaScript", "Web Development", "Data Structures"],
  },
  A004: {
    id: "A004",
    name: "David Moreau",
    age: 23,
    major: "Physics",
    grades: [12, 14, 11, 10, 13],
    absences: 5,
    courses: ["Mechanics", "Quantum Physics", "Thermodynamics"],
  },
  A005: {
    id: "A005",
    name: "Emma Bernard",
    age: 22,
    major: "Computer Science",
    grades: [15, 17, 16, 14, 19],
    absences: 2,
    courses: ["JavaScript", "Networks", "Security"],
  },
};
//Extraire les moyenne de chaque étudiant
//Faire une fonction qui calcule la moyenne d'un tableau
//récupérer notes les additionner et le résultat les diviser en fonction du nombre de note mettre .length
//renvoyer résultat des moyenne de chaque élève

const liststudent = Object.values(students);

liststudent.forEach((student) => {
  console.log(student.grades);
  calcAverage(student.grades);
});

function calcAverage(gradesarray) {
  let sum = 0;
  const gradeslength = gradesarray.length;
  for (let position = 0; position < gradeslength; position++) {
    sum = sum + gradesarray[position];
  }
  console.log(sum / gradeslength);
}
//Trouver les étudiant·es d'une filière donnée
//Filtrer les étudiants par major, extraire les étudiant et leur major
function listStudentMajor(liststudent, namemajor) {
  let studentComputerScience = [];
  liststudent.forEach((student) => {
    if (student.major === namemajor) {
      studentComputerScience.push(student.name);
    }
  });
  return studentComputerScience;
}
console.log(listStudentMajor(liststudent, "Computer Science"));
// function studentFilter(studentmajor) {
//   for (let position = 0; position < Object.values(students); position++) {
//     if (studentmajor===) {
//       console.log("oua");
//     }
//     Identifier l'étudiante avec la meilleure moyenne
//     Statistiques par filière (moyenne des moyennes, taux d'absentéisme)
//     Ajouter une nouvelle note à un étudiante
