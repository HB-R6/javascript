const concert = {
  city: "Taipei",
  set location(city) {
    this.city = city;
  },
};

console.log(concert);

console.log(concert.hasOwnProperty("city")); // true
console.log(concert.hasOwnProperty("nonExistent")); // false
console.log(concert.nonExistent);

const arr = [1, 2];

console.log(arr);
console.log(arr.hasOwnProperty(0)); // true
console.log(arr.hasOwnProperty("city")); // false

const maFunc = () => {
  console.log("hello");
};

console.log(maFunc);

const firstname = "Glenn";
console.log(Object.getPrototypeOf(firstname));

const age = 24;

console.log(age.__proto__);
