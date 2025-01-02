import userEvent from "@testing-library/user-event";
import nock from "nock";
import { renderPrincipalsPage } from "./components/renderers/renderPrincipalsPage";
import { locales } from "./components/testUtils/testingParameters";

describe("principals page", () => {
  beforeEach(() => {
    setUpNock();
  });

  afterEach(() => {
    clearNock();
  });

  locales.forEach(async (header, locale) => {
    it(`should load the ${
      locale === "en" ? "english" : "swedish"
    } dictionary`, async () => {
      const { getHeader } = await renderPrincipalsPage({
        params: { lang: locale }
      });
      expect(getHeader(header)).toBeInTheDocument();
    });
  });

  it("should load principals", async () => {
    const { getTableRows } = await renderPrincipalsPage({
      params: { lang: "en" }
    });
    expect(getTableRows()).toHaveLength(7);
  });

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
