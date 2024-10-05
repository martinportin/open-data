describe("principals table", () => {
  test("should display principals table", () => {
    const swedishDictionary = {
      organizationNumber: "Organisationsnummer",
      name: "Namn",
      type: "Typ"
    };
    const englishDictionary = {
      organizationNumber: "Organization number",
      name: "Name",
      type: "Type"
    };
    const onePrincipal = [
      { PerOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" }
    ];
    const twoPrincipals: Principal[] = [
      { PerOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" },
      { PerOrgNr: "0000000002", Namn: "Principal 2", Typ: "Type 2" }
    ];
  });
});
