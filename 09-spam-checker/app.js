const emailInput = document.querySelector("#email");
const sendBtn = document.querySelector("button");

sendBtn.addEventListener("click", () => {
  fetch("http://localhost:8000/api/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailInput.value }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
