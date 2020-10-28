import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Download from "../components/download"

const DownloadPage = () => (
  <Layout>
    <main className="regular-page download-flex">
      <SEO title="Download" />

      <div>
        <h1>Download</h1>
        <Download />
      </div>

      <ul id="features-list">
        <li>View current snow conditions, and research info on nearby resorts, offers, and current contests.</li>
        <li>Stay connected with friends, family, and your favorite resorts, and see what skiers and riders around the world are up to.</li>
        <li>Find your friends on the mountain and track your day with stats, recorded weather, and maps showing runs skied.</li>
        <li>Customize your profile, bio, and gallery, and view detailed activity summaries of your days skied.</li>
        <li>Get lift status updates, conditions, and parking information, as well as offers and contests from your favorite resorts.</li>
      </ul>
    </main>
  </Layout>
)

export default DownloadPage
