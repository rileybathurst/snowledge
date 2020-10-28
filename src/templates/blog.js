// Single

import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ScreenshotSlideshow from '../components/screenshot-slideshow'
import Download from '../components/download'

import ReactMarkdown from "react-markdown"

function Cover(props) {
  if (props.is === "Photo") {
    return (
      <div className="blog_tube">
       <Img fluid={props.photo} className="blog-measure" />
       <div className="blog_tube__backgound">{/* stay gold */}</div>
      </div>
    )
  } else if (props.is === "YouTube") {
    return (
      <div className="blog_tube">
        <iframe title="{data.strapiBlogs.title}" width="560" height="315" src={`https://www.youtube.com/embed/${props.youtube}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="blog_tube__backgound">{/* stay gold */}</div>
      {/* blog_tube */}</div>
    )
  
  }

}

// there is always an array of answers but only a length if there are actually resorts
function IfResort(props) {
  if ( props.place.length > 0) {
    return (
      <>
        <hr />
        <h4 className="blog-measure">
          This article was captured at our Partner Resort(s)
        </h4>
      </>
    )
  }
  return null
}

// there is always an array of answers but only a length if there are actually resorts
function IfTeam(props) {
  if ( props.crew.length > 0) {
    return (
      <>
        <hr />
        <h4 className="blog-measure">
          Featured Ambassadors
        </h4>
      </>
    )
  }
  return null
}

const BlogTemplate = ({ data }) => (
  <Layout>
    <Cover is={data.strapiBlogs.blog_cover_media} photo={data.strapiBlogs.blog_cover.childImageSharp.fluid} youtube={data.strapiBlogs.blog_cover_yt} title={data.strapiBlogs.blog_title} />
    
      <div className="regular-page">
        <h1 className="blog-measure">{data.strapiBlogs.blog_title}</h1>


      <h4 className="blog-measure">
        {data.strapiBlogs.created_at}
      </h4>
      
      <div>
        <div className="blog-floater">
          <h3>DOWNLOAD</h3>
          <div className="blog-floater-back">{/* stay gold*/}</div>
          <Download />
          <ScreenshotSlideshow />
        </div>

        <ReactMarkdown
          source={data.strapiBlogs.blog_content}
          className="blog-measure"
        />
      </div>

      {/* 
      Ads will get there just not quite yet
      <div className="blog-measure">
        {data.allStrapiAds.edges.map(document => (
          <Link to={`/ad/${document.node.ad_slug}`}>
            <Img fluid={document.node.ad_cover.childImageSharp.fluid} />
          </Link>
        ))}
      </div> */}

      <IfResort place={data.strapiBlogs.partner_resorts.map(pr => (<>{pr.id}</>))} />

      <section className="team--grid">
        {data.strapiBlogs.partner_resorts.map(pr => (
          <article className="team-card">
            <h2>
              <Link to={`/partner-resorts/${pr.pr_slug}`}>
                {pr.pr_name}
              </Link>
            </h2>

            <Link to={`/partner-resorts/${pr.pr_slug}`} className="teamcoverimage">
              <Img fluid={pr.pr_cover.childImageSharp.fluid} />
            </Link>
          </article>
        ))}
      </section>


      <IfTeam crew={data.strapiBlogs.teams.map(pr => (<>{pr.id}</>))} />

      <section className="team--grid">
        {data.strapiBlogs.teams.map(team => (
          <article className="team-card">
            <h2>
              <Link to={`/team/${team.team_slug}`}>
                {team.team_name}
              </Link>
            </h2>

            <Link to={`/team/${team.team_slug}`} className="teamcoverimage">
              <Img fluid={team.team_cover.childImageSharp.fluid} />
            </Link>

            <Link to={`/team/${team.team_slug}`} className="teamcoverprofile">
              <Img fluid={team.team_headshot.childImageSharp.fluid}  className="profile"/>
            </Link>
          </article>
        ))}
      </section>

      <hr />


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
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      teams {
        id
        team_name
        team_slug
        team_cover {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        team_headshot {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      partner_resorts {
        id
        pr_name
        pr_slug
        pr_cover {
          childImageSharp {
            fluid(maxWidth: 600) {
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
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }


    allStrapiAds(limit: 1) {
      edges{
        node {
          ad_title
          ad_slug
          ad_cover {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

  }
`



/*  */