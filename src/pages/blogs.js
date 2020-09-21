// this is the category page

import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const BlogsPage = ({ data }) => (
  <Layout>
    <section className="team--grid">
      {data.allStrapiBlogs.edges.map(document => (
        <article className="team-card">
          <h2>
            <Link to={`/blogs/${document.node.blog_slug}`}>
              {document.node.blog_title}
            </Link>
          </h2>

          <Link to={`/blogs/${document.node.blog_slug}`} className="teamcoverimage">
            <Img fluid={document.node.blog_cover.childImageSharp.fluid} />
          </Link>

          {/* <p>{document.node.blog_content}</p> */}
        </article>
      ))}
    </section>

    <h3 className="mid-title">Pagination</h3>
    <Link to="/blogs/2">next</Link>
  </Layout>
)

export default BlogsPage

export const pageQuery = graphql`  
  query BlogsQuery {
    allStrapiBlogs(
      sort: {order: DESC, fields: created_at},
      limit: 9,
      skip: 10
      ) {
      edges {
        node {
          id
          blog_title
          blog_content
          blog_slug

          blog_cover {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`