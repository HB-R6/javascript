class User {
  #name;
  banned = false;

  constructor(name) {
    this.#name = name;
  }
}

class Employee extends User {
  #empNumber;

  constructor(name, empNumber) {
    super(name); // Appel au constructeur parent
    this.#empNumber = empNumber;
  }

  get number() {
    return this.#empNumber;
  }
}

const clerk = new Employee("Georgia", "4sbQ6p");
console.log(clerk);
console.log(clerk.number);
console.log(clerk.__proto__);
