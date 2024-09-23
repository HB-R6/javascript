const product = {
  name: "Mon product",

  describe() {
    console.log(`Je suis le produit ${this.name}`);
  },
};

const plate = {
  name: "Assiette",
  diameter: 28,
};

const book = {
  name: "Les Furtifs",
  width: 18,
  height: 23,
};

const unknownProduct = {
  __proto__: product,
};

plate.__proto__ = product;
book.__proto__ = product;

console.log(plate, book);
console.log(unknownProduct);
console.log(unknownProduct.name); // Mon product

plate.describe();
book.describe();
