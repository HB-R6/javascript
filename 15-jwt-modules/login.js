import add, { substract } from "./modules/calculator.js";
import { JWT_LOCALSTORAGE_KEY } from "./modules/constants.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get("email");
  const password = formData.get("password");

  const AuthModule = await import("./modules/auth.js");

  const auth = new AuthModule.Authentication("http://localhost:8000/api");
  try {
    const jwt = await auth.login(username, password);
    localStorage.setItem(JWT_LOCALSTORAGE_KEY, jwt);
    window.location.href = "index.html";
  } catch (err) {
    console.error("Une erreur est survenue");
  }
});
