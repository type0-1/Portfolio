/// <reference types="vitest" />

/* 
Importing necessary libraries and the About component for testing.

React: For react functionality
Experiences: The experiences component
Render: Rendering components for testing.
Chai: Assertion library.
*/

import React from 'react';
import { render } from '@testing-library/react';
import Experiences from '../src/assets/components/Experiences';
import { expect } from 'chai';

describe('Experiences component', () => {
  it('renders without crashing and contains the main div components', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they exist.
    */
    const { container } = render(<Experiences />);

    const experienceSection = container.querySelector('.experienceSection');
    expect(experienceSection).to.exist;

    const experienceTitleWrap = container.querySelector('.experienceTitleWrap');
    expect(experienceTitleWrap).to.exist;

    const titleLine3 = container.querySelector('.titleLine3');
    expect(titleLine3).to.exist;

    const mainExperienceSections = container.querySelectorAll('.experienceSection');
    expect(mainExperienceSections).to.have.lengthOf(5); // Checking the number of experience sections
  });

  it('contains the correct text content in experience sections', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they contain the right content/letters.
    */
    const { container } = render(<Experiences />);

    const experienceTitles = [
      'Python Teacher - Athboy Community School',
      'Programming Lab Assistant - Dublin City University',
      'Hackathon Participant',
      'Freelancer - Roblox'
    ];

    const experienceDescs = [
      'A Python Teacher at Athboy Community School, where I taught the fundamentals of programming using Python, Trinket.io and CSCircles to secondary school students.',
      'A programming lab assistant for over 100 students at DCU during the ComputeTY program, where my colleagues and I helped students understand and implement the fundamentals of programming and efficient problem-solving techniques.',
      'A frequent hackathon participant, achieving Top 3 in NASA\'s SpaceApps International Hackathon and Top 10 in AWS Generative AI Gameday Hackathon.',
      'Along with my studies, I am also a Freelancer on the Roblox platform, where I use Blender and Roblox Studio to creating worlds, environmental assets, props and various structures.'
    ];

    const experienceTitleElements = container.querySelectorAll('.experienceTitle');
    const experienceDescElements = container.querySelectorAll('.experienceDesc');

    experienceTitleElements.forEach((titleElement, index) => {
      expect(titleElement.textContent).to.equal(experienceTitles[index]);
    });

    experienceDescElements.forEach((descElement, index) => {
      expect(descElement.textContent).to.equal(experienceDescs[index]);
    });
  });

  it('contains the correct class names', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that they contain the respective class names associated with it.
    */
    const { container } = render(<Experiences />);

    const experienceTitleWrap = container.querySelector('.experienceTitleWrap');
    expect(experienceTitleWrap).to.have.class('experienceTitleWrap');

    const titleLine3 = container.querySelector('.titleLine3');
    expect(titleLine3).to.have.class('titleLine3');

    const mainExperienceSections = container.querySelectorAll('.experienceSection');
    mainExperienceSections.forEach((section) => {
      expect(section).to.have.class('experienceSection');
    });

    const experienceTitles = container.querySelectorAll('.experienceTitle');
    experienceTitles.forEach((title) => {
      expect(title).to.have.class('experienceTitle');
    });

    const experienceDescs = container.querySelectorAll('.experienceDesc');
    experienceDescs.forEach((desc) => {
      expect(desc).to.have.class('experienceDesc');
    });
  });
});
