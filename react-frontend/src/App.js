import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

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
        {weather && (
          <div className="weather-info">
            <h2 className="city-name">{weather.name}</h2>
            <p className="temperature">Temperature: {kelvinToCelsius(weather.main.temp)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
