import { renderPrincipalsSubheader } from "./renderers/renderPrincipalsSubheader";
import {
  englishDateTimeOfExtract,
  swedishDateTimeOfExtract
} from "./testUtils/mockData";

describe("principals table date of extract", () => {
  it("should display the date time of extract correctly (english format)", () => {
    const { getDateOfExtract } = renderPrincipalsSubheader(
      englishDateTimeOfExtract
    );
    expect(
      getDateOfExtract(/Wednesday, December 25, 2024 at 1:00:01 AM/i)
    ).toBeInTheDocument();
  });

  it("should display the date time of extract correctly (swedish format)", () => {
    const { getDateOfExtract } = renderPrincipalsSubheader(
      swedishDateTimeOfExtract
    );
    expect(
      getDateOfExtract(/Onsdag 25 december 2024 kl. 01:00:01/i)
    ).toBeInTheDocument();
  });
});
