class Authentication {
  constructor(apiBaseUri) {
    // Base URI : http://localhost:8000/api
    this.apiBaseUri = apiBaseUri;
  }

  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns {Promise<string|null>} The retrieved token or null if login failed
   */
  async login(username, password) {
    const res = await fetch(`${this.apiBaseUri}/login_check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.token;
  }
}

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get("email");
  const password = formData.get("password");

  const auth = new Authentication("http://localhost:8000/api");
  try {
    const jwt = await auth.login(username, password);
    localStorage.setItem("JWT_TOKEN", jwt);
    window.location.href = "index.html";
  } catch (err) {
    console.error("Une erreur est survenue");
  }
});
