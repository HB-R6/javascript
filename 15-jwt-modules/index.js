import ArticleService from "./modules/articleService.js";
import { JWT_LOCALSTORAGE_KEY } from "./modules/constants.js";

// Si pas de token dans le localStorage, rediriger vers login
const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

if (jwt === null) {
  window.location.href = "login.html";
}

const articlesContainer = document.querySelector("#articles-container");

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

const logout = () => {
  localStorage.removeItem(tokenName);
  window.location.href = "login.html";
};
