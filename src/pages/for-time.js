import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForTime = () => (
  <Layout>
    <SEO title="For time" />
    <h1>For time</h1>
    <p>As fast as possible for time</p>
    <button>Start timer</button>
    <Link to="/">Go back</Link>
  </Layout>
)

export default ForTime
