const director = {
  name: "Park Chan Wook",
  birthYear: 1963,
};

const movie = {
  title: "Old Boy",
  director,
};

const topMovie = {
  title: "The Handmaiden",
  director,
};

console.log(movie, topMovie);

movie.length = 120;

console.log(movie, topMovie);

const movies = [{ ...movie }, { ...topMovie }];

movies[1].director.name = "Unknown";

console.log(movies);
console.log(movie, topMovie);
console.log(director);

console.log(JSON.stringify(movie));
