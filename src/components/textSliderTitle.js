import React from "react"

// io animations
// this does a better job of being reacty than I am at the moment so you know dont fight the system if i dont have to
// https://www.robinwieruch.de/react-intersection-observer-api

// this is where this comes from
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


// what I need is to observe one element and adjust another


class TextSliderTitle extends React.Component {
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

      // let increasingColor = "rgba(40, 40, 190, ratio)";
      // let decreasingColor = "rgba(190, 40, 40, ratio)";

      let increasingMargin = "ratioem";
      let decreasingMargin = "ratioem";

      changeElement = document.querySelector("#header-byline__name");
      boxElement = document.querySelector("#home-main");
      // I dont know if I love this being a different element to what Im actually adapting
      // I guess unless its not a block element I could do something with a different footprint
  
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
            changeElement.style.marginLeft = increasingMargin.replace("ratio", -5-entry.intersectionRatio*50);
          } else {
            changeElement.style.marginLeft = decreasingMargin.replace("ratio", -5-entry.intersectionRatio*50);
          }
      
          prevRatio = entry.intersectionRatio;
        });
      }

      // were slowing down the animation but we dont want that on the load
      animateNow();

      function animateNow () {
          changeElement.classList.remove("animation-wait");
      }


    } // componentDidMount
  
  
    render() {
      return (
        // wow this is a bad name
        // preload doesnt seem to need to be removed with this way of adding tansitions
          <h2 id="header-byline__name" className="animation-wait"><em>Snowledge&nbsp;Is&nbsp;Powder&nbsp;Snowledge&nbsp;Is&nbsp;Powder&nbsp;Snowledge&nbsp;Is&nbsp;Powder</em></h2>
      );
    } // render
  } // Santigold 


  export default TextSliderTitle;