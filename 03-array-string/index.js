// string
const firstname = "Jennie";

// Possibilité d'accéder à un caractère avec son index (comme dans un tableau)
console.log(firstname[0]);
// Transformation de la chaîne en tableau
console.log(Array.from(firstname));
console.log([...firstname]);

// Depuis un tableau, possibilité de modifier la valeur qui se trouve derrière un index
// (ça n'est pas possible depuis la string directement)
const arrayFirstname = [...firstname];
arrayFirstname[1] = "i";
console.log(arrayFirstname);
