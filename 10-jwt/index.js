const tokenName = "JWT_TOKEN";
// Si pas de token dans le localStorage, rediriger vers login
const jwt = localStorage.getItem(tokenName);

if (jwt === null) {
  window.location.href = "login.html";
}

const articlesContainer = document.querySelector("#articles-container");

(async () => {
  const res = await fetch("http://localhost:8000/api/articles", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await res.json();

  data["hydra:member"].map((article) => {
    const li = document.createElement("li");
    li.innerText = article.title;
    articlesContainer.appendChild(li);
  });
})(); // IIFE
