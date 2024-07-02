import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import logo from '../images/logo.png';

function Navbar() {

  function animNav(){
    const t = gsap.timeline();
    t.fromTo('.navBar',{
      y:30,
      opacity:0,
      fontFamily:"Roboto",
    },{
      y:0,
      zIndex:60,
      opacity:1,
    }, "+=5");
  }

  function animLine(){
    const t = gsap.timeline();

    t.fromTo('.navLine', {
      width:"0%"
    }, {
      duration:3,
      width:"95%",
      ease:"expo.inOut",
    });

    return t;
  }

  function animLogo(){
    const t = gsap.timeline();

    t.fromTo('.navbarLogo', {
      y:10,
      opacity:0,
    }, {
      y:0,
      opacity:1,
      duration:0.5,
    });

    return t; 
  }

  function animSections(){
    const t = gsap.timeline();

    t.fromTo('.navBarSection', {
      opacity:0,
      y:10,
      rotation:7,
    }, {
      opacity:1,
      rotation:0,
      y:0,
      stagger:{
        each:0.3,
      }
    });

    return t; 
  }

  useGSAP(()=>{
    const main = gsap.timeline();
    main.add(animNav());
    main.add(animLine(), "+=5");
    main.add(animLogo(), "+=0.5");
    main.add(animSections());
  });

  useEffect(() => {
    const links = gsap.utils.toArray(".navBarSection a");

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, { 
            scale: 1.2, 
            duration: 0.3,
            color:"#EF8354", });
        });
  
        link.addEventListener("mouseleave", () => {
          gsap.to(link, { 
            scale: 1, 
            duration: 0.3,
            color:"#222222", });
        });
      });

  }, []);

  return (
    <div className="navBar fixed flex justify-center bg-white h-[10%] w-full z-[40]">
      <div className="navbarLogo absolute h-full w-[10%] items-center justify-center flex left-[0%]">
        <img src={logo} className="h-[80%] w-[30%] left-[50%] absolute opacity-[0.8]" alt="Logo"></img>
      </div>
      <div className="navLine absolute h-[1px] w-[95%] bg-[#222222] top-[100%] opacity-[0.5]"></div>   
      <div className="navbarContentWrapper absolute h-full w-[50%] bg-transparent font-bold left-[52%] transform -translate-x-1/2 flex flex-row justify-between items-center text-[#222222]">
      <div className="navBarSection h-full flex items-center justify-center">
          <a href="#home"><h1 className="text-center text-[2.3vh]">HOME</h1></a>
        </div>
        <div className="navBarSection h-full flex items-center justify-center">
          <a href="#about"><h1 className="text-center text-[2.3vh]">ABOUT</h1></a>
        </div>
        <div className="navBarSection h-full flex items-center justify-center">
          <a href="#skills"><h1 className="text-center text-[2.3vh]">SKILLS</h1></a>
        </div>
        <div className="navBarSection h-full flex items-center justify-center">
          <a href="#experiences"><h1 className="text-center text-[2.3vh]">EXPERIENCES</h1></a>
        </div>
        <div className="navBarSection h-full flex items-center justify-center">
          <a href="#projects"><h1 className="text-center text-[2.3vh]">PROJECTS</h1></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
