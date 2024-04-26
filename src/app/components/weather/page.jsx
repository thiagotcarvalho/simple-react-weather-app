'use client'

import { useEffect, useState } from "react";
import Search from "../search/page";

export default function Weather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleSearch() {
    fetchWeatherData(search);
  }

  async function fetchWeatherData(query) {
    setLoading(true);
    const apiKey = '15dbb33e9cc8080478a125c6c156f615';
    const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`;

    try {
      const response = await fetch(weatherDataURL);
      const data = await response.json();
      console.log('Weather data:', data);

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  useEffect(() => {
    fetchWeatherData('new york');
  }, [])

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {
        loading ? <div className="weather-loading">Loading...</div> :
          <div className="weather-city-name">
            <div>
              <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
            </div>
            <div className="weather-date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="weather-temp">{weatherData?.main?.temp}</div>
            <p className="weather-description">
              {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
            </p>
            <div className="weather-info">
              <div className="column">
                <div>
                  <p className="weather-wind">{weatherData?.wind?.speed}</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div className="column">
                <div>
                  <p className="weather-humidity">{weatherData?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}