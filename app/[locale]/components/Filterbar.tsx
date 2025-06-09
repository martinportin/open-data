'use client';

import { useTranslation } from 'react-i18next';
import FilterSearchInput from './FilterSearchInput';
import FilterCheckbox from './FilterCheckbox';

export default function Filterbar({
  searchInputValue,
  handleInputChange,
  isPublicCheckboxChecked,
  isPrivateCheckboxChecked,
  isMunicipalAssociationCheckboxChecked,
  isisRegionCheckboxChecked,
  isNationalAgencyForEducationCheckboxChecked,
  isSamiCheckboxChecked,
  isSpecialCheckboxChecked,
  handleCheckboxChange
}: Readonly<{
  searchInputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  isPublicCheckboxChecked: boolean;
  isPrivateCheckboxChecked: boolean;
  isMunicipalAssociationCheckboxChecked: boolean;
  isisRegionCheckboxChecked: boolean;
  isNationalAgencyForEducationCheckboxChecked: boolean;
  isSamiCheckboxChecked: boolean;
  isSpecialCheckboxChecked: boolean;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  const { t } = useTranslation();

  return (
    <menu>
      <li>
        <FilterSearchInput
          id="searchInput"
          labelName={t('search')}
          value={searchInputValue}
          handleInputChange={handleInputChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="publicCheckbox"
          labelName={t('public')}
          checked={isPublicCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="privateCheckbox"
          labelName={t('private')}
          checked={isPrivateCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="municipalAssociationCheckbox"
          labelName={t('municipalAssociation')}
          checked={isMunicipalAssociationCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="regionCheckbox"
          labelName={t('region')}
          checked={isisRegionCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="nationalAgencyForEducationCheckbox"
          labelName={t('nationalAgencyForEducation')}
          checked={isNationalAgencyForEducationCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="samiCheckbox"
          labelName={t('sami')}
          checked={isSamiCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
      <li>
        <FilterCheckbox
          id="specialCheckbox"
          labelName={t('special')}
          checked={isSpecialCheckboxChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </li>
    </menu>
  );
}
