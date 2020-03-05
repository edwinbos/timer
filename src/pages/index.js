import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TimerTypes from "../components/timerTypes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="header">
      <div></div>
      <h1>Timer</h1>
    </div>
    <TimerTypes />
  </Layout>
)

export default IndexPage
