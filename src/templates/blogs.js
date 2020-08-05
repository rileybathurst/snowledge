import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import ReactMarkdown from "react-markdown"

const BlogTemplate = ({ data }) => (
  <Layout>

    <h1>{data.strapiBlogs.title}</h1>

    <ReactMarkdown
      source={data.strapiBlogs.content}
    />
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