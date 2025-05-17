import Home from '../page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  test('should render a heading with the text "Open Data"', async () => {
    const home = await Home({ params: Promise.resolve({ locale: 'en' }) });
    render(home);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /header/i
    });
    expect(heading).toBeInTheDocument();
  });
});
