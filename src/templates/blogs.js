import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import ReactMarkdown from "react-markdown"

const BlogTemplate = ({ data }) => (
  <Layout>

    <div className="regular-page">
      <h1 className="regular-measure">{data.strapiBlogs.title}</h1>

      {data.strapiBlogs.teams.map(document => (
        <h4 className="regular-measure">
        Featured Ambassadors {document.name}
        </h4>
      ))}

      <div className="regular-measure">
        <ReactMarkdown
          source={data.strapiBlogs.content}
        />
      </div>

      <h3 className="mid-title">More articles</h3>

      <ul className="list-list">
        {data.allStrapiBlogs.edges.map(document => (
          <li className="li-card">
            <h2>
                <Link to={`/blogs/${document.node.slug}`}>
                    {document.node.title}
                </Link>
            </h2>

            <Link to={`/blogs/${document.node.slug}`} className="teamcoverimage">
                  <Img fluid={document.node.blog_cover.childImageSharp.fluid} />
                </Link>

            <p>{document.node.Content}</p>
        </li>
      ))}
    </ul>


    </div>



  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplate($id: String!) {
    strapiBlogs(id: {eq: $id}) {
      title
      content
      teams {
        name
      }
    }

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