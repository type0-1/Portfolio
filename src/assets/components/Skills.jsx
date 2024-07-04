/*
Importing necessary libraries:

React: For react functionality
GSAP: For animations
Images: For showcasing skills
CSS: For media queries (resolution)
*/

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import css from "../images/css.png";
import django from "../images/django.png";
import tailwind from "../images/tailwind.png";
import C from "../images/c.png";
import gitlab from "../images/gitlab.png";
import html from "../images/html.png";
import java from "../images/java.png";
import js from "../images/js.png";
import mysql from "../images/mysql.png";
import nodejs from "../images/nodejs.png";
import prolog from "../images/prolog.png";
import python from "../images/python.png";
import react from "../images/react.png";
import greensock from "../images/greensock.png";
import vite from "../images/vite.png";

import "../css/skills.css"

gsap.registerPlugin(ScrollTrigger);

// Skills component
function Skills() {
  useGSAP(() => {
    // Animating skill letters
    gsap.fromTo(
      ".skillLetter",
      {
        opacity: 0,
        scale: 0,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skillSectionWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.to(".skillLetter", {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              stagger: {
                each: 0.2,
              },
            });
          },
          onLeave: () => {
            gsap.to(".skillLetter", {
              opacity: 0,
              y: 20,
            });
          },
          onEnterBack: () => {
            gsap.to(".skillLetter", {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              stagger: {
                each: 0.2,
              },
            });
          },
          onLeaveBack: () => {
            gsap.to(".skillLetter", {
              opacity: 0,
              y: 20,
            });
          },
        },
      }
    );

    // Animating title line
    gsap.fromTo(
      ".titleLine2",
      {
        width: "0%",
      },
      {
        width: "50%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skillSectionWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.to(".titleLine2", {
              width: "50%",
              ease: "power3.out",
            });
          },
          onLeave: () => {
            gsap.to(".titleLine2", {
              width: "0%",
              ease: "power3.out",
            });
          },
          onEnterBack: () => {
            gsap.to(".titleLine2", {
              width: "50%",
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(".titleLine2", {
              width: "0%",
              ease: "power3.out",
            });
          },
        },
      }
    );

    // Animating skill sections
    gsap.fromTo(
      ".skillSection",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skillSectionWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.set(".skillImg", { opacity: 0, y: -20 });
            gsap.set(".skillText", { opacity: 0, y: -20 });
            gsap.set(".skillSection", { opacity: 0, y: -20 });
            gsap.to(".skillSection", {
              opacity: 1,
              y: 0,
              stagger: {
                each: 0.2,
              },
            });
            gsap.to(
              ".skillImg",
              {
                opacity: 1,
                y: 0,
                stagger: {
                  each: 0.2,
                },
              },
              "-=0.5"
            );
            gsap.to(
              ".skillText",
              {
                opacity: 1,
                y: 0,
                stagger: {
                  each: 0.2,
                },
              },
              "-=0.5"
            );
          },
          onLeave: () => {
            gsap.to(".skillSection", {
              opacity: 0,
              y: 20,
            });
          },
          onEnterBack: () => {
            gsap.set(".skillImg", { opacity: 0, y: -20 });
            gsap.set(".skillText", { opacity: 0, y: -20 });
            gsap.set(".skillSection", { opacity: 0, y: -20 });
            gsap.to(".skillSection", {
              opacity: 1,
              y: 0,
              stagger: {
                each: 0.2,
              },
            });
            gsap.to(
              ".skillImg",
              {
                opacity: 1,
                y: 0,
                stagger: {
                  each: 0.2,
                },
              },
              "-=2.5"
            );
            gsap.to(
              ".skillText",
              {
                opacity: 1,
                y: 0,
                stagger: {
                  each: 0.2,
                },
              },
              "-=0.5"
            );
          },
          onLeaveBack: () => {
            gsap.to(".skillSection", {
              opacity: 0,
              y: 20,
              stagger: {
                each: 0.2,
              },
            });
          },
        },
      }
    );
  });

  // Return statement using HTML and TailwindCSS.

  /*
  Each skillSection contains an image associated with that skill, and the title of that skill.
  For small resolutions, the skill names will not come up but the logo associated with that skill will.  
  */
  return (
    <div className="skillSection relative h-screen w-screen">
      <div className="skillTitleWrap absolute w-[20%] h-[10%] justify-center items-center flex transform left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/ font-bold text-[7vh] text-[#222222]">
        <div className="skillLetter">T</div>
        <div className="skillLetter">e</div>
        <div className="skillLetter">c</div>
        <div className="skillLetter">h</div>
        <div className="skillLetter">n</div>
        <div className="skillLetter">o</div>
        <div className="skillLetter">l</div>
        <div className="skillLetter">o</div>
        <div className="skillLetter">g</div>
        <div className="skillLetter">i</div>
        <div className="skillLetter">e</div>
        <div className="skillLetter">s</div>
        <div className="titleLine2 w-[35%] h-[5px] bg-[#EF8354] absolute bottom-[2%]"></div>
      </div>
      <div className="skillSectionWrap w-[90%] h-[50%] absolute left-[5%] top-[35%] rounded-3xl p-10 grid grid-cols-3 gap-4">
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={css} className="skillImg h-[60px] w-[60px]" alt="CSS" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">CSS</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={html} className="skillImg h-[60px] w-[60px]" alt="HTML" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">HTML</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={js} className="skillImg h-[60px] w-[60px]" alt="JavaScript" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">JavaScript</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={django} className="skillImg h-[60px] w-[60px]" alt="Django" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Django</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={react} className="skillImg h-[60px] w-[60px]" alt="React" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">React</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={greensock} className="skillImg h-[60px] w-[60px]" alt="Greensock Animation Platform" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Greensock Animation Platform</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={nodejs} className="skillImg h-[60px] w-[60px]" alt="NodeJS" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">NodeJS</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={tailwind} className="skillImg h-[60px] w-[60px]" alt="Tailwind CSS" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Tailwind CSS</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={gitlab} className="skillImg h-[60px] w-[60px]" alt="Gitlab" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Gitlab</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={C} className="skillImg h-[60px] w-[60px]" alt="C" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">C</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={python} className="skillImg h-[60px] w-[60px]" alt="Python" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Python</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={java} className="skillImg h-[60px] w-[60px]" alt="Java" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Java</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={mysql} className="skillImg h-[60px] w-[60px]" alt="MySQL" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">MySQL</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={prolog} className="skillImg h-[60px] w-[60px]" alt="Prolog" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Prolog</h1>
        </div>
        <div className="skillSection bg-white flex justify-start items-center space-x-4 border-black border-[2px] rounded-xl p-4">
          <img src={vite} className="skillImg h-[60px] w-[60px]" alt="Vite" />
          <h1 className="skillText font-bold text-[2.5vh] text-[#222222]">Vite</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
