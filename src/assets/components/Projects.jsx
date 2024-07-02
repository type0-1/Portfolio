import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Projects() {

  useGSAP(()=>{
    // Animating project letters
    gsap.fromTo('.projectLetter',{
      opacity:0,
      scale:0,
      y:-20,
    },{
      opacity:1,
      scale:1,
      y:0,
      ease:"power1.inOut",
      scrollTrigger:{
        scroller:".mainScrollContainer",
        trigger:".titleLine4",
        onEnter: () => {
          gsap.to('.projectLetter', {
            y:0,
            duration:1,
            opacity:1,
            stagger:{
              each:0.2,
            }
          });
        },
        onLeave: () =>{
          gsap.to('.projectLetter',{
            y:20,
            opacity:0,
          });
        },
        onEnterBack: () => {
          gsap.to('.projectLetter', {
            y:0,
            opacity:1,
          });
        },
        onLeaveBack: () =>{
          gsap.to('.projectLetter',{
            y:20,
            opacity:0,
          });
        }
      }
    });

    // Animating title line
    gsap.fromTo('.titleLine4',{
      width:"0%",
    }, {
      width:"80%",
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".projectTitle",
        scroller:".mainScrollContainer",
        onEnter: () => {
          gsap.to('.titleLine4',{
            delay:2,
            ease:"power1.inOut",
            width:"80%",
          });
        },
        onLeave: () => {
          gsap.to('.titleLine4',{
            width:"0%",
            ease:"power1.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to('.titleLine4',{
            delay:2,
            ease:"power1.inOut",
            width:"80%",
          });
        },
        onLeaveBack: () => {
          gsap.to('.titleLine4',{
            width:"0%",
            ease:"power1.inOut",
          });
        },
      }
    });

    // Animating project cards
    gsap.fromTo('.projectCard',{
      opacity:0,
      y:20,
    },{
      opacity:1,
      y:0,
      duration:1,
      ease:"power1.inOut",
      scrollTrigger:{
        scroller:".mainScrollContainer",
        trigger:".projectWrap",
        start: "top 80%", // Adjust this as needed
        end: "bottom 40%", // Adjust this as needed
        onEnter: () => {
          gsap.to('.projectCard', {
            opacity:1,
            y:0,
            duration:1,
            stagger:{
              each:0.2,
            }
          });
        },
        onLeave: () => {
          gsap.to('.projectCard', {
            opacity:0,
            y:20,
          });
        },
        onEnterBack: () => {
          gsap.to('.projectCard', {
            opacity:1,
            y:0,
            duration:1,
            stagger:{
              each:0.2,
            }
          });
        },
        onLeaveBack: () => {
          gsap.to('.projectCard', {
            opacity:0,
            y:20,
          });
        }
      }
    });

    // Animating project titles, descriptions, and buttons
    gsap.fromTo('.projectTitleText, .projectDesc, .projectButton',{
      opacity:0,
      y:10,
    },{
      opacity:1,
      y:0,
      ease:"power1.inOut",
      scrollTrigger:{
        scroller:".mainScrollContainer",
        trigger:".projectWrap",
        start: "top 80%", // Adjust this as needed
        end: "bottom 40%", // Adjust this as needed
        onEnter: () => {
          gsap.to('.projectTitleText, .projectDesc, .projectButton', {
            opacity:1,
            y:0,
            duration:1,
            stagger:{
              each:0.2,
            }
          });
        },
        onLeave: () => {
          gsap.to('.projectTitleText, .projectDesc, .projectButton', {
            opacity:0,
            y:10,
          });
        },
        onEnterBack: () => {
          gsap.to('.projectTitleText, .projectDesc, .projectButton', {
            opacity:1,
            y:0,
            duration:1,
            stagger:{
              each:0.2,
            }
          });
        },
        onLeaveBack: () => {
          gsap.to('.projectTitleText, .projectDesc, .projectButton', {
            opacity:0,
            y:10,
          });
        }
      }
    });

  });

  useEffect(() => {
    const buttons = document.querySelectorAll('.projectButton');

    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });
    });
  }, []);

  return (
    <div className="projectSection relative h-screen w-screen">
      <div className="projectTitleWrap absolute w-[20%] h-[10%] justify-center items-center flex transform left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/ font-bold text-[6vh] text-[#222222]">
        <div className="projectLetter">P</div>
        <div className="projectLetter">r</div>
        <div className="projectLetter">o</div>
        <div className="projectLetter">j</div>
        <div className="projectLetter">e</div>
        <div className="projectLetter">c</div>
        <div className="projectLetter">t</div>
        <div className="projectLetter">s</div>
        <div className="titleLine4 w-[35%] h-[5px] bg-[#EF8354] absolute bottom-0"></div>
      </div>
      <div className="projectWrap w-[85%] h-[60%] absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 p-2 grid grid-cols-3 gap-4">
        <div className="projectCard bg-[#FAFAFA] rounded-xl h-[400px] flex flex-col space-y-4 items-center justify-center text-[#222222] font-bold">
          <div className="projectTitleWrap h-[20%] w-[60%] flex justify-center items-center">
            <h1 className="projectTitleText text-bold text-center text-[#EF8354] text-[3vh]">Salary Truth Predictor: Truth Identification</h1>
          </div>
          <div className="projectPartWrap h-[40%] w-[80%] flex flex-col justify-end items-center space-y-2">
            <div className="projectDescWrap h-[70%] w-[100%] p-4">
                <h1 className="projectDesc text-center text-[2.5vh] text-[#222222]">Jupyter Notebook, Scikit-Learn, Matplotlib, Pandas, Python</h1>
            </div>
            <a href="https://github.com/type0-1/Salary-Truth-Predictor" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full">
                <div className="projectButton bg-[#EF8354] h-[80%] w-[50%] mb-2 rounded-xl text-center items-center justify-center flex text-[3vh]">More info</div>
            </a>
          </div>
        </div>
        <div className="projectCard bg-[#FAFAFA] rounded-xl h-[400px] flex flex-col space-y-4 items-center justify-center text-[#222222] font-bold">
          <div className="projectTitleWrap h-[20%] w-[60%] flex justify-center items-center">
            <h1 className="projectTitleText text-bold text-center text-[#EF8354] text-[3vh]">Myshell: Command-Line Interpreter</h1>
          </div>
          <div className="projectPartWrap h-[40%] w-[80%] flex flex-col justify-end items-center space-y-2">
            <div className="projectDescWrap h-[70%] w-[100%] p-4">
                <h1 className="projectDesc text-center text-[2.5vh] text-[#222222]">C, Gitlab, Makefile</h1>
            </div>
            <a href="https://github.com/type0-1/Myshell-CA216" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full">
                <div className="projectButton bg-[#EF8354] h-[80%] w-[50%] mb-2 rounded-xl text-center items-center justify-center flex text-[3vh]">More info</div>
            </a>
          </div>
        </div>
        <div className="projectCard bg-[#FAFAFA] rounded-xl h-[400px] flex flex-col space-y-4 items-center justify-center text-[#222222] font-bold">
          <div className="projectTitleWrap h-[20%] w-[60%] flex justify-center items-center">
            <h1 className="projectTitleText text-bold text-center text-[#EF8354] text-[3vh]">VR Application: Visualising NASA's STS-7 Mission</h1>
          </div>
          <div className="projectPartWrap h-[40%] w-[80%] flex flex-col justify-end items-center space-y-2">
            <div className="projectDescWrap h-[70%] w-[100%] p-4">
                <h1 className="projectDesc text-center text-[2.5vh] text-[#222222]">HTML, CSS, Javascript, Blender, A-Frame</h1>
            </div>
            <a href="https://astrovisions.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full">
                <div className="projectButton bg-[#EF8354] h-[80%] w-[50%] mb-2 rounded-xl text-center items-center justify-center flex text-[3vh]">More info</div>
            </a>
           </div>
        </div>
        <div className="projectCard bg-[#FAFAFA] rounded-xl h-[400px] flex flex-col space-y-4 items-center justify-center text-[#222222] font-bold">
          <div className="projectTitleWrap h-[20%] w-[60%] flex justify-center items-center">
            <h1 className="projectTitleText text-bold text-center text-[#EF8354] text-[3vh]">Website Portfolio</h1>
          </div>
          <div className="projectPartWrap h-[40%] w-[80%] flex flex-col justify-end items-center space-y-2">
            <div className="projectDescWrap h-[70%] w-[100%] p-4">
                <h1 className="projectDesc text-center text-[2.5vh] text-[#222222]">HTML, Tailwind, Javascript, React, Vite, Greensock Animation Platform</h1>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full">
                <div className="projectButton bg-[#EF8354] h-[80%] w-[50%] mb-2 rounded-xl text-center items-center justify-center flex text-[3vh]">More info</div>
            </a>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Projects;
