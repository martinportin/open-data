import Principals from '@/app/[lang]/(subjects)/publicsector/principals/components/Principals';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

describe('principals page', () => {
  const principals = {
    Uttagsdatum: '2024-05-13T00:00:01.9954132+02:00',
    Fotnot: 'Uppgifterna är hämtade från SCB:s allmänna företagsregister',
    Huvudman: [
      {
        PeOrgNr: '5007147589',
        Namn: 'Enskild 1',
        Typ: 'Enskild',
      },
      {
        PeOrgNr: '2120000050',
        Namn: 'Kommunal 1',
        Typ: 'Kommunal',
      },
      {
        PeOrgNr: '5566024906',
        Namn: 'Kommunal 2',
        Typ: 'Kommunal',
      },
      {
        PeOrgNr: '5568505191',
        Namn: 'Enskild 2',
        Typ: 'Enskild',
      },
    ],
  };

  const dictionary = {
    principals: {
      public: 'Public',
      private: 'Private',
      principals: 'Principals',
      organizationNumber: 'Organization Number',
      name: 'Name',
      type: 'Type',
      quantity: 'Quantity',
    },
  };

  const renderPrincipalsComponent = () => {
    render(<Principals params={{ dictionary }} principals={principals} />);
  };

  const expectNumberOfTableRowsToEqual = (length: number) => {
    const principalsTableRows = screen.getAllByRole('row');
    expect(principalsTableRows).toHaveLength(length);
  };

  const clickCheckBox = (name: RegExp) => {
    const checkbox = screen.getByRole('checkbox', { name });
    fireEvent.click(checkbox);
  };

  it('the principals componentrenders correctly', () => {
    const tree = renderer
      .create(<Principals params={{ dictionary }} principals={principals} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('the principals header should read "Principals"', () => {
    renderPrincipalsComponent();
    const header = screen.getByRole('heading', { name: /Principals/i });
    expect(header).toBeInTheDocument();
  });

  it('there should be three columns in the principals table', () => {
    renderPrincipalsComponent();
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders).toHaveLength(3);
  });

  it('there should be the correct column headers in the principals table', () => {
    renderPrincipalsComponent();
    const expectedTitles = ['Organization Number', 'Name', 'Type'];
    expectedTitles.forEach(async (title) => {
      const tableHeader = await screen.findByRole('columnheader', {
        name: title,
      });
      expect(tableHeader).toBeInTheDocument();
    });
  });

  it('the correct number of rows should be displayed in the principals table', () => {
    renderPrincipalsComponent();
    const principalsCounter = screen.getByRole('heading', {
      name: 'Quantity (4)',
    });
    expect(principalsCounter).toBeInTheDocument();
  });

  it('there hould be two checkboxes in the page', () => {
    renderPrincipalsComponent();
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
  });

  it('the checkboxes should be checked', () => {
    renderPrincipalsComponent();
    const checkboxes = screen.getAllByRole('checkbox');
    for (const checkbox of checkboxes) {
      expect(checkbox).toBeChecked();
    }
  });

  it('there should be four table rows', () => {
    renderPrincipalsComponent();
    expectNumberOfTableRowsToEqual(5);
  });

  it('the table should only show public principals when the private checkbox is unchecked', () => {
    renderPrincipalsComponent();
    expectNumberOfTableRowsToEqual(5);
    clickCheckBox(/Private/i);
    expectNumberOfTableRowsToEqual(3);
  });

  it('the principals table should only show private principals when the public checkbox is unchecked', () => {
    renderPrincipalsComponent();
    expectNumberOfTableRowsToEqual(5);
    clickCheckBox(/Public/i);
    expectNumberOfTableRowsToEqual(3);
  });

  it('the principals table should show no principals when both checkboxes are unchecked', () => {
    renderPrincipalsComponent();
    expectNumberOfTableRowsToEqual(5);
    clickCheckBox(/Private/i);
    clickCheckBox(/Public/i);
    expectNumberOfTableRowsToEqual(1);
  });
});
