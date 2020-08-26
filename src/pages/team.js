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

                <Link to={`/team/${document.node.slug}`} className="teamcoverimage">
                  <Img fluid={document.node.teamcoverimage.childImageSharp.fluid} />
                </Link>

                <Link to={`/team/${document.node.slug}`} className="teamcoverprofile">
                  <Img fluid={document.node.profile.childImageSharp.fluid}  className="profile"/>
                </Link>

                <h2>
                    <Link to={`/team/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                <section>
                  <p>{document.node.Sport}</p>
                  <p>{document.node.excerpt}</p>
                  <p>Mountain</p>
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

          teamcoverimage {
            atime
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          profile {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          Sport
          excerpt

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