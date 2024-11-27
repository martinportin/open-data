"use client";

import { useState } from "react";
import PrincipalsTableCounter from "./PrincipalsTableCounter";
import Principals from "./Principals";
import PrincipalsTableToolbar from "./PrincipalsTableToolbar";
import PrincipalsTable from "./PrincipalsTable";
import PrincipalTableDateOfExtract from "./PrincipalTableDateOfExtract";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Locale } from "@/i18n-config";

export default function PrincipalsPageContent({
  lang,
  dictionary,
  principalsRecord
}: Readonly<{
  lang: Locale;
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

  function getDateOfExtract(lang: Locale): string {
    return lang === "se"
      ? principals.swedishDateTimeOfExtract
      : principals.englishDateTimeOfExtract;
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checkboxId = event.target.id;
    switch (checkboxId) {
      case "public":
        setPublicCheckboxIsChecked(!publicCheckboxIsChecked);
        break;
      case "municipalAssociation":
        setMunicpalAssociationCheckboxIsChecked(
          !municipalAssociationCheckboxIsChecked
        );
        break;
      case "regional":
        setRegionalCheckboxIsCheked(!regionalCheckboxIsChecked);
        break;
      case "private":
        setPrivateCheckoboxIsChecked(!privateCheckboxIsChecked);
        break;
      case "samiSchool":
        setSamiSchoolCheckboxIsChecked(!samiSchoolCheckboxIsChecked);
        break;
      case "nationalAgencyForEducation":
        setNationalAgencyForEducationIsChecked(
          !nationalAgencyForEducationIsChecked
        );
        break;
      case "specialSchool":
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
      <PrincipalTableDateOfExtract dateOfExtract={getDateOfExtract(lang)} />
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
