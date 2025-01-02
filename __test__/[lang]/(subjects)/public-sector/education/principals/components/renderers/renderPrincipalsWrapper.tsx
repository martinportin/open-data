import PrincipalsWrapper from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsWrapper";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Locale } from "@/i18n-config";
import { render, screen } from "@testing-library/react";

export default function renderPrincipalsWrapper(
  lang: Locale,
  dictionary: Awaited<ReturnType<typeof getDictionary>>,
  principalsRecord: PrincipalsRecord
) {
  render(
    <PrincipalsWrapper
      lang={lang}
      dictionary={dictionary}
      principalsRecord={principalsRecord}
    />
  );

  return {
    screen,
    getHeader: (text: RegExp) => screen.getByRole("heading", { name: text }),
    getSearchInput: () =>
      screen.getByRole("textbox", { name: /^Search:|Sök:$/i }),
    getCheckbox: (name: RegExp) => screen.getByRole("checkbox", { name }),
    getTableRows: () => screen.getAllByRole("row").slice(1)
  };
}
