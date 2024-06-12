import { useState, useEffect } from "react";

interface TimerProps {
  initialSeconds: number;
}

const Timer = ({ initialSeconds }: TimerProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  return <div>Timer: {seconds} seconds</div>;
};

export default Timer;
