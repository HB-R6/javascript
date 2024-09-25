export class Authentication {
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

export function test() {
  console.log("Coucou Bastien");
}
