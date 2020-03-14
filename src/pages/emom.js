import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Countup from "../components/countup/countup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FiChevronLeft } from 'react-icons/fi';

import "./amrap.css"

const Amrap = () => {
  const [rounds, setRounds] = useState(false);
  const [work, setWork] = useState(false);
  const [rest, setRest] = useState(false);

  const [active, setActive] = useState(false);

  const startTimer = () => setActive(!active);

  const onRoundsChange = event => setRounds(event.target.value);
  const onWorkChange = event => setWork(event.target.value);
  const onRestChange = event => setRest(event.target.value);


  const formFields = () => {
    return (
      <>
      <label for="rounds">Rounds</label>
      <input class="amrap__input" 
          value={rounds} 
          type="number" 
          onChange={onRoundsChange} 
          placeholder="00"
          name="rounds"
          id="rounds"
        />
        <label for="work">Work</label>
        <input class="amrap__input" 
          value={work} 
          type="number" 
          onChange={onWorkChange} 
          placeholder="00"
          name="work"
          id="work"
        />
        <label for="rest">Rest</label>
        <input class="amrap__input" 
          value={rest} 
          type="number" 
          onChange={onRestChange} 
          placeholder="00"
          name="rest"
          id="rest"
        />
      </>
    )
  }

  return (
    <Layout>
      <SEO title="EMOM"/>
      <header>
        <Link to="/"><FiChevronLeft /></Link>
        <h1>EMOM</h1>
      </header>
      <main>
        <div class="amrap">
          {active
            ? <Countup seconds={(work * 60)} />
            : formFields()
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
