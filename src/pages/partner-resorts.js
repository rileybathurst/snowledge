import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const PartnerResortsPage = ({ data }) => (
  <Layout>
      <section className="team--grid"> {/* is this a section? ddouble check that */}
        <h3>West</h3>

        <hr />

        {data.west.edges.map(document => (
          <article className="team-card">{/* again check this HTML */}
            <Link to={`/partner-resorts/${document.node.pr_slug}`} className="teamcoverimage">
              <Img fluid={document.node.pr_official.childImageSharp.fluid} />
            </Link>

            <h2>
              <Link to={`/partner-resorts/${document.node.pr_slug}`}>
                {document.node.pr_name}
              </Link>
            </h2>

            <div className="profile-background">{/* stay gold */}</div>
          </article>
        ))}
      </section>

    <section className="team--grid">
      <h3>Rockies</h3>

      <hr />

      {data.rockies.edges.map(document => (
        <article className="team-card">{/* again check this HTML */}

<Link to={`/partner-resorts/${document.node.pr_slug}`} className="teamcoverimage">
                <Img fluid={document.node.pr_official.childImageSharp.fluid} />
              </Link>

          <h2>
            <Link to={`/partner-resorts/${document.node.pr_slug}`}>
              {document.node.pr_name}
            </Link>
           </h2>

          {/* <p>{document.node.Content}</p> */}
          <div className="profile-background">{/* stay gold */}</div>
        </article>
      ))}
    </section>

    <section className="team--grid">
      <h3>Midwest</h3>

      <hr />
      
      {data.midwest.edges.map(document => (
        <article className="team-card">{/* again check this HTML */}

<Link to={`/partner-resorts/${document.node.pr_slug}`} className="teamcoverimage">
                <Img fluid={document.node.pr_official.childImageSharp.fluid} />
              </Link>

          <h2>
            <Link to={`/partner-resorts/${document.node.pr_slug}`}>
              {document.node.pr_name}
            </Link>
           </h2>

          {/* <p>{document.node.Content}</p> */}
          <div className="profile-background">{/* stay gold */}</div>
        </article>
      ))}
    </section>

    <section className="team--grid">
      <h3>Northeast</h3>

      <hr />
      
      {data.northeast.edges.map(document => (
        <article className="team-card">{/* again check this HTML */}

<Link to={`/partner-resorts/${document.node.pr_slug}`} className="teamcoverimage">
                <Img fluid={document.node.pr_official.childImageSharp.fluid} />
              </Link>

          <h2>
            <Link to={`/partner-resorts/${document.node.pr_slug}`}>
              {document.node.pr_name}
            </Link>
           </h2>

          {/* <p>{document.node.Content}</p> */}
          <div className="profile-background">{/* stay gold */}</div>
        </article>
      ))}
    </section>

    <section className="team--grid">
      <h3>Canada</h3>

      <hr />
      
      {data.canada.edges.map(document => (
        <article className="team-card">{/* again check this HTML */}

<Link to={`/partner-resorts/${document.node.pr_slug}`} className="teamcoverimage">
                <Img fluid={document.node.pr_official.childImageSharp.fluid} />
              </Link>
              
          <h2>
            <Link to={`/partner-resorts/${document.node.pr_slug}`}>
              {document.node.pr_name}
            </Link>
           </h2>

          {/* <p>{document.node.Content}</p> */}
          <div className="profile-background">{/* stay gold */}</div>
        </article>
      ))}
    </section>
  </Layout>
)

export default PartnerResortsPage

export const pageQuery = graphql`  
  query PartnerResortQuery {
    west: allStrapiPartnerResorts (filter: {pr_region: {eq: "west"}}) {
      edges {
        node {
          id
          pr_name
          pr_slug

          pr_cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }

        }
      }
    }

    rockies: allStrapiPartnerResorts (filter: {pr_region: {eq: "rockies"}}) {
      edges {
        node {
          id
          pr_name
          pr_slug

          pr_cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    midwest: allStrapiPartnerResorts (filter: {pr_region: {eq: "midwest"}}) {
      edges {
        node {
          id
          pr_name
          pr_slug

          pr_cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    northeast: allStrapiPartnerResorts (filter: {pr_region: {eq: "northeast"}}) {
      edges {
        node {
          id
          pr_name
          pr_slug

          pr_cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    canada: allStrapiPartnerResorts (filter: {pr_region: {eq: "canada"}}) {
      edges {
        node {
          id
          pr_name
          pr_slug

          pr_cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

/* 
  Aliases
  https://atheros.ai/blog/how-to-use-graphql-aliases
*/