import { render, screen } from '@testing-library/react';
import PrincipalsDateTimeOfExtract from '../../../PrincipalsDateTimeOfExtract';

export default function renderPrincipalsDateTimeOfExtract() {
  const dateTimeOfExtract = 'hh:mm:ss dd:MM:yyyy';
  render(<PrincipalsDateTimeOfExtract dateTimeOfExtract={dateTimeOfExtract} />);

  return {
    getDateTimeOfExtract: () =>
      screen.getByText(/hh:mm:ss dd:MM:yyyy/i, { selector: 'time' })
  };
}
