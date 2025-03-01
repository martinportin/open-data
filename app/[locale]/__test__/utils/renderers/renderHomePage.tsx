import Home from '@/app/[locale]/page';
import { params } from '../mocks/params';
import { render, screen } from '@testing-library/react';

export async function renderHomePage() {
  const homePage = await Home({ params });
  render(homePage);

  return {
    getHeader: () =>
      screen.getByRole('heading', { level: 1, name: /openData/i })
  };
}
