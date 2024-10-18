import Principals from "@/app/(subjects)/public-sector/education/principals/components/Principals";

describe("principals class", () => {
  let principals: Principals;

  beforeEach(() => {
    const principalsRecord: PrincipalsRecord = {
      Uttagsdatum: "2024-08-20T01:38:40.2392580+02:00",
      Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
      Huvudman: []
    };
    principals = new Principals(principalsRecord);
  });

  test("should return no principal", () => {
    expect(principals.principals).toHaveLength(0);
  });
  test("should return one principal", () => {
    principals.setPrincipals = [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" }
    ];
    expect(principals.principals).toHaveLength(1);
    expect(principals.numberOfPrincipals()).toEqual(1);
  });
  test("should return two principals", () => {
    principals.setPrincipals = [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Type 2" }
    ];
    expect(principals.principals).toHaveLength(2);
    expect(principals.numberOfPrincipals()).toEqual(2);
  });
});
