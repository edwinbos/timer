import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Countdown from "../components/countdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Amrap = () => {
  const [value, setValue] = useState(false);
  const [active, setActive] = useState(false);

  const startTimer = () => setActive(!active);
  const onInputChange = event => setValue(event.target.value);

  return (
    <Layout>
      <SEO title="AMRAP"/>
      <header>
        <Link to="/">&larr;</Link><h1>AMRAP</h1>
      </header>
      <main>
        <p>As Many Rounds As Possible</p>
        {active
          ? <Countdown seconds={(value * 60) + 10} />
          : <input value={value} type="number" onChange={onInputChange} />
        }
        <button onClick={startTimer}>{`${active ? 'Stop' : 'Start'} timer`}</button>
      </main>
    </Layout>
  );
};

export default Amrap
