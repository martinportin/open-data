import FilterCheckbox from './components/FilterCheckbox';
import SearchInput from './components/SearchInput';

function getFilterCheckboxes(
  checkboxInformation: { principalType: string; isChecked: boolean }[],
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>
) {
  return checkboxInformation.map(
    (filterCheckboxProp: { principalType: string; isChecked: boolean }) => {
      const { principalType, isChecked } = filterCheckboxProp;

      return (
        <FilterCheckbox
          key={principalType}
          principalType={principalType}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      );
    }
  );
}

export default function PrincipalsFilterBar({
  searchInputValue,
  handleInputChange,
  filterCheckboxes,
  handleCheckboxChange
}: Readonly<{
  searchInputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  filterCheckboxes: { principalType: string; isChecked: boolean }[];
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  return (
    <form>
      <SearchInput
        searchInputValue={searchInputValue}
        handleInputChange={handleInputChange}
      />
      {getFilterCheckboxes(filterCheckboxes, handleCheckboxChange)}
    </form>
  );
}
