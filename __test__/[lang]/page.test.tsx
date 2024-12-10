import Home from "@/app/[lang]/page";
import { render } from "@testing-library/react";
import { localHost } from "../constants/urls";
import { englishParameters, swedishParameters } from "../constants/parameters";

describe("home page", () => {
  describe("links", () => {
    linkParameters().forEach((parameters, linkText) => {
      it("should display a link named public sector", async () => {
        const { getByRole } = await renderHomePage(parameters);
        expect(getByRole("link", { name: linkText })).toHaveProperty(
          "href",
          `${localHost}/${parameters.params.lang}/public-sector`
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

  linkParameters.set(/Offentlig sektor/i, swedishParameters);
  linkParameters.set(/Public Sector/i, englishParameters);
  return linkParameters;
}

async function renderHomePage(
  parameters: Readonly<{ params: { lang: "se" | "en" } }>
) {
  const homePage = await Home(parameters);
  return render(homePage);
}
