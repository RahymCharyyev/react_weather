import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalSvgSelector } from "../assets/GlobalSvgSelector";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const GetWeather = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    axios
      .get(`${BASE_URL}q=Ashgabat&units=metric&lang=ru&appid=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        const weather = response.data;
        setWeather(weather);
      });
  };

  useEffect(() => getWeather(), []);

  return (
    weather && (
      <>
        <div>{weather.name}</div>
        <div>{weather.main.temp} °C</div>
        <div>{weather.main.humidity} %</div>
        <div>{weather.weather[0].description}</div>
        <GlobalSvgSelector id={weather.weather[0].icon} />
      </>
    )
  );
};

export default GetWeather;
