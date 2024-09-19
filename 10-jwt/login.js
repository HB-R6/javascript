const loginForm = document.querySelector("#login-form");

// Quand on écoute un événement,
// alors on installe un écouteur (une fonction)
// qui sera déclenchée lors de cet événement.
// Ainsi, lorsque l'écouteur est déclenché, il reçoit en paramètre l'événement en question
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Je construis un objet FormData à partir du formulaire existant
  const formData = new FormData(loginForm);
  // J'extraie les valeurs (string) des champs du formulaire : "email" et "password"
  const username = formData.get("email");
  const password = formData.get("password");

  fetch("http://localhost:8000/api/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Dans le body, je lui demande de transformer un objet en string
    // L'objet en question portera une propriété "username" avec la valeur de username définie plus haut, et idem avec "password"
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Une erreur est survenue : ", err));
});
