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
                <Link to={`/blogs/${document.node.slug}`}>
                    {document.node.title}
                </Link>
            </h2>

            
            <Link to={`/blogs/${document.node.slug}`} className="teamcoverimage">
                  <Img fluid={document.node.blog_cover.childImageSharp.fluid} />
                </Link>

            <p>{document.node.Content}</p>
        </article>
      ))}
    </section>
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