import React, { useEffect, useState } from "react"
import "./countdown.css"

const Countdown = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if (!countdown) return

    const countdownIntervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(countdownIntervalId);
  }, [countdown])

  /**
   * Format time from seconds to 59:59
   * @param timeLeft
   * @returns {string}
   */
  const formatTime = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  return (
    <div>
      <div class="countdown">
        { countdown ? formatTime(countdown) : '' }
        { !countdown && timeLeft ? formatTime(timeLeft) : '' }
        { !countdown && !timeLeft ? 'Done' : ''}
        </div>
    </div>
  );
};

export default Countdown;