const siButton = document.getElementById("si-btn");
const loadingContainer = document.getElementById("loadingContainer");

siButton.addEventListener("click", function() {
  loadingContainer.classList.add("show-loading");

  setTimeout(function() {
    window.location.href = "pag1.html";
  }, 3000);
});

const noButton = document.getElementById("no-btn");

noButton.addEventListener("click", function() {
  alert("Lo siento, este es un regalo de San Valentín...¡Deja el chisme!");
});

