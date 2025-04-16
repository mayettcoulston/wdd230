const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const forecastContainer = document.querySelector('#forecast');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.749992&lon=6.637143&units=imperial&appid=b3d35548c4130d29ed2d2c663dcc77b0'
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.749992&lon=6.637143&units=imperial&appid=b3d35548c4130d29ed2d2c663dcc77b0';

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
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

async function fetchForecast() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Optional: View forecast data in console
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Forecast fetch error:', error);
    }
}

function displayForecast(data) {
    // Filter forecast entries around 12:00 noon
    const noonForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    forecastContainer.innerHTML = ''; // Clear any existing forecast

    noonForecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const day = date.toLocaleDateString(undefined, { weekday: 'long' });
        const temp = forecast.main.temp.toFixed(1);
        const desc = forecast.weather[0].description;
        const icon = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${day}</strong>: 
            <img src="${iconUrl}" alt="${desc}" style="vertical-align:middle;">
            ${temp}°F - ${desc}
        `;
        forecastContainer.appendChild(li);
    });
}

apiFetch();
fetchForecast();