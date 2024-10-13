"use client";

import { useState } from "react";
import PrincipalsTableCounter from "@/app/(subjects)/public-sector/education/principals/components/PrincipalsTableCounter";
import Principals from "@/app/(subjects)/public-sector/education/principals/components/Principals";
import PrincipalsTableToolbar from "./components/PrincipalsTableToolbar";
import PrincipalsTable from "./components/PrincipalsTable";

export default function PrincipalsPage(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");

  const swedishDictionary = {
    numberOf: "Antal",
    organizationNumber: "Organisationsnummer",
    name: "Namn",
    type: "Typ",
    public: "Kommunal",
    private: "Enskild",
    search: "Sök"
  };
  const principalsRecord: PrincipalsRecord = {
    Uttagsdatum: "2024-08-20T01:38:40.2392580+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PerOrgNr: "0000000001", Namn: "Principal 1", Typ: "Type 1" },
      { PerOrgNr: "0000000002", Namn: "Principal 2", Typ: "Type 2" }
    ]
  };

  const principals: Principals = new Principals(principalsRecord);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function handleCheckboxChange() {}

  function filteredPrincipals() {
    return principals.principals.filter(
      (principal) =>
        principal.PerOrgNr.includes(searchInput) ||
        principal.Namn.includes(searchInput)
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
        publicChecked={false}
        privateChecked={false}
        onCheckboxChange={handleCheckboxChange}
      />
      <PrincipalsTable
        dictionary={swedishDictionary}
        principals={filteredPrincipals()}
      />
    </>
  );
}
