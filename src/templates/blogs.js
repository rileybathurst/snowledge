import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

import ReactMarkdown from "react-markdown"

const BlogTemplate = ({ data }) => (
  <Layout>

    <div className="regular-page">
      <h1 className="regular-measure">{data.strapiBlogs.title}</h1>

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
    }

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