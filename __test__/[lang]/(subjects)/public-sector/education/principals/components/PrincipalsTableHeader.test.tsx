import { getDictionary } from "@/app/[lang]/dictionaries";
import { renderPrincipalsTableHeader } from "./renderers/renderPrincipalsTableHeader";
import {
  englishPrincipalsTableColumnHeaderTexts,
  swedishPrincipalsTableColumnHeaderTexts
} from "./testUtils/regExps";

describe("principals table header", () => {
  it("should display three column headers with the correct english texts", async () => {
    const dictionary = await getDictionary("en");
    const { getTableColumnHeader } = renderPrincipalsTableHeader(dictionary);
    englishPrincipalsTableColumnHeaderTexts.forEach((text) =>
      expect(getTableColumnHeader(text)).toBeInTheDocument()
    );
  });

  it("should display three column headers with the correct swedish texts", async () => {
    const dictionary = await getDictionary("se");
    const { getTableColumnHeader } = renderPrincipalsTableHeader(dictionary);
    swedishPrincipalsTableColumnHeaderTexts.forEach((text) =>
      expect(getTableColumnHeader(text)).toBeInTheDocument()
    );
  });
});
