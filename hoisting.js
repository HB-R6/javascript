const result = add(1, 2);
console.log(result);

// Hoisting : la déclaration de la fonction add
// sera remontée en haut de la portée globale,
// avant l'exécution du script.
// Donc, il est possible ici d'appeler la fonction add
// avant sa déclaration
function add(a, b) {
  return a + b;
}
