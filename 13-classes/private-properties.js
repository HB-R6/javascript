class UsersList {
  #users;
  #currentIndex;

  constructor(users) {
    this.#users = users;
    this.#currentIndex = 0;
  }

  get current() {
    return this.#users[this.#currentIndex];
  }
}

const list = new UsersList(["Philip", "Aaron", "Travis", "Lilly"]);
console.log(list.current); // Philip
