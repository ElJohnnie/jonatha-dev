import HomeView from '@/app/[locale]/home/view/home.view';
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
    const { container } = render(<HomeView {...heroMockup}></HomeView>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
