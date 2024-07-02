import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Experiences() {
  useGSAP(() => {
    // Animating experience letters
    gsap.fromTo(
      '.experienceLetter',
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
          trigger: ".experienceTitleWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.to('.experienceLetter', {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              stagger: {
                each: 0.2,
              }
            });
          },
          onLeave: () => {
            gsap.to('.experienceLetter', {
              opacity: 0,
              y: 20,
            });
          },
          onEnterBack: () => {
            gsap.to('.experienceLetter', {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              stagger: {
                each: 0.2,
              }
            });
          },
          onLeaveBack: () => {
            gsap.to('.experienceLetter', {
              opacity: 0,
              y: 20,
            });
          }
        }
      }
    );

    // Animating title line
    gsap.fromTo(
      '.titleLine3',
      {
        width: "0%",
      },
      {
        width: "80%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experienceTitleWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.to('.titleLine3', {
              width: "80%",
              ease: "power3.out",
            });
          },
          onLeave: () => {
            gsap.to('.titleLine3', {
              width: "0%",
              ease: "power3.out",
            });
          },
          onEnterBack: () => {
            gsap.to('.titleLine3', {
              width: "80%",
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to('.titleLine3', {
              width: "0%",
              ease: "power3.out",
            });
          }
        }
      }
    );

    // Animating experience titles
    gsap.fromTo(
      '.experienceTitle',
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experienceTitleWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.to('.experienceTitle', {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          onLeave: () => {
            gsap.to('.experienceTitle', {
              opacity: 0,
              y: 20,
            });
          },
          onEnterBack: () => {
            gsap.to('.experienceTitle', {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to('.experienceTitle', {
              opacity: 0,
              y: 20,
            });
          }
        }
      }
    );

    // Animating experience descriptions
    gsap.fromTo(
      '.experienceDesc',
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experienceTitleWrap",
          scroller: ".mainScrollContainer",
          start: "top 80%",
          onEnter: () => {
            gsap.to('.experienceDesc', {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          onLeave: () => {
            gsap.to('.experienceDesc', {
              opacity: 0,
              y: 20,
            });
          },
          onEnterBack: () => {
            gsap.to('.experienceDesc', {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to('.experienceDesc', {
              opacity: 0,
              y: 20,
            });
          }
        }
      }
    );
  });

  return (
    <div className="experienceSection relative h-screen w-screen">
      <div className="experienceTitleWrap absolute w-[20%] h-[10%] justify-center items-center flex transform left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/ font-bold text-[6.5vh] text-[#222222]">
        <div className="experienceLetter">E</div>
        <div className="experienceLetter">x</div>
        <div className="experienceLetter">p</div>
        <div className="experienceLetter">e</div>
        <div className="experienceLetter">r</div>
        <div className="experienceLetter">i</div>
        <div className="experienceLetter">e</div>
        <div className="experienceLetter">n</div>
        <div className="experienceLetter">c</div>
        <div className="experienceLetter">e</div>
        <div className="experienceLetter">s</div>
        <div className="titleLine3 w-[35%] h-[4px] bg-[#EF8354] absolute bottom-0"></div>
      </div>
      <div className="absolute w-[85%] h-[72%] left-1/2 top-[65%] transform -translate-x-1/2 -translate-y-1/2 grid grid-row-3 p-10">
        <div className="experienceSection bg-white h-[80%] w-[60%] m-auto space-y-2">
          <div className="experienceTitleWrap h-[30%] w-[85%]">
            <h1 className="experienceTitle font-bold text-[2.8vh] text-[#EF8354]">Python Teacher - Athboy Community School</h1>
          </div>
          <div className="experienceDescWrap h-[70%] w-[100%] m-auto">
            <h1 className="experienceDesc font-semibold text-[2vh] text-[#222222]">A Python Teacher at Athboy Community School, where I taught the fundamentals of programming using Python, Trinket.io and CSCircles to secondary school students.</h1>
          </div>
        </div>
        <div className="experienceSection bg-white h-[80%] w-[60%] m-auto space-y-2">
          <div className="experienceTitleWrap h-[30%] w-[85%]">
            <h1 className="experienceTitle font-bold text-[2.8vh] text-[#EF8354]">Programming Lab Assistant - Dublin City University</h1>
          </div>
          <div className="experienceDescWrap h-[70%] w-[100%]">
            <h1 className="experienceDesc font-semibold text-[2vh] text-[#222222]">A programming lab assistant for over 100 students at DCU during the ComputeTY program, where my colleagues and I helped students understand and implement the fundamentals of programming and efficient problem-solving techniques.</h1>
          </div>
        </div>
        <div className="experienceSection bg-white h-[80%] w-[60%] m-auto space-y-2">
          <div className="experienceTitleWrap h-[30%] w-[85%]">
            <h1 className="experienceTitle font-bold text-[2.8vh] text-[#EF8354]">Hackathon Participant</h1>
          </div>
          <div className="experienceDescWrap h-[70%] w-[100%]">
            <h1 className="experienceDesc font-semibold text-[2vh] text-[#222222]">A frequent hackathon participant, achieving Top 3 in NASA's SpaceApps International Hackathon and Top 10 in AWS Generative AI Gameday Hackathon.</h1>
          </div>
        </div>
        <div className="experienceSection bg-white h-[80%] w-[60%] m-auto space-y-2">
          <div className="experienceTitleWrap h-[30%] w-[85%]">
            <h1 className="experienceTitle font-bold text-[2.8vh] text-[#EF8354]">Freelancer - Roblox</h1>
          </div>
          <div className="experienceDescWrap h-[70%] w-[100%]">
            <h1 className="experienceDesc font-semibold text-[2vh] text-[#222222]">Along with my studies, I am also a Freelancer on the Roblox platform, where I use Blender and Roblox Studio to creating worlds, environmental assets, props and various structures.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
