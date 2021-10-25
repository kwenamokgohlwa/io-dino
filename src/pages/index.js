import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IOInputOutput() {
  return (
    <Layout>
      <SEO title="IO Input Output, Inc. - Jarassic Systems" />
      <img src="/images/logos/input-output-logo.svg" alt="input-output-logo" width="480" height="auto"/>
      <h1>IO Input Output: Jarassic Systems</h1>
      <p>Solutions to Jarassic problems with Systems that stand the test of Prehistoric time...</p>
      <Link to="/dino-io/">Dino.IO</Link> <br />
    </Layout>
  )
}

export default IOInputOutput
