import PrincipalsTableToolbar from "@/app/[lang]/(subjects)/public-sector/education/principals/components/PrincipalsTableToolbar";
import { render, screen } from "@testing-library/react";

export function renderPrincipalsTableToolbar(dictionary: Dictionary) {
  const searchInput = "";
  const handleInputChange = jest.fn();
  const checkboxCheckedMock = true;
  const handleCheckboxChange = jest.fn();
  render(
    <PrincipalsTableToolbar
      dictionary={dictionary}
      searchInput={searchInput}
      onInputChange={handleInputChange}
      publicChecked={checkboxCheckedMock}
      municipalAssociationChecked={checkboxCheckedMock}
      regionalChecked={checkboxCheckedMock}
      privateChecked={checkboxCheckedMock}
      samiSchoolChecked={checkboxCheckedMock}
      nationalAgencyForEducationChecked={checkboxCheckedMock}
      specialSchoolChecked={checkboxCheckedMock}
      onCheckboxChange={handleCheckboxChange}
    />
  );

  return {
    screen,
    getInput: (name: RegExp) => screen.getByRole("textbox", { name }),
    getSearchInput: () =>
      screen.getByRole("textbox", { name: /^Search:|Sök:$/i }),
    getCheckbox: (name: RegExp) => screen.getByRole("checkbox", { name }),
    getOnInputChange: () => handleInputChange,
    getOnCheckboxChange: () => handleCheckboxChange
  };
}
