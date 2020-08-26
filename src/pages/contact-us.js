import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Chimp from "../components/chimp"

const DownloadPage = () => (
  <Layout>
    {/* Has to be inside the top level <> */}
    <SEO title="Contact Us" />
    <main className="regular-page">
      <Chimp />
    </main>
  </Layout>
)

export default DownloadPage
