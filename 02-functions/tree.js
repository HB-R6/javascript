// --- PIERRE ---
// function sapin(nbLine) {
//   const star = "*";
//   const space = " ";
//   let nbSpace = nbLine;
//   let nbStar = 1;
//   for (let i = 0; i < nbLine; i++) {
//     console.log(space.repeat(nbSpace), star.repeat(nbStar));
//     nbSpace--;
//     nbStar += 2;
//   }
// }
// --- MAK ---
// function sapin(nbr) {
//   for (let i = 1; i <= nbr; i++) {
//     console.log(" ".repeat(nbr - i) + "*".repeat(i * 2 - 1));
//   }
// }
// --- Départ à 0 ---
// 3 lignes :
// - 1ère ligne : 2 espaces et 1 étoile 3 - 0 - 1 = 2 / 0 * 2 + 1 = 1
// - 2ème ligne : 1 espace et 3 étoiles 3 - 1 - 1 = 1 / 1 * 2 + 1 = 3
// - 3ème ligne : 0 espace et 5 étoiles 3 - 2 - 1 = 0 / 2 * 2 + 1 = 5
function sapin(nbr) {
  for (let i = 0; i < nbr; i++) {
    console.log(" ".repeat(nbr - i - 1) + "*".repeat(i * 2 + 1));
  }
}

console.log(sapin(3));
console.log(sapin(5));
console.log(sapin(15));
