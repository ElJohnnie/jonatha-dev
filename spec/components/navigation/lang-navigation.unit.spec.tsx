import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { render, screen, fireEvent } from '@testing-library/react';
import LangNavigation from '@/components/navigation/lang-navigation.component';

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => 'en'),
}));

jest.mock('../../../src/locale/navigation', () => ({
  usePathname: jest.fn(() => '/en/blog'),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock('../../../src/locale/languages', () => ({
  locales: ['en', 'pt'],
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale='en' messages={{}}>
    {children}
  </NextIntlClientProvider>
);

describe.skip('LangNavigation Component', () => {
  it('should take a snapshot', () => {
    const { container } = render(
      <Wrapper>
        <LangNavigation />
      </Wrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('', () => {
    render(
      <Wrapper>
        <LangNavigation />
      </Wrapper>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('EN');

    fireEvent.click(button);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('EN');
    expect(options[1]).toHaveTextContent('PT');
  });

  it('', () => {
    const mockPush = jest.fn();
    jest.mock('../../../src/locale/navigation', () => ({
      usePathname: jest.fn(() => '/en/blog'),
      useRouter: jest.fn(() => ({
        push: mockPush,
      })),
    }));

    render(
      <Wrapper>
        <LangNavigation />
      </Wrapper>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByText('PT');
    fireEvent.click(option);

    expect(mockPush).toHaveBeenCalledWith('/en/blog', { locale: 'pt' });
  });
});