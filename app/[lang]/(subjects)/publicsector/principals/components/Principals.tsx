'use client';

import PrincipalsHeader from './PrincipalsHeader';
import PrincipalsToolbar from './PrincipalsToolbar';
import PrincipalsTable from './PrincipalsTable';
import { ChangeEvent, useState } from 'react';

export default function Principals({
  params,
  principals,
}: Readonly<{ params: { dictionary: Dictionary }; principals: Principals }>) {
  const { dictionary } = params;
  const [isPublic, setIsPublic] = useState(true);
  const [isPrivate, setIsPrivate] = useState(true);

  const onCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.target;
    if (checkbox.id === 'publicCheckbox') {
      setIsPublic(checkbox.checked);
    } else {
      setIsPrivate(checkbox.checked);
    }
  };

  const publicPrincipals = (principal: Principal): boolean => {
    const PUBLIC = 'Kommunal';
    return principal.Typ === PUBLIC;
  };

  const privatePrincipals = (principal: Principal): boolean => {
    const PRIVATE = 'Enskild';
    return principal.Typ === PRIVATE;
  };

  const filterPrincipals = (
    principals: Principal[],
    isPublic: boolean,
    isPrivate: boolean
  ): Principal[] => {
    if (isPublic && isPrivate) {
      return principals;
    } else if (isPublic && !isPrivate) {
      return principals.filter(publicPrincipals);
    } else if (!isPublic && isPrivate) {
      return principals.filter(privatePrincipals);
    }
    return [];
  };

  const filteredPrincipalts = filterPrincipals(
    principals.Huvudman,
    isPublic,
    isPrivate
  );

  return (
    <>
      <PrincipalsHeader params={{ dictionary }} />
      <PrincipalsToolbar
        params={{ dictionary }}
        principals={filteredPrincipalts}
        onCheckBoxChange={onCheckBoxChange}
        isPublic={isPublic}
        isPrivate={isPrivate}
      />
      <PrincipalsTable
        params={{ dictionary }}
        principals={filteredPrincipalts}
      />
    </>
  );
}
