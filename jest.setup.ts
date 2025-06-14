// import dom matchers
import '@testing-library/jest-dom';

import { TextEncoder } from 'util';

// Polyfill TextEncoder for `react-router`:
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

// Polyfill ResizeObserver:
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

// Polyfill IntersectionObserver:
class IntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
