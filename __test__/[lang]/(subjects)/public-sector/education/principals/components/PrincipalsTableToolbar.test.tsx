import { getDictionary } from "@/app/[lang]/dictionaries";
import { renderPrincipalsTableToolbar } from "./renderers/renderPrincipalsTableToolbar";
import {
  englishCheckboxLabels,
  swedishCheckboxLabels
} from "./testUtils/regExps";
import userEvent from "@testing-library/user-event";

describe("principle table toolbar", () => {
  it("should display search input with the correct swedish label", async () => {
    const swedishDictionary: Dictionary = await getDictionary("se");
    const { getInput } = renderPrincipalsTableToolbar(swedishDictionary);
    expect(getInput(/^Sök:$/i)).toBeInTheDocument();
  });

  it("should display search input with the correct english label", async () => {
    const englishDictionary: Dictionary = await getDictionary("en");
    const { getInput } = renderPrincipalsTableToolbar(englishDictionary);
    expect(getInput(/^Search:$/i)).toBeInTheDocument();
  });

  it("should display seven checkoboxes with the correct swedish labels", async () => {
    const swedishDictionary: Dictionary = await getDictionary("se");
    const { getCheckbox } = renderPrincipalsTableToolbar(swedishDictionary);
    swedishCheckboxLabels.forEach((label) =>
      expect(getCheckbox(label)).toBeInTheDocument()
    );
  });
  it("should display seven checkoboxes with the correct english labels", async () => {
    const englishDictionary: Dictionary = await getDictionary("en");
    const { getCheckbox } = renderPrincipalsTableToolbar(englishDictionary);
    englishCheckboxLabels.forEach((label) =>
      expect(getCheckbox(label)).toBeInTheDocument()
    );
  });
  it("should call onInputChange when typing in the search input", async () => {
    const englishDictionary = await getDictionary("en");
    const { getSearchInput, getOnInputChange } =
      renderPrincipalsTableToolbar(englishDictionary);
    await userEvent.type(getSearchInput(), "Input");
    expect(getOnInputChange().mock.calls).toHaveLength(5);
  });

  englishCheckboxLabels.forEach((label) => {
    it("should call onCheckboxChange when clicking on a checkbox", async () => {
      const englishDictionary = await getDictionary("en");
      const { getCheckbox, getOnCheckboxChange } =
        renderPrincipalsTableToolbar(englishDictionary);
      await userEvent.click(getCheckbox(label));
      expect(getOnCheckboxChange().mock.calls).toHaveLength(1);
    });
  });
});
