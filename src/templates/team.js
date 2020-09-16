import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import InstagramLogo from "../components/instagramLogo"

const TeamTemplate = ({ data }) => (
  <Layout>

{/* this needs a better naming structure */}
    <main className="team"> 

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

    <h3 className="mid-title">Blogs containing {data.strapiTeam.team_name}</h3>

    <ul className="team--grid blog-cards">
      {data.strapiTeam.blogs.map(blog => (
        <li className="team-card">
          <h2>
            <Link to={`/blogs/${blog.blog_slug}`}>{blog.blog_title}</Link>
          </h2>

          <Link to={`/blogs/${blog.blog_slug}`} className="teamcoverimage">
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
                {/* <Link to={`/team/${document.node.slug}`} className="mini-card_profile"> */}
                  <Img fluid={document.node.team_headshot.childImageSharp.fluid}  className="profile"/>
                {/* </Link> */}

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
          fluid(maxWidth: 300) {
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
      }
    }

    allStrapiTeam {
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
