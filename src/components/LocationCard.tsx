import { cn } from "@/lib/utils";
import { LuLoader2 } from "react-icons/lu";

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
  return (
    <div className="flex w-full items-start justify-between gap-8">
      <div className="flex flex-col items-center justify-center">
        {temp ? (
          <h1
            className={cn("text-4xl font-bold invisible", {
              "animate-in duration-300 visible": temp as unknown as boolean,
            })}
          >
            {temp}°
          </h1>
        ) : (
          <LuLoader2 className="w-5 h-5 to-muted-foreground animate-spin" />
        )}
        <h3 className="text-base font-medium text-muted-foreground">
          {weather}
        </h3>
      </div>
      {country != null ? (
        <h3 className="text-base font-medium">
          {country} - {city}
        </h3>
      ) : (
        <div />
      )}
    </div>
  );
};

export default LocationCard;
