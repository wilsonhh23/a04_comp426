function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 40.7128, lng: -74.0060 } 
    });

   
    map.addListener('click', function(mapsMouseEvent) {
        const coords = mapsMouseEvent.latLng.toJSON();
        fetchWeather(coords.lat, coords.lng);
    });
}

function fetchWeather(lat, lng) {
    const apiKey = 'OPEN_WEATHER_API_KEY_PLACEHOLDER'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updateWeatherDisplay(data);
            fetchLocationName(lat, lng); 
        })
        .catch(error => {
            console.error('Error fetching the weather:', error);
            updateWeatherDisplay(null);
        });
}

function fetchLocationName(lat, lng) {
    const apiKey = 'AIzaSyBblXDjJD-AwmPKfm4uTNM-UIyt4IU2Cl4'; 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.results && data.results.length > 0) {
                const addressComponents = data.results[0].address_components;
                const city = addressComponents.find(component => component.types.includes("locality"))?.long_name;
                const state = addressComponents.find(component => component.types.includes("administrative_area_level_1"))?.short_name;
                updateLocationDisplay(city, state);
            } else {
                throw new Error('No results found');
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            updateLocationDisplay(null, null);
        });
}

function updateWeatherDisplay(data) {
    const weatherContainer = document.getElementById('weather-info');

    console.log("API Response Data:", data);

    if (data && data.weather && data.main && data.wind) {
        weatherContainer.innerHTML = `Current Temperature: ${data.main.temp}°F<br>
                                      Weather: ${data.weather[0].main}<br>
                                      Description: ${data.weather[0].description}<br>
                                      Humidity: ${data.main.humidity}%<br>
                                      Wind Speed: ${data.wind.speed} m/s<br>
                                      Pressure: ${data.main.pressure} hPa`;
    } else {
        weatherContainer.innerHTML = 'Weather data not available.';
    }
}


function updateLocationDisplay(city, state) {
    const locationContainer = document.getElementById('weather-info');
    if (city && state) {
        locationContainer.innerHTML += `<br>Location: ${city}, ${state}`;
    } else {
        locationContainer.innerHTML += '<br>Location data not available.';
    }
}


