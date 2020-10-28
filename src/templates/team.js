import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import InstagramLogo from "../components/instagramLogo"

function Hero(props) {
  if (props.latest !== null) {
    return (
      <div className="blog_tube">
        <iframe title="{data.strapiBlogs.title}" width="560" height="315" src={`https://www.youtube.com/embed/${props.latest}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="blog_tube__backgound">{/* stay gold */}</div>
      {/* blog_tube */}</div>
    )
  }
  return null
}

const TeamTemplate = ({ data }) => (
  <Layout>

{/* this needs a better naming structure */}
    <main className="team"> 

    <div className="team-cover">
      <Img fluid={data.strapiTeam.team_cover.childImageSharp.fluid} />
    </div>

    {/* Not 100% sure how Im using the cover at this point vs just adding it to the gallery
    <Img fluid={data.strapiTeam.teamcoverimage.childImageSharp.fluid}  className="teamcoverimage"/> */}

    <Img fluid={data.strapiTeam.team_headshot.childImageSharp.fluid}  className="profile"/>

    <header>
      <h1>{data.strapiTeam.team_name}</h1>
      
      <div className="icon-inline">
        <div className="icon-intext">
          <a href="https://instagram.com/{data.strapiTeam.team_instagram}">
            <InstagramLogo />
          </a>
        </div>
        <a href="https://instagram.com/{data.strapiTeam.team_instagram}" className="icon-text">@{data.strapiTeam.team_instagram}</a>
      </div>
    </header>

    <p className="bio">{data.strapiTeam.team_bio}</p>

    </main>

    {/* This needs to become only the latest as currently its any clips */}
    {data.strapiTeam.blogs.map(blog => (
      <Hero latest={blog.blog_cover_yt} />
    ))}


{/*     this will go back in but it's not first round
    <h3 className="mid-title">Offers associated with {data.strapiTeam.team_name}</h3>
    <ul className="team--grid blog-cards">
      {data.strapiTeam.ads.map(ad => (
        <li className="team-card">
          <h2><Link to={`/ad/${ad.ad_slug}`}>{ad.ad_title}</Link></h2>
          <Link to={`/ad/${ad.ad_slug}`} className="teamcoverimage"><Img fluid={ad.ad_cover.childImageSharp.fluid} /></Link>
        </li>
      ))}
    </ul>  */}

    <h3 className="mid-title">Blogs containing {data.strapiTeam.team_name}</h3>

    <ul className="team--grid blog-cards">
      {/* The slice limits this to 9 results */}
      {data.strapiTeam.blogs.slice(0, 9).map(blog => (
        <li className="team-card">
          <h2>
            <Link to={`/blog/${blog.blog_slug}`}>{blog.blog_title}</Link>
          </h2>

          <Link to={`/blog/${blog.blog_slug}`} className="teamcoverimage">
            <Img fluid={blog.blog_cover.childImageSharp.fluid} />
          </Link>

          <p>{blog.blog_content}</p>
        </li>
      ))}
    </ul>

    <h3 className="mid-title">Check out some other Snowledge Team</h3>

  {/* this needs to filter out the person we are currently showing */}
    <section className="mini-cards">
        {data.allStrapiTeam.edges.map(document => (
            <article className="mini-card">

                {/* Im not sure why this is currently commented out but Im trying not to break things */}
                <Link to={`/team/${document.node.team_slug}`} className="mini-card_profile">
                  <Img fluid={document.node.team_headshot.childImageSharp.fluid}  className="profile"/>
                </Link>

                <h2>
                    <Link to={`/team/${document.node.team_slug}`}>
                        {document.node.team_name}
                    </Link>
                </h2>

                <section>
                  <p>{document.node.team_sport}</p>
                  <p>{document.node.team_excerpt}</p>
                </section>

                <div className="profile-background"></div>
            </article>
        ))}
    </section>




          <h1>second try get the blogs right</h1>




  </Layout>
)

export default TeamTemplate

export const query = graphql`
  query TeamTemplate($id: String!) {
    strapiTeam(id: {eq: $id}) {
      team_name
      team_bio
      team_instagram

      team_headshot {
        childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
        }
      }

      team_cover {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blogs {
          blog_title
          blog_slug
          blog_cover {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          blog_cover_yt
      }

      ads {
        ad_title
        ad_slug
        ad_cover {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allStrapiTeam(
      sort: {order: ASC, fields: team_name},
      filter: {id: {ne: $id}}
      ) {
      edges {
        node {
          team_name
          team_sport
          team_excerpt
          team_slug
          team_headshot {
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

// hmm the seconf filter out doesnt seem to work
// filter: {team_name: {ne: "Riley Bathurst"}}
// (filter: {id: {ne: $id}})

// allStrapiPartnerResorts(filter: {pr_slug: {in: ["holiday", "Revelstoke", "meadows", "angel", "brundage", "eaglecrest"]}}) {


/*   allStrapiBlogs(
    sort: {
      order: DESC,
      fields: created_at
    },
    limit: 9
  ) {
    edges {
      node {
        blog_title
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
  } */