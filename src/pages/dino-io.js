import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function DinoIO() {
  return (
    <Layout>
      <SEO title="Dino.IO - Dino Park Monitoring" />
      <img src="/images/logos/dino-logo.svg" alt="dino-logo" width="320" height="auto"/>
      <h1>Dino.IO - Dino Park Monitoring</h1>
      <p>Dino.IO is a Dino Park Monitoring Tool for Maintenance Teams. We save lives so you can focus on what really matters :D</p>
      <Link to="/">IO Input Output</Link>
    </Layout>
  )
}

export default DinoIO
