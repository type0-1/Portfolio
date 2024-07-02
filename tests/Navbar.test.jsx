import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../src/assets/components/Navbar';
import { expect } from 'chai';

describe('Navbar component', () => {
  it('renders without crashing and contains the main div components', () => {
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
    const { container } = render(<Navbar />);

    const navBarSections = container.querySelectorAll('.navBarSection');
    const expectedTexts = ['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCES', 'PROJECTS'];

    navBarSections.forEach((section, index) => {
      const linkText = section.querySelector('a h1').textContent;
      expect(linkText).to.equal(expectedTexts[index]);
    });
  });

  it('contains the correct class names', () => {
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
