import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const AdTemplate = ({ data }) => (
  <Layout>
    <div className="regular-page">
      <Img fluid={data.strapiAds.ad_cover.childImageSharp.fluid} className="regular-measure" />
      <h1 className="regular-measure hero-card">{data.strapiAds.ad_title}</h1>
    </div>
  </Layout>
)

export default AdTemplate

export const query = graphql`
  query AdTemplate($id: String!) {
    strapiAds(id: {eq: $id}) {
      ad_title
      ad_cover {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
