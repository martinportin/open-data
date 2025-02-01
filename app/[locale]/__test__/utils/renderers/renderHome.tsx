import Home from '@/app/[locale]/page';
import { render, screen } from '@testing-library/react';

export async function renderHome() {
  const params = {
    params: Promise.resolve({ locale: 'en' })
  };

  const homePage = await Home(params);
  render(homePage);

  return {
    getHeader: () =>
      screen.getByRole('heading', { level: 1, name: /openData/i })
  };
}
