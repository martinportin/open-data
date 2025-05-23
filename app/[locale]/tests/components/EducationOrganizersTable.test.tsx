import renderEducationOrganizersTable from './renderEducationOrganizersTable';

describe('education organizers table', () => {
  const educationOrganizers = [
    {
      organizationNumber: '0000000001',
      displayName: 'Principal 1',
      organizerType: 'Kommunal'
    },
    {
      organizationNumber: '0000000002',
      displayName: 'Principal 2',
      organizerType: 'Enskild'
    },
    {
      organizationNumber: '0000000003',
      displayName: 'Principal 3',
      organizerType: 'Kommunalförbund'
    },
    {
      organizationNumber: '0000000004',
      displayName: 'Principal 4',
      organizerType: 'Region'
    },
    {
      organizationNumber: '0000000005',
      displayName: 'Principal 5',
      organizerType: 'Specialskola'
    },
    {
      organizationNumber: '0000000006',
      displayName: 'Principal 6',
      organizerType: 'Skolverket'
    },
    {
      organizationNumber: '0000000007',
      displayName: 'Principal 7',
      organizerType: 'Sameskolan'
    }
  ];

  test('should render three column headers', async () => {
    const { getTableColumnHeaders } = await renderEducationOrganizersTable(
      educationOrganizers
    );
    expect(getTableColumnHeaders()).toHaveLength(3);
  });

  test('should render seven table row', async () => {
    const { getTableRows } = await renderEducationOrganizersTable(
      educationOrganizers
    );
    expect(getTableRows()).toHaveLength(7);
  });
});
