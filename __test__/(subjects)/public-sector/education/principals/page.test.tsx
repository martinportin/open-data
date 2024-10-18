import PrincipalsPage from "@/app/(subjects)/public-sector/education/principals/page";
import { render } from "@testing-library/react";
import nock from "nock";

beforeEach(() => {
  setUpNock();
});

afterEach(() => {
  clearNock();
});

describe("principals page", () => {
  test("should fetch and display two table rows", async () => {
    const principalsPage = await PrincipalsPage();
    const { getAllByRole } = render(principalsPage);
    expect(getAllByRole("row")).toHaveLength(3);
  });
});

function setUpNock() {
  const twoPrincipals: PrincipalsRecord = {
    Uttagsdatum: "2024-10-13T01:00:03.9733659+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PeOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
      { PeOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" }
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
