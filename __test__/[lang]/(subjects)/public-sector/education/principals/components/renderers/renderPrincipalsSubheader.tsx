import PrincipalsSubheader from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsSubheader";
import { render } from "@testing-library/react";

export function renderPrincipalsSubheader(dateOfExtract: string) {
  const { getByText } = render(
    <PrincipalsSubheader dateTimeOfExtract={dateOfExtract} />
  );
  return {
    screen,
    getDateOfExtract: (text: RegExp) => getByText(text, { selector: "time" })
  };
}
