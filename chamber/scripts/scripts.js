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

const spotlightContainer = document.querySelector('#spotlight-container');
const spotlightUrl = 'https://mayettcoulston.github.io/wdd230/chamber/data/members.json';

async function loadSpotlights() {
  try {
    const response = await fetch(spotlightUrl);
    if (!response.ok) throw new Error('Failed to fetch members');

    const data = await response.json();
    const eligibleMembers = data.companies.filter(member =>
      member.membership === 'Gold' || member.membership === 'Silver'
    );

    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
    const spotlights = shuffled.slice(0, 3);

    spotlights.forEach(member => {
      const spotlight = document.createElement('section');
      spotlight.innerHTML = `
        <h4>${member.name}</h4>
        <img src="images/${member.image || 'default.jpg'}" alt="${member.name}">
        <p>${member.description}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      spotlightContainer.appendChild(spotlight);
    });
  } catch (error) {
    console.error('Spotlight Error:', error);
  }
}

loadSpotlights();

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('meet-banner');
    const closeBtn = document.querySelector('.close-banner');
  
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
    if (today >= 1 && today <= 3) {
      banner.classList.remove('hidden');
    }
  
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
    });
  });