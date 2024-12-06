import Home from "@/app/[lang]/page";
import { render } from "@testing-library/react";

describe("home page", () => {
  const swedishParameters: Readonly<{ params: { lang: "se" | "en" } }> = {
    params: { lang: "se" }
  };

  const englishParameters: Readonly<{ params: { lang: "se" | "en" } }> = {
    params: { lang: "en" }
  };

  describe("links", () => {
    const testParameters: Map<
      RegExp,
      Readonly<{ params: { lang: "se" | "en" } }>
    > = new Map();

    testParameters.set(/Offentlig sektor/i, swedishParameters);
    testParameters.set(/Public Sector/i, englishParameters);

    testParameters.forEach((parameters, linkText) => {
      it("should display a link named public sector", async () => {
        const { getByRole } = await renderHomePage(parameters);
        expect(getByRole("link", { name: linkText })).toHaveProperty(
          "href",
          "http://localhost/public-sector"
        );
      });
    });
  });
});

async function renderHomePage(
  parameters: Readonly<{ params: { lang: "se" | "en" } }>
) {
  const homePage = await Home(parameters);
  return render(homePage);
}
