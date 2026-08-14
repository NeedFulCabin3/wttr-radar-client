const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherContent = document.getElementById('weather-content');
const errorMsg = document.getElementById('error-message');

// Maps wttr.in descriptions to clean, transparent OpenWeatherMap icons
function getCleanIcon(descText) {
    const desc = descText.toLowerCase();
    
    if (desc.includes('sunny') || desc.includes('clear')) return '01d';
    if (desc.includes('partly cloudy')) return '02d';
    if (desc.includes('cloudy') || desc.includes('overcast')) return '03d';
    if (desc.includes('mist') || desc.includes('fog') || desc.includes('haze')) return '50d';
    if (desc.includes('shower') || desc.includes('drizzle')) return '09d';
    if (desc.includes('rain')) return '10d';
    if (desc.includes('thunderstorm')) return '11d';
    if (desc.includes('snow') || desc.includes('sleet')) return '13d';
    
    return '03d'; // Default fallback icon
}

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        errorMsg.classList.add('hidden');
        weatherContent.classList.remove('hidden');
        
        updateCurrentWeather(data, city);
        updateForecast(data);
    } catch (err) {
        weatherContent.classList.add('hidden');
        errorMsg.classList.remove('hidden');
    }
}

function updateCurrentWeather(data, searchedCity) {
    const current = data.current_condition[0];
    const desc = current.weatherDesc[0].value;
    
    const cityName = searchedCity.charAt(0).toUpperCase() + searchedCity.slice(1);
    document.getElementById('location-name').textContent = cityName;
    document.getElementById('weather-desc').textContent = desc;
    document.getElementById('current-temp').textContent = `${current.temp_C}°C`;
    document.getElementById('humidity-val').textContent = `${current.humidity}%`;
    document.getElementById('wind-val').textContent = `${current.windspeedKmph} km/h`;
    
    // Use the custom dynamic icon mapping
    const iconCode = getCleanIcon(desc);
    document.getElementById('current-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function updateForecast(data) {
    const container = document.getElementById('forecast-container');
    container.innerHTML = '';

    const forecastDays = data.weather;

    forecastDays.forEach(day => {
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const avgTemp = Math.round(day.avgtempC);
        const desc = day.hourly[4].weatherDesc[0].value; // Grab mid-day description

        const iconCode = getCleanIcon(desc);

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <span class="day">${dayName}</span>
            <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="forecast icon" style="width:40px; height:40px;">
            <span class="temp">${avgTemp}°C</span>
        `;
        container.appendChild(card);
    });
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) getWeatherData(city);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) getWeatherData(city);
    }
});
