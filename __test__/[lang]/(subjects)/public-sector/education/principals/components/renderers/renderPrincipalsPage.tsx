import PrincipalsPage from "@/app/[lang]/(subjects)/public-sector/education/principals/page";
import { render, screen } from "@testing-library/react";

export async function renderPrincipalsPage(
  parameters: Readonly<{ params: { lang: "se" | "en" } }>
) {
  const principalsPage = await PrincipalsPage(parameters);
  render(principalsPage);

  return {
    screen,
    getHeader: (header: RegExp) =>
      screen.getByRole("heading", { name: header }),
    getTableRows: () => screen.getAllByRole("row").slice(1)
  };
}
