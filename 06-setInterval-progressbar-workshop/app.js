let progress = 0;
const step = 10;
let intervalId; // undefined

document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.querySelector("#uploadBtn");
  const progressBar = document.querySelector(".progressBar .inner");
  const svgContainer = document.querySelector("#confirm");

  uploadBtn.addEventListener("click", () => {
    progress = 0;
    svgContainer.style.display = "none";
    uploadBtn.disabled = true;

    intervalId = setInterval(() => {
      progress += step;
      progressBar.style.width = `${progress}%`;
      progressBar.innerText = `${progress}%`;

      if (progress >= 100) {
        clearInterval(intervalId);
        svgContainer.style.display = "block";
        uploadBtn.disabled = false;
      }
    }, 400);
  });
});
