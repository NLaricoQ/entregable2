import axios from "axios";
import { kelvinToCelsius } from "../utils/kelvinToCelsius";
import { kelvintoFarenheit } from "../utils/kelvinToFarenheit";
import { getIconById } from "../utils/getIconById";

export const getCurrentWeather = async (latitud, lon) => {
  try {
    const params = {
      lat: latitud,
      lon,
      appid: "379baa259b0e2780122904b63c0ed5d7",
    };
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params,
      }
    );
    const weatherInfo = {
      country: res.data.sys.country,
      city: res.data.name,
      weather: {
        main: res.data.weather[0].main,
        description: res.data.weather[0].description,
        icon: getIconById(res.data.weather[0].icon),
      },
      temperature: {
        kelvin: res.data.main.temp,
        celsius: kelvinToCelsius(res.data.main.temp),
        farenheit: kelvintoFarenheit(res.data.main.temp),
      },
    };
    return weatherInfo;
  } catch (error) {
    console.log(error);
  }
};
