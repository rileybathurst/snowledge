import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogTemplate = ({ data }) => (
  <Layout>

    <h1>{data.strapiBlogs.title}</h1>
    <p>{data.strapiBlogs.content}</p>
  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplate($id: String!) {
    strapiBlogs(id: {eq: $id}) {
      title
      content
    }
  }
`