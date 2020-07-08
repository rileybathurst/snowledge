import React from "react"
import TextSliderTitle from "./textSliderTitle"
import TextSliderByline from "./textSliderByline"

// io animations
// this does a better job of being reacty than I am at the moment so you know dont fight the system if i dont have to
// https://www.robinwieruch.de/react-intersection-observer-api

// this is where this comes from
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


class TextSlider extends React.Component {
    render() {
      return (
        <div id="header-byline">
            <TextSliderTitle />
            <TextSliderByline />
        </div>
      );
    } // render
  } // TextSlider 


  export default TextSlider;