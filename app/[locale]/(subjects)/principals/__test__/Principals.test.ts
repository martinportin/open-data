import Principals from '../utils/classes/Principals';

describe('principals class', () => {
  const principalsExtract: PrincipalsExtract = {
    Uttagsdatum: '2025-02-23T00:48:21.5985526+01:00',
    Fotnot: 'Uppgifterna är hämtade från SCB:s allmänna företagsregister',
    Huvudman: [
      { PeOrgNr: '0000000000', Namn: 'Principal 0', Typ: 'Sameskolan' },
      { PeOrgNr: '0000000001', Namn: 'Principal 1', Typ: 'Kommunal' },
      { PeOrgNr: '0000000002', Namn: 'Principal 2', Typ: 'Enskild' },
      { PeOrgNr: '0000000003', Namn: 'Principal 3', Typ: 'Kommunalförbund' },
      { PeOrgNr: '0000000004', Namn: 'Principal 4', Typ: 'Region' },
      { PeOrgNr: '0000000005', Namn: 'Principal 5', Typ: 'Specialskola' },
      { PeOrgNr: '0000000006', Namn: 'Principal 6', Typ: 'Skolverket' }
    ]
  };

  test('should return a principals array', () => {
    const principals = new Principals(principalsExtract);
    expect(principals.principals).toEqual(principalsExtract.Huvudman);
  });

  test('should return the date and time (sv) of the extract', () => {
    const principals = new Principals(principalsExtract);
    expect(principals.swedishDateTimeOfExtract).toEqual(
      'Söndag 23 februari 2025 kl. 00:48:21'
    );
  });

  test('should return the date and time (en) of the extract', () => {
    const principals = new Principals(principalsExtract);
    expect(principals.englishDateTimeOfExtract).toEqual(
      'Sunday, February 23, 2025 at 12:48:21 AM'
    );
  });
});
