import React from 'react';
import { render } from '@testing-library/react';
import LoadingComponent from '@/components/loading/loading.component';

describe('LoadingComponent (Snapshot)', () => {
  it('should take a snapshot', () => {
    const { container } = render(<LoadingComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });
});