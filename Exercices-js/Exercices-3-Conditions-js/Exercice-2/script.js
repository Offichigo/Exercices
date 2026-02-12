function nameage(name, age) {
  if (age < 17) {
    console.log(name + " n'a pas l'âge pour conduire ");
  } else {
    console.log(name + " peut conduire.");
  }
}
nameage("Mathieu", 22);
nameage("Léa", 15);
nameage("Jean", 17);
nameage("Gertrude", 2);
