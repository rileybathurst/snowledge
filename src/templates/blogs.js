// this is the category page
// multiple

import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

function More(props) {

  if (props.is) {
    return (
      <>
        {/* $plus */}
        <Link to={`/blogs/${props.current + 1}`}>{props.current + 1}</Link>
      </>
    )
  }
  return null
}

function Less(props) {

  // 2 is the weird number that it has one but its not the traditional
  if (props.current === 2) {
    return (
      <>
        {/* $plus */}
        <Link to="/blogs">1</Link>
      </>
    )
  } else if (props.down) {
    return (
      <>
        {/* $plus */}
        <Link to={`/blogs/${props.current - 1}`}>{props.current - 1}</Link>
      </>
    )
  }
  return null
}

const BlogsPage = ({ data }) => (
  <Layout>
    <section className="team--grid">
      {data.allStrapiBlogs.edges.map(document => (
        <article className="team-card">
          <h2>
            <Link to={`/blog/${document.node.blog_slug}`}>
              {document.node.blog_title}
            </Link>
          </h2>

          <Link to={`/blog/${document.node.blog_slug}`} className="teamcoverimage">
            <Img fluid={document.node.blog_cover.childImageSharp.fluid} />
          </Link>

          {/* <p>{document.node.blog_content}</p> */}
        </article>
      ))}
    </section>

    <h3 className="mid-title">Pagination</h3>
    more &nbsp; <More is={data.allStrapiBlogs.pageInfo.hasNextPage} current={data.allStrapiBlogs.pageInfo.currentPage} />
    <hr /> less &nbsp;
    <Less down={data.allStrapiBlogs.pageInfo.hasPreviousPage} current={data.allStrapiBlogs.pageInfo.currentPage} />

  </Layout>
)

export default BlogsPage

export const pageQuery = graphql`  
  query BlogsQuery($skip: Int, $limit: Int) {
    allStrapiBlogs(
      sort: {
        order: DESC,
        fields: created_at
      },
      limit: $limit,
      skip: $skip
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

      pageInfo {
        hasNextPage
        currentPage
        hasPreviousPage
      }
    }
  }
`