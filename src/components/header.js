// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import SmallMenu from "./smallMenu"
import Top from "./top"

const Header = ({ siteTitle }) => (
  <header>
    <section id="top-bar">
      <div className="top-bar__background"></div>
      <div className="top-row">
        <Logo />

        <h1 className="screen-reader">Snowledge</h1> {/* always start with an h tag and make this screenreader friendly */}
        <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
          <SmallMenu /> 
        </div> 
      </div>{/* top-row*/}

      <div className="low-bar__background"></div>
          <nav id="menu_small" className="menu-small hide-for-print inactive"> {/* inactive */}
            <ul id="off-canvas" className="text-center">
              <Top />
            </ul>
          </nav>
      </section>{/* #top-bar */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
