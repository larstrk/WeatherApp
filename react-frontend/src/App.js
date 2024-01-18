import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // States for city, weather data, and error messages
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Function to convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  // Function to fetch weather data
  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/weather?city=${city}`);
      // Check for error in the API response
      if (response.data.cod && response.data.cod !== 200) {
        throw new Error(response.data.message);
      }
      setWeather(response.data);
      setError(null); // Reset error if a previous one existed
    } catch (error) {
      // Set error message on API call failure
      setError(error.response ? error.response.data.message : "An unexpected error occurred.");
      setWeather(null); // Reset weather if previous data was loaded
    };
  }

  // Main render function of the component
  return (
    <div className="App">
      <header className="App-header">
        <input 
          className="city-input"
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city" 
        />
        <button className="fetch-button" onClick={fetchWeather}>Show Weather</button>
        {error && <div className="error-message">{error}</div>}
        {!error && weather && (
          <div className="weather-info">
            <h2 className="city-name">{weather.name}</h2>
            <img src={getWeatherImage(weather.weather[0].id)} alt="Weather" />
            <p className="temperature">Temperature: {kelvinToCelsius(weather.main.temp)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
        )}
      </header>
    </div>
  );
}

// Function to get the appropriate weather image based on the weather code
function getWeatherImage(weatherId) {
  // Conditional logic for different weather conditions
  if (weatherId >= 200 && weatherId < 300) {
    return "/thunderstorm.png"; // Thunderstorm
  } else if (weatherId >= 300 && weatherId < 500) {
    return "/rain.png"; // Rain
  } else if (weatherId >= 500 && weatherId < 600) {
    return "/rain.png"; // Rain
  } else if (weatherId >= 600 && weatherId < 700) {
    return "/snow.png"; // Snow
  } else if (weatherId >= 700 && weatherId < 800) {
    return "/foggy.png"; // Fog
  } else if (weatherId === 800) {
    return "/sun.png"; // Clear Sky
  } else if (weatherId > 800 && weatherId < 900) {
    return "/cloudy.png"; // Cloudy
  }
  return "/sun.png"; // Default image if no code matches
}

export default App;
