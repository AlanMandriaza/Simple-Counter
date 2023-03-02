import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = time => (time < 10 ? `0${time}` : time);

  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;

  return (
    <div className="seconds-counter">
      <span>{formatTime(minutes)}</span>:<span>{formatTime(secondsLeft)}</span>
    </div>
  );
};

export { SecondsCounter };
