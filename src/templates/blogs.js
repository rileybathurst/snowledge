import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import ReactMarkdown from "react-markdown"

function YT(props) {
  if (props.has) {
    return (
      <div className="blog_tube">
        <iframe title="{data.strapiBlogs.blog_title}" width="560" height="315" src={`https://www.youtube.com/embed/${props.has}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="blog_tube__backgound">{/* stay gold */}</div>
    </div>
    )
  }
  return null
}

function Cz(props) {
  if (props.moving === "photo") {
    return (
      <>photo</>
    )
  } else if (props.moving === "youtube") {
    return (
      <>youtube</>
    )
  
  }
  return null
}

const BlogTemplate = ({ data }) => (
  <Layout>

    <Img fluid={data.strapiBlogs.blog_cover.childImageSharp.fluid} className="blog-measure" />

    <div className="regular-page">
      <h1 className="blog-measure">{data.strapiBlogs.blog_title}</h1>

      <Cz moving={data.strapiBlogs.Cover_is_video} check={data.strapiBlogs.title} />

      <h4 className="blog-measure">
        {data.strapiBlogs.created_at}
      </h4>

      <YT has={data.strapiBlogs.blog_cover_yt} />

      {/* needs an if on the video */}
{/*       <div className="blog_tube">
        <iframe title="{data.strapiBlogs.title}" width="560" height="315" src={`https://www.youtube.com/embed/${data.strapiBlogs.blog_video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="blog_tube__backgound">{/* stay gold </div>
      </div> */}

      <div className="blog-measure">
        <ReactMarkdown
          source={data.strapiBlogs.blog_content}
        />
      </div>

      <h4 className="blog-measure">
        Featured Ambassadors&nbsp;
      </h4>

      <section className="mini-cards">
        {data.strapiBlogs.teams.map(document => (
          <article className="mini-card">

            <Link to={`/team/${document.team_slug}`} className="mini-card_profile">            
              <Img fluid={document.team_headshot.childImageSharp.fluid}  className="profile"/>
            </Link>

            <h2>
              <Link to={`/team/${document.team_slug}`}>
                  {document.team_name}
                </Link>
            </h2>

            <section>
              <p>{document.team_sport}</p>
              <p>{document.team_excerpt}</p>
            </section>

            <div className="profile-background"></div>
        </article>
        ))}
    </section>

      <h3 className="mid-title">More articles</h3>

      <section className="team--grid">
        {data.allStrapiBlogs.edges.map(document => (
          <article className="team-card">
            <h2>
              <Link to={`/blogs/${document.node.blog_slug}`}>
                {document.node.title}
              </Link>
            </h2>

            <Link to={`/blogs/${document.node.blog_slug}`} className="teamcoverimage">
              <Img fluid={document.node.blog_cover.childImageSharp.fluid} />
            </Link>

            <p>{document.node.blog_content}</p>
          </article>
        ))}
      </section>
    </div>
  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplate($id: String!) {
    strapiBlogs(id: {eq: $id}) {
      blog_title
      blog_content
      created_at(formatString: "MMMM Do, YYYY")
      blog_cover_media
      blog_cover_yt
      
      blog_cover {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team {
        team_name
        team_slug
        team_excerpt
        team_sport
        team_headshot {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allStrapiBlogs(limit: 9) {
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