





import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
const [backgroundImage, setBackgroundImage] = useState('url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80")');

useEffect(() => {
  document.body.style.backgroundImage = backgroundImage;
}, [backgroundImage]);


  const handleSearch = async () => {
    if (!city) return;

    const apiKey = "d61a8381cb6805204c5c2a797803e53b"; // Replace with your API key
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);

    













        // Weather-based background
  setBackgroundImage('url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80")');

      } else {
        alert('City not found!');
        setWeather(null);
      }
    } catch (error) {
      alert('Error fetching weather data');
      console.error(error);
      setWeather(null);
    }
  };




















  return (
    <div className="app-container">
      <h1>🌦 Weather App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <img
  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
  alt={weather.weather[0].description}/>

          <p style={{ textTransform: 'capitalize' }}>{weather.weather[0].description}</p>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Min:</strong> {weather.main.temp_min} °C &nbsp;&nbsp; <strong>Max:</strong> {weather.main.temp_max} °C</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;












