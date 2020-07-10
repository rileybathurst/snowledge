import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default function Top() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allStrapiPartnerResorts {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <header>

{data.allStrapiPartnerResorts.edges.map(document => (
                    <li><Link to={`partner-resorts/${document.node.slug}`}>{document.node.name}</Link></li>
                    ))}

          </header>
      )}
    />
  )
}