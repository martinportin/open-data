import { render, screen } from "@testing-library/react";
import PrincipalsTableBody from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsTableBody";

export function renderPrincipalsTableBody(principalsList: Principal[]) {
  render(<PrincipalsTableBody principals={principalsList} />);

  return {
    screen,
    getTableRowsByQuery: () => screen.queryByRole("row"),
    getTableRows: () => screen.getAllByRole("row"),
    getOrganizationNumberTableRowHeader: (text: RegExp) =>
      screen.getByRole("columnheader", { name: text }),
    getNameTableRowCell: (text: RegExp) =>
      screen.getByRole("cell", { name: text }),
    getTypeTableRowCell: (text: RegExp) =>
      screen.getByRole("cell", { name: text })
  };
}
