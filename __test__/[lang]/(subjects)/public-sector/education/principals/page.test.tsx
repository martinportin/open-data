import {
  englishParameters,
  swedishParameters
} from "@/__test__/constants/parameters";
import PrincipalsPage from "@/app/[lang]/(subjects)/public-sector/education/principals/page";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";

describe("principals page", () => {
  const user = userEvent.setup();

  const swedishCheckboxLabels = [
    /Kommunal:/,
    /Kommunalförbund:/i,
    /Region:/i,
    /Enskild:/i,
    /Sameskolan:/i,
    /Skolverket:/i,
    /Specialskola:/i
  ];
  const englishCheckboxLabels = [
    /Public/i,
    /Municipal Association/i,
    /Regional/i,
    /Private/i,
    /Sami School/i,
    /National Agency For Education/i,
    /National Agency for Special Needs Education and School/i
  ];

  const swedishColumnHeaders = [/Organisationsnummer/i, /Namn/i, /Typ/i];
  const englishColumnHeaders = [/Organization number/i, /Name/i, /Type/i];

  const organizationNumberColumnTexts = [
    /0000000001/i,
    /0000000002/i,
    /0000000003/i,
    /0000000004/i,
    /0000000005/i,
    /0000000006/i,
    /0000000007/i
  ];

  const nameColumnTexts = [
    /Principal 1/i,
    /Principal 2/i,
    /Principal 3/i,
    /Principal 4/i,
    /Principal 5/i,
    /Principal 6/i,
    /Principal 7/i
  ];

  const typeColumnTexts = [
    /Kommunal/i,
    /Enskild/i,
    /Kommunalförbund/i,
    /Region/i,
    /Specialskola/i,
    /Skolverket/i,
    /Sameskolan/i
  ];

  beforeEach(() => {
    setUpNock();
  });

  afterEach(() => {
    clearNock();
  });

  describe("header", () => {
    it("should display the correct number of principals when filtering", async () => {
      const { getByRole } = await renderPrincipalsPage(swedishParameters);
      expect(getByRole("heading", { name: /Antal \(7\)/i }));

      const searchInput = getByRole("textbox", { name: /Sök/i });
      await user.type(searchInput, "Principal 1");
      expect(getByRole("heading", { name: /Antal \(1\)/i }));

      await user.clear(searchInput);
      expect(getByRole("heading", { name: /Antal \(7\)/i }));
    });
  });

  describe("date and time of extract", () => {
    dateAndTimeParameters().forEach((parameter, text) => {
      it("should display the date and time of extract in the correct format", async () => {
        const { getByText } = await renderPrincipalsPage(parameter);
        expect(
          getByText(text, {
            selector: "time"
          })
        );
      });
    });
  });

  describe("toolbar", () => {
    it("should display a search input field with a swedish label", async () => {
      const { getByRole } = await renderPrincipalsPage(swedishParameters);
      expect(getByRole("textbox", { name: /Sök/i }));
    });

    it("should display a search input field with an english label", async () => {
      const { getByRole } = await renderPrincipalsPage(englishParameters);
      expect(getByRole("textbox", { name: /Search/i }));
    });

    it("should display seven checkboxes with swedish labels", async () => {
      const { getByRole } = await renderPrincipalsPage(swedishParameters);
      swedishCheckboxLabels.forEach((label) =>
        expect(getByRole("checkbox", { name: label }))
      );
    });

    it("should display seven checkboxes english labels", async () => {
      const { getByRole } = await renderPrincipalsPage(englishParameters);
      englishCheckboxLabels.forEach((label) =>
        expect(getByRole("checkbox", { name: label }))
      );
    });
  });

  describe("table", () => {
    it("should display three column headers in swedish", async () => {
      const { getAllByRole } = await renderPrincipalsPage(swedishParameters);
      const rows = getAllByRole("row");
      const tableHeaderRow = rows[0];
      swedishColumnHeaders.forEach((header) =>
        expect(
          within(tableHeaderRow).getByRole("columnheader", {
            name: header
          })
        )
      );
    });

    it("should display three column headers in english", async () => {
      const { getAllByRole } = await renderPrincipalsPage(englishParameters);
      const rows = getAllByRole("row");
      const tableHeaderRow = rows[0];
      englishColumnHeaders.forEach((header) =>
        expect(
          within(tableHeaderRow).getByRole("columnheader", {
            name: header
          })
        )
      );
    });
    it("should display seven table rows", async () => {
      const tableBodyRows = await getTableRows();
      expect(tableBodyRows).toHaveLength(7);
    });

    it("should display a table header with organization number for each row", async () => {
      const tableBodyRows = await getTableRows();
      organizationNumberColumnTexts.forEach((text, index) => {
        expect(
          within(tableBodyRows[index]).getByRole("columnheader", { name: text })
        );
      });
    });

    it("should display a cell with name for each row", async () => {
      const tableBodyRows = await getTableRows();
      nameColumnTexts.forEach((text, index) => {
        expect(within(tableBodyRows[index]).getByRole("cell", { name: text }));
      });
    });

    it("should display a cell with type for each row", async () => {
      const tableBodyRows = await getTableRows();
      typeColumnTexts.forEach((text, index) => {
        expect(within(tableBodyRows[index]).getByRole("cell", { name: text }));
      });
    });
  });

  describe("filtering", () => {
    searchInputParameters().forEach((expectedNumberOfRows, input) => {
      it("should respond to search input filtering", async () => {
        const { getAllByRole, getByRole } = await renderPrincipalsPage(
          swedishParameters
        );
        const rows = getAllByRole("row");
        const tableBodyRows = rows.slice(1);
        expect(tableBodyRows).toHaveLength(7);

        const searchInput = getByRole("textbox", { name: /Sök/i });
        await user.type(searchInput, input);
        const filteredRows = getAllByRole("row");
        const filteredTableBodyRows = filteredRows.slice(1);
        expect(filteredTableBodyRows).toHaveLength(expectedNumberOfRows);

        await user.clear(searchInput);
        const unfilteredRows = getAllByRole("row");
        const unfilteredTableBodyRows = unfilteredRows.slice(1);
        expect(unfilteredTableBodyRows).toHaveLength(7);
      });
    });

    checkboxActionParameters().forEach(
      (expectedNumberOfRows, checkboxLabel) => {
        it("should respond to single checkbox filtering", async () => {
          const { getAllByRole, getByRole } = await renderPrincipalsPage(
            swedishParameters
          );
          const rows = getAllByRole("row");
          const tableBodyRows = rows.slice(1);
          expect(tableBodyRows).toHaveLength(7);

          const checkbox = getByRole("checkbox", { name: checkboxLabel });
          await user.click(checkbox);
          const filteredRows = getAllByRole("row");
          const filteredTableBodyRows = filteredRows.slice(1);
          expect(filteredTableBodyRows).toHaveLength(expectedNumberOfRows);

          await user.click(checkbox);
          const unfilteredRows = getAllByRole("row");
          const unfilteredTableBodyRows = unfilteredRows.slice(1);
          expect(unfilteredTableBodyRows).toHaveLength(7);
        });
      }
    );

    it("should respond to multiple checkboxFiltering", async () => {
      const { getAllByRole, getByRole } = await renderPrincipalsPage(
        swedishParameters
      );
      const rows = getAllByRole("row");
      const tableBodyRows = rows.slice(1);
      expect(tableBodyRows).toHaveLength(7);

      const publicCheckbox = getByRole("checkbox", { name: /Kommunal:/i });
      await user.click(publicCheckbox);
      const privateCheckbox = getByRole("checkbox", { name: /Enskild:/i });
      await user.click(privateCheckbox);
      const filteredRows = getAllByRole("row");
      const filteredTableBodyRows = filteredRows.slice(1);
      expect(filteredTableBodyRows).toHaveLength(5);
      filteredTableBodyRows.forEach((row) => {
        expect(within(row).queryByText(/^Kommunal$/i)).toBeNull();
        expect(within(row).queryByText(/Enskild/i)).toBeNull();
      });

      await user.click(publicCheckbox);
      await user.click(privateCheckbox);
      const unfilteredRows = getAllByRole("row");
      const unfilteredTableBodyRows = unfilteredRows.slice(1);
      expect(unfilteredTableBodyRows).toHaveLength(7);
      expect(getByRole("cell", { name: /^Kommunal$/i }));
      expect(getByRole("cell", { name: /Enskild/i }));
    });
  });

  async function renderPrincipalsPage(
    parameters: Readonly<{ params: { lang: "se" | "en" } }>
  ) {
    const principalsPage = await PrincipalsPage(parameters);
    return render(principalsPage);
  }

  async function getTableRows() {
    const { getAllByRole } = await renderPrincipalsPage(swedishParameters);
    const rows = getAllByRole("row");
    return rows.slice(1);
  }

  function dateAndTimeParameters(): Map<
    RegExp,
    Readonly<{ params: { lang: "se" | "en" } }>
  > {
    const dateAndTimeParameters = new Map();
    dateAndTimeParameters.set(
      /Söndag 13 oktober 2024 kl. 01:00:03/,
      swedishParameters
    );
    dateAndTimeParameters.set(
      /Sunday, October 13, 2024 at 1:00:03 AM/,
      englishParameters
    );
    return dateAndTimeParameters;
  }

  function searchInputParameters(): Map<string, number> {
    const searchInputTestParameters: Map<string, number> = new Map();
    searchInputTestParameters.set("Principal", 7);
    searchInputTestParameters.set("principal", 7);
    searchInputTestParameters.set("PRINCIPAL", 7);
    searchInputTestParameters.set("Principal 1", 1);
    searchInputTestParameters.set("principal 1", 1);
    searchInputTestParameters.set("PRINCIPAL 1", 1);
    searchInputTestParameters.set("Principal 2", 1);
    searchInputTestParameters.set("principal 7", 1);
    searchInputTestParameters.set("000000000", 7);
    searchInputTestParameters.set("0000000001", 1);
    searchInputTestParameters.set("0000000002", 1);
    searchInputTestParameters.set("0000000007", 1);
    searchInputTestParameters.set("1", 1);
    searchInputTestParameters.set("2", 1);
    searchInputTestParameters.set("7", 1);
    searchInputTestParameters.set("pal 1", 1);
    searchInputTestParameters.set("pal 2", 1);
    searchInputTestParameters.set("pal 7", 1);
    searchInputTestParameters.set("01", 1);
    searchInputTestParameters.set("02", 1);
    searchInputTestParameters.set("07", 1);
    return searchInputTestParameters;
  }

  function checkboxActionParameters(): Map<RegExp, number> {
    const checkboxActionParameters: Map<RegExp, number> = new Map();
    checkboxActionParameters.set(/Kommunal:/i, 6);
    checkboxActionParameters.set(/Kommunalförbund:/i, 6);
    checkboxActionParameters.set(/Region:/i, 6);
    checkboxActionParameters.set(/Enskild:/i, 6);
    checkboxActionParameters.set(/Sameskolan:/i, 6);
    checkboxActionParameters.set(/Skolverket:/i, 6);
    checkboxActionParameters.set(/Specialskola:/i, 6);
    return checkboxActionParameters;
  }

  function setUpNock() {
    const sevenPrincipals: PrincipalsRecord = {
      Uttagsdatum: "2024-10-13T01:00:03.9733659+02:00",
      Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
      Huvudman: [
        { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
        { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" },
        { PeOrgNr: "0000000003", Namn: "Principal 3", Typ: "Kommunalförbund" },
        { PeOrgNr: "0000000004", Namn: "Principal 4", Typ: "Region" },
        { PeOrgNr: "0000000005", Namn: "Principal 5", Typ: "Specialskola" },
        { PeOrgNr: "0000000006", Namn: "Principal 6", Typ: "Skolverket" },
        { PeOrgNr: "0000000007", Namn: "Principal 7", Typ: "Sameskolan" }
      ]
    };

    nock("https://api.skolverket.se")
      .get(/\/skolenhetsregistret\/v1\/huvudman/)
      .reply(200, JSON.stringify(sevenPrincipals));
  }

  function clearNock() {
    if (!nock.isDone()) {
      nock.cleanAll();
      throw new Error("Not all mocked endpoints received requests.");
    }
  }
});
