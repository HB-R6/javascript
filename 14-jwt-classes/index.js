class ArticleService {
  constructor(apiBaseUri, jwt) {
    this.jwt = jwt; // Création de propriété
    this.apiBaseUri = apiBaseUri; // http://localhost:8000/api
  }

  async findAll() {
    const res = await fetch(`${this.apiBaseUri}/articles?pagination=false`, {
      headers: {
        Authorization: `Bearer ${this.jwt}`,
      },
    });
    const data = await res.json();
    return data["hydra:member"];
  }
}

const tokenName = "JWT_TOKEN";
// Si pas de token dans le localStorage, rediriger vers login
const jwt = localStorage.getItem(tokenName);

if (jwt === null) {
  window.location.href = "login.html";
}

const articlesContainer = document.querySelector("#articles-container");

(async () => {
  const articleService = new ArticleService("http://localhost:8000/api", jwt);
  const articles = await articleService.findAll();

  // Charger un template
  const htmlTemplateRes = await fetch("article_item.html");
  // Au format texte
  const articleTemplate = await htmlTemplateRes.text();

  articles.map((article) => {
    let articleOutput = articleTemplate.replace("{{ title }}", article.title);
    articleOutput = articleOutput.replace(
      "{{ category.name }}",
      article.category.name
    );
    articleOutput = articleOutput.replace("{{ createdAt }}", article.createdAt);
    articlesContainer.insertAdjacentHTML("beforeend", articleOutput);
  });
})(); // IIFE : Immediately Invoked Function Expression

const logout = () => {
  localStorage.removeItem(tokenName);
  window.location.href = "login.html";
};
