import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

const getLocation = async () => {
  const res = await axios.get("https://ipinfo.io?token=da5bd63581ff35");
  const data = await res.data;

  localStorage.setItem("country", data.country);
  localStorage.setItem("city", data.city);
};
getLocation();

const ClientLocation = () => {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const country = localStorage.getItem("country");
  const city = localStorage.getItem("city");

  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${city}/${country}`,
    headers: {
      "x-rapidapi-key": "6b0bbcabe1msh6201631009263e9p1e84acjsnd980b9516044",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const convertedTemp = (
          ((response.data.main.temp - 32) * 5) /
          9
        ).toFixed(0);
        setTemp(convertedTemp.toString());
        setWeather(response.data.weather[0].main);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <LocationCard country={country} city={city} temp={temp} weather={weather} />
  );
};

export default ClientLocation;
