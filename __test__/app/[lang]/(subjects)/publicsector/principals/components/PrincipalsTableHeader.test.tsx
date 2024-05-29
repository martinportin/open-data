import PrincipalsTableHeader from '@/app/[lang]/(subjects)/publicsector/principals/components/PrincipalsTableHeader';
import { render, screen } from '@testing-library/react';

describe('principals table header', () => {
  it('should show three column headers with correct english titles', () => {
    const dictionary = {
      principals: {
        organizationNumber: 'Organization Number',
        name: 'Name',
        type: 'Type',
      },
    };
    render(<PrincipalsTableHeader params={{ dictionary }} />);
    const expectedTitles = ['Organization Number', 'Name', 'Type'];
    expectedTitles.forEach(async (title) => {
      const tableHeader = await screen.findByRole('columnheader', {
        name: title,
      });
      expect(tableHeader).toBeInTheDocument();
    });
  });

  it('should show three column headers with correct swedish titles', () => {
    const dictionary = {
      principals: {
        organizationNumber: 'Organisationsnummer',
        name: 'Namn',
        type: 'Typ',
      },
    };
    render(<PrincipalsTableHeader params={{ dictionary }} />);
    const expectedTitles = ['Organisationsnummer', 'Namn', 'Typ'];
    expectedTitles.forEach(async (title) => {
      const tableHeader = await screen.findByRole('columnheader', {
        name: title,
      });
      expect(tableHeader).toBeInTheDocument();
    });
  });
});
