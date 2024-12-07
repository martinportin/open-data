import {
  englishParameters,
  swedishParameters
} from "@/__test__/constants/parameters";
import { localHost } from "@/__test__/constants/urls";
import PublicSector from "@/app/[lang]/(subjects)/public-sector/page";
import { Locale } from "@/i18n-config";
import { render } from "@testing-library/react";

describe("public sector page", () => {
  describe("links", () => {
    const testParameters: Map<
      RegExp,
      Readonly<{ params: { lang: "se" | "en" } }>
    > = new Map();

    testParameters.set(/Utbildning/i, swedishParameters);
    testParameters.set(/Education/i, englishParameters);

    testParameters.forEach((parameter, linkText) => {
      it("should display a link named education", async () => {
        const { getByRole } = await renderPubliSectorPage(parameter);
        expect(getByRole("link", { name: linkText })).toHaveProperty(
          "href",
          `${localHost}/${parameter.params.lang}/public-sector/education`
        );
      });
    });
  });
});

async function renderPubliSectorPage(
  parameters: Readonly<{ params: { lang: Locale } }>
) {
  const publicSectorPage = await PublicSector(parameters);
  return render(publicSectorPage);
}
