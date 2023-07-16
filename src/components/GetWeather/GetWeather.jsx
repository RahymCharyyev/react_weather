import React from "react";
import { GlobalSvgSelector } from "../../assets/GlobalSvgSelector";
import useWeather from "../../axios/UseWeather";
import "./getWeather.css";
import background from "../../assets/images/get_weather_bg.png";
import windLogo from "../../assets/images/wind.png";
import humidityLogo from "../../assets/images/humidity.png";
import pressureLogo from "../../assets/images/pressure.png";
import locationLogo from "../../assets/images/location.png";

const GetWeather = () => {
  const weather = useWeather("Ashgabat");
  return (
    weather && (
      <div className="weather__wrapper">
        <div
          className="weather__bg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="weather__top">
            <GlobalSvgSelector id={weather.weather[0].icon} />
            <div className="weather__name">
              <img src={locationLogo} alt="location" />
              <div>{weather.name}</div>
            </div>
          </div>
          <div className="weather__center">
            <div className="weather__temp">
              {Math.round(weather.main.temp)} <sub>°C</sub>
            </div>
            <div className="weather__center-row">
              <div className="weather__humidity">
                <img src={humidityLogo} alt="humidity" />
                <div> {weather.main.humidity} %</div>
              </div>
              <div className="weather__pressure">
                <img src={pressureLogo} alt="pressure" />
                <div>
                  {Math.round(weather.main.pressure * 750) / 1000} мм. рт. ст
                </div>
              </div>
            </div>
          </div>
          <div className="weather__bottom">
            <div className="weather__wind">
              <img src={windLogo} alt="wind" />
              <div> {weather.wind.speed} м/с </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default GetWeather;
