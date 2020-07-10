// this is the category page

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogsPage = ({ data }) => (
  <Layout>

      {data.allStrapiBlogs.edges.map(document => (
        <>
            <h2>
                <Link to={`/blogs/${document.node.slug}`}>
                    {document.node.title}
                </Link>
            </h2>

            <p>{document.node.Content}</p>
        </>
      ))}

  </Layout>
)

export default BlogsPage

export const pageQuery = graphql`  
  query BlogsQuery {
    allStrapiBlogs {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`