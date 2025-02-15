export default function FilterCheckbox({
  principalType,
  isChecked,
  handleCheckboxChange
}: Readonly<FiltercheckboxProps>) {
  return (
    <label>
      {principalType}:
      <input
        id={`${principalType}Checkbox`}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  );
}
