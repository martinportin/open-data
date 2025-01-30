import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('home page', () => {
  test('should render a header with translation key "header"', async () => {
    const homePage = await Home({
      params: Promise.resolve({ locale: 'en' })
    });
    render(homePage);

    const header = screen.getByRole('heading', {
      level: 1,
      name: /header/i
    });

    expect(header).toBeInTheDocument();
  });
});
