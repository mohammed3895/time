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
  return (
    <div className="flex w-full items-start justify-between gap-8">
      <div className="flex flex-col items-center justify-center">
        {temp ? (
          <h1 className="text-4xl font-bold">{temp}°</h1>
        ) : (
          <TextLoading />
        )}
        {weather ? (
          <h3 className="text-base font-medium text-muted-foreground">
            {weather}
          </h3>
        ) : (
          <TextLoading />
        )}
      </div>
      {country != null ? (
        <h3 className="text-base font-medium">
          {country} - {city}
        </h3>
      ) : (
        <TextLoading />
      )}
    </div>
  );
};

export default LocationCard;
