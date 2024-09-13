const sapin = (height) => {
  // 1 - initialisation du sapin : chaîne vide
  let tree = "";

  // 2 - alimenter la chaîne tree : concaténer de nouvelles lignes
  for (let i = 0; i < height; i++) {
    // Calcul du nombre d'espaces nécessaires
    const spaces = " ".repeat(height - i - 1);
    // Calcul du nombre d'étoiles nécessaires
    const stars = "*".repeat(i * 2 + 1);
    // Construction de la ligne et concaténation avec le tree existant
    tree += `${spaces}${stars}\n`;
  }

  // 3 - une fois alimentée de toutes les lignes, retour
  return tree;
};

console.log(sapin(3));
console.log(sapin(5));
console.log(sapin(15));
