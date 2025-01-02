import { getDictionary } from "@/app/[lang]/dictionaries";
import renderPrincipalsHeader from "./renderers/renderPrincipalsHeader";
import { emptyPrincipalsList, principalsList } from "./testUtils/mockData";

describe("principals header", () => {
  it("should display a header with 0 as the number of principals (en)", async () => {
    const englishDictionary = await getDictionary("en");
    const { getHeader } = renderPrincipalsHeader(
      englishDictionary,
      emptyPrincipalsList
    );
    expect(getHeader(/Number of principals \(0\)/i)).toBeInTheDocument();
  });

  it("should display a header with 7 as the number of principals (en)", async () => {
    const englishDictionary = await getDictionary("en");
    const { getHeader } = renderPrincipalsHeader(
      englishDictionary,
      principalsList
    );
    expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
  });

  it("should display a header with 0 as the number of principals (se)", async () => {
    const englishDictionary = await getDictionary("se");
    const { getHeader } = renderPrincipalsHeader(
      englishDictionary,
      emptyPrincipalsList
    );
    expect(getHeader(/Antal \(0\)/i)).toBeInTheDocument();
  });

  it("should display a header with 7 as the number of principals (se)", async () => {
    const englishDictionary = await getDictionary("se");
    const { getHeader } = renderPrincipalsHeader(
      englishDictionary,
      principalsList
    );
    expect(getHeader(/Antal \(7\)/i)).toBeInTheDocument();
  });
});
