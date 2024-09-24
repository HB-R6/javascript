class User {
  banned = false;

  constructor(name) {
    this.name = name;
  }
}

const user = new User("Glenn");

console.log(user);

class Carousel {
  /**
   *
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.root = element;
    this.items = this.root.querySelectorAll(".item");
    this.size = this.items.length;
    this.currentSlide = 0;
  }

  next() {
    this.currentSlide++;
  }

  prev() {
    this.currentSlide--;
  }
}

const productsCarousel = new Carousel(document.querySelector("#products"));
const usersCarousel = new Carousel(document.querySelector("#users"));

console.log(productsCarousel); // Object { root: Element|null, currentSlide: 0 }
productsCarousel.next();
console.log(productsCarousel); // Object { root: Element|null, currentSlide: 1 }
console.log(usersCarousel);
