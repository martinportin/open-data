import { getDictionary } from "@/app/[lang]/dictionaries";
import { renderPrincipalsTable } from "./renderers/renderPrincipalsTable";
import { principalsList } from "./testUtils/mockData";

describe("principals table", () => {
  it("should display a table with three columns and seven rows", async () => {
    const dictionary = await getDictionary("se");
    const { getTable, getTableColumnHeaders, getTableRows } =
      renderPrincipalsTable(dictionary, principalsList);
    expect(getTable()).toBeInTheDocument();
    expect(getTableColumnHeaders()).toHaveLength(3);
    expect(getTableRows()).toHaveLength(7);
  });
});
