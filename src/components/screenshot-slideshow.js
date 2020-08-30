import React from "react"

import DefaultFeedImage from './default-feed'
import DefaultProfileImage from './default-profile'
import DefaultActivityImage from './default-activity'
import DefaultFriendImage from './default-friend'


/*
  Im having problems with this but its a basic test for now that should run
 */

function Hey() {
  console.log('show starting once');

  // get the images
  let slyders;

  // this helps with the delay
  var counts = 0;

  // this is the main function
  function activate() {
  
    console.log('start the process each time');

    slyders = document.getElementsByClassName("slider");

    console.log('did we get ' + slyders);

    for (let screens of slyders) {
      
      // check
      console.log(counts);

      // wait to do the thing between each slide
      // this might be messy with a zero first?
      // this doesnt hold up everything it just doesnt do this until
      let wait;
      wait = setTimeout(adder, (counts + 2000) + 2000);

      function adder() {
        // console.log(counts);
        screens.classList.add('here');
      }

      console.log('count em up ' + counts);
      counts++;
    }
  }

  // then restart the process
    // the number should be math documented here but thinking first
    let nIntervId;
    nIntervId = setInterval(activate, 10000);
    // nIntervId = setTimeout(activate, 2000);

  // remove the visibility
  // wierdly Im getting 2 of the 4 tags not all 4?
  let rere;
  function setback() {
    counts = 0;
    console.log('reset');
    // remove all activate
    // possinly just dont even have the back screen in the list
    let shown;
    shown = document.getElementsByClassName('here')
    
    let ni = 0;
    for (let here of shown) {
      console.log('ni is ' + ni);
      here.classList.remove('here');
      console.log(here);
      ni++;
    }

    // run this once straight away
    activate()
  }

  rere = setInterval(setback, 10000);
  // rere = setTimeout(setback, 10000); // testing



    console.log('show finishing once');
  return null
}


function Remooo() {
  let shown;
  shown = document.getElementsByClassName('slider')
    for (let here of shown) {
      here.classList.remove('slider');
    }

  return null
}


const ScreenshotSlideshow = () => (
    <div id="slideshow">

      {/*
      we need a couple tags as one is for css one is for js
      specifically only one tag up top so it nevers gets removed
      */}
      <div className="screener">
        <DefaultFeedImage />
      </div>

      <div className="screener slider">
        <DefaultProfileImage />
      </div>

      <div className="screener slider">
        <DefaultActivityImage />
      </div>

      <div className="screener slider">
        <DefaultFriendImage />
      </div>

      <Hey />

      {/* <Remooo /> */}
    </div>
)









export default ScreenshotSlideshow







/* 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
} */