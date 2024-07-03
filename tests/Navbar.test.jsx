/// <reference types="vitest" />

/* 
Importing necessary libraries and the About component for testing.

React: For react functionality
Navbar: The navbar component
Render: Rendering components for testing.
Chai: Assertion library.
*/

import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../src/assets/components/Navbar';
import { expect } from 'chai';


describe('Navbar component', () => {
  it('renders without crashing and contains the main div components', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they exist.
    */
    const { container } = render(<Navbar />);

    const navBar = container.querySelector('.navBar');
    expect(navBar).to.exist;

    const navbarLogo = container.querySelector('.navbarLogo');
    expect(navbarLogo).to.exist;

    const navLine = container.querySelector('.navLine');
    expect(navLine).to.exist;

    const navbarContentWrapper = container.querySelector('.navbarContentWrapper');
    expect(navbarContentWrapper).to.exist;
  });

  it('contains the correct text content in navBarSection', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they contain the right content.
    */
    const { container } = render(<Navbar />);

    const navBarSections = container.querySelectorAll('.navBarSection');
    const expectedTexts = ['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCES', 'PROJECTS'];

    navBarSections.forEach((section, index) => {
      const linkText = section.querySelector('a h1').textContent;
      expect(linkText).to.equal(expectedTexts[index]);
    });
  });

  it('contains the correct class names', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they contain the respective class names associated with it.
    */
    const { container } = render(<Navbar />);

    const navBar = container.querySelector('.navBar');
    expect(navBar).to.have.class('navBar');

    const navbarLogo = container.querySelector('.navbarLogo');
    expect(navbarLogo).to.have.class('navbarLogo');

    const navLine = container.querySelector('.navLine');
    expect(navLine).to.have.class('navLine');

    const navBarSections = container.querySelectorAll('.navBarSection');
    navBarSections.forEach((section) => {
      expect(section).to.have.class('navBarSection');
    });
  });
});
