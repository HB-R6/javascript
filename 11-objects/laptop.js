const laptop = {
  color: "black",
  year: 2018,
};

const modernLaptop = laptop;

console.log("--- Modification d'une même référence ---");
console.log(laptop);
console.log(modernLaptop);

(function () {
  const laptop = {
    color: "black",
    year: 2018,
  };

  const newLaptop = { ...laptop };

  newLaptop.year = 2024;

  console.log("--- Modification d'une copie de l'objet ---");
  console.log(laptop);
  console.log(newLaptop);
})();
