/// <reference types="vitest" />

/* 
Importing necessary libraries and the About component for testing.

React: For react functionality
About: The about component
Render: Rendering components for testing.
Chai: Assertion library.
*/

import React from 'react';
import { render } from '@testing-library/react';
import About from '../src/assets/components/About';
import { expect } from 'chai';

describe('About component', () => {
  it('Renders without crashing and contains the main div components', () => {
    
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they exist.
    */

    const { container } = render(<About />);

    const aboutSection = container.querySelector('.aboutSection');
    expect(aboutSection).to.exist;

    const aboutTitleWrap = container.querySelector('.aboutTitleWrap');
    expect(aboutTitleWrap).to.exist;

    const imgOfMe = container.querySelector('.imgOfMe');
    expect(imgOfMe).to.exist;

    const aboutTitle2Wrap = container.querySelector('.aboutTitle2Wrap');
    expect(aboutTitle2Wrap).to.exist;

    const aboutDescWrap = container.querySelector('.aboutDescWrap');
    expect(aboutDescWrap).to.exist;
  });

  it('Contains the correct text content', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they contain the right content/letters.
    */
    const { container } = render(<About />);

    const aboutTitleWrap = container.querySelector('.aboutTitleWrap');
    const aboutLetters = aboutTitleWrap.querySelectorAll('.aboutLetter');
    const expectedText = ['A', 'b', 'o', 'u', 't'];
    aboutLetters.forEach((letter, index) => {
      expect(letter.textContent).to.equal(expectedText[index]);
    });

    const aboutTitle2 = container.querySelector('.aboutTitle2');
    expect(aboutTitle2.textContent).to.include('More about my journey');

    const aboutDesc = container.querySelector('.aboutDesc');
    expect(aboutDesc.textContent).to.include('I am a third-year Computer Science student at DCU');
  });

  it('Contains the correct class names', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they contain the respective class names associated with it.
    */
    const { container } = render(<About />);

    const titleLine = container.querySelector('.titleLine');
    expect(titleLine).to.have.class('titleLine');

    const imgOfMe = container.querySelector('.imgOfMe');
    expect(imgOfMe).to.have.class('imgOfMe');

    const aboutTitle2 = container.querySelector('.aboutTitle2');
    expect(aboutTitle2).to.have.class('aboutTitle2');

    const aboutDesc = container.querySelector('.aboutDesc');
    expect(aboutDesc).to.have.class('aboutDesc');
  });
});
