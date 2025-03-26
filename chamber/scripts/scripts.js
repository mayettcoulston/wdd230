const hamburgerElement = document.querySelector("#pressButton");
const navElement = document.querySelector("#transition");

hamburgerElement.addEventListener("click", function () {
    navElement.classList.toggle("open")
    hamburgerElement.classList.toggle("open");
});