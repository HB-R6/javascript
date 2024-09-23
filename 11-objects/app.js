const user = {
  name: "Juan",
  age: 25,
};

console.log(user);

const emptyObj = {};

console.log(emptyObj);

const admin = {
  name: "Jared",
  introduce() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log(admin.introduce);

const apartments = {
  surfaces: [39, 17, 91, 81, 33, 111, 37, 57],
  get widest() {
    return Math.max(...this.surfaces);
  },
  get first() {
    return this.surfaces[0];
  },
  get last() {
    return this.surfaces.at(-1);
  },
};

// Logger la surface du plus grand appartement
// Puis ajouter un getter "first" et un getter "last"
console.log(apartments.widest);
console.log(apartments.first);
console.log(apartments.last);
console.log(apartments.surfaces);

const event = {
  city: "Taipei",
  set location(city) {
    this.city = city;
  },
};

// Loggez la ville de l'événement,
console.log(event.city);
// Puis changez-la
event.location = "Bagnères";
