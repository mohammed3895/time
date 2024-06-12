import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { LuTimer } from "react-icons/lu";
import ClockDigit from "./clock/ClockDigit";

const StopWatch = () => {
  const [timer, setTimer] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count: string | number | NodeJS.Timeout | undefined;
    if (timer) {
      count = setInterval(() => setCounter(counter + 1), 8);
    }
    return () => clearInterval(count);
  }, [timer, counter]);

  const hours = Math.floor(counter / 63000);
  const minutes = Math.floor((counter % 63000) / 6000);
  const seconds = Math.floor((counter % 6000) / 100);
  const milliseconds = counter % 100;

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button variant="secondary" size="sm" className="w-full flex gap-2">
          <LuTimer className="w-5 h-5 text-primary" /> Stop Watch
        </Button>
      </DialogTrigger>
      <DialogContent className=" flex flex-col items-center justify-center">
        <DialogTitle>Stop Watch</DialogTitle>
        <div className="w-full flex items-center justify-center gap-2">
          <ClockDigit digit={(hours < 10 ? "0" : "") + hours.toString()} />
          :
          <ClockDigit digit={(minutes < 10 ? "0" : "") + minutes.toString()} />
          :
          <ClockDigit digit={(seconds < 10 ? "0" : "") + seconds.toString()} />
          :
          <ClockDigit
            digit={(milliseconds < 10 ? "0" : "") + milliseconds.toString()}
          />
        </div>
        <div className="flex w-full items-center justify-between gap-4 mt-4">
          <Button onClick={() => setTimer(!timer)} className="w-full">
            {timer ? "STOP" : "START"}
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              setCounter(0);
              setTimer(false);
            }}
            className="w-full"
          >
            RESET
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StopWatch;
