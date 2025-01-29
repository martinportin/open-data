import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('home page', () => {
  test('should render a header with the text "Open data"', () => {
    render(<Page />);

    const header = screen.getByRole('heading', {
      level: 1,
      name: /Open data/i,
    });

    expect(header).toBeInTheDocument();
  });
});
