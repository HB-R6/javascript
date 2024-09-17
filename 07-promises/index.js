const ok = false;

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) {
        resolve("test");
      } else {
        reject("Erreur pas ok");
      }
    }, 3000);
  });
};

fetchData()
  .then((resolvedData) => console.log(resolvedData))
  .catch((error) => console.error(error));

console.log("fin du script");
