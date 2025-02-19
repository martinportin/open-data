const threePrincipals = [
  { PeOrgNr: '0000000001', Namn: 'Principal 1', Typ: 'Kommunal' },
  { PeOrgNr: '0000000002', Namn: 'Principal 2', Typ: 'Enskild' },
  { PeOrgNr: '0000000003', Namn: 'Principal 3', Typ: 'Kommunalförbund' }
];

const sevenPrincipals = [
  ...threePrincipals,
  { PeOrgNr: '0000000004', Namn: 'Principal 4', Typ: 'Region' },
  { PeOrgNr: '0000000005', Namn: 'Principal 5', Typ: 'Specialskola' },
  { PeOrgNr: '0000000006', Namn: 'Principal 6', Typ: 'Skolverket' },
  { PeOrgNr: '0000000007', Namn: 'Principal 7', Typ: 'Sameskolan' }
];

const dateTimeOfExtract = 'yyyy-MM-dd hh:mm:ss';

const searchInputProps: SearchInputProps = {
  searchInputValue: '',
  handleInputChange: jest.fn()
};

const filterCheckboxProps: FilterCheckboxProps[] = [
  'principalType0',
  'principalType1',
  'principalType2',
  'principalType3',
  'principalType4',
  'principalType5',
  'principalType6'
].map((principalType) => {
  return { principalType, isChecked: true, handleCheckboxChange: jest.fn() };
});

export const principalsContainerProps = {
  principals: sevenPrincipals,
  dateTimeOfExtract,
  searchInputProps,
  filterCheckboxProps
};
