const tokenName = "JWT_TOKEN";
// Si pas de token dans le localStorage, rediriger vers login
const jwt = localStorage.getItem(tokenName);

if (jwt === null) {
  window.location.href = "login.html";
}
