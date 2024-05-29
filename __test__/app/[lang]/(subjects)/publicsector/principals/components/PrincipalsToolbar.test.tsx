import { render, screen } from '@testing-library/react';
import PrincipalsToolbar from '@/app/[lang]/(subjects)/publicsector/principals/components/PrincipalsToolbar';

describe('principals toolbar', () => {
  const dictionary = { principals: { quantity: 'Quantity' } };
  const principals = [
    {
      PeOrgNr: '5007147589',
      Namn: 'Adhd-hjälpen i Hjärnarp',
      Typ: 'Enskild',
    },
    {
      PeOrgNr: '2120000050',
      Namn: 'EKERÖ KOMMUN',
      Typ: 'Kommunal',
    },
    {
      PeOrgNr: '5566024906',
      Namn: 'Anton Utbildning AB',
      Typ: 'Enskild',
    },
  ];
  it('should show the correct number of principals', () => {
    render(<PrincipalsToolbar params={{ dictionary, principals }} />);
    const principalsCounter = screen.getByRole('heading', {
      name: 'Quantity (3)',
    });
    expect(principalsCounter).toBeInTheDocument();
  });
});
