import { render, screen } from '@testing-library/react';
import PrincipalsDateTimeOfExtract from '../../../PrincipalsDateTimeOfExtract';

export default function renderPrincipalsDateTimeOfExtract() {
  const dateTimeOfExtract = 'Monday, 01 January, 2025 at 12:00:00 PM';
  render(<PrincipalsDateTimeOfExtract dateTimeOfExtract={dateTimeOfExtract} />);

  return {
    getDateTimeOfExtract: () =>
      screen.getByText(/Monday, 01 January, 2025 at 12:00:00 PM/i, {
        selector: 'time'
      })
  };
}
