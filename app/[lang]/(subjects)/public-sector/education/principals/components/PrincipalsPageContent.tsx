"use client";

import { useState } from "react";
import PrincipalsTableCounter from "./PrincipalsTableCounter";
import Principals from "./Principals";
import PrincipalsTableToolbar from "./PrincipalsTableToolbar";
import PrincipalsTable from "./PrincipalsTable";
import PrincipalTableDateOfExtract from "./PrincipalTableDateOfExtract";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function PrincipalsPageContent({
  dictionary,
  principalsRecord
}: Readonly<{
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  principalsRecord: PrincipalsRecord;
}>): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
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
    nationalAgencyForEducationIsChecked,
    setNationalAgencyForEducationIsChecked
  ] = useState(true);
  const [specialSchoolCheckboxIsChecked, setSpecialScoolCheckboxIsChecked] =
    useState(true);

  const principals: Principals = new Principals(principalsRecord);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checkboxId = event.target.id;
    if (checkboxId === "public") {
      setPublicCheckboxIsChecked(!publicCheckboxIsChecked);
    } else if (checkboxId === "municipalAssociation") {
      setMunicpalAssociationCheckboxIsChecked(
        !municipalAssociationCheckboxIsChecked
      );
    } else if (checkboxId === "regional") {
      setRegionalCheckboxIsCheked(!regionalCheckboxIsChecked);
    } else if (checkboxId === "private") {
      setPrivateCheckoboxIsChecked(!privateCheckboxIsChecked);
    } else if (checkboxId === "samiSchool") {
      setSamiSchoolCheckboxIsChecked(!samiSchoolCheckboxIsChecked);
    } else if (checkboxId === "nationalAgencyForEducation") {
      setNationalAgencyForEducationIsChecked(
        !nationalAgencyForEducationIsChecked
      );
    } else if (checkboxId === "specialSchool") {
      setSpecialScoolCheckboxIsChecked(!specialSchoolCheckboxIsChecked);
    }
  }

  function filteredPrincipals() {
    const PUBLIC = "Kommunal";
    const PRIVATE = "Enskild";
    const MUNICIPAL_ASSOCIATION = "Kommunalförbund";
    const REGIONAL = "Region";
    const SAMI_SCHOOL = "Sameskolan";
    const NATIONAL_AGENCY_FOR_EDUCATION = "Skolverket";
    const SPECIAL_SCHOOL = "Specialskola";

    if (
      !publicCheckboxIsChecked &&
      !municipalAssociationCheckboxIsChecked &&
      !regionalCheckboxIsChecked &&
      !privateCheckboxIsChecked &&
      !samiSchoolCheckboxIsChecked &&
      !nationalAgencyForEducationIsChecked &&
      !specialSchoolCheckboxIsChecked
    ) {
      return [];
    }

    return principals.principals.filter(
      (principal: Principal) =>
        (principal.PeOrgNr.includes(searchInput) ||
          principal.Namn.toLowerCase().includes(searchInput.toLowerCase())) &&
        ((principal.Typ === PUBLIC && publicCheckboxIsChecked) ||
          (principal.Typ === MUNICIPAL_ASSOCIATION &&
            municipalAssociationCheckboxIsChecked) ||
          (principal.Typ === REGIONAL && regionalCheckboxIsChecked) ||
          (principal.Typ === PRIVATE && privateCheckboxIsChecked) ||
          (principal.Typ === SAMI_SCHOOL && samiSchoolCheckboxIsChecked) ||
          (principal.Typ === NATIONAL_AGENCY_FOR_EDUCATION &&
            nationalAgencyForEducationIsChecked) ||
          (principal.Typ === SPECIAL_SCHOOL && specialSchoolCheckboxIsChecked))
    );
  }
  return (
    <>
      <PrincipalsTableCounter
        dictionary={dictionary}
        principals={filteredPrincipals()}
      />
      <PrincipalTableDateOfExtract
        dateOfExtract={principals.dateTimeOfExtract}
      />
      <PrincipalsTableToolbar
        dictionary={dictionary}
        searchInput={searchInput}
        onInputChange={handleInputChange}
        publicChecked={publicCheckboxIsChecked}
        municipalAssociationChecked={municipalAssociationCheckboxIsChecked}
        regionalChecked={regionalCheckboxIsChecked}
        privateChecked={privateCheckboxIsChecked}
        samiSchoolChecked={samiSchoolCheckboxIsChecked}
        nationalAgencyForEducationChecked={nationalAgencyForEducationIsChecked}
        specialSchoolChecked={specialSchoolCheckboxIsChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      <PrincipalsTable
        dictionary={dictionary}
        principals={filteredPrincipals()}
      />
    </>
  );
}