import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import { useToast } from "./ui/use-toast";

const getLocation = async () => {
  const res = await axios.get("https://ipinfo.io?token=da5bd63581ff35");
  const data = await res.data;

  localStorage.setItem("country", data.country);
  localStorage.setItem("city", data.city);
};
getLocation();

const ClientLocation = () => {
  const { toast } = useToast();
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const city = localStorage.getItem("city");
  const [location, setLocation] = useState({ c: "", cunt: "" });

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: city,
      days: "3",
    },
    headers: {
      "x-rapidapi-key": "6b0bbcabe1msh6201631009263e9p1e84acjsnd980b9516044",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data;
      const convertedTemp = data.current.temp_c;

      setTemp(convertedTemp.toString());
      setWeather(data.current.condition.text);
      setLocation({ c: data.location.name, cunt: data.location.country });
    } catch (error) {
      toast({
        title: "Error fetching weather data",
        description: "Please check your internet connection and try again",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LocationCard
      country={location.cunt}
      city={location.c}
      temp={temp}
      weather={weather}
    />
  );
};

export default ClientLocation;
