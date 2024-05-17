import React, { useState, useEffect } from 'react';
import './App.css';
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString('pt-BR', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="clock-container">
      <h1>Relógio Digital</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Clock;
