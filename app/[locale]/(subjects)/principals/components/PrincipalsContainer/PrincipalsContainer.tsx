'use client';

import PrincipalsHeader from './components/PrincipalsHeader/PrincipalsHeader';
import PrincipalsDateTimeOfExtract from './components/PrincipalsDateTimeOfExtract/PrincipalsDateTimeOfExtract';
import PrincipalsToolbar from './components/PrincipalsToolbar/PrincipalsToolbar';
import PrincipalsTable from './components/PrincipalsTable/PrincipalsTable';
import React, { useState } from 'react';
import { PrincipalTypes } from './components/utils/constans/PrincipalTypes';

export default function PrincipalsContainer({
  principals,
  dateTimeOfExtract
}: Readonly<{
  prinicplas: Principal[];
  dateTimeOfExtract: string;
}>): React.JSX.Element {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [publicCheckboxIsChecked, setPublicCheckboxIsChecked] = useState(true);
  const [
    municipalAssociationCheckboxIsChecked,
    setMunicpalAssociationCheckboxIsChecked
  ] = useState(true);
  const [regionalCheckboxIsChecked, setRegionalCheckboxIsCheked] =
    useState(true);
  const [privateCheckboxIsChecked, setPrivateCheckoboxIsChecked] =
    useState(true);
  const [samiSchoolCheckboxIsChecked, setSamiSchoolCheckboxIsChecked] =
    useState(true);
  const [
    nationalAgencyForEducationCheckboxIsChecked,
    setNationalAgencyForEducationCheckboxIsChecked
  ] = useState(true);
  const [specialSchoolCheckboxIsChecked, setSpecialScoolCheckboxIsChecked] =
    useState(true);

  function handleSearchInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchInputValue(event.target.value);
  }

  const filterCheckboxes = [
    { principalType: 'public', isChecked: publicCheckboxIsChecked },
    {
      principalType: 'municipalAssociation',
      isChecked: municipalAssociationCheckboxIsChecked
    },
    { principalType: 'regional', isChecked: regionalCheckboxIsChecked },
    { principalType: 'private', isChecked: privateCheckboxIsChecked },
    { principalType: 'samiSchool', isChecked: samiSchoolCheckboxIsChecked },
    {
      principalType: 'nationalAgencyForEducation',
      isChecked: nationalAgencyForEducationCheckboxIsChecked
    },
    {
      principalType: 'specialSchool',
      isChecked: specialSchoolCheckboxIsChecked
    }
  ];

  function handleFilterCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const checkboxId = event.target.id;

    switch (checkboxId) {
      case 'publicCheckbox':
        setPublicCheckboxIsChecked(!publicCheckboxIsChecked);
        break;
      case 'municipalAssociationCheckbox':
        setMunicpalAssociationCheckboxIsChecked(
          !municipalAssociationCheckboxIsChecked
        );
        break;
      case 'regionalCheckbox':
        setRegionalCheckboxIsCheked(!regionalCheckboxIsChecked);
        break;
      case 'privateCheckbox':
        setPrivateCheckoboxIsChecked(!privateCheckboxIsChecked);
        break;
      case 'samiSchoolCheckbox':
        setSamiSchoolCheckboxIsChecked(!samiSchoolCheckboxIsChecked);
        break;
      case 'nationalAgencyForEducationCheckbox':
        setNationalAgencyForEducationCheckboxIsChecked(
          !nationalAgencyForEducationCheckboxIsChecked
        );
        break;
      case 'specialSchoolCheckbox':
        setSpecialScoolCheckboxIsChecked(!specialSchoolCheckboxIsChecked);
    }
  }

  function getFilteredPrincipals(principals: Principal[]): Principal[] {
    if (
      !publicCheckboxIsChecked &&
      !municipalAssociationCheckboxIsChecked &&
      !regionalCheckboxIsChecked &&
      !privateCheckboxIsChecked &&
      !samiSchoolCheckboxIsChecked &&
      !nationalAgencyForEducationCheckboxIsChecked &&
      !specialSchoolCheckboxIsChecked
    ) {
      return [];
    }
    return principals.filter(
      (principal: Principal) =>
        (principal.Namn.toLowerCase().includes(
          searchInputValue.toLowerCase()
        ) ||
          principal.PeOrgNr.includes(searchInputValue)) &&
        thePrincipalTypeIsSelected(principal)
    );
  }

  function thePrincipalTypeIsSelected(principal: Principal): boolean {
    return (
      (principal.Typ === PrincipalTypes.PUBLIC && publicCheckboxIsChecked) ||
      (principal.Typ === PrincipalTypes.MUNICIPAL_ASSOCIATION &&
        municipalAssociationCheckboxIsChecked) ||
      (principal.Typ === PrincipalTypes.REGIONAL &&
        regionalCheckboxIsChecked) ||
      (principal.Typ === PrincipalTypes.PRIVATE && privateCheckboxIsChecked) ||
      (principal.Typ === PrincipalTypes.SAMI_SCHOOL &&
        samiSchoolCheckboxIsChecked) ||
      (principal.Typ === PrincipalTypes.NATIONAL_AGENCY_FOR_EDUCATION &&
        nationalAgencyForEducationCheckboxIsChecked) ||
      (principal.Typ === PrincipalTypes.SPECIAL_SCHOOL &&
        specialSchoolCheckboxIsChecked)
    );
  }

  return (
    <>
      <PrincipalsHeader
        numberOfPrincipals={getFilteredPrincipals(principals).length}
      />
      <PrincipalsDateTimeOfExtract dateTimeOfExtract={dateTimeOfExtract} />
      <PrincipalsToolbar
        searchInputValue={searchInputValue}
        handleInputChange={handleSearchInputChange}
        filterCheckboxes={filterCheckboxes}
        handleCheckboxChange={handleFilterCheckboxChange}
      />
      <PrincipalsTable principals={getFilteredPrincipals(principals)} />
    </>
  );
}
