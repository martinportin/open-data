import PrincipalsPage from "@/app/(subjects)/public-sector/education/principals/page";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("principals page", () => {
  test("should display principals table counter", () => {
    const { getByRole } = render(<PrincipalsPage />);
    expect(getByRole("heading", { name: /Antal \(2\)/i }));
  });

  test("should display principals table toolbar", () => {
    const { getByRole } = render(<PrincipalsPage />);
    expect(getByRole("list"));
  });

  test("should display principals table including table header and table body", () => {
    const { getByRole, getAllByRole } = render(<PrincipalsPage />);
    expect(getByRole("table"));
    expect(getAllByRole("row")).toHaveLength(3);
    expect(getAllByRole("columnheader")).toHaveLength(5);
  });

  test("should display text in search input when typing", async () => {
    const user = userEvent.setup();
    const { getByLabelText } = render(<PrincipalsPage />);
    const searchInput: HTMLInputElement = getByLabelText(
      /Sök/i
    ) as HTMLInputElement;
    await user.type(searchInput, "1");
    expect(searchInput.value).toBe("1");
  });
  test("should display one row in principals table when typing '1'", async () => {
    const { getAllByRole } = await typeInSearchInput("1");
    expect(getAllByRole("row")).toHaveLength(2);
  });

  test("should display one row in principals table when typing '2'", async () => {
    const { getAllByRole } = await typeInSearchInput("2");
    expect(getAllByRole("row")).toHaveLength(2);
  });

  test("should display no row in principles table when typing '3'", async () => {
    const { getAllByRole } = await typeInSearchInput("3");
    expect(getAllByRole("row")).toHaveLength(1);
  });

  test("should display 'Antal (1) in the principals table counter when typing '1' in the search input", async () => {
    const { getByRole } = await typeInSearchInput("1");
    expect(getByRole("heading", { name: /Antal \(1\)/i }));
  });

  test("should display 'Antal (1) in the principals table counter when typing '2' in the search input", async () => {
    const { getByRole } = await typeInSearchInput("2");
    expect(getByRole("heading", { name: /Antal \(1\)/i }));
  });

  test("should display 'Antal (0) in the principals table counter when typing '3' in the search input", async () => {
    const { getByRole } = await typeInSearchInput("3");
    expect(getByRole("heading", { name: /Antal \(0\)/i }));
  });

  async function typeInSearchInput(searchInputText: string) {
    const user = userEvent.setup();
    const { getByLabelText, getAllByRole, getByRole } = render(
      <PrincipalsPage />
    );
    const searchInput: HTMLInputElement = getByLabelText(
      /Sök/i
    ) as HTMLInputElement;
    await user.type(searchInput, searchInputText);
    return { getAllByRole, getByRole };
  }
});
