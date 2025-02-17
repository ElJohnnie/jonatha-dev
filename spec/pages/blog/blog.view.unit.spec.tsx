import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogView from '@/app/[locale]/blog/view/blog.view';

describe('BlogView', () => {
  it('deve renderizar o título do blog', () => {
    const { container } = render(<BlogView>Conteúdo de teste</BlogView>);

    const titleElement = screen.getByText('Blog');

    expect(titleElement).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('deve renderizar o conteúdo filho', () => {
    render(
      <BlogView>
        <div data-testid='child'>Filho</div>
      </BlogView>
    );

    const childElement = screen.getByTestId('child');

    expect(childElement).toBeInTheDocument();
  });
});
