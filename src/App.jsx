import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import Navbar from "./assets/components/Navbar";
import LandingPage from "./assets/components/Landing";
import Welcome from "./assets/components/Welcome";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Experiences from "./assets/components/Experiences";
import Projects from "./assets/components/Projects";

gsap.registerPlugin(TextPlugin);

function App() {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    gsap.delayedCall(0.5, () => setAnimationComplete(true));
  };

  useGSAP(() => {
    const main = gsap.timeline();
  }, [isAnimationComplete]);

  return (
    <div className="mainScrollContainer relative h-screen overflow-x-hidden bg-transparent">
      <Navbar />
      <div id="home"><LandingPage /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experiences"><Experiences /></div>
      <div id="projects"><Projects /></div>
      {!isAnimationComplete && (
        <div className="absolute inset-0 z-50">
          <Welcome onComplete={handleAnimationComplete} />
        </div>
      )}
    </div>
  );
}

export default App;
