import { render, screen } from '@testing-library/react';
import PrincipalsHeader from '../../../PrincipalsHeader';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn()
}));

const useTranslationSpy = useTranslation;
const tSpy = jest.fn((tKey) => tKey);
useTranslationSpy.mockReturnValue({
  t: tSpy
});

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
