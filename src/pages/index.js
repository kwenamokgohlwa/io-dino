import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="IO Input Output, Inc. - Jarassic Systems" description="Jarassic Solutions for Epic Problems" author="Kwena Mokgohlwa @ IO Input Output, Inc."/>
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
