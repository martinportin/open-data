import FilterCheckbox from './components/FilterCheckbox';
import SearchInput from './components/SearchInput';

export default function PrincipalsToolbar({
  searchInputProps,
  filterCheckboxes,
  handleCheckboxChange
}: Readonly<PrincipalToolbarProps>) {
  const { searchInputValue, handleInputChange } = searchInputProps;

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
