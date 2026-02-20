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
const liststudent = Object.values(students);

liststudent.forEach((student) => {
  // console.log(student.grades);
  calcAverage(student.grades);
});

function calcAverage(gradesarray) {
  let sum = 0;
  const gradeslength = gradesarray.length;
  for (let position = 0; position < gradeslength; position++) {
    sum = sum + gradesarray[position];
  }

  return sum / gradeslength;
}
//Trouver les étudiant·es d'une filière donnée
function listStudentMajor(liststudent, namemajor) {
  let studentComputerScience = [];
  liststudent.forEach((student) => {
    if (student.major === namemajor) {
      studentComputerScience.push(student);
    }
  });
  return studentComputerScience;
}
// console.log(listStudentMajor(liststudent, "Computer Science"));
//Identifier l'étudiante avec la meilleure moyenne

function findbestStudent(liststudent) {
  let beststudent = "";
  let bestAverage = 0;
  liststudent.forEach((student) => {
    const average = calcAverage(student.grades);
    // console.log(average);
    if (bestAverage < average) {
      bestAverage = average;
      beststudent = student.name;
    }
  });
  return [beststudent, bestAverage];
}
findbestStudent(liststudent);
// console.log(findbestStudent(liststudent));
//     Statistiques par filière (moyenne des moyennes, taux d'absentéisme)

function statisticsMajor(dataStudent) {
  let listmajor = [];
  let resultByMajor = [];
  dataStudent.forEach((student) => {
    if (!listmajor.includes(student.major)) {
      listmajor.push(student.major);
    }
  });
  listmajor.forEach((major) => {
    const listStudentbyMajor = listStudentMajor(dataStudent, major);
    let arrayAveragebyMajor = [];
    let arrayAbsence = [];
    listStudentbyMajor.forEach((student) => {
      arrayAveragebyMajor.push(calcAverage(student.grades));

      listStudentbyMajor.forEach((student) => {
        arrayAbsence.push(student.absences);
      });
    });
    resultByMajor.push([
      major,
      calcAverage(arrayAveragebyMajor),
      calcAverage(arrayAbsence),
    ]);
  });
  return resultByMajor;
}
console.log(statisticsMajor(liststudent));
//     Ajouter une nouvelle note à un étudiante
students.A002.grades.push(19);
console.log(students.A002.grades);
