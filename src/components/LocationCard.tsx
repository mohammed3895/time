const LocationCard = ({
  country,
  city,
}: {
  country: string | null;
  city: string | null;
}) => {
  return (
    <div>
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
