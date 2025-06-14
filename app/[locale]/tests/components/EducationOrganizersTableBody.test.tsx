import renderEductaionOrganizersaTableBody from './utils/renderEducationOrganizersTableBody';

describe('principalsTableBody', () => {
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

  function testNumberOfTableRows(
    educationOrganizers: EducationOrganizers[],
    expectedNumberOfRows: number
  ) {
    const { getTableRows } =
      renderEductaionOrganizersaTableBody(educationOrganizers);
    expect(getTableRows()).toHaveLength(expectedNumberOfRows);
  }

  function testNumberOfColumnHeaders(
    educationOrganizers: EducationOrganizers[],
    expectedNumberOfColumnHeaders: number
  ) {
    const { getTableColumnHeaders } =
      renderEductaionOrganizersaTableBody(educationOrganizers);
    expect(getTableColumnHeaders()).toHaveLength(expectedNumberOfColumnHeaders);
  }

  function testNumberOfColumnHeadersByName(
    educationOrganizers: EducationOrganizers[],
    expectedNumberOfColumnHeaders: number,
    ...names: RegExp[]
  ) {
    const { getTableColumnHeaders } = renderEductaionOrganizersaTableBody(
      educationOrganizers,
      ...names
    );
    expect(getTableColumnHeaders()).toHaveLength(expectedNumberOfColumnHeaders);
  }

  function testNumberOfColumnDataCells(
    educationOrganizers: EducationOrganizers[],
    expectedNumberOfColumnDataCells: number,
    ...names: RegExp[]
  ) {
    const { getTableDataCells } = renderEductaionOrganizersaTableBody(
      educationOrganizers,
      ...names
    );
    expect(getTableDataCells()).toHaveLength(expectedNumberOfColumnDataCells);
  }

  test('should render no table rows', () => {
    const { getTableRow } = renderEductaionOrganizersaTableBody([]);
    expect(getTableRow()).not.toBeInTheDocument();
  });

  test('should render one table row', () => {
    testNumberOfTableRows(educationOrganizers.slice(0, 1), 1);
  });

  test('should render one column header', () => {
    testNumberOfColumnHeaders(educationOrganizers.slice(0, 1), 1);
  });

  test('should render one column header containing the principal organization number', () => {
    testNumberOfColumnHeadersByName(
      educationOrganizers.slice(0, 1),
      1,
      /0000000001/i
    );
  });

  test('should render two table data cells', () => {
    testNumberOfColumnDataCells(educationOrganizers.slice(0, 1), 2);
  });

  test('should rendern two table data cells containing principal name and type respectively', () => {
    const { getTableDataCells } = renderEductaionOrganizersaTableBody(
      educationOrganizers.slice(0, 1),
      /Principal 1/i,
      /Kommunal/i
    );
    expect(getTableDataCells()).toHaveLength(2);
  });

  test('should render seven table rows', () => {
    testNumberOfTableRows(educationOrganizers, 7);
  });

  test('should render seven column headers', () => {
    testNumberOfColumnHeaders(educationOrganizers, 7);
  });

  test('should render a column header for each organization number', () => {
    testNumberOfColumnHeadersByName(
      educationOrganizers,
      7,
      /0000000001/i,
      /0000000002/i,
      /0000000003/i,
      /0000000004/i,
      /0000000005/i,
      /0000000006/i,
      /0000000007/i
    );
  });

  test('should render 14 table data cells', () => {
    testNumberOfColumnDataCells(educationOrganizers, 14);
  });

  test('should render 7 table cells containing principal name', () => {
    testNumberOfColumnDataCells(
      educationOrganizers,
      7,
      /Principal 1/i,
      /Principal 2/i,
      /Principal 3/i,
      /Principal 4/i,
      /Principal 5/i,
      /Principal 6/i,
      /Principal 7/i
    );
  });

  test('should render 7 table cells containing principal type', () => {
    testNumberOfColumnDataCells(
      educationOrganizers,
      7,
      /^Kommunal$/i,
      /Enskild/i,
      /Kommunalförbund/i,
      /Region/i,
      /Specialskola/i,
      /Skolverket/i,
      /Sameskolan/i
    );
  });
});
