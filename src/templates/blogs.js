// this is the blogs page
// the reason its a template not a page is due to pagination its a bunch of pages

import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

function More(props) {

  if (props.is) {
    return (
      <>
        {/* $plus */}
        <h4 className="mid-title"><Link to={`/blogs/${props.current + 1}`}>Older Articles &nbsp;{props.current + 1} of {props.total}</Link></h4>
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
        <h4 className="mid-title"><Link to="/blogs">Newer Articles &nbsp;1 of {props.total}</Link></h4>
      </>
    )
  } else if (props.down) {
    return (
      <>
        {/* $plus */}
        <h4 className="mid-title"><Link to={`/blogs/${props.current - 1}`}>Newer Articles &nbsp;{props.current - 1} of {props.total}</Link></h4>
      </>
    )
  }
  return null
}

const BlogsPage = ({ data }) => (
  <Layout>

    <h2 className="mid-title">Stories from Snowledge</h2>

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

          {/* Add in the featured resorts logos, they are more important than the team */}
          {document.node.partner_resorts.map(pr => (

            <div className="teamlogoimage">
              <Link to={pr.pr_slug} className="">
                <Img fluid={pr.pr_logo.childImageSharp.fluid} />
              </Link>
              </div>

          ))}

        </article>
      ))}
    </section>

    {/* <h3 className="mid-title">Pagination</h3> */}
    {/* I need to do something cooler with this design but really its not that important */}
    <Less down={data.allStrapiBlogs.pageInfo.hasPreviousPage} current={data.allStrapiBlogs.pageInfo.currentPage} total={data.allStrapiBlogs.pageInfo.pageCount} />
    <More is={data.allStrapiBlogs.pageInfo.hasNextPage} current={data.allStrapiBlogs.pageInfo.currentPage} total={data.allStrapiBlogs.pageInfo.pageCount} />
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

          partner_resorts {
            pr_slug
            pr_logo {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
        }
      }

      pageInfo {
        hasNextPage
        currentPage
        hasPreviousPage
        pageCount
      }
    }
  }
`