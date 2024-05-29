type Locale = 'en-GB' | 'sv-SE';

interface DictionarySubSection {
  [key: string]: string;
}

interface Dictionary {
  [key: string]: DictionarySubSection;
}

interface Principal {
  PeOrgNr: string;
  Namn: string;
  Typ: string;
}

interface Principals {
  Uttagsdatum: string;
  Fotnot: string;
  Huvudman: Principal[];
}
