import React from "react"

import DefaultFeedImage from './default-feed'
import DefaultProfileImage from './default-profile'
import DefaultActivityImage from './default-activity'
import DefaultFriendImage from './default-friend'


/*
  this is a hilarious janky slideshow that works I shouldn't do it this way
  but also it was the first thought of building one from scratch
 */

function Hey() {
  let slyders;
  let counts = 0;

  slyders = document.getElementsByClassName("slider");
  for (let item of slyders) {
    item.setAttribute("id", counts)
    counts++;
  }

  var nIntervId;

/* 
  this probably shouldnt ever get turned off
  let zero;
  zero = document.getElementById("0");

  if (zero) {
    nIntervId = setInterval(activate, 1000);

    function activate() {
      zero.classList.toggle("invisible");
    }
  } */ 

  let one;
  one = document.getElementById("1");

  if (one) {
    nIntervId = setInterval(activate, 2000);

    function activate() {
      one.classList.toggle("invisible");
    }
  }

  let two;
  two = document.getElementById("2");

  if (two) {
    nIntervId = setInterval(activate, 3000);

    function activate() {
      two.classList.toggle("invisible");
    }
  }

  let three;
  one = document.getElementById("3");

  if (three) {
    nIntervId = setInterval(activate, 4000);

    function activate() {
      three.classList.toggle("invisible");
    }
  }



  return null
}




const ScreenshotSlideshow = () => (
    <div id="slideshow">
      <div className="slider">
        <DefaultFeedImage />
      </div>

      <div className="slider">
        <DefaultProfileImage />
      </div>

      <div className="slider">
        <DefaultActivityImage />
      </div>

      <div className="slider">
        <DefaultFriendImage />
      </div>

      <Hey />
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