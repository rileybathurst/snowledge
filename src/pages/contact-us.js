import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Chimp from "../components/chimp"

const DownloadPage = () => (
  <Layout>
    {/* Has to be inside the top level <> */}
    <SEO title="Contact Us" />
    <main className="regular-page regular-measure  download-flex">

    <div>
      <Chimp />
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
