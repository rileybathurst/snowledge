import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Layout from '../components/layout'
// import Logo from '../components/logo'
// import SmallMenu from '../components/smallMenu'

const PartnerResortTemplate = ({ data }) => (
  <Layout>

    <h1>{data.strapiPartnerResorts.name}</h1>
    <p>{data.strapiPartnerResorts.writeup}</p>
  </Layout>
)

export default PartnerResortTemplate

export const query = graphql`
  query PartnerResortTemplate($id: String!) {
    strapiPartnerResorts(id: {eq: $id}) {
      name
      writeup
    }
  }
`