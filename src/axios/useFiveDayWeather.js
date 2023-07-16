import axios from "axios";
import { useState, useEffect } from "react";

const SECOND_URL = process.env.REACT_APP_SECOND_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `${SECOND_URL}q=${city}&units=metric&lang=ru&appid=${API_KEY}`
        );
        setWeather(response.data);
        console.log("five day", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getWeather();
  }, [city]);

  return weather;
};

export default useWeather;
