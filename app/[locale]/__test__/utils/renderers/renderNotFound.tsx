import NotFound from '@/app/[locale]/not-found';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: jest
    .fn()
    .mockReturnValueOnce('/en/nonexistingpath')
    .mockReturnValueOnce('/sv/nonexistingpath')
    .mockReturnValueOnce('/en/nonexistingpath')
    .mockReturnValueOnce('/sv/nonexistingpath')
}));

export default function renderNotFound() {
  render(<NotFound />);

  return {
    getEnglishHeader: () =>
      screen.getByRole('heading', {
        name: /The page you were looking for cannot be found/i
      }),
    getSwedishHeader: () =>
      screen.getByRole('heading', {
        name: /Sidan du försökte nå finns inte/i
      }),
    getEnglishLink: () => screen.getByRole('link', { name: /home/i }),
    getSwedishLink: () => screen.getByRole('link', { name: /hem/i })
  };
}
