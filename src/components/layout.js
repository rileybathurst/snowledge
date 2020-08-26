/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


// import Top from "./top"

import Header from "./header"
import Footer from "./footer"

// import SmallMenu from "./smallMenu"

import "./layout.css"
import "../styles/atoms.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      {/* <nav id="menu_small" className="menu-small hide-for-print inactive"> 
       inactive 
        <ul id="off-canvas" className="text-center">
          <Top />
        </ul>
      </nav>

      <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
        <SmallMenu /> 
      </div>  */}

      
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
