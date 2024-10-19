import PrincipalsPage from "@/app/(subjects)/public-sector/education/principals/page";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";

describe("principals page", () => {
  beforeEach(() => {
    setUpNock();
  });

  afterEach(() => {
    clearNock();
  });

  describe("principals page header", () => {
    it("should display the principals header correctly on initial load", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);
      expect(getByRole("heading", { name: /Antal \(5\)/i }));
    });

    it("should display the principals header correctly when typing in the search text input", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByLabelText, getByRole } = render(principalsPage);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök/i
      ) as HTMLInputElement;
      await userEvent.type(searchInputField, "Principal 1");
      expect(getByRole("heading", { name: /Antal \(1\)/i }));
      await userEvent.clear(searchInputField);
      expect(getByRole("heading", { name: /Antal \(5\)/i }));
    });

    it("should display the principals header correctly when checking and unchecking the public checkbox", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);
      const publicCheckbox = getByRole("checkbox", { name: /Kommunal/i });

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(2\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(5\)/i }));
    });

    it("should display the principals header correctly when checking and unchecking the private checkbox", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);
      const publicCheckbox = getByRole("checkbox", { name: /Enskild/i });

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(3\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(5\)/i }));
    });
  });

  describe("principals table toolbar", () => {
    it("should display a text input and two checkoboxes", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);

      expect(getByRole("textbox", { name: /Sök/i }));
      expect(getByRole("checkbox", { name: /Kommunal/i }));
      expect(getByRole("checkbox", { name: /Enskild/i }));
    });

    it("should display text in search input when typing", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByLabelText } = render(principalsPage);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök/i
      ) as HTMLInputElement;
      const input = "Principal 1";
      await userEvent.type(searchInputField, input);
      expect(searchInputField.value).toBe(input);
    });

    it("should handle checkbox actions", async () => {
      const checkboxLabels = [/Kommunal/i, /Enskild/i];

      const principalsPage = await PrincipalsPage();
      const { getByLabelText } = render(principalsPage);

      checkboxLabels.forEach(async (checkboxLabel) => {
        const checkbox: HTMLInputElement = getByLabelText(
          checkboxLabel
        ) as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
        await userEvent.click(checkbox);
        expect(checkbox.checked).toBe(false);
        await userEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
      });
    });
  });

  describe("principals table", () => {
    it("should display table header with three column headers", async () => {
      const headers = [/Organisationsnummer/i, /Namn/i, /Typ/i];

      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);

      headers.forEach((header) => {
        expect(getByRole("columnheader", { name: header }));
      });
    });

    it("should display five table rows", async () => {
      const organizationNumbers = [
        /0000000001/i,
        /0000000002/i,
        /0000000003/i,
        /0000000004/i,
        /0000000005/i
      ];
      const names = [
        /Principal 1/i,
        /Principal 2/i,
        /Principal 3/i,
        /Principal 4/i,
        /Principal 5/i
      ];

      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByRole } = render(principalsPage);

      expect(getAllByRole("row")).toHaveLength(6);

      organizationNumbers.forEach((organizationNumber) => {
        expect(getByRole("columnheader", { name: organizationNumber }));
      });

      names.forEach((name) => {
        expect(getByRole("cell", { name }));
      });

      expect(getAllByRole("cell", { name: /Kommunal/i })).toHaveLength(3);
      expect(getAllByRole("cell", { name: /Enskild/i })).toHaveLength(2);
    });

    it("should respond to search input filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      expect(getAllByRole("row")).toHaveLength(6);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök/i
      ) as HTMLInputElement;
      await userEvent.type(searchInputField, "Principal 1");
      expect(getAllByRole("row")).toHaveLength(2);

      await userEvent.clear(searchInputField);
      expect(getAllByRole("row")).toHaveLength(6);

      await userEvent.type(searchInputField, "000000001");
      expect(getAllByRole("row")).toHaveLength(2);

      await userEvent.clear(searchInputField);
      expect(getAllByRole("row")).toHaveLength(6);
    });

    it("should respond to public checkbox filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      const publicCheckbox: HTMLInputElement = getByLabelText(
        /Kommunal/i
      ) as HTMLInputElement;

      expect(getAllByRole("row")).toHaveLength(6);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(3);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(6);
    });

    it("should respond to private checkbox filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      const publicCheckbox: HTMLInputElement = getByLabelText(
        /Enskild/i
      ) as HTMLInputElement;

      expect(getAllByRole("row")).toHaveLength(6);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(4);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(6);
    });
  });
});

function setUpNock() {
  const twoPrincipals: PrincipalsRecord = {
    Uttagsdatum: "2024-10-13T01:00:03.9733659+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" },
      { PeOrgNr: "0000000003", Namn: "Principal 3", Typ: "Kommunal" },
      { PeOrgNr: "0000000004", Namn: "Principal 4", Typ: "Kommunal" },
      { PeOrgNr: "0000000005", Namn: "Principal 5", Typ: "Enskild" }
    ]
  };

  nock("https://api.skolverket.se")
    .get(/\/skolenhetsregistret\/v1\/huvudman/)
    .reply(200, JSON.stringify(twoPrincipals));
}

function clearNock() {
  if (!nock.isDone()) {
    nock.cleanAll();
    throw new Error("Not all mocked endponts received requests.");
  }
}
