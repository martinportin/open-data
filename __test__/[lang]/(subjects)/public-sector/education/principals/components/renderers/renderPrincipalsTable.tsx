import PrincipalsTable from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsTable";
import { render, screen, within } from "@testing-library/react";

export function renderPrincipalsTable(
  dictionary: Dictionary,
  principalsList: Principal[]
) {
  render(
    <PrincipalsTable dictionary={dictionary} principals={principalsList} />
  );

  const getTableHeaders = () => screen.getAllByRole("row")[0];

  return {
    screen,
    getTable: () => screen.getByRole("table"),
    getTableColumnHeaders: () =>
      within(getTableHeaders()).getAllByRole("columnheader"),
    getTableRows: () => screen.getAllByRole("row").slice(1)
  };
}
