import { About } from '@/components/Sections';
import { render } from '@testing-library/react';
import { AcademicCapIcon } from '@heroicons/react/20/solid';

const heroMockup = {
  title: 'title',
  description: 'description',
  postDescription: 'post-description',
  features: [
    {
      name: 'Universidade de Santa Cruz do sul:',
      description: 'Teste',
      icon: AcademicCapIcon,
    },
  ],
  image: true,
};

describe('should render correctly About component', () => {
  it('match snapshot', () => {
    const { container } = render(<About {...heroMockup}></About>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
