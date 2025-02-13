import { render, screen } from '@testing-library/react';
import PrincipalsHeader from '../../../PrincipalsHeader';

export default function renderPrincipalsHeader(principalsHeaderProps) {
  render(<PrincipalsHeader {...principalsHeaderProps} />);

  return {
    getHeaderShowingNoPrincipals: () =>
      screen.getByRole('heading', { name: /Number of Principals \(0\)/i }),
    getHeaderShowingThreePrincipals: () =>
      screen.getByRole('heading', { name: /Number of Principals \(3\)/i }),
    getHeaderShowingSevenPrincipals: () =>
      screen.getByRole('heading', { name: /Number of Principals \(7\)/i })
  };
}
