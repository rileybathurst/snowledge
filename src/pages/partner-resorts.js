import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const PartnerResortsPage = ({ data }) => (
  <Layout>
      <section className="team--grid"> {/* is this a section? ddouble check that */}
        <h3>West</h3>

        <hr />

        {data.west.edges.map(document => (
            <article className="team-card">{/* again check this HTML */}

                <h2>
                    <Link to={`/partner-resorts/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                {/* <p>{document.node.Content}</p> */}
                <div className="profile-background">{/* stay gold */}</div>
            </article>
        ))}
    </section>

    <section className="team--grid">
      <h3>Rockies</h3>

      <hr />

      {data.rockies.edges.map(document => (
        <article className="team-card">{/* again check this HTML */}

          <h2>
            <Link to={`/partner-resorts/${document.node.slug}`}>
              {document.node.name}
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

          <h2>
            <Link to={`/partner-resorts/${document.node.slug}`}>
              {document.node.name}
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

          <h2>
            <Link to={`/partner-resorts/${document.node.slug}`}>
              {document.node.name}
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

          <h2>
            <Link to={`/partner-resorts/${document.node.slug}`}>
              {document.node.name}
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
    west: allStrapiPartnerResorts (filter: {region: {eq: "west"}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }

    rockies: allStrapiPartnerResorts (filter: {region: {eq: "rockies"}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }

    midwest: allStrapiPartnerResorts (filter: {region: {eq: "midwest"}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }

    northeast: allStrapiPartnerResorts (filter: {region: {eq: "northeast"}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }

    canada: allStrapiPartnerResorts (filter: {region: {eq: "canada"}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`

/* 
  Aliases
  https://atheros.ai/blog/how-to-use-graphql-aliases
*/