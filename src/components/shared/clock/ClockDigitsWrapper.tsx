import ClockDigit from "./ClockDigit";

interface ClockDigitProps {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds?: number;
}

const ClockDigitsWrapper = ({
  hours,
  minutes,
  seconds,
  milliseconds,
}: ClockDigitProps) => {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <ClockDigit digit={hours} />
      :
      <ClockDigit digit={minutes} />
      :
      <ClockDigit digit={seconds} />
      {milliseconds && ': ' + <ClockDigit digit={milliseconds} />}
    </div>
  );
};

export default ClockDigitsWrapper;
