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
    linkParameters().forEach((parameter, linkText) => {
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

function linkParameters(): Map<
  RegExp,
  Readonly<{ params: { lang: "se" | "en" } }>
> {
  const linkParameters: Map<
    RegExp,
    Readonly<{ params: { lang: "se" | "en" } }>
  > = new Map();
  linkParameters.set(/Utbildning/i, swedishParameters);
  linkParameters.set(/Education/i, englishParameters);
  return linkParameters;
}

async function renderPubliSectorPage(
  parameters: Readonly<{ params: { lang: Locale } }>
) {
  const publicSectorPage = await PublicSector(parameters);
  return render(publicSectorPage);
}
