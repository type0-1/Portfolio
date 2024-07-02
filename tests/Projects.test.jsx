import React from 'react';
import { render } from '@testing-library/react';
import Projects from '../src/assets/components/Projects';
import { expect } from 'chai';

describe('Projects component', () => {
  it('renders without crashing and contains the main div components', () => {
    const { container } = render(<Projects />);

    const projectSection = container.querySelector('.projectSection');
    expect(projectSection).to.exist;

    const projectTitleWrap = container.querySelector('.projectTitleWrap');
    expect(projectTitleWrap).to.exist;

    const titleLine4 = container.querySelector('.titleLine4');
    expect(titleLine4).to.exist;

    const projectWrap = container.querySelector('.projectWrap');
    expect(projectWrap).to.exist;

    const projectCards = container.querySelectorAll('.projectCard');
    expect(projectCards).to.have.lengthOf(4); // Checking the number of project cards
  });

  it('contains the correct text content in project cards', () => {
    const { container } = render(<Projects />);

    const projectTitles = [
      "Salary Truth Predictor: Truth Identification",
      "Myshell: Command-Line Interpreter",
      "VR Application: Visualising NASA's STS-7 Mission",
      "Website Portfolio"
    ];

    const projectDescs = [
      "Jupyter Notebook, Scikit-Learn, Matplotlib, Pandas, Python",
      "C, Gitlab, Makefile",
      "HTML, CSS, Javascript, Blender, A-Frame",
      "HTML, Tailwind, Javascript, React, Vite, Greensock Animation Platform"
    ];

    const projectTitleElements = container.querySelectorAll('.projectTitleText');
    const projectDescElements = container.querySelectorAll('.projectDesc');

    projectTitleElements.forEach((titleElement, index) => {
      expect(titleElement.textContent).to.equal(projectTitles[index]);
    });

    projectDescElements.forEach((descElement, index) => {
      expect(descElement.textContent).to.equal(projectDescs[index]);
    });
  });

  it('contains the correct class names', () => {
    const { container } = render(<Projects />);

    const projectTitleWrap = container.querySelector('.projectTitleWrap');
    expect(projectTitleWrap).to.have.class('projectTitleWrap');

    const titleLine4 = container.querySelector('.titleLine4');
    expect(titleLine4).to.have.class('titleLine4');

    const projectCards = container.querySelectorAll('.projectCard');
    projectCards.forEach((card) => {
      expect(card).to.have.class('projectCard');
    });

    const projectTitles = container.querySelectorAll('.projectTitleText');
    projectTitles.forEach((title) => {
      expect(title).to.have.class('projectTitleText');
    });

    const projectDescs = container.querySelectorAll('.projectDesc');
    projectDescs.forEach((desc) => {
      expect(desc).to.have.class('projectDesc');
    });

    const projectButtons = container.querySelectorAll('.projectButton');
    projectButtons.forEach((button) => {
      expect(button).to.have.class('projectButton');
    });
  });
});
