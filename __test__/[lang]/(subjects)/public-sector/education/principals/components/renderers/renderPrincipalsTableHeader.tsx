import { render, screen } from "@testing-library/react";
import PrincipalsTableHeader from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsTableHeader";

export function renderPrincipalsTableHeader(dictionary: Dictionary) {
  render(<PrincipalsTableHeader dictionary={dictionary} />);

  return {
    screen,
    getTableColumnHeader: (text: RegExp) =>
      screen.getByRole("columnheader", { name: text })
  };
}
