// This page is a little different as Riley didn't design it

import React from "react"
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

// import Layout from "../components/layout"
import SEO from "../components/seo"
// import OnboardingRmp from "../components/onboarding-rmp"
// import OnboardingApp from "../components/onboarding-app"
// import OnboardingContest from "../components/onboarding-contest"
// import Onform from "../components/onform"

// things needed for the old site
import Footer from "../components/footer" // while it running on the old site
import Header from "../components/header" // while it running on the old site
// import Logo from "../components/logo"

// <link href="https://www.snowledge.co/onboard/styles.b1a30ae235daba03390a.css" rel="stylesheet">
// this is what I need to copy paste to the ghetto build

const OnboardPage = ({ data }) => (
    <>
{/*     <header className="simple-header">
        <h1 className="screen-reader">Snowledge</h1>
        <div className="regular-measure">
            <Logo />
        </div>
        <h2 className="blog-measure simple-title">GET YOUR RESORT STARTED ON SNOWLEDGE</h2>
  </header> */}

  <Header />

  <div className="greenback">
      <h2 className="blog-measure simple-title">GET YOUR RESORT STARTED ON SNOWLEDGE</h2>
      </div>

  {/*
  <Layout> I have to skip some of this while its a build for the old site 
    but this was the wrapper and will go back to being the main site wrapper
  */}
    <main className="regular-page">
        <SEO title="Onboarding" />
        <h1 className="regular-measure header-reducer">Introducing Snowledge: The fastest, most cost effective way to enable your mobile guest experience</h1>
        <p className="regular-measure">Maintaining real time connection and communication with your guests will be critical this 20/21 season. Give your guests a feature-rich app they’ll love, powered by the mobile resort marketing tools and content you need to keep them informed, engaged, and inspired.</p>

        <div className="card-stack regular-measure">
            {/* Pink card */}
            <div className="simple-card square-shadow" style={{ background: '#d3447b' }}>
                <div className="simple-card-svg-header">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
                </div>
            
                <h2>Full Featued Mobile Experience</h2>

                {/* <p>The fastest, most cost effective way to enable a full- featured mobile app and marketing solution.</p> */}

                <ul>
                    <li>GPS Run Tracking</li>
                    <li>Lift & Run Status</li>
                    <li>Weather & Snow Conditions</li>
                    <li>Finding Friends & family on the Mountain</li>
                </ul>
            </div>


            {/* Purple Card */}
            <div className="simple-card square-shadow" style={{ background: '#6e2de8' }}>
                
                <div className="simple-card-svg-header">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/></svg>
                </div>
            
                <h2>Streamlined &amp; Amplified Marketing</h2>

                {/* <p>The easiest way to attract and stay connected with guests on the mountain, with engaging and efficient mobile marketing campaigns.</p> */}

                <ul>
                    <li>Prices &amp; Services</li>
                    <li>Social Feed Posts</li>
                    <li>Resort Profile visible to Snowledge Community</li>
                </ul>
            </div>

            {/* Teal Card */}
            <div className="simple-card">
                
                <div className="simple-card-svg-header">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
                </div>
            
                <h2>Measureable Results</h2>

                {/* <p>Insightful performance dashboard to better understand your guests needs and track campaign performance and ROI.</p> */}

                <ul>
                    <li>Guest Insights</li>
                    <li>Skier Data</li>
                    <li>Marketing & Operations Dashboards</li>
                </ul>
            </div>
        </div>{/* card-stack */}

        <h4 className="regular-measure not-bold">Snowledge is a technology and service solution that includes everything you need:</h4>

        <p className="regular-measure"><strong>Full featured app your customers will love:</strong></p>

        <div className="tiny-card-stack regular-measure">
            <div className="tiny-card">
                <div className="tiny-card-header square-shadow">
                <h2 className="no-margin-bottom">{/* Im not sold on putting the svg in the h2 here so that can probably be cleaned up at some point */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" fill="white"/></svg>&nbsp;
                    Stay in the Know</h2>
                </div>
                <ul>
                    <li>Real-time weather conditions</li>
                    <li>Access to contests, deals and daily photos and videos</li>
                    <li>Insights from locals on the mountain</li>
                </ul>
            </div>
            
            <div className="tiny-card">
                <div className="tiny-card-header square-shadow">
                <h2 className="no-margin-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" fill="white"/></svg>&nbsp;
                    Track and Locate</h2>
                </div>
                <ul>
                    <li>Find Family and Friends on the mountain</li>
                    <li>Track your runs</li>
                    <li>Challenge yourself and others</li>
                </ul>
            </div>
            
            <div className="tiny-card">
                <div className="tiny-card-header square-shadow">
                <h2 className="no-margin-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" fill="white"/></svg>&nbsp;
                    Share and Connect</h2>
                </div>
                <ul>
                    <li>Like Minded community of snowsports enthusiasts</li>
                    <li>Resorts you love</li>
                    <li>Top Brands</li>
                </ul>
            </div>
        </div>{/* .tiny-card-stack */}

        <p className="regular-measure"><strong>Easy to use web-based management portal:</strong></p>

        <div className="split-flex regular-measure">
            {/* <OnboardingRmp /> currently not using gatsby image as this page is a wierd half build */}
            <img src="https://www.snowledge.co/wp-content/uploads/2020/10/onboarding-rmp.jpg" alt="snowledge resort mountain profile" />

            <ul className="regular-measure extra-push">
                <li>Messaging with In-App & Push Notifications*</li>
                <li>Turnkey engagement campaigns and events*</li>
                <li>Guest insights and analytics suite</li>
                <li>Marketing & operations dashboard</li>
                <li>Advanced Skier Data</li>
            </ul>
        </div>{/* split-flex */}
        
        <p className="regular-measure"><strong>Exclusive content and services:</strong></p>

        <div className="split-flex flip-flex regular-measure">
            {/* <OnboardingApp /> */}
            <img src="https://www.snowledge.co/wp-content/uploads/2020/10/onboarding-app.jpg" alt="snowledge app" />

            <ul>
                <li>Exclusive ambassador content</li>
                <li>Brand Partners for promotions + prizes*</li>
                <li>Broader Snowledge community promotion</li>
                <li>Resort promotion through Snowledge app, website, email, social channels</li>
                <li>Resort promotion by Snowledge ambassadors</li>
            </ul>
        </div>{/* split-flex */}

        <p className="regular-measure"><strong>Affordable and scalable:</strong></p>

        <p className="regular-measure">Get started and stay with Snowledge Standard features for FREE, You can also take advantage of our Premium marketing and operations features to further enhance your resort’s experience*. Join the growing family of resorts already benefiting from the Snowledge App and Marketing platform.</p>

        {/* Logos will go here these will come in grom Strapi */}
        <ul className="regular-measure img-list">
            {data.allStrapiPartnerResorts.edges.map(document => (
                <li>
                    <Link to={`/partner-resorts/${document.node.pr_slug}`}>
                        <Img fluid={document.node.pr_logo.childImageSharp.fluid} />
                    </Link>
                </li>
            ))}

            {data.allStrapiPartners.edges.map(parts => (
                <li>
                    <a href={parts.node.partner_website} target="_blank" rel="noreferrer">
                        {/* {parts.node.partner_name} */}
                        <Img fluid={parts.node.partner_logo.childImageSharp.fluid} />
                    </a>
                </li>
            ))}
        </ul>

{/*     wordpress list    
        <ul className="regular-measure img-list">
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/HolidayValleyEllicottville.png" alt="holiday valley logo" /></li>
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/Revelstoke-Logo1.png" alt="revelstoke logo" /></li>
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/MHM_Horizontal_Logo_4Color.jpg" alt="mt hood meadows logo" /></li>
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/HomewoodLogo.png" alt="homewood logo" /></li>
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/Brundage_woodgrain.png" alt="brundage logo" /></li>
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/Square-Logo-Outlined-Text-PNG-EAGLECREST.png" alt="eaglecrest logo" /></li>
            <li><img src="https://www.snowledge.co/wp-content/uploads/2020/10/indy_pass_logo.png" alt="indy pass logo" /></li>
        </ul> */}


        <p className="regular-measure">Partner resort Holiday Valley saw huge success with our end of the season ‘Keep the Stoke Alive’ promotion.</p>

        <div className="split-flex regular-measure flip-flex">
            <div className="split-one">

                <div className="split-two">
                    <div className="split-three">
                        <h2>700</h2>
                        <p>Photos posted</p>
                    </div>

                    <div className="">
                        <h2>$2,500</h2>
                        <p>In brand prizes &amp; promotion</p>
                    </div>
                </div>{/* split-two */}

                <blockquote>
                    <p>“With the sudden closing of resorts, we were trying to figure out how to keep our customers engaged and thinking about buying a 20-21 season pass. Snowledge provided us with a campaign that we were able to launch quickly, with minimal effort on our part. We feel this momentum will carry over to next season.”</p>
                    <h4>- Jane Eshbaugh, Marketing Director<br />
                    Holiday Valley</h4>
                </blockquote>
            </div> {/* split-one */}

            {/* <OnboardingContest /> */}
            <img src="https://www.snowledge.co/wp-content/uploads/2020/10/onboarding-contest.jpg" alt="snowledge contest" />
        </div>{/* .split-flex */}
    </main>

  {/* </Layout> while its running on the old site */}

  <div className="purpleback">
        <div className="split-flex regular-measure">
            <div className="split-flex-wrap">
                <h4 className="regular-measure">Exclusive discount</h4>

                <p className="regular-measure">Get set up before November 15th to claim for a special offer on Snowledge premium engagement features and campaigns and an exclusive discount from our partner brands.</p>
            </div>

            <div className="split-flex-wrap">
                <h4 className="regular-measure">Set up your resort’s Snowledge profile</h4>

                <p className="regular-measure">Shoot us an email and we'll get you set up with a new mobile experience for your guests on the mountain!</p>

                {/* this form wont work yet as its not on netlify */}
                {/* <form className="regular-measure">
                    <div>
                        <label for="name">Full Name</label>
                        <input type="text" placeholder="Full Name" />
                    </div>

                    <div>
                        <label for="name">Resort</label>
                        <input type="text" placeholder="Resort" />
                    </div>

                    <div>
                        <label for="name">Title</label>
                        <input type="text" placeholder="Title" />
                    </div>

                    <div>
                        <label for="name">Email</label>
                        <input type="text" placeholder="Email" />
                    </div>

                    <input type="submit" value="Submit" />
                </form> */}


                {/* <a href="mailto:info@snowledge.co?subject=Snowledge Onboarding" className="big-link">info@snowledge.co</a> */}
                <a href="mailto:info@snowledge.co?subject=Snowledge Onboarding" className="button-link">info@snowledge.co</a>
                {/* this has a dumb name because I know its dumb to do this */}

            </div>{/* .split-flex-wrap */}
        </div>{/* .split-flex */}
    </div>{/* .greenback */}

  {/* this is pretty toned down for right now on the wordpress version */}
{/*   <footer className="simple-footer">
        
        <div className="regular-measure footer-logo footer-logo_extra">
            <Logo />
        </div>

        <p className="regular-measure footer-copyright">© 2020 Snowledge Corp. All Rights Reserved.</p>
        {/* this punctuation is really wierd but its how it is on the current site */}




    {/* </footer> */}
    <div className="barney-below">
    <Footer />
    </div>

  </>
)

export default OnboardPage

export const pageQuery = graphql`  
  query OnboardQuery {
    allStrapiPartnerResorts(filter: {pr_slug: {in: ["holiday", "Revelstoke", "meadows", "brundage", "eaglecrest", "homewood"]}}) {
      edges {
        node {
          pr_name
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

    allStrapiPartners(filter: {partner_name: {in: ["Indy Pass"]}})  {
        edges {
            node {
                partner_name
                partner_website

                partner_logo {
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