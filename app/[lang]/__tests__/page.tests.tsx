import Home from '../page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  test('should render a heading with the text "Open Data"', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Open Data/i
    });
    expect(heading).toBeInTheDocument();
  });
});
