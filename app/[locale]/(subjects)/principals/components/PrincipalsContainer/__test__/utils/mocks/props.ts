const threePrincipals = [
  { PeOrgNr: '0000000000', Namn: 'Principal 0', Typ: 'Sameskolan' },
  { PeOrgNr: '0000000001', Namn: 'Principal 1', Typ: 'Kommunal' },
  { PeOrgNr: '0000000002', Namn: 'Principal 2', Typ: 'Enskild' }
];

const sevenPrincipals = [
  ...threePrincipals,
  { PeOrgNr: '0000000003', Namn: 'Principal 3', Typ: 'Kommunalförbund' },
  { PeOrgNr: '0000000004', Namn: 'Principal 4', Typ: 'Region' },
  { PeOrgNr: '0000000005', Namn: 'Principal 5', Typ: 'Specialskola' },
  { PeOrgNr: '0000000006', Namn: 'Principal 6', Typ: 'Skolverket' }
];

const dateTimeOfExtract = 'yyyy-MM-dd hh:mm:ss';

const searchInputProps = {
  searchInputValue: '',
  handleInputChange: jest.fn()
};

export const principalsContainerProps = {
  principals: sevenPrincipals,
  dateTimeOfExtract,
  searchInputProps
};
