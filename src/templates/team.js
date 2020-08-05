import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'


const TeamTemplate = ({ data }) => (
  <Layout>

    <Img fluid={data.strapiTeam.profile.childImageSharp.fluid}  className="profile"/>

    <h1>{data.strapiTeam.name}</h1>

    <p>{data.strapiTeam.bio}</p>

    Instagram
    <a href="https://instagram.com/{data.strapiTeam.instagram}">@{data.strapiTeam.instagram}</a>

    <ul>
        {data.strapiTeam.blogs.map(blog => (
          <li>
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
      blogs {
          title
          slug
      }
    }
  }
`
