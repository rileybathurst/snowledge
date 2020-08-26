import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'


const TeamTemplate = ({ data }) => (
  <Layout>

{/* this needs a better naming structure */}
    <main className="team"> 


    {/* Not 100% sure how Im using the cover at this point vs just adding it to the gallery
    <Img fluid={data.strapiTeam.teamcoverimage.childImageSharp.fluid}  className="teamcoverimage"/> */}

    <Img fluid={data.strapiTeam.profile.childImageSharp.fluid}  className="profile"/>

    <header>
      <h1>{data.strapiTeam.name}</h1>

      

      Instagram
      <a href="https://instagram.com/{data.strapiTeam.instagram}">@{data.strapiTeam.instagram}</a>
    </header>

    <p className="bio">{data.strapiTeam.bio}</p>


    </main>

    <ul className="team--grid blog-cards">
        {data.strapiTeam.blogs.map(blog => (
          <li className="team-card">
            <h2>
              <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
            </h2>
            <p>{blog.content}</p>
          </li>
        ))}
    </ul>

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
      }
    }
  }
`
