import React from 'react';
import NavHeader from '@/components/navigation/nav-header.component';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('../../../src/locale/navigation', () => ({
  useRouter: () => mockedRouter,
  usePathname: jest.fn(),
}));

jest.mock('next-intl', () => ({
  ...jest.requireActual('next-intl'),
  useTranslation: jest.fn().mockReturnValue({ t: (key: any) => key }),
}));

let messages: any;

describe('should render correctly NavHeader component', () => {
  it('match snapshot', () => {
    const { container } = render(
      <NextIntlClientProvider locale='en' messages={messages}>
        <NavHeader />
      </NextIntlClientProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
