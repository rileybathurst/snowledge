import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Download from "../components/download"

const DownloadPage = () => (
  <Layout>
    <main className="regular-page">
      <SEO title="Download" />
      <h1>Download</h1>
      <Download />
    </main>
  </Layout>
)

export default DownloadPage
