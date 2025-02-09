import FilterCheckbox from './components/FilterCheckbox';
import SearchInput from './components/SearchInput';

export default function PrincipalsToolbar({
  searchInputLabel,
  searchInputValue,
  handleSearchInputChange,
  filterCheckboxProps
}: Readonly<{
  searchInputLabel: string;
  searchInputValue: string;
  handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  filterCheckboxProps: FilterCheckboxProp[];
}>) {
  const filterCheckboxes = filterCheckboxProps.map(
    (filterCheckboxProp: FilterCheckboxProp) => (
      <FilterCheckbox
        key={filterCheckboxProp.principalType}
        checkboxProp={filterCheckboxProp}
      />
    )
  );

  return (
    <menu>
      <SearchInput
        label={searchInputLabel}
        searchInputValue={searchInputValue}
        handleInputChange={handleSearchInputChange}
      />
      {filterCheckboxes}
    </menu>
  );
}
