// Une variable qui gardera en mémoire la slide courante (l'élément courant)
let currentIndex = 0;

// Retenir une référence vers la div qui contient les items
// Ainsi, on pourra agir dessus en appliquant une transformation
const itemsContainer = document.querySelector(".slider .items");
// Définir une borne supérieure, donc un index maximal
const maxIndex = itemsContainer.children.length - 1;

// Installer des écouteurs sur les boutons prev et next
// Dans ces écouteurs, on devra donc faire évoluer l'index courant, d'une part, mais également refléter les changements dans l'interface
const prevBtn = document.querySelector(".btn.prev button");
const nextBtn = document.querySelector(".btn.next button");

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    itemsContainer.style.transform = `translateX(-${640 * ++currentIndex}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    itemsContainer.style.transform = `translateX(-${640 * --currentIndex}px)`;
  }
});
