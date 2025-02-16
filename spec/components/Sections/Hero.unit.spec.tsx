import { NextIntlClientProvider } from 'next-intl';
import HomeView from '@/app/[locale]/home/view/home.view';
import { render } from '@testing-library/react';
import React from 'react';

const heroMockup = {
  title: 'any title',
  description: 'any description',
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale="en" messages={{}}>
    {children}
  </NextIntlClientProvider>
);

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
    const { container } = render(
      <Wrapper>
        <HomeView {...heroMockup} />
      </Wrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});