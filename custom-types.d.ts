//Parameters
type UrlParameters = Readonly<{ params: { lang: Locale } }>;

//Link informationobject
interface LinkData {
  name: string;
  url: string;
}

//Dictionary
interface Dictionary {
  [key: string]: { [key: string]: string };
}
//Principals
interface Principal {
  PeOrgNr: string;
  Namn: string;
  Typ: string;
}

interface PrincipalsRecord {
  Uttagsdatum: string;
  Fotnot: string;
  Huvudman: Principal[];
}
