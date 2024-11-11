import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Dynamics from "./Dynamics";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({
    name: props.name,
    region: props.region,
    lastUpdated: '',
    temp: '',
    condition: '',
    icon: '',
    feel: ''
  });

  const [loading, setLoading] = useState(false);

  const getImageSrc = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "https://prague-extra.com/upload/tourMainImages/5c9b8cc6b8260.full.jpg";
      case "haze":
      case "overcast":
      case "mist":
        return "https://www.caryinstitute.org/sites/default/files/public/2023-03/fog_forest.jpg";
      case "rain":
      case "cloudy":
      case "mostly cloudy":
      case "light rain":
      case "heavy rain":
        return "https://png.pngtree.com/background/20230517/original/pngtree-rain-rain-down-the-hd-wallpaper-picture-image_2636716.jpg";
      case "snow":
        return "https://wallpapers.com/images/hd/winter-snow-desktop-9r7xt2hg7jllihbh.jpg";
      default:
        return "https://www.pixel4k.com/wp-content/uploads/2018/10/mountain-lake-night-reflection-4k_1540133123.jpg";
    }
  };

  const updateWeather = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=bf47357f856b41b9928123647240511&q=${city}&aqi=no`;
    setLoading(true);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      setWeatherData({
        name: parsedData.location.name,
        region: parsedData.location.region,
        lastUpdated: parsedData.current.last_updated,
        temp: parsedData.current.temp_c,
        condition: parsedData.current.condition.text,
        icon: parsedData.current.condition.icon,
        feel: parsedData.current.feelslike_c,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cityToFetch = props.city || "Singrauli";
    updateWeather(cityToFetch);
  }, [props.city]);

  const imageSrc = getImageSrc(weatherData.condition);

  return (
    <Dynamics imageSrc={imageSrc}>
      <div className="weather-container">
        {loading ? (
          <p>Loading weather data...</p>
        ) : (
          <>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', textAlign: 'center', color: '#f9ffe0' }}>
              {weatherData.name}, {weatherData.region}
            </h1>
            <p style={{ textAlign: 'center', color: '#f9ffe0' }}>Last updated: {weatherData.lastUpdated}</p>
            <h1 style={{ fontSize: '7.5rem', color: '#f9ffe0', textAlign: 'center' }}>{weatherData.temp} °C</h1>
            <img style={{ marginLeft: '25rem' }} src={weatherData.icon} alt="Weather icon" />
            <h2 style={{ textAlign: 'center', color: '#f9ffe0' }}>{weatherData.condition}</h2>
            <p style={{ color: '#f9ffe0', textAlign: 'center' }}>Real feel: {weatherData.feel} °C</p>
          </>
        )}
      </div>
    </Dynamics>
  );
};

Weather.defaultProps = {
  country: 'India',
  name: 'Singrauli',
  region: 'Madhya Pradesh',
  city: 'Singrauli'
};

Weather.propTypes = {
  country: propTypes.string,
  name: propTypes.string,
  region: propTypes.string,
  city: propTypes.string,
};

export default Weather;

