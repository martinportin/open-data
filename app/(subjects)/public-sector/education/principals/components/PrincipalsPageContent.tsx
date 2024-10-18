"use client";

import { useState } from "react";
import PrincipalsTableCounter from "./PrincipalsTableCounter";
import Principals from "./Principals";
import PrincipalsTableToolbar from "./PrincipalsTableToolbar";
import PrincipalsTable from "./PrincipalsTable";

export default function PrincipalsPageContent({
  principalsRecord
}: Readonly<{
  principalsRecord: PrincipalsRecord;
}>): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [publicCheckboxIsChecked, setPublicCheckboxIsChecked] = useState(true);
  const [privateCheckboxIsChecked, setPrivateCheckoboxIsChecked] =
    useState(true);

  const swedishDictionary = {
    numberOf: "Antal",
    organizationNumber: "Organisationsnummer",
    name: "Namn",
    type: "Typ",
    public: "Kommunal",
    private: "Enskild",
    search: "Sök"
  };

  const principals: Principals = new Principals(principalsRecord);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.id === "public") {
      setPublicCheckboxIsChecked(!publicCheckboxIsChecked);
    } else if (event.target.id === "private") {
      setPrivateCheckoboxIsChecked(!privateCheckboxIsChecked);
    }
  }

  function filteredPrincipals() {
    const PUBLIC = "Kommunal";
    const PRIVATE = "Enskild";
    if (!publicCheckboxIsChecked && !privateCheckboxIsChecked) {
      return [];
    }
    return principals.principals.filter(
      (principal) =>
        (principal.PeOrgNr.includes(searchInput) ||
          principal.Namn.includes(searchInput)) &&
        ((principal.Typ === PUBLIC) === publicCheckboxIsChecked ||
          (principal.Typ === PRIVATE) === privateCheckboxIsChecked)
    );
  }
  return (
    <>
      <PrincipalsTableCounter
        dictionary={swedishDictionary}
        principals={filteredPrincipals()}
      />
      <PrincipalsTableToolbar
        dictionary={swedishDictionary}
        searchInput={searchInput}
        onInputChange={handleInputChange}
        publicChecked={publicCheckboxIsChecked}
        privateChecked={privateCheckboxIsChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      <PrincipalsTable
        dictionary={swedishDictionary}
        principals={filteredPrincipals()}
      />
    </>
  );
}
