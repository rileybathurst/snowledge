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
          <ul className="top-bar__Menu">

              <li><Link to="/#features-list">Features</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/partner-resorts">Partner Resorts</Link>
              <ul className="reveal-later">
                  <li><Link to="/partner-resorts/west">West</Link></li>
                  <li><Link to="/partner-resorts/rockies">Rockies</Link></li>
                  <li><Link to="/partner-resorts/midwest">Midwest</Link></li>
                  <li><Link to="/partner-resorts/northeast">Northeast</Link></li>
                  <li><Link to="/partner-resorts/canada">Canada</Link></li>
              </ul>
              </li>
              <li><Link to="/blogs">Blog</Link></li>
                {/* I'm really not sure we need this up here.
                <li>
                  <ul>
                    <li><a href to="https://www.instagram.com/snowledge.co/">instagram</a></li>
                    <li><a href to="https://www.facebook.com/snowledge.co">facebook</a></li>
                    <li><a href to="https://www.youtube.com/channel/UCtao0k3KRU8kur7pyPJPK0w">YouTube</a></li>
                    <li><a href to="https://twitter.com/snowledge_co">twitter</a></li>
                </ul> 
                </li> */}
                <li><Link to="/download">Download</Link></li>


                </ul>

          </header>
      )}
    />
  )
}