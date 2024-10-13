"use client";

import { useState } from "react";
import PrincipalsTableCounter from "@/app/(subjects)/public-sector/education/principals/components/PrincipalsTableCounter";
import Principals from "@/app/(subjects)/public-sector/education/principals/components/Principals";
import PrincipalsTableToolbar from "./components/PrincipalsTableToolbar";
import PrincipalsTable from "./components/PrincipalsTable";

export default function PrincipalsPage(): JSX.Element {
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
  const principalsRecord: PrincipalsRecord = {
    Uttagsdatum: "2024-08-20T01:38:40.2392580+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: [
      { PerOrgNr: "0000000001", Namn: "Principal 1", Typ: "Kommunal" },
      { PerOrgNr: "0000000002", Namn: "Principal 2", Typ: "Enskild" }
    ]
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
        (principal.PerOrgNr.includes(searchInput) ||
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
