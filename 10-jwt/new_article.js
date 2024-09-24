const tokenName = "JWT_TOKEN";
// Si pas de token dans le localStorage, rediriger vers login
const jwt = localStorage.getItem(tokenName);

if (jwt === null) {
  window.location.href = "login.html";
}

const categoriesSelectList = document.querySelector("#categories-list");
const usersSelectList = document.querySelector("#users-list");
const articleForm = document.querySelector("#add-article-form");

async function populateCategories() {
  const res = await fetch(
    "http://localhost:8000/api/categories?pagination=false"
  );
  const data = await res.json();

  data["hydra:member"].map((category) => {
    const option = document.createElement("option");
    option.value = category["@id"];
    option.text = category.name;
    categoriesSelectList.add(option);
  });
}

async function populateUsers() {
  const res = await fetch("http://localhost:8000/api/users?pagination=false");
  const data = await res.json();

  data["hydra:member"].map((category) => {
    const option = document.createElement("option");
    option.value = category["@id"];
    option.text = category.email;
    usersSelectList.add(option);
  });
}

populateCategories();
populateUsers();

articleForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(articleForm);
  const title = formData.get("title");
  const content = formData.get("content");
  const createdAt = formData.get("createdAt");
  const category = formData.get("categories-list");
  const author = formData.get("users-list");
  const visible = formData.get("visible");

  const res = await fetch("http://localhost:8000/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      title,
      content,
      createdAt,
      category,
      author,
      visible: visible === "on",
    }),
  });

  if (!res.ok) {
    console.error("Une erreur est survenue");
    return;
  }

  window.location.href = "index.html";
});
