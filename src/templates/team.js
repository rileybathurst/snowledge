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

    <Img fluid={data.strapiTeam.profile.childImageSharp.fluid}  className="profile"/>

    <header>
      <h1>{data.strapiTeam.name}</h1>
      
      <div className="icon-inline">
        <div className="icon-intext">
          <a href="https://instagram.com/{data.strapiTeam.instagram}">
            <InstagramLogo />
          </a>
        </div>
        <a href="https://instagram.com/{data.strapiTeam.instagram}" className="icon-text">@{data.strapiTeam.instagram}</a>
      </div>
    </header>

    <p className="bio">{data.strapiTeam.bio}</p>


    </main>

    <h3 className="mid-title">Blogs containing {data.strapiTeam.name}</h3>

    <ul className="team--grid blog-cards">
        {data.strapiTeam.blogs.map(blog => (
          <li className="team-card">
            <h2>
              <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
            </h2>



            <Link to={`/blogs/${blog.slug}`} className="teamcoverimage">

                  <Img fluid={blog.blog_cover.childImageSharp.fluid} />
                </Link>
                
            <p>{blog.content}</p>
          </li>
        ))}
    </ul>

    <h3 className="mid-title">Check out some other Snowledge Team</h3>

{/* this needs to filter out the person we are currenttly showing */}
    <section className="mini-cards">
        {data.allStrapiTeam.edges.map(document => (
            <article className="mini-card">

                {/* <Link to={`/team/${document.node.slug}`} className="mini-card_profile"> */}
                  <Img fluid={document.node.profile.childImageSharp.fluid}  className="profile"/>
                {/* </Link> */}

                <h2>
                    <Link to={`/team/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                <section>
                  <p>{document.node.Sport}</p>
                  <p>{document.node.excerpt}</p>
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
      name
      bio
      instagram
      profile {
        childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
        }
      }

      teamcoverimage {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blogs {
          title
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

    allStrapiTeam {
      edges {
        node {
          name
          Sport
          excerpt
          slug
          profile {
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
