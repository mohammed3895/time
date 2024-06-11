import { useEffect, useState } from "react";
import ClockDigitsWrapper from "./ClockDigitsWrapper";

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setDate(new Date());
  }, [date]);

  const hours = (date.getHours() % 12 <= 9 ? "0" : "") + (date.getHours() % 12);
  const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  const seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

  return (
    <div className="flex items-center justify-center gap-3">
      <ClockDigitsWrapper hours={hours} minutes={minutes} seconds={seconds} />
      <div className="w-12 h-12 min-w-12 rounded-lg p-4 flex items-center justify-center text-xl border">
        <h1>{date.getHours() % 12 > 12 ? "AM" : "PM"}</h1>
      </div>
    </div>
  );
};

export default Clock;
