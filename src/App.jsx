{/*
  Necessary imports used in App.jsx

  This includes React, GSAP and the React Components.
  */
 }

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import Navbar from "./assets/components/Navbar";
import LandingPage from "./assets/components/Landing";
import Welcome from "./assets/components/Welcome";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Experiences from "./assets/components/Experiences";
import Projects from "./assets/components/Projects";

// App function

function App() {

  {/*
    Declaring useState and useRef.

    useState is used for checking the completion of the Welcome screen.
    useRef is used for referencing the main scroller the user will use.
    */
   }

  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const mainScrollContainerRef = useRef(null);

  // Function to disable and then enable scrolling
  const handleAnimationComplete = () => {
    // Set a timeout to re-enable scrolling after 5 seconds.
    gsap.delayedCall(5, () => {
      if (mainScrollContainerRef.current) {
        mainScrollContainerRef.current.classList.remove('no-scroll');
      }
      setAnimationComplete(true);
    });
  };

  // useEffect hook.
  useEffect(() => {
    // Disable scrolling initially
    if (mainScrollContainerRef.current) {
      mainScrollContainerRef.current.classList.add('no-scroll');
    }

    // Clean up to re-enable scrolling when the component unmounts
    return () => {
      if (mainScrollContainerRef.current) {
        mainScrollContainerRef.current.classList.remove('no-scroll');
      }
    };
  }, []);

  // Returning the components

  return (
    <div ref={mainScrollContainerRef} className="mainScrollContainer relative h-screen overflow-x-hidden bg-transparent">
      <Navbar />
      <div id="home"><LandingPage /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experiences"><Experiences /></div>
      <div id="projects"><Projects /></div>
      {!isAnimationComplete && (
        // Tailwind CSS while also passing the useState variable to the Welcome component.
        <div className="absolute inset-0 z-50">
          <Welcome onComplete={handleAnimationComplete} />
        </div>
      )}
    </div>
  );
}

export default App;
