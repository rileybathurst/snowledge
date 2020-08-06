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
                <Link to={`/team/${document.node.slug}`} className="profile">
                    <Img fluid={document.node.profile.childImageSharp.fluid}  className="profile"/>
                </Link>

                {/* <Link to={`/team/${document.node.slug}`} className="profile">
                    <Img fluid={document.node.teamcoverimage.childImageSharp.fluid}  className="teamcoverimage"/>
                </Link> */}

                <h2>
                    <Link to={`/team/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                <section>
                  <p>Sport</p>
                  <p>Mountain</p>
                  <p>Excerpt</p>
                </section>

                <div className="profile-background">{/* stay gold */}</div>

                {/* <p>{document.node.Content}</p> */}
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
          name
          bio
          instagram
          slug
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

        }
      }
    }
  }
`

/* teamcoverimage {
  childImageSharp {
    fluid(maxWidth: 300) {
      ...GatsbyImageSharpFluid
    }
  }
} */