/// <reference types="vitest" />

/* 
Importing necessary libraries and the About component for testing.

React: For react functionality
Welcome: The welcome component
Render: Rendering components for testing.
Chai: Assertion library.
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../src/assets/components/Welcome';
import { expect } from 'chai';

describe('Welcome component', () => {
  it('renders without crashing and displays the initial text with correct class names', () => {
    /*
    Render the component and stores it in container.
    Initiate different variables and select each class to check that the respective class name exists under the list of classes
    associated with it.
    */
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
