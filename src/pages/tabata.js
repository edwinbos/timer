import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tabata = () => (
  <Layout>
    <SEO title="Tabata" />
    <h1>Tabata</h1>
    <p>Set your tabata timer</p>
    <button>Start timer</button>
    <Link to="/">Go back</Link>
  </Layout>
)

export default Tabata
