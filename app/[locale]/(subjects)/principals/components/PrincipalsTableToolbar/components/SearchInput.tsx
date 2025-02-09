export default function SearchInput({
  label,
  searchInputValue,
  handleInputChange
}: Readonly<{
  label: string;
  searchInputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
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
