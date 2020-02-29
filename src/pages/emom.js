import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Emom = () => (
  <Layout>
    <SEO title="EMOM" />
    <h1>EMOM</h1>
    <p>Every # minutes for # minutes</p>
    <button>Start timer</button>
    <Link to="/">Go back</Link>
  </Layout>
)

export default Emom
