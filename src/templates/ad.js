import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const TeamTemplate = ({ data }) => (
  <Layout>
    hey
  </Layout>
)

export default TeamTemplate

export const query = graphql`
  query AdTemplate($id: String!) {
    strapiAds(id: {eq: $id}) {
      ad_title
    }
  }
`
