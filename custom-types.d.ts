//Dictionary
interface Dictionary {
  [key: string]: string;
}
//Principals
interface Principal {
  PerOrgNr: string;
  Namn: string;
  Typ: string;
}

interface PrincipalsRecord {
  Uttagsdatum: string;
  Fotnot: string;
  Huvudman: Principal[];
}
