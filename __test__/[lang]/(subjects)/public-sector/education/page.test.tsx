import {
  englishParameters,
  swedishParameters
} from "@/__test__/constants/parameters";
import { localHost } from "@/__test__/constants/urls";
import Education from "@/app/[lang]/(subjects)/public-sector/education/page";
import { Locale } from "@/i18n-config";
import { render } from "@testing-library/react";

describe("eduation page", () => {
  describe("links", () => {
    linkParameters().forEach((parameter, linkText) => {
      it("should display a principals link on the education page", async () => {
        const { getByRole } = await renderEducationPage(parameter);
        expect(getByRole("link", { name: linkText })).toHaveProperty(
          "href",
          `${localHost}/${parameter.params.lang}/public-sector/education/principals`
        );
      });
    });
  });
});

function linkParameters(): Map<
  RegExp,
  Readonly<{ params: { lang: "se" | "en" } }>
> {
  const linkParameters = new Map();
  linkParameters.set(/Huvudmän/i, swedishParameters);
  linkParameters.set(/Principals/i, englishParameters);
  return linkParameters;
}

async function renderEducationPage(
  parameters: Readonly<{ params: { lang: Locale } }>
) {
  const educationPage = await Education(parameters);
  return render(educationPage);
}
