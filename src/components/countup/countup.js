import React, { useEffect, useState } from "react"
import "./countup.css"

const Countup = ({ seconds }) => {
  const [max, setMax] = useState(seconds)
  const [timeLeft, setTimeLeft] = useState(-10);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (timeLeft === seconds) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft + 1);
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
      <div class="amrap__countdown countdown">
        { countdown ? formatTime(countdown) : '' }
        { !countdown && timeLeft !== seconds ? formatTime(timeLeft) : '' }
        { !countdown && timeLeft === seconds ? 'Done' : ''}
        </div>
    </div>
  );
};

export default Countup;