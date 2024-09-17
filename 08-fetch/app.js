const requestPromise = fetch("https://jsonplaceholder.typicode.com/users");

requestPromise
  .then((response) => response.json())
  .then((data) => console.log(data));
