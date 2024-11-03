export default function PrincipalsTableToolbar({
  dictionary,
  searchInput,
  onInputChange,
  publicChecked,
  municipalAssociationChecked,
  regionalChecked,
  privateChecked,
  samiSchoolChecked,
  nationalAgencyForEducationChecked,
  specialSchoolChecked,
  onCheckboxChange
}: Readonly<{
  dictionary: Dictionary;
  searchInput: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  publicChecked: boolean;
  municipalAssociationChecked: boolean;
  regionalChecked: boolean;
  privateChecked: boolean;
  samiSchoolChecked: boolean;
  nationalAgencyForEducationChecked: boolean;
  specialSchoolChecked: boolean;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}>): JSX.Element {
  return (
    <menu>
      <li>
        <label>
          {dictionary.common.search}:
          <input id="search" value={searchInput} onChange={onInputChange} />
        </label>
      </li>
      <li>
        <label>
          {dictionary.principals.public}:
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
          {dictionary.principals.municipalAssociation}:
          <input
            id="municipalAssociation"
            type="checkbox"
            checked={municipalAssociationChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
      <li>
        <label>
          {dictionary.principals.regional}:
          <input
            id="regional"
            type="checkbox"
            checked={regionalChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
      <li>
        <label>
          {dictionary.principals.private}:
          <input
            id="private"
            type="checkbox"
            checked={privateChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
      <li>
        <label>
          {dictionary.principals.samiSchool}:
          <input
            id="samiSchool"
            type="checkbox"
            checked={samiSchoolChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
      <li>
        <label>
          {dictionary.principals.nationalAgencyForEducation}:
          <input
            id="nationalAgencyForEducation"
            type="checkbox"
            checked={nationalAgencyForEducationChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
      <li>
        <label>
          {dictionary.principals.specialSchool}:
          <input
            id="specialSchool"
            type="checkbox"
            checked={specialSchoolChecked}
            onChange={onCheckboxChange}
          />
        </label>
      </li>
    </menu>
  );
}
