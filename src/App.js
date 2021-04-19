import React,{useState} from 'react'

import './App.css';

const api = {
  key: "882e2e3c1c47271ea5529b30b1909e12",
  url: "https://api.openweathermap.org/data/2.5/"
}

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  console.log(weather)
    return (
      <main className={(typeof weather.main != "undefined") ? ((weather.main.temp < 18) ? 'main-two' : 'main') : 'main'} >
      <div className="weather-container">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={event => setQuery(event.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.message != "undefined") ? (
          <h1>city not found</h1>
          ) : ('')}
            {(typeof weather.main != "undefined") ? (
            <div className="information-container">
              <p className="country">{weather.name}, {weather.sys.country}</p>
              <h1 className="temp">{Math.round(weather.main.temp)} °C</h1>
              <p className="description">{weather.weather[0].description}</p>
              <p className="max-min">{weather.main.temp_min}°C / {weather.main.temp_max}°C</p>
            </div>
            ) : ('')}
        </div>
      </main>
  );
};
