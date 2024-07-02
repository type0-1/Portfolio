import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

const Welcome = ({ onComplete }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  function textIntro() {
    const t = gsap.timeline();
    t.fromTo('.studentAnim', {
      opacity: 0,
      y: -5,
      ease: 'bounce.in',
      fontFamily: 'Manrope',
    }, {
      opacity: 1,
      y: 5,
      stagger: {
        each: 0.1,
      },
    })
      .to('.studentAnim', {
        opacity: 0,
        y: 10,
        stagger: {
          each: 0.1,
        },
      })
      .fromTo('.freeWrap', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.5,
      }, '-=1.5')
      .fromTo('.freeAnim', {
        opacity: 0,
        y: -5,
        ease: 'bounce.in',
        fontFamily: 'Manrope',
      }, {
        opacity: 1,
        y: 5,
        stagger: {
          each: 0.1,
        },
      }, '-=0.7')
      .to('.freeAnim', {
        opacity: 0,
        y: 10,
        stagger: {
          each: 0.1,
        },
      });
    return t;
  }

  function conclude() {
    const timeline = gsap.timeline();
    timeline.to(containerRef.current, {
      duration: 1,
      ease: 'power1.inOut',
      y: '100vh',
    })
      .to(containerRef.current, {
        display: 'none',
        onComplete,
      });
    return timeline;
  }

  useGSAP(() => {
    const main = gsap.timeline();
    main.add(textIntro());
    main.add(conclude(), '-=0.5'); // Start counter animation immediately
  }, [onComplete]);

  return (
    <div className="relative overflow-hidden z-[50]">
      <div className="h-screen flex bg-black justify-center items-center" ref={containerRef}>
        <div className="introWrap absolute font-extralight">
          <div data-testid="studentWrap" className="studentWrap absolute h-[100%] w-[100%] flex flex-row justify-center items-center">
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>S</h1>
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>t</h1>
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>u</h1>
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>d</h1>
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>e</h1>
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>n</h1>
            <h1 className="studentAnim text-3xl font-bold text-white" ref={textRef}>t</h1>
          </div>
          <div data-testid="freeWrap" className="freeWrap absolute h-[100%] w-[100%] flex flex-row justify-center items-center opacity-0">
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>F</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>r</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>e</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>e</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>l</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>a</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>n</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>c</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>e</h1>
            <h1 className="freeAnim text-3xl font-bold text-white" ref={textRef}>r</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
