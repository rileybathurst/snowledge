import React from "react" // 

// io animations
// this does a better job of being reacty than I am at the moment so you know dont fight the system if i dont have to
// https://www.robinwieruch.de/react-intersection-observer-api

// this is where this comes from
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


class Santigold extends React.Component {
    constructor(props) {
      super(props);
  
    } // constructor
  
    // I think this makes the go between
    // Object.values(this
  
    // will this help page load by only making the IO once it loads but I dont get props? which do I need?
    componentDidMount() {
      // maybe these should be in a this.state
      // const numSteps = 20.0; // this is defined again further down
  
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
    }
  
  
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


  export default Santigold;