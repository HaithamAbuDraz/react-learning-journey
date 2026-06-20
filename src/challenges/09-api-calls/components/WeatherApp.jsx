import { useEffect, useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('Gaza');
  const [searchInput, setSearchInput] = useState('Gaza');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Using a free weather API (OpenWeatherMap)
  const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    async function fetchWeather() {
      if (!city) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('City not found');
          }
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput.trim());
    }
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>🌤️ Weather App</h2>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder='Enter city name...'
          style={{
            padding: '8px',
            width: '200px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type='submit'
          style={{
            padding: '8px 16px',
            backgroundColor: '#61dafb',
            color: '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {loading && <h3>Loading weather data...</h3>}

      {error && <p style={{ color: 'red', marginTop: '10px' }}>❌ {error}</p>}

      {weather && !loading && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f0f8ff',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0' }}>{weather.name}</h2>
          <p style={{ color: '#666' }}>{weather.sys.country}</p>

          <img
            src={getWeatherIcon(weather.weather[0].icon)}
            alt={weather.weather[0].description}
          />

          <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>
            {Math.round(weather.main.temp)}°C
          </h1>

          <p style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>
            {weather.weather[0].description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '4px',
              }}
            >
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
                Humidity
              </p>
              <p
                style={{ margin: '0', fontSize: '1.2rem', fontWeight: 'bold' }}
              >
                {weather.main.humidity}%
              </p>
            </div>

            <div
              style={{
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '4px',
              }}
            >
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
                Wind Speed
              </p>
              <p
                style={{ margin: '0', fontSize: '1.2rem', fontWeight: 'bold' }}
              >
                {weather.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
