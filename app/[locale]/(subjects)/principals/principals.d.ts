interface Principal {
  PeOrgNr: string;
  Namn: string;
  Typ: string;
}

interface PrincipalsExtract {
  Uttagsdatum: string;
  Fotnot: string;
  Huvudman: Principal[];
}
