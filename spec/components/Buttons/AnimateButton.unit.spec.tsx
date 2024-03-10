import { AnimateButton } from '@/components/Buttons';
import { render } from '@testing-library/react';

const props = {
  route: '/',
  title: 'any',
};

describe('should render correctly AnimateButton component', () => {
  it('match snapshot', () => {
    const { container } = render(<AnimateButton {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
