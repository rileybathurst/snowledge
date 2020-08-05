import React from "react"

// io animations
// this does a better job of being reacty than I am at the moment so you know dont fight the system if i dont have to
// https://www.robinwieruch.de/react-intersection-observer-api

// this is where this comes from
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


class TextSliderByline extends React.Component {
    // constructor(props) {
    //   super(props);
  
    // } // constructor
  
    // I think this makes the go between
    // Object.values(this
  
    // will this help page load by only making the IO once it loads but I dont get props? which do I need?
    componentDidMount() {
      // maybe these should be in a this.state
      // const numSteps = 20.0; // this is defined again further down
  
      let boxElement;
      let changeElement
      let prevRatio = 0.0;
      let increasingMargin = "ratioem";
      let decreasingMargin = "ratioem";
  
      boxElement = document.querySelector("#home-main");
      changeElement = document.querySelector("#header-byline__byline");
  
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
            changeElement.style.marginLeftt = increasingMargin.replace("ratio", -2+entry.intersectionRatio*50);
          } else {
            changeElement.style.marginLeft = decreasingMargin.replace("ratio", -2+entry.intersectionRatio*50);
          }
      
          prevRatio = entry.intersectionRatio;
        });
      }

      // were slowing down the animation but we dont want that on the load
      animateNow();

      function animateNow () {
          changeElement.classList.remove("animation-wait");
      }

    }
  
  
    render() {
      return (
          <h3 id="header-byline__byline" className="animation-wait"><em>Discover.&nbsp;Ride.&nbsp;Share.&nbsp;Discover.&nbsp;Ride.&nbsp;Share.&nbsp;Discover.&nbsp;Ride.&nbsp;Share.</em></h3>
      );
    } // render
  } // Santigold 


  export default TextSliderByline;