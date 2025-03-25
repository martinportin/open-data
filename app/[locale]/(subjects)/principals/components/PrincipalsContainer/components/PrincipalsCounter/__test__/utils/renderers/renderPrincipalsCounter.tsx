import { render, screen } from '@testing-library/react';
import PrincipalsCounter from '../../../PrincipalsCounter';

const tSpy = jest.fn((tKey) => tKey);
const useTranslationResponse = { t: tSpy };
jest.mock('react-i18next', () => ({
  useTranslation: () => useTranslationResponse
}));

export default function renderPrincipalsCounter({
  numberOfPrincipals
}: Readonly<{ numberOfPrincipals: number }>) {
  render(<PrincipalsCounter numberOfPrincipals={numberOfPrincipals} />);

  return {
    getPrincipalsCounter: () => screen.getByText(/numberOfPrincipals/i),
    getTSpy: () => tSpy
  };
}
