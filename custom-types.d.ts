//Dictionary
interface Dictionary {
  [key: string]: string;
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
