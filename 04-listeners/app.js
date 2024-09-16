let counter = 0; // number

document.addEventListener("DOMContentLoaded", () => {
  // À partir de counter, dériver le contenu de la div content
  // Initialisation du contenu de #content
  const content = document.querySelector("#content");
  content.innerText = `Vous avez cliqué ${counter} fois`;

  const button = document.querySelector("button");

  // increment sans les parenthèses = référence à la fonction
  button.addEventListener("click", increment);

  // Hoisted - Utilisable avant déclaration
  function increment() {
    content.innerHTML = `Vous avez cliqué ${++counter} fois`;
  }
});
