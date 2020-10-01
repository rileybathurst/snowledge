// This page is a little different as Riley didn't design it

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OnboardingRmp from "../components/onboarding-rmp"
import OnboardingApp from "../components/onboarding-app"
import OnboardingContest from "../components/onboarding-contest"
import Onform from "../components/onform"

const DownloadPage = () => (
  <Layout>
    <main className="regular-page">
        <SEO title="Onboarding" />
        <h1 className="regular-measure">Start Set Up On Your Snowledge Profile</h1>
        <p className="regular-measure">Introducing Snowledge: The fastest, most cost effective way to enable your mobile customer experience.</p>

        <div className="card-stack regular-measure">
            <div className="simple-card square-shadow" style={{ background: '#6e2de8' }}>
                
                <div className="simple-card-svg-header">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/></svg>
                </div>
            
                <h2>Streamlined &amp; Amplified Marketing</h2>

                <p>The easiest way to attract and stay connected with guests. Engaging and eddicient mobile marketing campaigns so you can focus on guests on the mountain.</p>

                <ul>
                    <li>Prices &amp; Services</li>
                    <li>Social Feed Posts</li>
                    <li>Resort Profile visible to Snowledge Community</li>
                </ul>
            </div>

            <div className="simple-card square-shadow" style={{ background: '#d3447b' }}>
                
                <div className="simple-card-svg-header">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
                </div>
            
                <h2>Streamlined &amp; Amplified Marketing</h2>

                <p>The easiest way to attract and stay connected with guests. Engaging and eddicient mobile marketing campaigns so you can focus on guests on the mountain.</p>

                <ul>
                    <li>Prices &amp; Services</li>
                    <li>Social Feed Posts</li>
                    <li>Resort Profile visible to Snowledge Community</li>
                </ul>
            </div>


            <div className="simple-card square-shadow">
                
                <div className="simple-card-svg-header">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
                </div>
            
                <h2>Streamlined &amp; Amplified Marketing</h2>

                <p>The easiest way to attract and stay connected with guests. Engaging and eddicient mobile marketing campaigns so you can focus on guests on the mountain.</p>

                <ul>
                    <li>Prices &amp; Services</li>
                    <li>Social Feed Posts</li>
                    <li>Resort Profile visible to Snowledge Community</li>
                </ul>
            </div>
        </div>{/* card-stack */}

        <h4 className="regular-measure">Snowledge is a technology and service solution that includes everything you need:</h4>

        <p className="regular-measure"><strong>Full featured app your customers will love:</strong></p>

        <div className="tiny-card-stack regular-measure">
            <div className="tiny-card">
                <div className="tiny-card-header square-shadow">
                    <h2>Discover</h2>
                    <h2 className="no-margin-bottom"><em>Stay in the Know</em></h2>
                </div>
                <p>Get real-time weather and condition information, access to contests and exclusive deals, and daily photos/videos/insights from locals on the mountain.</p>
            </div>
            
            <div className="tiny-card">
                <div className="tiny-card-header square-shadow">
                    <h2>Ride</h2>
                    <h2 className="no-margin-bottom"><em>Track and Locate</em></h2>
                </div>
                <p>Location-based app features to find family and friends on the mountain, track your runs and challenge yourself and others.</p>
            </div>
            
            <div className="tiny-card">
                <div className="tiny-card-header square-shadow">
                    <h2>Share</h2>
                    <h2 className="no-margin-bottom"><em>Share and Connect</em></h2>
                </div>
                <p>Stay connected with a like-minded community of snow sports enthusiasts, resorts you love, and top brands.</p>
            </div>
        </div>{/* .tiny-card-stack */}

        <p className="regular-measure"><strong>Easy to use web-based management portal:</strong></p>

        <div className="split-flex regular-measure">
            <OnboardingRmp />

            <ul className="regular-measure">
                <li>Manage messaging with in-app & push notifications</li>
                <li>Turnkey engagement campaigns and events</li>
                <li>Guest Insights and Analytics Suite</li>
                <li>Marketing & Operations Dashboard</li>
                <li>Advanced Skier Data (time on hill, days skied, vertical feet skied, runs skied, other resorts skied)</li>
            </ul>
        </div>{/* split-flex */}
        
        <p className="regular-measure"><strong>Exclusive content and services:</strong></p>

        <div className="split-flex split-flip regular-measure">
            <OnboardingApp />

            <ul>
                <li>Exclusive ambassador content</li>
                <li>Roster of brand partners for additional promotions + prizes</li>
                <li>Broader Snowledge community promotion</li>
                <li>Promotion of resort through Snowledge media channels (in-app website, email, social)</li>
                <li>Promotion of your resort by Snowledge ambassadors</li>
            </ul>
        </div>{/* split-flex */}

        <p className="regular-measure"><strong>Affordable and scalable:</strong></p>

        <p className="regular-measure">Get started with Snowledge for FREE. Premium features available. Join the growing family of resorts already benefiting from the Snowledge App and Marketing platform.</p>

        {/* Logos will go here these will come in grom Strapi */}

        <p className="regular-measure">Partner resort Holiday Valley saw huge success with our end of the season ‘Keep the Stoke Alive’ promotion.</p>

        <div className="split-flex split-flip regular-measure">
            <div className="split-flex-wrap split-flex">
                <div className="split-tower">
                    <h2 className="text-center no-margin-bottom">700</h2>
                    <p className="text-center">Photos posted</p>
                </div>

                <div className="split-tower">
                    <h2 className="text-center no-margin-bottom">$2,500</h2>
                    <p className="text-center">In brand prizes &amp; promotion</p>
                </div>

                <blockquote>
                    <p className="text_small"><em>“With the sudden closing of resorts, we were trying to figure out how to keep our customers engaged and thinking about buying a 20-21 season pass. Snowledge provided us with a campaign that we were able to launch quickly, with minimal effort on our part. We feel this momentum will carry over to next season.”</em></p>
                    <footer>
                        <h4>- Jane Eshbaugh, Marketing Director<br />
                        Holiday Valley</h4>
                    </footer>
                </blockquote>
            </div>{/* split-flex-wrap */}

            <OnboardingContest />
        </div>{/* .split-flex */}
    </main>

    <div className="greenback">

        <div className="split-flex regular-measure">
            <div className="split-flex-wrap">
                <h4 className="regular-measure">Exclusive discount</h4>

                <p className="regular-measure">Get set up before Oct 1 to claim for a special offer on Snowledge premium engagement features and campaigns and an exclusive discount from our partner brands.</p>
            </div>

            <div className="split-flex-wrap">
                <h4 className="regular-measure">Set up your resort’s Snowledge profile</h4>

                <p className="regular-measure">We’ll reach to set up a quick call and get you on your way to a new mobile experience on the mountain.</p>

                <Onform />

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
            </div>{/* .split-flex-wrap */}
        </div>{/* .split-flex */}
    </div>{/* .greenback */}
  </Layout>
)

export default DownloadPage
