const tokenName = "JWT_TOKEN";
// Si pas de token dans le localStorage, rediriger vers login
const jwt = localStorage.getItem(tokenName);

if (jwt === null) {
  window.location.href = "login.html";
}

const articlesContainer = document.querySelector("#articles-container");

(async () => {
  const res = await fetch(
    "http://localhost:8000/api/articles?pagination=false",
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  const data = await res.json();

  // Charger un template
  const htmlTemplateRes = await fetch("article_item.html");
  // Au format texte
  const articleTemplate = await htmlTemplateRes.text();

  data["hydra:member"].map((article) => {
    let articleOutput = articleTemplate.replace("{{ title }}", article.title);
    articleOutput = articleOutput.replace(
      "{{ category.name }}",
      article.category.name
    );
    articleOutput = articleOutput.replace("{{ createdAt }}", article.createdAt);
    articlesContainer.insertAdjacentHTML("beforeend", articleOutput);
  });
})(); // IIFE

const logout = () => {
  localStorage.removeItem(tokenName);
  window.location.href = "login.html";
};
