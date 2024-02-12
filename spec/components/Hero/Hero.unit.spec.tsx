import Hero from '@/components/Sections/Hero';
import { waitFor, render, screen } from '@testing-library/react';
import { useTranslations } from 'next-intl';

jest.mock('next-intl', () => ({
  useTranslations: (key) => key,
}));

const heroMockup = {
  title: 'any title',
  description: 'any description',
};

describe('should render correctly Hero component', () => {
  it('render', () => {
    const component = render(<Hero {...heroMockup}></Hero>);
    expect(component).toBeTruthy();
  });
});
