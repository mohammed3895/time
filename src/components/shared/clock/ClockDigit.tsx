const ClockDigit = ({ digit }: { digit: string }) => {
  return (
    <div className="w-10 md:w-12 h-10 md:h-12 min-w-10 md:min-w-12 rounded-md p-4 flex items-center justify-center text-base md:text-xl border">
      {digit}
    </div>
  );
};

export default ClockDigit;
