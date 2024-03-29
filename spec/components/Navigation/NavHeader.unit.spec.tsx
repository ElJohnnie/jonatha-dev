import React from 'react';
import { NavHeader } from '../../../src/components/Navigation';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

jest.mock('next-intl', () => ({
  ...jest.requireActual('next-intl'),
  useTranslation: jest.fn().mockReturnValue({ t: (key: any) => key }),
}));

let messages: any;

describe('should render correctly NavHeader component', () => {
  it('match snapshot', () => {
    const { container } = render(
      <NextIntlClientProvider locale='en' messages={messages}>
        <NavHeader locale='pt' />
      </NextIntlClientProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
