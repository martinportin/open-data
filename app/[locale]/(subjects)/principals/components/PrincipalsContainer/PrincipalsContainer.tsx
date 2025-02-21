'use client';

import PrincipalsHeader from './components/PrincipalsHeader/PrincipalsHeader';
import PrincipalsDateTimeOfExtract from './components/PrincipalsDateTimeOfExtract/PrincipalsDateTimeOfExtract';
import PrincipalsToolbar from './components/PrincipalsToolbar/PrincipalsToolbar';
import PrincipalsTable from './components/PrincipalsTable/PrincipalsTable';

export default function PrincipalsContainer({
  principals,
  dateTimeOfExtract,
  searchInputProps,
  filterCheckboxProps
}: Readonly<PrincipalsContainerProps>) {
  return (
    <>
      <PrincipalsHeader numberOfPrincipals={principals.length} />
      <PrincipalsDateTimeOfExtract dateTimeOfExtract={dateTimeOfExtract} />
      <PrincipalsToolbar
        searchInputProps={searchInputProps}
        filterCheckboxProps={filterCheckboxProps}
      />
      <PrincipalsTable principals={principals} />
    </>
  );
}
