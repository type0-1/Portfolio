/*
Important imports for libraries:

React: For react functionality
GSAP: For animations
Images: For images.
CSS: For media queries (resolution)
*/

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin, ScrollTrigger } from "gsap/all";

import github from "../images/github-logo-svgrepo-com.png"
import gmail from "../images/gmail.png"
import linkedin from "../images/linkedin.png"

import "../css/landing.css"

gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Landing function, passing the isAnimationComplete hook from App.jsx
function Landing({ onComplete }) {

  // Function to wrap each letter in a span
  const wrapLetters = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} className="introLetter">{letter}</span>
    ));
  };

  // Animate final background

  function animFinal() {
    const t = gsap.timeline();
    t.fromTo('.finalBG', {
      opacity: 0,
    }, {
      opacity: 1,
    });
    return t;
  }

  // Animate the intro letters.

  function animIntroDesc() {
    const t = gsap.timeline();

    t.fromTo('.introLetter', {
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      duration: 1,
      y: 0,
      stagger: {
        each: 0.10,
      },
      ease: "power2.out"
    });

    return t;
  }

  // Animate the short description above introduction
  function animName() {
    const t = gsap.timeline();

    t.fromTo('.name', {
      fontFamily: "Manrope",
      opacity:0,
      rotation:7,
      y:-10,
    }, {
      y:10, 
      rotation:0,
      opacity:1,
      duration:1,
    });

    return t;
  }

  // Animate the contact text

  function animContactText(){
    const t = gsap.timeline()

    t.fromTo('.contactText',{
      y:10,
      opacity:0,
    },{
      y:0,
      opacity:1,
      duration:1,
      ease:"power1.inOut",
    })

    return t 
  }

  // Animate the contact images.

  function animImg(){
    const t = gsap.timeline()

    t.fromTo('.imgSelect',{
      y:-20,
      opacity:0, 
      rotation:7,
    },{
      y:-5,
      opacity:1,
      rotation:0,
      ease:"power1.inOut",
      stagger:{
        each:0.4,
      }
    })

    return t 
  }

  // Using a useGSAP hook for animation timing.

  useGSAP(() => {
    const main = gsap.timeline({
      onComplete: onComplete,
    });
    main.add(animFinal(), "-=1.5");
    main.add(animName(), "+=5");
    main.add(animIntroDesc(), "-=0.5");
    main.add(animContactText(), "-=4")
    main.add(animImg(), "-=2")
  }, [onComplete]);

  // Similar to functionality in Navbar.jsx, where I animate the images based on the mouse entering and leaving its div/area using a useEffect hook.

  useEffect(() => {
    const imgs = document.querySelectorAll(".imgSelect");

    imgs.forEach(img => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.2, duration: 0.3 });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  // Return statement using HTML and TailwindCSS.
  return (
    <div className="relative bg-black overflow-x-hidden h-screen w-screen text-[white] z-[50]">
      <div className="finalBG relative overflow-x-hidden h-screen w-screen bg-white z-0">
        <div className="nameWrap absolute h-[10%] w-[25%] left-1/2 top-[38%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <h1 className="name text-[#444444] text-[3vh] font-bold">Third Year Student @ DCU</h1>
        </div>
        <div className="introDescWrap absolute h-[30%] w-[65%] left-1/2 top-[57%] transform -translate-x-1/2 -translate-y-1/2 leading-snug">
          <h1 className="introDesc text-[#222222] text-[6.8vh] text-center font-bold">
            {wrapLetters("Hi, ")}
            {wrapLetters("I'm ")}
            <span className="text-[#EF8354]">{wrapLetters("Samson")}</span>
            {wrapLetters(", a ")}
            {wrapLetters("Computer ")}
            {wrapLetters("Science ")}
            {wrapLetters("student ")}
            {wrapLetters("and ")}
            {wrapLetters("freelancer ")}
            {wrapLetters("who ")}
            {wrapLetters("loves ")}
            {wrapLetters("exploring ")}
            {wrapLetters("new ")}
            {wrapLetters("tech")}
          </h1>
        </div>
        <div className="contactWrap absolute h-[10%] w-[20%] left-1/2 bottom-[5%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <h1 className="contactText text-[#222222] text-[3vh] font-bold">Want to get in contact?</h1>
        </div>
        <div className="contactsWrap absolute h-[10%] w-[20%] left-1/2 top-[93%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex flex-row space-x-8">
          <div className="imgSelect h-[70%] w-[20%]">
            <a href="https://github.com/type0-1" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
          <div className="imgSelect h-[70%] w-[20%]">
            <a href="mailto:samson-oloruntola4@outlook.com">
              <img src={gmail} alt="Email" />
            </a>
          </div>
          <div className="imgSelect h-[70%] w-[20%]">
            <a href="https://www.linkedin.com/in/samson-oloruntola-248bb5225/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
