import React from 'react';

const WeatherCapitalInfo = ({ weatherInCapital }) => {
  return (
    <div>
      <p>
        Weather condition: {weatherInCapital.weather[0].main}(
        {weatherInCapital.weather[0].description})
      </p>
      <p>Temperature: {weatherInCapital.main.temp}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherInCapital.weather[0].icon}@2x.png`}
        alt='weather-icon'
        width='400'
      />
      <p>Wind speed: {weatherInCapital.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCapitalInfo;
