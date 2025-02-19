import FilterCheckbox from './components/FilterCheckbox';
import SearchInput from './components/SearchInput';

export default function PrincipalsToolbar({
  searchInputProps,
  filterCheckboxProps
}: Readonly<PrincipalToolbarProps>) {
  const { searchInputValue, handleInputChange } = searchInputProps;
  const filterCheckboxes = filterCheckboxProps.map(
    (filterCheckboxProp: FilterCheckboxProps) => {
      const { principalType, isChecked, handleCheckboxChange } =
        filterCheckboxProp;

      return (
        <FilterCheckbox
          key={filterCheckboxProp.principalType}
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
      {filterCheckboxes}
    </menu>
  );
}
