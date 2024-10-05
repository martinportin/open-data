import PrincipalsTableHeader from "@/app/components/PrincipalsTableHeader";
import { render } from "@testing-library/react";

describe("principals table header", () => {
  test("should return table header with three columns from swedish dictionary", () => {
    const swedishDictionary: Dictionary = {
      organizationNumber: "Organisationsnummer",
      name: "Namn",
      type: "Typ"
    };
    const { getAllByRole, getByRole } = render(
      <PrincipalsTableHeader dictionary={swedishDictionary} />
    );
    expect(getAllByRole("row")).toHaveLength(1);
    expect(getAllByRole("columnheader")).toHaveLength(3);
    expect(getByRole("columnheader", { name: /Organisationsnummer/i }));
    expect(getByRole("columnheader", { name: /Namn/i }));
    expect(getByRole("columnheader", { name: /Typ/i }));
  });
  test("should return table header with three columns from english dictionary", () => {
    const englishDictionary: Dictionary = {
      organizationNumber: "Organization number",
      name: "Name",
      type: "Type"
    };
    const { getAllByRole, getByRole } = render(
      <PrincipalsTableHeader dictionary={englishDictionary} />
    );
    expect(getByRole("columnheader", { name: /Organization number/i }));
    expect(getByRole("columnheader", { name: /Name/i }));
    expect(getByRole("columnheader", { name: /Type/i }));
  });
});
