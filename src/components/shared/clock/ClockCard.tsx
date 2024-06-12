import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { IoMdPartlySunny } from "react-icons/io";
import Clock from "./Clock";
import { useTheme } from "@/components/theme-provider";
import ClientLocation from "@/components/ClientLocation";

const ClockCard = () => {
  const { setTheme } = useTheme();
  const [date, setDate] = useState<Date>(new Date());
  const [timeZones, setTimeZones] = useState([
    {
      name: "Your Time",
      zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    { name: "New York", zone: "America/New_York" },
    { name: "London", zone: "Europe/London" },
    { name: "Tokyo", zone: "Asia/Tokyo" },
  ]);

  useEffect(() => {
    setTimeZones(timeZones);
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, [timeZones]);

  useEffect(() => {
    const hours = date.getHours();
    if (hours >= 19 || hours < 5) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [date, setTheme]);

  const getTimeOfDay = (hours: number) => {
    if (hours >= 5 && hours < 12) {
      return { greeting: "Good Morning", Icon: IoMdPartlySunny };
    } else if (hours >= 12 && hours < 19) {
      return { greeting: "Good Afternoon", Icon: IoMdPartlySunny };
    } else if (hours >= 19 || hours < 5) {
      return { greeting: "Good Night", Icon: FaCloudMoon };
    }
  };

  const hours = date.getHours();
  const timeOfDay = getTimeOfDay(hours);

  const renderTimeZones = () => {
    return timeZones.map((tz, index) => {
      const timeZoneDate = new Date(
        date.toLocaleString("en-US", { timeZone: tz.zone })
      );
      return (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg border px-4 py-6 md:py-8"
        >
          <h2 className="text-xl font-medium mb-4 md:mb-6 text-primary">
            {tz.name}
          </h2>
          <Clock date={timeZoneDate} />
        </div>
      );
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-background transition-colors ease-in-out items-center justify-center gap-3 w-full  text-xl p-4 md:p-8 rounded-xl shadow-lg"
      )}
    >
      {timeOfDay && (
        <div className="flex items-end gap-4 mb-6">
          <timeOfDay.Icon className="w-10 h-10 text-yellow-600" />
          <ClientLocation />
        </div>
      )}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-center">
        {renderTimeZones()}
      </div>
    </div>
  );
};

export default ClockCard;
