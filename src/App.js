import React,{useState} from 'react'

import './App.css';

const api = {
  key: "882e2e3c1c47271ea5529b30b1909e12",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  console.log(weather)
  if(weather.message==="city not found"){
    return (
      <div>
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
        <h1>city not found</h1>
      </div>
    );
  }

  return (
    <div>
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
      <h1>hola</h1>
    </div>
  );
}

export default App;
