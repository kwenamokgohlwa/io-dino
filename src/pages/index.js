import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="IO Input Output - Jarassic Systems" />
      <img src="/images/logos/input-output-logo-mark.svg" alt="input-output-logo" />
      <h1>IO Input Output: Jarassic Systems</h1>
      <p>We have just launched our latest addition to our family of products, Dino.IO</p>
      <Link to="/page-2/">Dino.IO</Link> <br />
    </Layout>
  )
}

export default IndexPage
