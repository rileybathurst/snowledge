import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import ReactMarkdown from "react-markdown"

function YT(props) {
  if (props.has) {
    return (
      <div className="blog_tube">
      <iframe title="{data.strapiBlogs.title}" width="560" height="315" src={`https://www.youtube.com/embed/${props.has}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="blog_tube__backgound">{/* stay gold */}</div>
    </div>
    )
  }
  return null
}

function Cz(props) {
  if (props.moving) {
    return (
      <>hey</>
    )
  }
  return null 
}

const BlogTemplate = ({ data }) => (
  <Layout>

<Img fluid={data.strapiBlogs.blog_cover.childImageSharp.fluid} className="blog-measure" />

    <div className="regular-page">
      <h1 className="blog-measure">{data.strapiBlogs.title}</h1>


        <Cz moving={data.strapiBlogs.Cover_is_video} />


{/*       <h4 className="blog-measure">
        Featured Ambassadors&nbsp;
        {data.strapiBlogs.teams.map(document => (
          
          <><Link to={`/team/${document.slug}`}>{document.name}</Link></>
          
        ))}
      </h4> */}

      <h4 className="blog-measure">
        {data.strapiBlogs.created_at}
      </h4>


      <YT has={data.strapiBlogs.blog_video} />

      {/* needs an if on the video */}
{/*       <div className="blog_tube">
        <iframe title="{data.strapiBlogs.title}" width="560" height="315" src={`https://www.youtube.com/embed/${data.strapiBlogs.blog_video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="blog_tube__backgound">{/* stay gold </div>
      </div> */}

      <div className="blog-measure">
        <ReactMarkdown
          source={data.strapiBlogs.content}
        />
      </div>

      <h4 className="blog-measure">
      Featured Ambassadors&nbsp;
</h4>

      <section className="mini-cards">
      {data.strapiBlogs.teams.map(document => (
            <article className="mini-card">

                <Link to={`/team/${document.slug}`} className="mini-card_profile">
                
                  <Img fluid={document.profile.childImageSharp.fluid}  className="profile"/>
                </Link>

                <h2>
                  <Link to={`/team/${document.slug}`}>
                      {document.name}
                    </Link>
                </h2>

                <section>
                  <p>{document.Sport}</p>
                  <p>{document.excerpt}</p>
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
    </div>
  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplate($id: String!) {
    strapiBlogs(id: {eq: $id}) {
      title
      content
      created_at(formatString: "MMMM Do, YYYY")
      cover_is_video

      teams {
        name
        slug
        excerpt
        Sport
        profile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      blog_cover {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog_video
    }

    allStrapiBlogs(limit: 9) {
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