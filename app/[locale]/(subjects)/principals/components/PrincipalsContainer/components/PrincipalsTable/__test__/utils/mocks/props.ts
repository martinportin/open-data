export const principalsTableBodyPropsEmpty = {
  principals: []
};

export const principalsTableBodyPropsSmall = {
  principals: [
    { PeOrgNr: '0000000001', Namn: 'Principal 1', Typ: 'Kommunal' },
    { PeOrgNr: '0000000002', Namn: 'Principal 2', Typ: 'Enskild' },
    { PeOrgNr: '0000000003', Namn: 'Principal 3', Typ: 'Kommunalförbund' }
  ]
};

export const principalsTableBodyPropsLarge = {
  principals: [
    ...principalsTableBodyPropsSmall.principals,
    { PeOrgNr: '0000000004', Namn: 'Principal 4', Typ: 'Region' },
    { PeOrgNr: '0000000005', Namn: 'Principal 5', Typ: 'Specialskola' },
    { PeOrgNr: '0000000006', Namn: 'Principal 6', Typ: 'Skolverket' },
    { PeOrgNr: '0000000007', Namn: 'Principal 7', Typ: 'Sameskolan' }
  ]
};

export const principalsTableHeaderProps = {
  organizationNumber: 'Organization Number',
  name: 'Name',
  type: 'Type'
};
