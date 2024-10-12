import PrincipalsPage from "@/app/(subjects)/public-sector/education/principals/page";
import { render } from "@testing-library/react";

describe("principals page", () => {
  test("should display principals table counter", () => {
    const { getByRole } = render(<PrincipalsPage />);
    expect(getByRole("heading", { name: /Antal \(1\)/i }));
  });

  test("should display principals table toolbar", () => {
    const { getByRole } = render(<PrincipalsPage />);
    expect(getByRole("list"));
  });

  test("should display principals table including table header and table body", () => {
    const { getByRole, getAllByRole } = render(<PrincipalsPage />);
    expect(getByRole("table"));
    expect(getAllByRole("row")).toHaveLength(2);
    expect(getAllByRole("columnheader")).toHaveLength(4);
  });
});
