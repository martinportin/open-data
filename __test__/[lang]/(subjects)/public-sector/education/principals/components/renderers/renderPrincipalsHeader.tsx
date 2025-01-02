import PrincipalsHeader from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsHeader";
import { render, screen } from "@testing-library/react";

export default function renderPrincipalsHeader(
  dictionary: Dictionary,
  principals: Principal[]
) {
  render(<PrincipalsHeader dictionary={dictionary} principals={principals} />);
  return {
    screen,
    getHeader: (text: RegExp) => screen.getByRole("heading", { name: text })
  };
}
