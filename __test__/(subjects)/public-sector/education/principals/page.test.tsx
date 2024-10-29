import PrincipalsPage from "@/app/[lang]/(subjects)/public-sector/education/principals/page";
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
      expect(getByRole("heading", { name: /Antal \(14\)/i }));
    });

    it("should display the principals header correctly when typing in the search text input", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByLabelText, getByRole } = render(principalsPage);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök/i
      ) as HTMLInputElement;
      expect(getByRole("heading", { name: /Antal \(14\)/i }));
      await userEvent.type(searchInputField, "Principal 2");
      expect(getByRole("heading", { name: /Antal \(1\)/i }));
      await userEvent.clear(searchInputField);
      expect(getByRole("heading", { name: /Antal \(14\)/i }));
    });

    it("should display the principals header correctly when checking and unchecking the public checkbox", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);
      const publicCheckbox = getByRole("checkbox", { name: /Kommunal:$/ });

      expect(getByRole("heading", { name: /Antal \(14\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(10\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(14\)/i }));
    });

    it("should display the principals header correctly when checking and unchecking the private checkbox", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);
      const publicCheckbox = getByRole("checkbox", { name: /Enskild/i });

      expect(getByRole("heading", { name: /Antal \(14\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(11\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(14\)/i }));
    });

    it("should display the principals header correctly when checking and unchecking the special school checkbox", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);
      const publicCheckbox = getByRole("checkbox", { name: /Specialskola/i });

      expect(getByRole("heading", { name: /Antal \(14\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(13\)/i }));

      await userEvent.click(publicCheckbox);
      expect(getByRole("heading", { name: /Antal \(14\)/i }));
    });

    it("should display time and date of extract", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByText } = render(principalsPage);
      expect(getByText("01:00:03 2024-10-13"));
    });
  });

  describe("principals table toolbar", () => {
    it("should display a text input and seven checkboxes", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByRole } = render(principalsPage);

      expect(getByRole("textbox", { name: /Sök:/i }));
      expect(getByRole("checkbox", { name: /Kommunal:/ }));
      expect(getByRole("checkbox", { name: /Enskild:/i }));
      expect(getByRole("checkbox", { name: /Region:/i }));
      expect(getByRole("checkbox", { name: /Sameskolan:/i }));
      expect(getByRole("checkbox", { name: /Specialskola:/i }));
      expect(getByRole("checkbox", { name: /Skolverket:/i }));
      expect(getByRole("checkbox", { name: /Kommunalförbund:/i }));
    });

    it("should display text in search input when typing", async () => {
      const principalsPage = await PrincipalsPage();
      const { getByLabelText } = render(principalsPage);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök:/i
      ) as HTMLInputElement;
      const input = "Principal 1";
      await userEvent.type(searchInputField, input);
      expect(searchInputField.value).toBe(input);
    });

    it("should handle checkbox actions", async () => {
      const checkboxLabels = [
        /Kommunal:/,
        /Enskild:/i,
        /Region:/i,
        /Kommunalförbund:/i,
        /Sameskolan:/i,
        /Specialskola:/i,
        /Skolverket:/
      ];

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

    it("should display 14 table rows", async () => {
      const organizationNumbers = [
        /0000000001/i,
        /0000000002/i,
        /0000000003/i,
        /0000000004/i,
        /0000000005/i,
        /0000000006/i,
        /0000000007/i,
        /0000000008/i,
        /0000000009/i,
        /0000000010/i,
        /0000000011/i,
        /0000000012/i,
        /0000000013/i,
        /0000000014/i
      ];
      const names = [
        /Principal 1$/i,
        /Principal 2/i,
        /Principal 3/i,
        /Principal 4/i,
        /Principal 5/i,
        /Principal 6/i,
        /Principal 7/i,
        /Principal 8/i,
        /Principal 9/i,
        /Principal 10/i,
        /Principal 11/i,
        /Principal 12/i,
        /Principal 13/i,
        /Principal 14/i
      ];

      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByRole } = render(principalsPage);

      expect(getAllByRole("row")).toHaveLength(15);

      organizationNumbers.forEach((organizationNumber) => {
        expect(getByRole("columnheader", { name: organizationNumber }));
      });

      names.forEach((name) => {
        expect(getByRole("cell", { name }));
      });

      expect(getAllByRole("cell", { name: /Kommunal$/i })).toHaveLength(4);
      expect(getAllByRole("cell", { name: /Enskild/i })).toHaveLength(3);
      expect(getAllByRole("cell", { name: /Kommunalförbund/i })).toHaveLength(
        1
      );
      expect(getAllByRole("cell", { name: /Region/i })).toHaveLength(3);
      expect(getAllByRole("cell", { name: /Specialskola/i })).toHaveLength(1);
      expect(getAllByRole("cell", { name: /Skolverket/i })).toHaveLength(1);
      expect(getAllByRole("cell", { name: /Sameskolan/i })).toHaveLength(1);
    });

    it("should respond to search input organization number filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      expect(getAllByRole("row")).toHaveLength(15);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök/i
      ) as HTMLInputElement;
      await userEvent.type(searchInputField, "000000002");
      expect(getAllByRole("row")).toHaveLength(2);

      await userEvent.clear(searchInputField);
      expect(getAllByRole("row")).toHaveLength(15);
    });

    it("should respond to search input name filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      expect(getAllByRole("row")).toHaveLength(15);

      const searchInputField: HTMLInputElement = getByLabelText(
        /Sök/i
      ) as HTMLInputElement;
      await userEvent.type(searchInputField, "Principal 2");
      expect(getAllByRole("row")).toHaveLength(2);

      await userEvent.clear(searchInputField);
      expect(getAllByRole("row")).toHaveLength(15);

      await userEvent.type(searchInputField, "principal 2");
      expect(getAllByRole("row")).toHaveLength(2);

      await userEvent.clear(searchInputField);
      expect(getAllByRole("row")).toHaveLength(15);
    });

    it("should respond to public checkbox filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      const publicCheckbox: HTMLInputElement = getByLabelText(
        /Kommunal:/i
      ) as HTMLInputElement;

      expect(getAllByRole("row")).toHaveLength(15);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(11);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(15);
    });

    it("should respond to private checkbox filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      const publicCheckbox: HTMLInputElement = getByLabelText(
        /Enskild/i
      ) as HTMLInputElement;

      expect(getAllByRole("row")).toHaveLength(15);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(12);

      await userEvent.click(publicCheckbox);
      expect(getAllByRole("row")).toHaveLength(15);
    });

    it("should respond to municipal association checkbox filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      const municipalAssociationCheckbox: HTMLInputElement = getByLabelText(
        /Kommunalförbund/i
      ) as HTMLInputElement;
      expect(getAllByRole("row")).toHaveLength(15);

      await userEvent.click(municipalAssociationCheckbox);
      expect(getAllByRole("row")).toHaveLength(14);

      await userEvent.click(municipalAssociationCheckbox);
      expect(getAllByRole("row")).toHaveLength(15);
    });

    it("should respond to sami school checkbox filtering", async () => {
      const principalsPage = await PrincipalsPage();
      const { getAllByRole, getByLabelText } = render(principalsPage);

      const municipalAssociationCheckbox: HTMLInputElement = getByLabelText(
        /Sameskolan/i
      ) as HTMLInputElement;
      expect(getAllByRole("row")).toHaveLength(15);

      await userEvent.click(municipalAssociationCheckbox);
      expect(getAllByRole("row")).toHaveLength(14);

      await userEvent.click(municipalAssociationCheckbox);
      expect(getAllByRole("row")).toHaveLength(15);
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
      { PeOrgNr: "0000000005", Namn: "Principal 5", Typ: "Enskild" },
      { PeOrgNr: "0000000006", Namn: "Principal 6", Typ: "Kommunalförbund" },
      { PeOrgNr: "0000000007", Namn: "Principal 7", Typ: "Region" },
      { PeOrgNr: "0000000008", Namn: "Principal 8", Typ: "Specialskola" },
      { PeOrgNr: "0000000009", Namn: "Principal 9", Typ: "Region" },
      { PeOrgNr: "0000000010", Namn: "Principal 10", Typ: "Region" },
      { PeOrgNr: "0000000011", Namn: "Principal 11", Typ: "Kommunal" },
      { PeOrgNr: "0000000012", Namn: "Principal 12", Typ: "Skolverket" },
      { PeOrgNr: "0000000013", Namn: "Principal 13", Typ: "Sameskolan" },
      { PeOrgNr: "0000000014", Namn: "Principal 14", Typ: "Enskild" }
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
