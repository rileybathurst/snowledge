// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <>
    <header>
      <section id="top-bar">

        <h1 className="screen-reader">Snowledge</h1> {/* always start with an h tag and make this screenreader friendly */}
        <Logo />

        <button id="menu" className="io-push">Menu</button>{/* io-push? seems like the wrong thing */}
      </section>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
