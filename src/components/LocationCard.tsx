import { useEffect, useState } from "react";
import TextLoading from "./shared/TextLoading";

const LocationCard = ({
  country,
  city,
  temp,
  weather,
}: {
  country: string | null;
  city: string | null;
  temp: string;
  weather: string;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex w-full items-start justify-between gap-8">
      <div className="flex flex-col items-start justify-center gap-1">
        {loading ? (
          <TextLoading className="h-6" />
        ) : (
          <h1 className="text-2xl md:text-4xl font-bold">{temp}°</h1>
        )}
        {loading ? (
          <TextLoading className="h-3" />
        ) : weather ? (
          <h3 className="text-sm md:text-base font-medium text-muted-foreground">
            {weather}
          </h3>
        ) : null}
      </div>

      {loading ? (
        <TextLoading />
      ) : country ? (
        <h3 className="text-base font-medium">
          {country} - {city}
        </h3>
      ) : null}
    </div>
  );
};

export default LocationCard;
