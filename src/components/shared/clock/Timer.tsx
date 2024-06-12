import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoIosTimer } from "react-icons/io";
import ClockDigit from "./ClockDigit";
import { Input } from "@/components/ui/input";

interface TimerProps {
  initialSeconds: number;
}

const Timer = ({ initialSeconds }: TimerProps) => {
  const [timer, setTimer] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const [editHours, setEditHours] = useState(false);
  const [editMinutes, setEditMinutes] = useState(false);
  const [editSeconds, setEditSeconds] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (timer && totalSeconds > 0) {
      timerId = setTimeout(() => {
        setTotalSeconds(totalSeconds - 1);
      }, 1000);
    }
    if (totalSeconds === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      setTimer(false);
    }
    return () => timerId && clearTimeout(timerId);
  }, [totalSeconds, timer]);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const handleStart = () => {
    if (
      initialSeconds === 0 &&
      totalSeconds === 0 &&
      hours === 0 &&
      minutes === 0 &&
      seconds === 0
    ) {
      setTimer(false);
      return;
    }
    setTimer(!timer);
  };

  const handleReset = () => {
    setTotalSeconds(initialSeconds);
    setTimer(false);
  };

  const handleSetHours = (newHours: number) => {
    const newTotalSeconds = newHours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(newTotalSeconds);
  };
  const handleSetMinutes = (newMinutes: number) => {
    const newTotalSeconds = hours * 3600 + newMinutes * 60 + seconds;
    setTotalSeconds(newTotalSeconds);
  };

  const handleSetSeconds = (newSeconds: number) => {
    const newTotalSeconds = hours * 3600 + minutes * 60 + newSeconds;
    setTotalSeconds(newTotalSeconds);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex gap-2 justify-start md:justify-center"
        >
          <IoIosTimer className="w-5 h-5 text-primary" /> Timer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full flex items-center justify-center gap-2">
          {editHours ? (
            <form onSubmit={handleSubmit}>
              <Input
                className="w-10 h-10 min-w-10 md:w-12 md:h-12 md:min-w-12 p-2 rounded-md flex items-center justify-center text-base md:text-xl border"
                type="number"
                value={hours}
                onChange={(e) => handleSetHours(Number(e.target.value))}
                onBlur={() => setEditHours(false)}
              />
            </form>
          ) : (
            <ClockDigit
              digit={hours > 10 ? hours : 0 + hours}
              onClick={() => setEditHours(true)}
            />
          )}
          :
          {editMinutes ? (
            <form onSubmit={handleSubmit}>
              <Input
                className="w-10 h-10 min-w-10 md:w-12 md:h-12 md:min-w-12 rounded-md p-2 flex items-center justify-center text-base md:text-xl border"
                type="number"
                value={minutes}
                onChange={(e) => handleSetMinutes(Number(e.target.value))}
                onBlur={() => setEditMinutes(false)}
              />
            </form>
          ) : (
            <ClockDigit digit={minutes} onClick={() => setEditMinutes(true)} />
          )}
          :
          {editSeconds ? (
            <form onSubmit={handleSubmit}>
              <Input
                className="w-10 h-10 min-w-10 md:w-12 md:h-12 md:min-w-12 rounded-md p-2 flex items-center justify-center text-base md:text-xl border"
                type="number"
                value={seconds}
                onChange={(e) => handleSetSeconds(Number(e.target.value))}
                onBlur={() => setEditSeconds(false)}
              />
            </form>
          ) : (
            <ClockDigit digit={seconds} onClick={() => setEditSeconds(true)} />
          )}
        </div>
        <div className="flex w-full items-center justify-between gap-4 mt-4">
          <Button onClick={handleStart} className="w-full">
            {timer ? "STOP" : "START"}
          </Button>
          <Button
            variant="destructive"
            onClick={handleReset}
            className="w-full"
          >
            RESET
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Timer;
