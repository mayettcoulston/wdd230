const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animatedMe");

hamburgerElement.addEventListener("click", function () {
    navElement.classList.toggle("open")
    hamburgerElement.classList.toggle("open");
});

const darkModeButton = document.getElementById("darkMode");
const body = document.body;

darkModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    darkModeButton.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});