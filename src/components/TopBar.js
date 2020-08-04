import React, { Component } from "react"
import { Link, graphql } from "gatsby"

// import Logo from "./logo"
// import SmallMenu from "./smallMenu"

const TopBar = () => (
    <section id="top-bar">
        <h1 className="screen-reader">Snowledge</h1> {/* always start with an h tag and make this screenreader friendly */}
        {/* <Logo /> */}

        <nav id="menu_small" className="menu-small hide-for-print inactive"> {/* inactive */}
            <ul id="off-canvas" className="text-center">
                 {data.allStrapiPartnerResorts.edges.map(document => (
                    <li><Link to={`partner-resorts/${document.node.slug}`}>{document.node.name}</Link></li>
                ))}  */}

                <li><Link to="/#features">Features</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/partner-resorts">Partner Resorts</Link>
                <ul>
                    <li><Link to="/partner-resorts/west">West</Link></li>
                    <li><Link to="/partner-resorts/rockies">Rockies</Link></li>
                    <li><Link to="/partner-resorts/midwest">Midwest</Link></li>
                    <li><Link to="/partner-resorts/northeast">Northeast</Link></li>
                    <li><Link to="/partner-resorts/canada">Canada</Link></li>
                </ul>
                </li>
                <li><Link to="/blog">Blog</Link></li>
                <li>
                <ul>
                    <li><a href to="https://www.instagram.com/snowledge.co/">instagram</a></li>
                    <li><a href to="https://www.facebook.com/snowledge.co">facebook</a></li>
                    <li><a href to="https://www.youtube.com/channel/UCtao0k3KRU8kur7pyPJPK0w">YouTube</a></li>
                    <li><a href to="https://twitter.com/snowledge_co">twitter</a></li>
                </ul>
                </li>
                <li><Link to="/download">Download</Link></li> */}
            </ul>
        </nav>

{/*         <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
             <SmallMenu /> 
        </div> */}

    </section>
)

export default TopBar

/* export const topBarQuery = graphql`  
    query topBarQuery {
        allStrapiPartnerResorts {
            edges {
                node {
                    name
                    slug
                }
            }
        }
    }
` */
