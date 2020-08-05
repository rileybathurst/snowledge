import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const PartnerResortsPage = ({ data }) => (
  <Layout>
      <section className="team--grid"> {/* is this a section? ddouble check that */}

        <h3>Region</h3>
        <hr />
        <h3>West</h3>

        {data.west.edges.map(document => (
            <article className="">{/* again check this HTML */}

                <h2>
                    <Link to={`/partner-resorts/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                {/* <p>{document.node.Content}</p> */}
            </article>
        ))}
    </section>


    <h3>Rockies</h3>
    {data.rockies.edges.map(document => (
            <article className="">{/* again check this HTML */}

                <h2>
                    <Link to={`/partner-resorts/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                {/* <p>{document.node.Content}</p> */}
            </article>
        ))}
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
  }
`

/* 
  Aliases
  https://atheros.ai/blog/how-to-use-graphql-aliases
*/