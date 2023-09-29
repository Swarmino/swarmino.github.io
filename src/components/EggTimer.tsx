import React, { useState, useEffect } from 'react';

interface EggTimerProps {}

const EggTimer: React.FC<EggTimerProps> = () => {
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  const presetTimes = [
    { label: '10 sec', time: 10 }, // 10 seconds
    { label: 'Soft Boiled', time: 300 }, // 5 minutes
    { label: 'Medium Boiled', time: 420 }, // 7 minutes
    { label: 'Hard Boiled', time: 600 }, // 10 minutes
  ];

  useEffect(() => {
    if (timerActive && timeLeft !== null) {
      const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          clearInterval(timerInterval);
          setTimerActive(false);
          alert('Timer done');
        }
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timerActive, timeLeft]);

  const startTimer = (time: number) => {
    setSelectedTime(time);
    setTimeLeft(time);
    setTimerActive(true);
  };

  return (
    <div>
      <h1>Egg Timer</h1>
      <div>
        <h2>Choose a Preset</h2>
        <ul>
          {presetTimes.map((preset, index) => (
            <li key={index}>
              <button onClick={() => startTimer(preset.time)}>
                {preset.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Timer</h2>
        {timerActive ? (
          <div>
            <p>Time Remaining: {timeLeft} seconds</p>
            <button onClick={() => setTimerActive(false)}>Stop Timer</button>
          </div>
        ) : (
          <p>Timer not running</p>
        )}
      </div>
    </div>
  );
};

export default EggTimer;
