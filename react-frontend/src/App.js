import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const fetchWeather = async () => {
    setError(null); // Setze den Fehler zurück, wenn eine neue Anfrage gestartet wird
    try {
      const response = await axios.get(`http://localhost:8000/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      // Setze die Fehlermeldung basierend auf dem Fehler, der aufgetreten ist
      setError("Ein Fehler ist aufgetreten. Bitte überprüfe die Eingabe und versuche es erneut.");
      setWeather(null); // Setze das Wetter zurück, falls vorher Daten geladen wurden
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
        {error && <div className="error-message">{error}</div>}
        {!error && weather && (
          <div className="weather-info">
            <h2 className="city-name">{weather.name}</h2>
            <img src={getWeatherImage(weather.weather[0].id)} alt="Wetterbild" />
            <p className="temperature">Temperature: {kelvinToCelsius(weather.main.temp)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
        )}
      </header>
    </div>
  );
}

function getWeatherImage(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "/thunderstorm.png"; // Gewitter
  } else if (weatherId >= 300 && weatherId < 500) {
    return "/rain.png"; // Regen
  } else if (weatherId >= 500 && weatherId < 600) {
    return "/rain.png"; // Regen
  } else if (weatherId >= 600 && weatherId < 700) {
    return "/snow.png"; // Schnee
  } else if (weatherId >= 700 && weatherId < 800) {
    return "/foggy.png"; // Nebel
  } else if (weatherId === 800) {
    return "/sun.png"; // Klarer Himmel
  } else if (weatherId > 800 && weatherId < 900) {
    return "/cloudy.png"; // Bewölkt
  }
  return "/sun.png"; // Standardbild, falls kein Code passt
}



export default App;
