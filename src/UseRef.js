import React, { useState } from 'react';
import './Cold.css';

function UseRef() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error_, setError] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        setError('');
      } else {
        setError(data.message || 'Weather data not available.');
      }
    } catch (error) {
      setError('Error fetching weather data.');
    }
  };

  return (
    <div className="App">
      <h1>useRef</h1>
      <input type="text" placeholder="Enter city" onChange={handleChange} />
      <button onClick={fetchWeather}>Get Weather</button>
      <h2>{city}</h2>
      {error_ && <div>{error_}</div>}
      {weatherData && (
        <div>
          <h3>Weather Details</h3>
          {/* Display weather data here */}
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UseRef;
