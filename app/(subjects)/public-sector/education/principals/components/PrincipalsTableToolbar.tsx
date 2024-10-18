export default function PrincipalsTableToolbar({
  dictionary,
  searchInput,
  onInputChange,
  publicChecked,
  privateChecked,
  onCheckboxChange
}: Readonly<{
  dictionary: Dictionary;
  searchInput: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  publicChecked: boolean;
  privateChecked: boolean;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}>): JSX.Element {
  return (
    <menu>
      <li>
        <label>
          {dictionary.search}:
          <input id="search" value={searchInput} onChange={onInputChange} />
        </label>
      </li>
      <li>
        <label>
          {dictionary.public}:
          <input
            id="public"
            type="checkbox"
            checked={publicChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
      <li>
        <label>
          {dictionary.private}:
          <input
            id="private"
            type="checkbox"
            checked={privateChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
    </menu>
  );
}
