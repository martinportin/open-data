import { render, screen } from '@testing-library/react';
import PrincipalsHeader from '../../../PrincipalsHeader';

export default async function renderPrincipalsHeader({
  locale
}: {
  locale: string;
}) {
  const principalsHeader = await PrincipalsHeader({ locale });
  render(principalsHeader);

  return {
    getHeader: () => screen.getByRole('heading', { name: /principals/i })
  };
}
