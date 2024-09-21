const emailInput = document.querySelector("#email");
const sendBtn = document.querySelector("button");
const errorDiv = document.querySelector("#error");
const errorIcon = document.querySelector("#errorIcon");

const inputErrorClasses = "border-2 border-red-500 text-red-500".split(" ");

const setError = (hasError, message) => {
  if (hasError) {
    errorDiv.classList.remove("hidden");
    errorDiv.textContent = message;
    emailInput.classList.add(...inputErrorClasses);
    errorIcon.classList.remove("hidden");
  } else {
    emailInput.classList.remove(...inputErrorClasses);
    errorIcon.classList.add("hidden");
    errorDiv.classList.add("hidden");
    errorDiv.textContent = "";
  }
};

emailInput.addEventListener("keydown", () => {
  setError(false);
});

sendBtn.addEventListener("click", () => {
  setError(true, "erreur");
  response = fetch("http://localhost:8000/api/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailInput.value }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
