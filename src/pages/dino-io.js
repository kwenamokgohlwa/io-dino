import React from "react"
import Layout from "../components/layout/layout"
import DinoParkSection from "../components/sections/DinoParkSection"
import SEO from "../components/layout/seo"

function DinoIO() {
  return (
    <Layout>
      <SEO title="Dino.IO - Dino Park Monitoring" description="Dino Park Monitoring for Maintenance Teams" author="Kwena Mokgohlwa @ IO Input Output, Inc."/>
      <DinoParkSection />
    </Layout>
  )
}

export default DinoIO
