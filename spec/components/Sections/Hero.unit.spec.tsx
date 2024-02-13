import { Hero } from '@/components/Sections';
import { render } from '@testing-library/react';

const heroMockup = {
  title: 'any title',
  description: 'any description',
};

describe('should render correctly Hero component', () => {
  it('match snapshot', () => {
    const { container } = render(<Hero {...heroMockup}></Hero>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
