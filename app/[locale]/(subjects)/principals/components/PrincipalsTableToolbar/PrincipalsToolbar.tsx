import FilterCheckbox from './components/FilterCheckbox';
import SearchInput from './components/SearchInput';

export default function PrincipalsToolbar({
  searchInputProps,
  filterCheckboxProps
}: Readonly<PrincipalToolbarProps>) {
  const filterCheckboxes = filterCheckboxProps.map(
    (filterCheckboxProp: FilterCheckboxProps) => (
      <FilterCheckbox
        key={filterCheckboxProp.principalType}
        {...filterCheckboxProp}
      />
    )
  );

  return (
    <menu>
      <SearchInput {...searchInputProps} />
      {filterCheckboxes}
    </menu>
  );
}
