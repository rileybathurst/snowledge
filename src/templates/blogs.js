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
      
      <div className="blog_tube">
        <iframe title="{data.strapiBlogs.title}" width="560" height="315" src={`https://www.youtube.com/embed/${data.strapiBlogs.blog_video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="blog_tube__backgound">{/* stay gold */}</div>
      </div>{/* blog_tube */}
      
      <div className="blog-measure">
        <ReactMarkdown
          source={data.strapiBlogs.blog_content}
        />
      </div>

      <h4 className="blog-measure">
        Featured Ambassadors&nbsp;
      </h4>
      

      {data.strapiBlogs.teams.map(team => (


          <p>{team.team_name}</p>
      ))}



      <h3 className="mid-title">More articles</h3>
      
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
      
      
          {/* nova doesnt think this is closed? */}
          {/* <h1>hey</h1> */}
          
        </section>
  
      
    </div>{/* regular-page */}
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

      teams {
        team_name
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