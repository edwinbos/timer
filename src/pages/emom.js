import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Amrap = () => (
  <Layout>
    <SEO title="AMRAP" />
    <h1>AMRAP</h1>
    <p>As many rounds as possible in</p>
    <button>Start timer</button>
    <Link to="/">Go back</Link>
  </Layout>
)

export default Amrap
