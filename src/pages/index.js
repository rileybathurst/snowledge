import React from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import Layout from "../components/layout"
import Footer from "../components/footer"
// import Image from "../components/image"
import HeroImage from "../components/hero-image"
import PhonePlaceholder from "../components/phonePlaceholder"
import SEO from "../components/seo"

// import SmallMenu from "../components/smallMenu"
// import Logo from "../components/logo"
// import LogoGreen from "../components/logoGreen"
import Download from "../components/download"
// import TextSlider from "../components/textSlider"
// testing things Im not using other than reference
// import Square from "../components/square" // testing click
// import Top from "../components/top"
import ScreenshotSlideshow from "../components/screenshot-slideshow"

import Header from "../components/header"

// styles
import "../components/layout.css"
import "../styles/atoms.scss"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />

    <Header />

    <header id="header-hero">
      <HeroImage />
      <div className="header-hero_color-blocking">
        {/* <svg title="header-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon fill="#239C9B" points="0,25 100,0 100,75 0,100"/>
        </svg> */}
      </div>

      <div className="header--sliders">
        <h2>SNOWLEDGE IS POWDER SNOWLEDGE IS POWDER</h2>
        <h3>Discover. Ride. Share. Discover. Ride. Share. Discover. Ride. Share.</h3>
      </div>

      {/* <TextSlider /> */}
      
      <Download />

      <div className="hero-phone">
        <ScreenshotSlideshow />
        {/* <PhonePlaceholder /> */}
      </div>
    </header>

    <section className="regular-measure mid-title">
      <Link to="onboarding" className="button-link">Get Your  Resort Started on Snowledge</Link>
    </section>

    <main id="home-main">
      <h2 id="our-story-title"><em>Our<br />Story</em></h2>

      {/* this will come from the api eventually */}
      <p id="our-story">The Snowledge team loves to ski and ride but was frustrated with all of the different resort and GPS tracker apps needed to plan, track, and share that perfect day of skiing or snowboarding. Together, we knew we could do better. Designed with input from our community of industry gurus and resort experts, Snowledge combines all the features skiers and riders need, works at every resort and in the backcountry—and it’s free.</p>

      <div className="main-color-blocking">
        {/* <svg title="header-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon fill="none" points="0,25 100,0 100,75 0,100"/>
        </svg>  */}
      </div>

      {/* <CoverVideo /> */}
      <div id="hero-video">
        <iframe title="heroVideo" id="hero-video" width="560" height="315" src="https://www.youtube.com/embed/dq1UpXj0Iw0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="video-color-blocking">
          {/* <svg title="header-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon fill="#009D9B" points="0,25 100,0 100,75 0,100"/>
          </svg> */}
        </div>  
      </div>

      {/* <Gallery /> */}
      {/* api is needed */}

      <h2 id="features-title"><em>Why<br />Snowledge?</em></h2>
      <p id="features-text">Snowledge is the only app you need on the mountain. Use GPS to get real-time info from resorts, track your day on the slopes, and easily find and locate your friends and family. Snowledge is Powder!</p>
      <div className="features-color-blocking">
        <svg title="features-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon fill="#F0F0F0" points="0,25 100,0 100,75 0,100"/>
        </svg>
      </div>

      <div className="home-phone-place">
        <PhonePlaceholder />
      </div>

      <ul id="features-list">
        <li>View current snow conditions, and research info on nearby resorts, offers, and current contests.</li>
        <li>Stay connected with friends, family, and your favorite resorts, and see what skiers and riders around the world are up to.</li>
        <li>Find your friends on the mountain and track your day with stats, recorded weather, and maps showing runs skied.</li>
        <li>Customize your profile, bio, and gallery, and view detailed activity summaries of your days skied.</li>
        <li>Get lift status updates, conditions, and parking information, as well as offers and contests from your favorite resorts.</li>
      </ul>


        <ul className="home-resorts logo-list">
        {data.allStrapiPartnerResorts.edges.map(document => (

            <li>
              <Link to={`/partner-resorts/${document.node.pr_slug}`}>
                        <Img fluid={document.node.pr_logo.childImageSharp.fluid} />
                    </Link>
              </li>

        ))}
        <li className="mid-title"><h4><Link to="partner-resorts">and more.</Link></h4></li>
          </ul>

      {/* <div className="home-blank"> fill the bottom of the grid this shouldnt be needed if everything is great </div> */}
    </main>
    <Footer />

    {/* couple testing things incase I want reference */}
    {/* <Square /> */}
  </>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiPartnerResorts(filter: {pr_slug: {in: [
      "holiday",
      "Revelstoke",
      "meadows",
      "brundage",
      "eaglecrest",
      "homewood"
    ]}}) {
      edges {
        node {

          pr_slug
          pr_logo {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`