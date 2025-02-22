import FilterCheckbox from './components/FilterCheckbox';
import SearchInput from './components/SearchInput';

export default function PrincipalsToolbar({
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
  const checkboxes = filterCheckboxes.map(
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

  return (
    <menu>
      <SearchInput
        searchInputValue={searchInputValue}
        handleInputChange={handleInputChange}
      />
      {checkboxes}
    </menu>
  );
}
