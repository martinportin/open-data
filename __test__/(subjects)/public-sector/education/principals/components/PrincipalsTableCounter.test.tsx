import PrincipalsTableCounter from "@/app/(subjects)/public-sector/education/principals/components/PrincipalsTableCounter";
import { render } from "@testing-library/react";

describe("principals table counter", () => {
  const swedishDictionary = {
    numberOf: "Antal"
  };
  const englishDictionary = {
    numberOf: "Number of principals"
  };
  const onePrincipal = [
    { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" }
  ];
  const twoPrincipals: Principal[] = [
    { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" },
    { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Type 2" }
  ];
  test("should display a header in swedish with the number of one", () => {
    const { getByRole } = render(
      <PrincipalsTableCounter
        dictionary={swedishDictionary}
        principals={onePrincipal}
      />
    );
    expect(getByRole("heading", { name: /Antal \(1\)/i }));
  });
  test("should display a header i swedish with the number of two", () => {
    const { getByRole } = render(
      <PrincipalsTableCounter
        dictionary={swedishDictionary}
        principals={twoPrincipals}
      />
    );
    expect(getByRole("heading", { name: /Antal \(2\)/i }));
  });
  test("should display a header i english with the number of one", () => {
    const { getByRole } = render(
      <PrincipalsTableCounter
        dictionary={englishDictionary}
        principals={onePrincipal}
      />
    );
    expect(getByRole("heading", { name: /Number of Principals \(1\)/i }));
  });
  test("should display a header i english with the number of two", () => {
    const { getByRole } = render(
      <PrincipalsTableCounter
        dictionary={englishDictionary}
        principals={twoPrincipals}
      />
    );
    expect(getByRole("heading", { name: /Number of Principals \(2\)/i }));
  });
});
