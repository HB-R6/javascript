class Coordinates {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }

  display() {
    console.log(`${this.lat}, ${this.lng}`);
  }
}

const place = new Coordinates(25.031965367379083, 121.53300477286339);
console.log(place);
place.display();
