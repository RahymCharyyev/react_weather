import React from "react";

const WeatherList = ({ weatherList }) => {
  return (
    <div>
      {weatherList.map((weather) => (
        <div key={weather.dt}>
          <p>Date and Time: {weather.dt_txt}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
