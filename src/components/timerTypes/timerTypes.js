import React from "react"
import { Link } from "gatsby"
import "./timerTypes.css"

const TimerTypes = () => (
    <ul class="timer-types">
      <li class="timer-types__item">
        <Link to="/amrap/" class="timer-types__link timer-types__link--amrap">AMRAP</Link>
      </li>
      <li class="timer-types__item">
        <Link to="/for-time/"class="timer-types__link timer-types__link--for-time">For time</Link>
      </li>
      <li class="timer-types__item">
        <Link to="/emom/"class="timer-types__link timer-types__link--emom">EMOM</Link>
      </li>
      <li class="timer-types__item">
        <Link to="/tabata/"class="timer-types__link timer-types__link--tabata">Tabata</Link>
      </li>
    </ul>
)

export default TimerTypes
