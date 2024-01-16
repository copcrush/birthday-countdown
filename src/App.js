import React, { useState, useEffect } from 'react';
import './App.css';

const BirthdayCountdown = ({ birthdayDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(birthdayDate);
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Birthday Countdown</h1>
      <div className="countdown-container">
        <div className="countdown-item">
          <p className="countdown-value">{timeLeft.days}</p>
          <p className="countdown-label">days</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-value">{timeLeft.hours}</p>
          <p className="countdown-label">hours</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-value">{timeLeft.minutes}</p>
          <p className="countdown-label">minutes</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-value">{timeLeft.seconds}</p>
          <p className="countdown-label">seconds</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  // Set your birthday date in the format 'YYYY-MM-DD'
  const birthdayDate = '2024-12-31';

  return (
    <div className="App">
      <BirthdayCountdown birthdayDate={birthdayDate} />
    </div>
  );
}

export default App;

