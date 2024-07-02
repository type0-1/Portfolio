import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../src/assets/components/Skills';
import { expect } from 'chai';

describe('Skills component', () => {
  it('renders without crashing and contains the main div components', () => {
    const { container } = render(<Skills />);

    const skillSection = container.querySelector('.skillSection');
    expect(skillSection).to.exist;

    const skillTitleWrap = container.querySelector('.skillTitleWrap');
    expect(skillTitleWrap).to.exist;

    const titleLine2 = container.querySelector('.titleLine2');
    expect(titleLine2).to.exist;

    const skillSectionWrap = container.querySelector('.skillSectionWrap');
    expect(skillSectionWrap).to.exist;
  });

  it('contains the correct text content in skill sections', () => {
    const { container } = render(<Skills />);

    const skillSections = container.querySelectorAll('.skillSection');
    const expectedSkills = [
      'CSS', 'HTML', 'JavaScript', 'Django', 'React',
      'Greensock Animation Platform', 'NodeJS', 'Tailwind CSS', 'Gitlab',
      'C', 'Python', 'Java', 'MySQL', 'Prolog', 'Vite'
    ];

    const skillTexts = Array.from(skillSections).map(section => section.querySelector('.skillText').textContent);
    
    expectedSkills.forEach(skill => {
      expect(skillTexts).to.include(skill);
    });
  });

  it('contains the correct class names', () => {
    const { container } = render(<Skills />);

    const skillTitleWrap = container.querySelector('.skillTitleWrap');
    expect(skillTitleWrap).to.have.class('skillTitleWrap');

    const titleLine2 = container.querySelector('.titleLine2');
    expect(titleLine2).to.have.class('titleLine2');

    const skillSectionWrap = container.querySelector('.skillSectionWrap');
    expect(skillSectionWrap).to.have.class('skillSectionWrap');

    const skillSections = container.querySelectorAll('.skillSection');
    skillSections.forEach((section) => {
      expect(section).to.have.class('skillSection');
    });

    const skillImages = container.querySelectorAll('.skillImg');
    skillImages.forEach((img) => {
      expect(img).to.have.class('skillImg');
    });

    const skillTexts = container.querySelectorAll('.skillText');
    skillTexts.forEach((text) => {
      expect(text).to.have.class('skillText');
    });
  });
});
