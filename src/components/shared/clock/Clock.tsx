import ClockDigitsWrapper from "./ClockDigitsWrapper";

const Clock = ({ date }: { date: Date }) => {
  const hours = (date.getHours() % 12 <= 9 ? "0" : "") + (date.getHours() % 12);
  const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  const seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

  return (
    <div className="flex items-center justify-center gap-3">
      <ClockDigitsWrapper hours={hours} minutes={minutes} seconds={seconds} />
      <div className="w-10 md:w-12 h-10 md:h-12 min-w-10 md:min-w-12 rounded-md p-4 flex items-center justify-center text-base md:text-xl border">
        <h1>{date.getHours() % 12 > 12 ? "AM" : "PM"}</h1>
      </div>
    </div>
  );
};

export default Clock;
