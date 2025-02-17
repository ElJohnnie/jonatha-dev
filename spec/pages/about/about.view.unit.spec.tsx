import AboutView from '@/app/[locale]/about/view/about.view';
import { render } from '@testing-library/react';
import { AcademicCapIcon } from '@heroicons/react/20/solid';

const aboutMockup = {
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
    const { container } = render(<AboutView {...aboutMockup}></AboutView>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
