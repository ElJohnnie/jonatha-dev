import { Hero } from '@/components/Sections';
import { render } from '@testing-library/react';

const heroMockup = {
  title: 'any title',
  description: 'any description',
};

describe('should render correctly Hero component', () => {
  beforeAll(() => {
    global.IntersectionObserver = class {
      constructor(
        _callback: IntersectionObserverCallback,
        _options?: IntersectionObserverInit
      ) {}
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
      root: Element | null = null;
      rootMargin: string = '';
      thresholds: ReadonlyArray<number> = [];
    };
  });

  it('match snapshot', () => {
    const { container } = render(<Hero {...heroMockup}></Hero>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
