import '@testing-library/jest-dom';
import { vi } from 'vitest';
import chai from 'chai';
import chaiDom from 'chai-dom';

chai.use(chaiDom);

// Mock gsap and its plugins
vi.mock('gsap', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    registerPlugin: vi.fn(),
    timeline: () => ({
      fromTo: vi.fn(),
      to: vi.fn(),
      add: vi.fn(),
    }),
    fromTo: vi.fn(),
    to: vi.fn(),
  };
});

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {
    create: vi.fn(),
    refresh: vi.fn(),
  },
}));

vi.mock('gsap/all', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    TextPlugin: vi.fn(),
    ScrollTrigger: {
      create: vi.fn(),
      refresh: vi.fn(),
    },
  };
});
