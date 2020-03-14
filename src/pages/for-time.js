import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Countup from "../components/countup/countup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FiChevronLeft } from 'react-icons/fi';

import "./amrap.css"

const Amrap = () => {
  const [value, setValue] = useState(false);
  const [active, setActive] = useState(false);

  const startTimer = () => setActive(!active);
  const onInputChange = event => setValue(event.target.value);

  return (
    <Layout>
      <SEO title="For time"/>
      <header>
        <Link to="/"><FiChevronLeft /></Link>
        <h1>For time</h1>
      </header>
      <main>
        <div class="amrap">
          {active
            ? <Countup seconds={(value * 60)} />
            : <input class="amrap__input" 
                     value={value} 
                     type="number" 
                     onChange={onInputChange} 
                     placeholder="00"
              />
          }
          <button class="amrap__button" onClick={startTimer}>
            {`${active ? 'Stop' : 'Start'} timer`}
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Amrap
