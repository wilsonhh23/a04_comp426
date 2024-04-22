# Weather and Maps App

## Overview
This web application allows users to click on any location on a world map to display the current weather conditions and temperature for that location. It utilizes the Google Maps API for mapping functionalities and the OpenWeatherMap API to fetch weather data.

## Features
- Interactive map to select any global location.
- Displays weather information including temperature, humidity, wind speed, and atmospheric pressure.

## APIs Used
1. **Google Maps API**: Used to render maps and handle location-based interactions.
2. **OpenWeatherMap API**: Used to retrieve current weather conditions based on coordinates obtained from the Google Maps API.

## Setup Instructions

### Prerequisites
- A modern web browser that supports HTML5, CSS3, and JavaScript.
- Access to the internet to load live data from the APIs.

### API Keys
You will need to obtain your own API keys for both Google Maps and OpenWeatherMap:

1. **Google Maps API Key**:
   - Go to the [Google Cloud Platform Console](https://console.cloud.google.com/).
   - Create a new project, and enable the Google Maps JavaScript API under "Library".
   - Go to "Credentials" to create an API key.
   - Restrict your API key to prevent misuse: set HTTP referrers, API restrictions, etc.

2. **OpenWeatherMap API Key**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/).
   - Navigate to 'API keys' on your account dashboard to create a new API key.

### Running the Application
- Clone the repository to your local machine.
- Replace the placeholder API keys in the code with your actual API keys. (Google Maps placeholder is within index.html. OpenWeatherMap placeholder is within script.js.)
- Open `index.html` in your web browser to run the application.

