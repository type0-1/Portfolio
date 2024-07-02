import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import computeTY from "../images/ComputeTY.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.fromTo(
      ".imgOfMe img",
      { opacity: 0, x: 15 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".imgOfMe img",
          start: "top 80%",
          end: "bottom 40%",
          scroller: ".mainScrollContainer",
          onEnter: () => {
            gsap.to(".imgOfMe img", { opacity: 1, x: 0, duration: 1 });
          },
          onLeave: () => {
            gsap.to(".imgOfMe img", { opacity: 0, x: -15, duration: 1 });
          },
          onEnterBack: () => {
            gsap.to(".imgOfMe img", { opacity: 1, x: 0, duration: 1 });
          },
          onLeaveBack: () => {
            gsap.to(".imgOfMe img", { opacity: 0, x: 15, duration: 1 });
          },
        },
      }
    );

    gsap.fromTo(
      ".aboutLetter",
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
          scroller: ".mainScrollContainer",
          trigger: ".aboutLetter",
          onEnter: () => {
            gsap.to(".aboutLetter", {
              y: 0,
              duration: 1,
              opacity: 1,
              stagger: {
                each: 0.1,
              },
            });
          },
          onLeave: () => {
            gsap.to(".aboutLetter", {
              y: 20,
              opacity: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(".aboutLetter", {
              y: 0,
              opacity: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(".aboutLetter", {
              y: 20,
              opacity: 0,
            });
          },
        },
      }
    );

    gsap.fromTo(
      ".titleLine",
      {
        width: "0%",
      },
      {
        width: "50%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".titleLine",
          scroller: ".mainScrollContainer",
          onEnter: () => {
            gsap.to(".titleLine", {
              delay: 0.5,
              ease: "power3.out",
              width: "50%",
            });
          },
          onLeave: () => {
            gsap.to(".titleLine", {
              width: "0%",
              ease: "power3.out",
            });
          },
          onEnterBack: () => {
            gsap.to(".titleLine", {
              delay: 0.5,
              ease: "power3.out",
              width: "50%",
            });
          },
          onLeaveBack: () => {
            gsap.to(".titleLine", {
              width: "0%",
              ease: "power3.out",
            });
          },
        },
      }
    );

    gsap.fromTo(
      ".aboutTitle2",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".mainScrollContainer",
          trigger: ".aboutTitle2",
          onEnter: () => {
            gsap.to(".aboutTitle2", {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          onLeave: () => {
            gsap.to(".aboutTitle2", {
              opacity: 0,
              y: 20,
            });
          },
          onEnterBack: () => {
            gsap.to(".aboutTitle2", {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(".aboutTitle2", {
              opacity: 0,
              y: 20,
            });
          },
        },
      }
    );

    gsap.fromTo(
      ".aboutDesc",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".mainScrollContainer",
          trigger: ".aboutTitle2",
          onEnter: () => {
            gsap.to(".aboutDesc", {
              opacity: 1,
              y: 0,
            });
          },
          onLeave: () => {
            gsap.to(".aboutDesc", {
              opacity: 0,
              y: -20,
            });
          },
          onEnterBack: () => {
            gsap.to(".aboutDesc", {
              opacity: 1,
              y: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(".aboutDesc", {
              opacity: 0,
              y: -20,
            });
          },
        },
      }
    );
  }, []);

  return (
    <div className="aboutSection relative h-screen w-screen flex flex-col items-center justify-center">
      <div className="aboutTitleWrap absolute flex items-center justify-center transform left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/ font-bold text-[7vh] text-[#222222]">
        {['A', 'b', 'o', 'u', 't'].map((letter, index) => (
          <div key={index} className="aboutLetter">{letter}</div>
        ))}
        <div className="titleLine w-[0%] h-[5px] bg-[#EF8354] absolute bottom-[2%]"></div>
      </div>
      <div className="imgOfMe w-[40%] h-[60%] scale-[0.9] bottom-5 right-5 absolute">
        <img src={computeTY} className="h-full rounded-3xl" alt="Compute TY"></img>
      </div>
      <div className="aboutTitle2Wrap w-[40%] h-[10%] absolute left-[5%] top-[45%]">
        <h1 className="aboutTitle2 text-[#222222] font-bold text-[7vh]">
          More about my <span className="text-[#EF8354]">journey</span>
        </h1>
      </div>
      <div className="aboutDescWrap w-[50%] h-[35%] absolute left-[5%] top-[58%]">
        <p className="aboutDesc text-[#222222] font-semibold text-[3vh] opacity-[0] leading-9">
          I am a third-year Computer Science student at DCU and a dedicated
          freelancer at Roblox. I am driven by a passion for solving real-world
          problems through technology. My expertise lies in various programming
          languages and cutting-edge technologies. I have a keen interest in
          Competitive Programming, Artificial Intelligence and Machine Learning,
          aiming to create innovative solutions that can make a meaningful impact.
        </p>
      </div>
    </div>
  );
}

export default About;
