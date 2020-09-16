// this is the category page

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const TeamPage = ({ data }) => (
  <Layout>
    <section className="team--grid"> {/* is this a section? ddouble check that */}
      {data.allStrapiTeam.edges.map(document => (
        <article className="team-card">{/* again check this HTML */}

          <Link to={`/team/${document.node.team_slug}`} className="teamcoverimage">
            <Img fluid={document.node.team_cover.childImageSharp.fluid} />
          </Link>

          <Link to={`/team/${document.node.team_slug}`} className="teamcoverprofile">
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

          <div className="profile-background">{/* stay gold */}</div>
        </article>
      ))}
    </section>
  </Layout>
)

export default TeamPage

export const pageQuery = graphql`  
  query TeamQuery {
    allStrapiTeam {
      edges {
        node {
          id
          team_name
          team_bio
          team_instagram
          team_slug
          team_sport
          team_excerpt

          team_cover {
            childImageSharp {
              fluid(maxWidth: 300) {
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
      }
    }
  }
`