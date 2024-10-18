import PrincipalsPageContent from "@/app/(subjects)/public-sector/education/principals/components/PrincipalsPageContent";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

async function typeInSearchInput(searchInputText: string) {
  const principalsRecord: PrincipalsRecord = {
    Uttagsdatum: "2024-08-20T01:38:40.2392580+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" }
    ]
  };
  const user = userEvent.setup();
  const { getByLabelText, getAllByRole, getByRole } = render(
    <PrincipalsPageContent principalsRecord={principalsRecord} />
  );
  const searchInput: HTMLInputElement = getByLabelText(
    /Sök/i
  ) as HTMLInputElement;
  await user.type(searchInput, searchInputText);
  return { getAllByRole, getByRole };
}

describe("principals page", () => {
  const principalsRecord: PrincipalsRecord = {
    Uttagsdatum: "2024-08-20T01:38:40.2392580+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" }
    ]
  };
  test("should display principals table counter", () => {
    const { getByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    expect(getByRole("heading", { name: /Antal \(2\)/i }));
  });

  test("should display principals table toolbar", () => {
    const { getByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    expect(getByRole("list"));
  });

  test("should display principals table including table header and table body", () => {
    const { getByRole, getAllByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    expect(getByRole("table"));
    expect(getAllByRole("row")).toHaveLength(3);
    expect(getAllByRole("columnheader")).toHaveLength(5);
  });

  test("should display text in search input when typing", async () => {
    const user = userEvent.setup();
    const { getByLabelText } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
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

  test("should uncheck when clicking the public checkobox", async () => {
    const { getByLabelText } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    const publicCheckbox = getByLabelText(/Kommunal/i) as HTMLInputElement;
    await userEvent.click(publicCheckbox);
    expect(publicCheckbox.checked).toBeFalsy();
  });

  test("should uncheck when clicking the private checkobox", async () => {
    const { getByLabelText } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    const privateCheckbox = getByLabelText(/Enskild/i) as HTMLInputElement;
    await userEvent.click(privateCheckbox);
    expect(privateCheckbox.checked).toBeFalsy();
  });

  test("should display all principals when public and private checkbox is cheked", () => {
    const { getAllByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    expect(getAllByRole("row")).toHaveLength(3);
  });

  test("should display the public principals when public checkbox is checked", async () => {
    const { getByLabelText, getAllByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    const publicCheckbox = getByLabelText(/Kommunal/i) as HTMLInputElement;
    await userEvent.click(publicCheckbox);
    expect(getAllByRole("row")).toHaveLength(2);
  });

  test("should display public principals when public checkbox is checked", async () => {
    const { getByLabelText, getAllByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    const privateCheckbox = getByLabelText(/Enskild/i) as HTMLInputElement;
    await userEvent.click(privateCheckbox);
    expect(getAllByRole("row")).toHaveLength(2);
  });

  test("should display no principals when public and private checkobox is unchecked", async () => {
    const { getByLabelText, getAllByRole } = render(
      <PrincipalsPageContent principalsRecord={principalsRecord} />
    );
    const publicCheckbox = getByLabelText(/Kommunal/i) as HTMLInputElement;
    await userEvent.click(publicCheckbox);
    const privateCheckbox = getByLabelText(/Enskild/i) as HTMLInputElement;
    await userEvent.click(privateCheckbox);
    expect(getAllByRole("row")).toHaveLength(1);
  });
});
