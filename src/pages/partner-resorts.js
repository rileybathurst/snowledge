import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const PartnerResortsPage = ({ data }) => (
  <Layout>
      <section className="team--grid"> {/* is this a section? ddouble check that */}
        {data.allStrapiTeam.edges.map(document => (
            <article className="">{/* again check this HTML */}
                <h2>
                    <Link to={`/team/${document.node.slug}`}>
                        {document.node.name}
                    </Link>
                </h2>

                {/* <p>{document.node.Content}</p> */}
            </article>
        ))}
    </section>
  </Layout>
)

export default PartnerResortsPage

export const pageQuery = graphql`  
  query PartnerResortQuery {
    allStrapiPartnerResorts {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`