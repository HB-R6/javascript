let progress = 0;
const step = 10;

document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.querySelector("#uploadBtn");
  const progressBar = document.querySelector(".progressBar .inner");

  uploadBtn.addEventListener("click", () => {
    setInterval(() => {
      progress += step;
      progressBar.style.width = `${progress}%`;
      progressBar.innerText = `${progress}%`;
    }, 500);
  });
});
