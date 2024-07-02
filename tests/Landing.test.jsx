/// <reference types="vitest" />
import React from 'react';
import { render } from '@testing-library/react';
import Landing from '../src/assets/components/Landing';
import { expect } from 'chai';

describe('Landing component', () => {
  it('renders without crashing and contains the main div components', () => {
    const { container } = render(<Landing onComplete={() => {}} />);

    const finalBG = container.querySelector('.finalBG');
    expect(finalBG).to.exist;

    const nameWrap = container.querySelector('.nameWrap');
    expect(nameWrap).to.exist;

    const introDescWrap = container.querySelector('.introDescWrap');
    expect(introDescWrap).to.exist;

    const contactWrap = container.querySelector('.contactWrap');
    expect(contactWrap).to.exist;

    const contactsWrap = container.querySelector('.contactsWrap');
    expect(contactsWrap).to.exist;

    const imgElements = container.querySelectorAll('.img');
    expect(imgElements.length).to.equal(3); // Assuming you have three images
  });
});
