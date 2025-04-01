const hamburgerElement = document.querySelector("#pressButton");
const navElement = document.querySelector("#transition");

hamburgerElement.addEventListener("click", function () {
    navElement.classList.toggle("open")
    hamburgerElement.classList.toggle("open");
});

function checkLastVisit() {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    
    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} ${daysBetween === 1 ? "day" : "days"} ago.`;
        }
    }
    localStorage.setItem("lastVisit", now);
}
checkLastVisit();