interface ClockDigitProps {
  digit: number;
  onClick?: () => void;
}

const ClockDigit = ({ digit, onClick }: ClockDigitProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-10 h-10 min-w-10 md:w-12 md:h-12 md:min-w-12 rounded-md p-4 flex items-center justify-center text-base md:text-xl border"
    >
      {digit.toString().padStart(2, "0")}
    </div>
  );
};

export default ClockDigit;
