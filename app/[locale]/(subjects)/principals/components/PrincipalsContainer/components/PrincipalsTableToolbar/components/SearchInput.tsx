export default function SearchInput({
  label,
  searchInputValue,
  handleInputChange
}: Readonly<SearchInputProps>) {
  return (
    <label>
      {label}:
      <input
        id="search"
        value={searchInputValue}
        onChange={handleInputChange}
      />
    </label>
  );
}
