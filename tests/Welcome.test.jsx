// tests/Welcome.test.jsx
/// <reference types="vitest" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../src/assets/components/Welcome';
import { expect } from 'chai';

describe('Welcome component', () => {
  it('renders without crashing and displays the initial text with correct class names', () => {
    render(<Welcome onComplete={() => {}} />);
    const studentText = screen.getByText('S');
    expect(document.body.contains(studentText)).to.be.true;
    expect(studentText.classList.contains('studentAnim')).to.be.true;

    const studentWrap = screen.getByTestId('studentWrap');
    expect(document.body.contains(studentWrap)).to.be.true;
    expect(studentWrap.classList.contains('studentWrap')).to.be.true;

    const freeWrap = screen.getByTestId('freeWrap');
    expect(document.body.contains(freeWrap)).to.be.true;
    expect(freeWrap.classList.contains('freeWrap')).to.be.true;
  });
});
