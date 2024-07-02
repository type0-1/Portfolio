/// <reference types="vitest" />
import React from 'react';
import { render } from '@testing-library/react';
import About from '../src/assets/components/About';
import { expect } from 'chai';

describe('About component', () => {
  it('renders without crashing and contains the main div components', () => {
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

  it('contains the correct text content', () => {
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

  it('contains the correct class names', () => {
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
