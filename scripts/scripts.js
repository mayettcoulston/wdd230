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

//APIS Weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-1.29078&lon=36.82350&units=imperial&appid=b3d35548c4130d29ed2d2c663dcc77b0';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('API fetch error:', error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}°F`;
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();