// credits: https://github.com/sliit-foss/codefest-revamp/blob/main/src/components/CountdownTimer.tsx

import { useState, useEffect } from 'react';

import "./CountdownTimer.css"

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <div className="countdown">
      {timeBlocks.map((block) => (
        <div key={block.label} className="timeblock">
          <div className="timeblock-label">{block.label}</div>
          <div className="timeblock-value">{block.value.toLocaleString("en-US", {
            minimumIntegerDigits: 2
          })}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer; 