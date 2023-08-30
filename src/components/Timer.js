import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState('0s');

  useEffect(() => {
    setStartTime(new Date()); // Esto solo se ejecutará una vez cuando se monte el componente
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = now - startTime; // en milisegundos

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));

      if (days >= 1) {
        setTimeElapsed(`${days} days ago`);
      } else if (hours >= 1) {
        setTimeElapsed(`${hours} hours ago`);
      } else {
        setTimeElapsed('hour ago');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]); // startTime como dependencia

  return <div className="timer">{timeElapsed}</div>;
};

export default Timer;
