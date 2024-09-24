const loginForm = document.querySelector("#login-form");
const errorDiv = document.querySelector("#error");
const spinner = document.querySelector("#loading-spinner");
const signInButton = loginForm.querySelector('button[type="submit"]');

const pause = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), milliseconds);
  });
};

// Quand on écoute un événement,
// alors on installe un écouteur (une fonction)
// qui sera déclenchée lors de cet événement.
// Ainsi, lorsque l'écouteur est déclenché, il reçoit en paramètre l'événement en question
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorDiv.classList.add("hidden");
  spinner.classList.remove("hidden");
  signInButton.disabled = true;

  // Je construis un objet FormData à partir du formulaire existant
  const formData = new FormData(loginForm);
  // J'extraie les valeurs (string) des champs du formulaire : "email" et "password"
  const username = formData.get("email");
  const password = formData.get("password");

  try {
    await pause(3000);
    const res = await fetch("http://localhost:8000/api/login_check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Dans le body, je lui demande de transformer un objet en string
      // L'objet en question portera une propriété "username" avec la valeur de username définie plus haut, et idem avec "password"
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      errorDiv.innerText = "Erreur survenue lors de l'authentification";
      errorDiv.classList.remove("hidden");
      spinner.classList.add("hidden");
      signInButton.disabled = false;
      console.error("Erreur survenue lors de l'authentification", res.status);
      return;
    }

    const data = await res.json();
    localStorage.setItem("JWT_TOKEN", data.token);
    window.location.href = "index.html";
  } catch (err) {
    console.error("Erreur CATCH : ", err);
  }
});
