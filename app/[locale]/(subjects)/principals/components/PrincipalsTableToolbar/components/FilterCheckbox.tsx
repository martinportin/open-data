export default function FilterCheckbox({
  checkboxProp
}: Readonly<{
  checkboxProp: FiltercheckboxProp;
}>) {
  const { principalType, isChecked, handleCheckboxChange } = checkboxProp;
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
