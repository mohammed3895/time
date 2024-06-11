const ClockDigit = ({ digit }: { digit: string }) => {
  return (
    <div className="w-12 h-12 min-w-12 rounded-lg p-4 flex items-center justify-center text-xl border">
      {digit}
    </div>
  );
};

export default ClockDigit;
