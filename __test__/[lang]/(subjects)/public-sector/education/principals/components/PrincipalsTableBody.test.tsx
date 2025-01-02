import {
  nameCellTexts,
  organizationNumberRowHeaderTexts,
  typeCellTexts
} from "./testUtils/regExps";
import { renderPrincipalsTableBody } from "./renderers/renderPrincipalsTableBody";
import { emptyPrincipalsList, principalsList } from "./testUtils/mockData";

describe("principals table body", () => {
  it("should display no table rows", () => {
    const { getTableRowsByQuery } =
      renderPrincipalsTableBody(emptyPrincipalsList);
    expect(getTableRowsByQuery()).not.toBeInTheDocument();
  });

  it("should display seven table rows", () => {
    const { getTableRows } = renderPrincipalsTableBody(principalsList);
    expect(getTableRows()).toHaveLength(7);
  });

  it("should display one row header for each organization number", () => {
    const { getOrganizationNumberTableRowHeader } =
      renderPrincipalsTableBody(principalsList);
    organizationNumberRowHeaderTexts.forEach((rowHeaderText) => {
      expect(
        getOrganizationNumberTableRowHeader(rowHeaderText)
      ).toBeInTheDocument();
    });
  });

  it("should display one cell for each principal name", () => {
    const { getNameTableRowCell } = renderPrincipalsTableBody(principalsList);
    nameCellTexts.forEach((cellText) => {
      expect(getNameTableRowCell(cellText)).toBeInTheDocument();
    });
  });

  it("should display one cell for eacxh principal name", () => {
    const { getTypeTableRowCell } = renderPrincipalsTableBody(principalsList);
    typeCellTexts.forEach((cellText) => {
      expect(getTypeTableRowCell(cellText)).toBeInTheDocument();
    });
  });
});
