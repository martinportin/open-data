import PrincipalsTable from "@/app/components/PrincipalsTable";
import { render } from "@testing-library/react";

describe("principals table", () => {
  test("should display principals table with swedish headers and one row", () => {
    const swedishDictionary = {
      organizationNumber: "Organisationsnummer",
      name: "Namn",
      type: "Typ"
    };
    const onePrincipal = [
      { PerOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" }
    ];
    const columnHeaders = [/Organisationsnummer/i, /Namn/i, /Typ/i];
    const { getByRole, getAllByRole } = render(
      <PrincipalsTable
        dictionary={swedishDictionary}
        principals={onePrincipal}
      />
    );
    columnHeaders.forEach((columnheader) => {
      expect(getByRole("columnheader", { name: columnheader }));
    });
    expect(getAllByRole("row")).toHaveLength(2);
  });

  test("should display principals table with english headers and two rows", () => {
    const englishDictionary = {
      organizationNumber: "Organization number",
      name: "Name",
      type: "Type"
    };
    const twoPrincipals: Principal[] = [
      { PerOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" },
      { PerOrgNr: "0000000002", Namn: "Principal 2", Typ: "Type 2" }
    ];
    const columnHeaders = [/Organization Number/i, /Name/i, /Type/i];
    const { getByRole, getAllByRole } = render(
      <PrincipalsTable
        dictionary={englishDictionary}
        principals={twoPrincipals}
      />
    );
    columnHeaders.forEach((columnHeader) => {
      expect(getByRole("columnheader", { name: columnHeader }));
    });
    expect(getAllByRole("row")).toHaveLength(3);
  });
});
