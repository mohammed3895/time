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
  const country = localStorage.getItem("country");
  const city = localStorage.getItem("city");
  return <LocationCard country={country} city={city} />;
};

export default ClientLocation;
