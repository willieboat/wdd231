const hamBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const forecastContainer = document.querySelector('.forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.56&lon=-0.20&units=metric&appid=8075dcf7a66bc54cb1a465d2e9f7ac32';

hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = data.weather[0].description;
}

apiFetch();

async function getForecast() {
    const forecastUrl =
        'https://api.openweathermap.org/data/2.5/forecast?lat=5.56&lon=-0.20&units=metric&appid=8075dcf7a66bc54cb1a465d2e9f7ac32';

    const response = await fetch(forecastUrl);
    const data = await response.json();

    const days = [data.list[0], data.list[16], data.list[32]];

    forecastContainer.innerHTML =
        `<h2>Weather Forecast</h2>` +
        days
            .map(day => {
                const weekday = new Date(day.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                });
                return `<p><strong>${weekday}:</strong> ${day.main.temp.toFixed(1)}°C</p>`;
            })
            .join('');
}

getForecast();

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;

