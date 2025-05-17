import renderPrincipalsTableBody from './renderPrincipalsTableBody';

describe('principalsTableBody', () => {
  const principals = [
    { PeOrgNr: '0000000001', Namn: 'Principal 1', Typ: 'Kommunal' },
    { PeOrgNr: '0000000002', Namn: 'Principal 2', Typ: 'Enskild' },
    { PeOrgNr: '0000000003', Namn: 'Principal 3', Typ: 'Kommunalförbund' },
    { PeOrgNr: '0000000004', Namn: 'Principal 4', Typ: 'Region' },
    { PeOrgNr: '0000000005', Namn: 'Principal 5', Typ: 'Specialskola' },
    { PeOrgNr: '0000000006', Namn: 'Principal 6', Typ: 'Skolverket' },
    { PeOrgNr: '0000000007', Namn: 'Principal 7', Typ: 'Sameskolan' }
  ];

  function testNumberOfTableRows(
    principals: Principal[],
    expectedNumberOfRows: number
  ) {
    const { getRows } = renderPrincipalsTableBody(principals);
    expect(getRows()).toHaveLength(expectedNumberOfRows);
  }

  function testNumberOfColumnHeaders(
    principals: Principal[],
    expectedNumberOfColumnHeaders: number
  ) {
    const { getColumnHeader } = renderPrincipalsTableBody(principals);
    expect(getColumnHeader()).toHaveLength(expectedNumberOfColumnHeaders);
  }

  function testNumberOfColumnHeadersByName(
    principals: Principal[],
    expectedNumberOfColumnHeaders: number,
    ...names: RegExp[]
  ) {
    const { getColumnHeader } = renderPrincipalsTableBody(principals, ...names);
    expect(getColumnHeader()).toHaveLength(expectedNumberOfColumnHeaders);
  }

  function testNumberOfColumnDataCells(
    principals: Principal[],
    expectedNumberOfColumnDataCells: number,
    ...names: RegExp[]
  ) {
    const { getTableDataCells } = renderPrincipalsTableBody(
      principals,
      ...names
    );
    expect(getTableDataCells()).toHaveLength(expectedNumberOfColumnDataCells);
  }

  test('should render no table rows', () => {
    const { getRow } = renderPrincipalsTableBody([]);
    expect(getRow()).not.toBeInTheDocument();
  });

  test('should render one table row', () => {
    testNumberOfTableRows(principals.slice(0, 1), 1);
  });

  test('should render one column header', () => {
    testNumberOfColumnHeaders(principals.slice(0, 1), 1);
  });

  test('should render one column header containing the principal organization number', () => {
    testNumberOfColumnHeadersByName(principals.slice(0, 1), 1, /0000000001/i);
  });

  test('should render two table data cells', () => {
    testNumberOfColumnDataCells(principals.slice(0, 1), 2);
  });

  test('should rendern two table data cells containing principal name and type respectively', () => {
    const { getTableDataCells } = renderPrincipalsTableBody(
      principals.slice(0, 1),
      /Principal 1/i,
      /Kommunal/i
    );
    expect(getTableDataCells()).toHaveLength(2);
  });

  test('should render seven table rows', () => {
    testNumberOfTableRows(principals, 7);
  });

  test('should render seven column headers', () => {
    testNumberOfColumnHeaders(principals, 7);
  });

  test('should render a column header for each organization number', () => {
    testNumberOfColumnHeadersByName(
      principals,
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
    testNumberOfColumnDataCells(principals, 14);
  });

  test('should render 7 table cells containing principal name', () => {
    testNumberOfColumnDataCells(
      principals,
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
      principals,
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
