import React, { Component } from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import HeroImage from "../components/hero-image"
import PhonePlaceholder from "../components/phonePlaceholder"
import SEO from "../components/seo"

import Logo from "../components/logo"
import LogoGreen from "../components/logoGreen"
import Download from "../components/download"

// import TextSlider from "../components/textSlider"
// import HelloMessage from "../components/hello"


import "../components/layout.css"
import "../styles/atoms.scss"

// click on stuff from react docs
// needs an off as well but this is a start with on
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className={this.state.value}
        onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
    );
  }
}



// https://www.robinwieruch.de/react-intersection-observer-api
// io animations
class Trouble extends Component {
  constructor(props) {
    super(props);
    
    // defaults
    this.state = {

      // this doesnt work with one???
      things: [
        {
          id: 'a',
          headline: 'React',
          text: "You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?",
        },
        {
          id: 'b',
          headline: 'Redux',
          text: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Life finds a way. Must go faster. They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Life finds a way.",
        },
        {
          id: 'c',
          headline: 'GraphQL',
          text: "Must go faster. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!",
        },
      ],

      // defaults
      activeThing: { id: null, ratio: 0 },
    };

    // https://reactjs.org/docs/refs-and-the-dom.html
    // Triggering imperative animations // maybe this could be a prop?
    this.rootRef = React.createRef();

    // this is kinda a forEach? to give defaults?
    // what is the acc??? active?
    // 
    this.singleRefs = this.state.things.reduce((acc, value) => {
      acc[value.id] = {
        ref: React.createRef(),
        id: value.id,
        ratio: 0,
      };

      return acc;
    }, {});



    const callback = entries => {
      // console.log(entries); // this is working now 🐱


      entries.forEach(
        entry =>
          (this.singleRefs[entry.target.id].ratio =
            entry.intersectionRatio), // how is this the only reference to this?
      );

      const activeThing = Object.values(this.singleRefs).reduce(
        (acc, value) => (value.ratio > acc.ratio ? value : acc),
        this.state.activeThing,
      );

      // 
      if (activeThing.ratio > this.state.activeThing.ratio) {
        this.setState({ activeThing });
      }
    };



    this.observer = new IntersectionObserver(callback, {
      root: this.rootRef.current,
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
      // what is this Array doing???
    });

    // console.log("inside the constructor");
  } // constructor

  componentDidMount() {
    Object.values(this.singleRefs).forEach(value =>
      this.observer.observe(value.ref.current),
    );

    // console.log("can i console log here?");
  }


  render() {
    var percentage = this.state.activeThing.ratio * 10 + '%';

    return (
      <div>
        <nav>
          {this.state.things.map(thing => (
            <div key={thing.id}>
              <a
                href={`#${thing.id}`}
                selected={thing.id === this.state.activeThing.id}
                style={{margin: percentage}}
              >
                {this.state.activeThing.id}
                
              </a>
            </div>
          ))}
        </nav>

        <article ref={this.rootRef}>
          {this.state.things.map(thing => (
            <div
              key={thing.id}
              id={thing.id}
              ref={this.singleRefs[thing.id].ref}
            >
              <h1
                style={{margin: percentage}}
              >{thing.headline}</h1>
              <p>{thing.text}</p>
            </div>
          ))}
        </article>
      </div>
    );
  } // render
} // Trouble 












// https://www.robinwieruch.de/react-intersection-observer-api
// io animations
class Santigold extends Component {
  constructor(props) {
    super(props);

    // maybe these should be in a this.state
    const numSteps = 20.0;

    let boxElement;
    let prevRatio = 0.0;
    let increasingColor = "rgba(40, 40, 190, ratio)";
    let decreasingColor = "rgba(190, 40, 40, ratio)";


    boxElement = document.querySelector("#box");

    createObserver();

    function createObserver() {
      let observer;
    
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
      };
    
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(boxElement);
    }

    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;
    
      for (let i=1.0; i<=numSteps; i++) {
        let ratio = i/numSteps;
        thresholds.push(ratio);
      }
    
      thresholds.push(0);
      return thresholds;
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
          entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        } else {
          entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        }
    
        prevRatio = entry.intersectionRatio;
      });
    }

  } // constructor


  render() {
    return (
      <div id="box">
        <div class="vertical">
          Welcome to <strong>The Box!</strong>
        </div>
      </div>
    );
  } // render
} // Santigold 























const IndexPage = ({ data }) => (
  <>
<Santigold />
<Trouble />

<Square />
      





    <SEO title="Home" />
    <header id="header-hero">
      <h1 className="screen-reader">Snowledge</h1> {/* always start with an h tag and make this screenreader friendly */}
      <Logo />
      <HeroImage />
      <div className="header-hero_color-blocking">
        <svg title="header-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon fill="#239C9B" points="0,25 100,0 100,75 0,100"/>
        </svg>
      </div>

      <button id="menu" className="io-push">Menu</button>

      {/* <div id="grabber">
        this is here as a tester
      </div> */}
      {/* <HelloMessage />
                 */}



      <nav>
        {/* <ul id="off-canvas">
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
          <li><Link to="/download">Download</Link></li>
        </ul> */}
      </nav>

      <div id="header-byline">
        <h2><em>Snowledge&nbsp;Is&nbsp;Powder</em></h2>
        <h3><em>Discover. Ride. Share. Discover. Ride. Share.</em></h3>
      </div>
      
      <Download />

      <div className="hero-phone">
        <PhonePlaceholder />
      </div>

    </header>


    <main id="home-main">
      <h2 id="our-story-title"><em>Our<br />Story</em></h2>

      {/* this will come from the api eventually */}
      <p id="our-story">The Snowledge team loves to ski and ride but was frustrated with all of the different resort and GPS tracker apps needed to plan, track, and share that perfect day of skiing or snowboarding. Together, we knew we could do better. Designed with input from our community of industry gurus and resort experts, Snowledge combines all the features skiers and riders need, works at every resort and in the backcountry—and it’s free.</p>

      <div className="main-color-blocking">
        <svg title="header-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon fill="#F0F0F0" points="0,25 100,0 100,75 0,100"/>
        </svg>
      </div>

      {/* <CoverVideo /> */}
      <div id="hero-video">
        <iframe title="heroVideo" id="hero-video" width="560" height="315" src="https://www.youtube.com/embed/dq1UpXj0Iw0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="video-color-blocking">
          <svg title="header-color-blocking" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon fill="#009D9B" points="0,25 100,0 100,75 0,100"/>
          </svg>
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

      <div className="home-blank">{/* fill the bottom of the grid this shouldnt be needed if everything is great */}</div>
    </main>
    <Footer />


{/*     Just a quick check that strapi is working
      {data.allStrapiAnythings.edges.map(document => (
          <h2>{document.node.title}</h2>
      ))} */}


  </>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiAnythings {
      edges {
        node {
          title
        }
      }
    }
  }
`