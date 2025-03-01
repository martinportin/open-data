import { render, screen } from '@testing-library/react';
import PrincipalsPage from '../../../page';

export default async function renderPrincipals() {
  const principalsPage = await PrincipalsPage({
    params: Promise.resolve({ locale: 'en' })
  });
  render(principalsPage);

  return {
    getHeader: () =>
      screen.getByRole('heading', { name: /numberOfPrincipals/i }),
    getDateTimeOfExtract: () =>
      screen.getByText(/Sunday, October 13, 2024 at 1:00:03 AM/i, {
        selector: 'time'
      }),
    getPrincipalsTable: () => screen.getByRole('table')
  };
}
