import Principals from "@/app/[lang]/(subjects)/public-sector/education/principals/components/Principals";

describe("principals class", () => {
  let principals: Principals;

  beforeEach(() => {
    const principalsRecord: PrincipalsRecord = {
      Uttagsdatum: "2024-08-20T01:38:40.2392580+02:00",
      Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
      Huvudman: [
        { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
        { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" }
      ]
    };
    principals = new Principals(principalsRecord);
  });

  it("should return the date and time of extract in the correct format", () => {
    expect(principals.dateTimeOfExtract).toEqual("01:38:40 2024-08-20");
  });

  it("should return all principals", () => {
    expect(principals.principals).toHaveLength(2);
  });
});
