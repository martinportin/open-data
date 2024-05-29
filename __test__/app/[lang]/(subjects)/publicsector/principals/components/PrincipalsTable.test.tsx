import PrincipalsTable from '@/app/[lang]/(subjects)/publicsector/principals/components/principalsTable';
import { render, screen } from '@testing-library/react';

describe('principals table', () => {
  const dictionary = { principals: { principals: 'Principals' } };
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
  it('should display the table headers', () => {
    render(<PrincipalsTable params={{ dictionary, principals }} />);
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders).toHaveLength(3);
  });

  it('should display the table body', () => {
    render(<PrincipalsTable params={{ dictionary, principals }} />);
    const tableBody = screen.getByRole('table');
    expect(tableBody).toBeInTheDocument();
  });

  it('should display table rows', () => {
    render(<PrincipalsTable params={{ dictionary, principals }} />);
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(4);
  });
});
