import { render, screen } from '@testing-library/react';
import PrincipalsHeader from '../../../PrincipalsHeader';

const tSpy = jest.fn((tKey) => tKey);
const useTranslationResponse = { t: tSpy };
jest.mock('react-i18next', () => ({
  useTranslation: () => useTranslationResponse
}));

export default async function renderPrincipalsHeader({
  numberOfPrincipals
}: Readonly<{ numberOfPrincipals: number }>) {
  render(<PrincipalsHeader numberOfPrincipals={numberOfPrincipals} />);

  return {
    getHeaderShowingNoPrincipals: () =>
      screen.getByRole('heading', { name: /numberOfPrincipals/i }),
    getTSpy: () => tSpy
  };
}
