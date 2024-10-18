import PrincipalsTableBody from "@/app/(subjects)/public-sector/education/principals/components/PrincipalsTableBody";
import { render } from "@testing-library/react";

describe("principals table body", () => {
  test("should return one row with three cells", () => {
    const onePrincipal: Principal[] = [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" }
    ];
    const { getByRole } = render(
      <PrincipalsTableBody principals={onePrincipal} />
    );
    expect(getByRole("columnheader", { name: /0000000001/i }));
    expect(getByRole("cell", { name: /Principal 1/i }));
    expect(getByRole("cell", { name: /Type 1/i }));
  });

  test("should return two rows with three cells each", () => {
    const twoPrincipals: Principal[] = [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Type 2" }
    ];
    const { getAllByRole, getByRole } = render(
      <PrincipalsTableBody principals={twoPrincipals} />
    );
    expect(getAllByRole("row")).toHaveLength(2);
    const oragnizationNumbers = [/0000000001/i, /0000000002/i];
    oragnizationNumbers.forEach((oragnizationNumber) => {
      expect(getByRole("columnheader", { name: oragnizationNumber }));
    });
    const names = [/Principal 1/i, /Principal 2/i];
    names.forEach((name) => {
      expect(getByRole("cell", { name }));
    });
    const types = [/Type 1/i, /Type 2/i];
    types.forEach((type) => {
      expect(getByRole("cell", { name: type }));
    });
  });
});
