import React from "react"
import { Link } from "gatsby"

const TimerTypes = () => (
    <ul class="timer-types">
      <li class="timer-types__item">
        <Link to="/amrap/">AMRAP</Link>
      </li>
      <li class="timer-types__item">
        <Link to="/for-time/">For time</Link>
      </li>
      <li class="timer-types__item">
        <Link to="/emom/">EMOM</Link>
      </li>
      <li class="timer-types__item">
        <Link to="/tabata/">Tabata</Link>
      </li>
    </ul>
)

export default TimerTypes
