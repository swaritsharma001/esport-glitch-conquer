import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(19, 0, 0, 0); // 7:00 PM

      // If it's past 7 PM today, target tomorrow
      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center">
      <TimeBox value={timeLeft.hours} label="Hours" />
      <span className="text-4xl text-foreground font-bold">:</span>
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <span className="text-4xl text-foreground font-bold">:</span>
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border-2 border-primary rounded-lg p-4 min-w-[80px] shadow-[0_0_20px_rgba(0,217,255,0.3)]">
      <span className="text-4xl md:text-5xl font-bold text-foreground">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default CountdownTimer;
