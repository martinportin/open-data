import Principals from "@/app/[lang]/(subjects)/public-sector/education/principals/components/Principals";

describe("princpals", () => {
  const principalsRecord: PrincipalsRecord = {
    Uttagsdatum: "2024-10-13T01:00:03.9733659+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" },
      { PeOrgNr: "0000000003", Namn: "Principal 3", Typ: "Kommunalförbund" },
      { PeOrgNr: "0000000004", Namn: "Principal 4", Typ: "Region" },
      { PeOrgNr: "0000000005", Namn: "Principal 5", Typ: "Specialskola" },
      { PeOrgNr: "0000000006", Namn: "Principal 6", Typ: "Skolverket" },
      { PeOrgNr: "0000000007", Namn: "Principal 7", Typ: "Sameskolan" }
    ]
  };
  const listOfPrincipals: Principal[] = [
    { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
    { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" },
    { PeOrgNr: "0000000003", Namn: "Principal 3", Typ: "Kommunalförbund" },
    { PeOrgNr: "0000000004", Namn: "Principal 4", Typ: "Region" },
    { PeOrgNr: "0000000005", Namn: "Principal 5", Typ: "Specialskola" },
    { PeOrgNr: "0000000006", Namn: "Principal 6", Typ: "Skolverket" },
    { PeOrgNr: "0000000007", Namn: "Principal 7", Typ: "Sameskolan" }
  ];

  it("should return a list of principals", () => {
    const principals = new Principals(principalsRecord);
    expect(principals.principals).toEqual(listOfPrincipals);
  });

  it("should return a correctly formatted date", () => {
    const principals = new Principals(principalsRecord);
    expect(principals.dateTimeOfExtract).toEqual("01:00:03 2024-10-13");
  });
});
