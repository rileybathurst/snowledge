import { Link } from "gatsby"
import React from "react"

import Logo from "./logo"
import InstagramLogo from "./instagramLogo"
import Download from "./download"

const Footer = () => (
    <footer>
        {/* <h3 className="screen-reader">Snowledge</h3> */}
    
        

        <div className="footer-download-color-blocking">
            {/* gray trapezoid */}
            <svg title="download-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <polygon fill="#F0F0F0" points="0,25 100,0 100,75 0,100"/>
            </svg>
        </div>

        <div className="footer-download-badges">
            <h3 id="footer-title"><em>DownLoad</em></h3>
            <Download />
        </div>

        <div className="footer-download-badges-color-blocking">
            <svg title="download-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <polygon fill="#009D9B" points="0,25 100,0 100,75 0,100"/>
            </svg>
        </div>{/* footer-download-badges-color-blocking */}
        
        <ul id="footer-social">
            <li><a href to="https://www.instagram.com/snowledge.co/">
                instagram
                <InstagramLogo />
            </a></li>
            <li><a href to="https://www.facebook.com/snowledge.co">facebook</a></li>
            <li><a href to="https://www.youtube.com/channel/UCtao0k3KRU8kur7pyPJPK0w">YouTube</a></li>
            <li><a href to="https://twitter.com/snowledge_co">twitter</a></li>
        </ul>

        <div id="footer-social-blocking">
            <svg title="download-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <polygon fill="#1a1a1a" points="0,25 100,0 100,75 0,100"/>
            </svg>
        </div>

        <div className="footer-color-blocking-primary">
            <svg title="footer-color-blocking-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25">
                <polygon fill="#009D9B" points="0,25 100,0 100,25"/>
            </svg>
        </div>

        <div className="footer-color-blocking-black">
            <svg title="footer-color-blocking-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25">
                <polygon fill="#000" points="0,25 100,0 100,25"/>
            </svg>
        </div>

        <div id="footer-color"> {/* needs a better name of this should be the top name */}
            
            <div className="footer-logo">
                <Logo />
            </div>

            <p className="footer-copyright">© 2020 Snowledge Corp., All Rights Reserved.</p> {/* this punctuation is really wierd but its how it is on the current site */}
            <nav>
                <ul id="footer-info">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/download">Download App</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                    <li><Link to="/affiliate-disclaimer">Affiliate Disclaimer</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </nav>

            
        </div>{/* #footer-color */}
    </footer>
)

export default Footer
