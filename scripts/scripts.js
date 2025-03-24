const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animatedMe");

hamburgerElement.addEventListener("click", function () {
    navElement.classList.toggle("open")
    hamburgerElement.classList.toggle("open");
});