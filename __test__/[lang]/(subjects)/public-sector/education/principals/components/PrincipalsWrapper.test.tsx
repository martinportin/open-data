import { getDictionary } from "@/app/[lang]/dictionaries";
import { Locale } from "@/i18n-config";
import renderPrincipalsWrapper from "./renderers/renderPrincipalsWrapper";
import { principalsRecord } from "./testUtils/mockData";
import userEvent from "@testing-library/user-event";
import {
  principalNames,
  principalOrganizationNumbers
} from "./testUtils/testingParameters";
import { englishCheckboxLabels } from "./testUtils/regExps";

describe("principals wrapper", () => {
  it("should show the correct number of principals (1) in the heading before and after search input filtering on name", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getHeader, getSearchInput } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    for (const name of principalNames) {
      expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
      await userEvent.type(getSearchInput(), name);
      expect(getHeader(/Number of principals \(1\)/i)).toBeInTheDocument();
      await userEvent.clear(getSearchInput());
      expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
    }
  });

  it("should show the correct number of principals (1) in the heading before and after search input filtering on organisation number", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getHeader, getSearchInput } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    for (const organizationNumber of principalOrganizationNumbers) {
      expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
      await userEvent.type(getSearchInput(), organizationNumber);
      expect(getHeader(/Number of principals \(1\)/i)).toBeInTheDocument();
      await userEvent.clear(getSearchInput());
      expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
    }
  });

  it("should show the correct number of principals (0) in the heading before and after search input filtering on organisation number", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getHeader, getSearchInput } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
    await userEvent.type(getSearchInput(), "Non-existing search input");
    expect(getHeader(/Number of principals \(0\)/i)).toBeInTheDocument();
    await userEvent.clear(getSearchInput());
    expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
  });

  it("should show the correct number of principals (6) in the heading before and after checkbox filtering", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getHeader, getCheckbox } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    for (const label of englishCheckboxLabels) {
      expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
      await userEvent.click(getCheckbox(label));
      expect(getHeader(/Number of principals \(6\)/i)).toBeInTheDocument();
      await userEvent.click(getCheckbox(label));
      expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
    }
  });

  it("should show the correct number of principals (0) in the heading before and after checkbox filtering", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getHeader, getCheckbox } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
    await clickAllCheckboxes(englishCheckboxLabels, getCheckbox);
    expect(getHeader(/Number of principals \(0\)/i)).toBeInTheDocument();
    await clickAllCheckboxes(englishCheckboxLabels, getCheckbox);
    expect(getHeader(/Number of principals \(7\)/i)).toBeInTheDocument();
  });

  it("should show the correct number of table rows (1) after search input filtering on name", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getTableRows, getSearchInput } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    for (const name of principalNames) {
      expect(getTableRows()).toHaveLength(7);
      await userEvent.type(getSearchInput(), name);
      expect(getTableRows()).toHaveLength(1);
      await userEvent.clear(getSearchInput());
      expect(getTableRows()).toHaveLength(7);
    }
  });

  it("should show the correct number of table rows (1) after search input filtering on organization number", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getTableRows, getSearchInput } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    for (const organizationNumber of principalOrganizationNumbers) {
      expect(getTableRows()).toHaveLength(7);
      await userEvent.type(getSearchInput(), organizationNumber);
      expect(getTableRows()).toHaveLength(1);
      await userEvent.clear(getSearchInput());
      expect(getTableRows()).toHaveLength(7);
    }
  });

  it("should show the correct number of table rows (6) after search input filtering on organization number", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getTableRows, getSearchInput } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    expect(getTableRows()).toHaveLength(7);
    await userEvent.type(getSearchInput(), "Non-existing search input");
    expect(getTableRows()).toHaveLength(0);
    await userEvent.clear(getSearchInput());
    expect(getTableRows()).toHaveLength(7);
  });

  it("should show the correct number of table rows (6) after search input filtering on organization number", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getTableRows, getCheckbox } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    for (const label of englishCheckboxLabels) {
      expect(getTableRows()).toHaveLength(7);
      await userEvent.click(getCheckbox(label));
      expect(getTableRows()).toHaveLength(6);
      await userEvent.click(getCheckbox(label));
      expect(getTableRows()).toHaveLength(7);
    }
  });

  it("should show the correct number of principals (0) in the heading before and after checkbox filtering", async () => {
    const lang: Locale = "en";
    const dictionary = await getDictionary("en");
    const { getTableRows, getCheckbox } = renderPrincipalsWrapper(
      lang,
      dictionary,
      principalsRecord
    );
    expect(getTableRows()).toHaveLength(7);
    await clickAllCheckboxes(englishCheckboxLabels, getCheckbox);
    expect(getTableRows()).toHaveLength(0);
    await clickAllCheckboxes(englishCheckboxLabels, getCheckbox);
    expect(getTableRows()).toHaveLength(7);
  });
});

async function clickAllCheckboxes(
  labels: RegExp[],
  checkbox: (name: RegExp) => HTMLElement
) {
  for (const label of labels) {
    await userEvent.click(checkbox(label));
  }
}
