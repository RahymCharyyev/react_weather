import React from "react";
import useWeather from "../../axios/UseWeather";

const GetFiveDayWeather = () => {
  const weather = useWeather("Ashgabat");

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {weather.list.map((weatherData) => (
        <div key={weatherData.dt}>
          <p>Date and Time: {weatherData.dt_txt}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default GetFiveDayWeather;
