import React from 'react';
import { render, screen, act } from '@testing-library/react';
import DecryptedText from '@/components/texts/decrypted-text.component';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      // eslint-disable-next-line react/display-name
      span: React.forwardRef((props: any, ref: any) => (
        <span ref={ref} {...props} />
      )),
    },
  };
});

beforeEach(() => {
  jest.useFakeTimers();
  global.IntersectionObserver = class {
    callback: IntersectionObserverCallback;
    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }
    observe() {
      this.callback(
        [{ isIntersecting: true, target: {} } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver
      );
    }
    unobserve() {}
    disconnect() {}
  } as any;
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('DecryptedText Component', () => {
  it('deve renderizar o texto sr-only corretamente', () => {
    const text = 'Hello, World!';
    render(<DecryptedText text={text} />);
    const srOnlyElement = screen.getByText(text);
    expect(srOnlyElement).toBeInTheDocument();
  });

  it('deve exibir o texto final após a animação terminar', () => {
    const text = 'Testing Animation';
    render(<DecryptedText text={text} speed={10} maxIterations={5} />);

    act(() => {
      for (let i = 0; i < 10; i++) {
        jest.advanceTimersByTime(50);
      }
    });

    const finalText = screen.getByText(text);
    expect(finalText).toBeInTheDocument();
  });
});
