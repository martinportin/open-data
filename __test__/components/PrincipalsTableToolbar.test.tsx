import PrincipalsTableToolbar from "@/app/components/PrincipalsTableToolbar";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("principle table toolbar", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const swedishDictionary: Dictionary = {
    organizationNumber: "Organisationsnummer",
    name: "Namn",
    type: "Typ",
    public: "Kommunal",
    private: "Enskild",
    search: "Sök"
  };
  const handleSerachInputChangeMock = jest.fn();
  const handleCheckboxChangeMock = jest.fn();

  test("should display an search input field", () => {
    const { getByRole } = render(
      <PrincipalsTableToolbar
        dictionary={swedishDictionary}
        onInputChange={handleSerachInputChangeMock}
        publicChecked={true}
        privateChecked={true}
        onCheckboxChange={handleCheckboxChangeMock}
      />
    );
    expect(getByRole("textbox", { name: /Sök/i }));
    expect(getByRole("checkbox", { name: /Kommunal/i }));
    expect(getByRole("checkbox", { name: /Enskild/i }));
  });

  test("should call onInputChange when typing in the search input field", async () => {
    const { getByRole } = render(
      <PrincipalsTableToolbar
        dictionary={swedishDictionary}
        onInputChange={handleSerachInputChangeMock}
        publicChecked={true}
        privateChecked={true}
        onCheckboxChange={handleCheckboxChangeMock}
      />
    );
    const searchInputField = getByRole("textbox", { name: /Sök/i });
    await userEvent.type(searchInputField, "t");
    expect(handleSerachInputChangeMock).toHaveBeenCalled();
  });

  test("should call onCheckboxChange when clicking the public checkbox", async () => {
    const { getByRole } = render(
      <PrincipalsTableToolbar
        dictionary={swedishDictionary}
        onInputChange={handleSerachInputChangeMock}
        publicChecked={true}
        privateChecked={true}
        onCheckboxChange={handleCheckboxChangeMock}
      />
    );
    const publicCheckbox = getByRole("checkbox", { name: /Kommunal/i });
    await userEvent.click(publicCheckbox);
    expect(handleCheckboxChangeMock).toHaveBeenCalled();
  });

  test("should call onCheckboxChange when clicking the private checkbox", async () => {
    const { getByRole } = render(
      <PrincipalsTableToolbar
        dictionary={swedishDictionary}
        onInputChange={handleSerachInputChangeMock}
        publicChecked={true}
        privateChecked={true}
        onCheckboxChange={handleCheckboxChangeMock}
      />
    );
    const publicCheckbox = getByRole("checkbox", { name: /Enskild/i });
    await userEvent.click(publicCheckbox);
    expect(handleCheckboxChangeMock).toHaveBeenCalled();
  });
});
