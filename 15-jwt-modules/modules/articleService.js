export default class ArticleService {
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
