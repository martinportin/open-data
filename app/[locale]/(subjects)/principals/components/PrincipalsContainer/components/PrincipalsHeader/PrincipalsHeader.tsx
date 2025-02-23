'use client';

import { useTranslation } from 'react-i18next';

export default function PrincipalsHeader({
  numberOfPrincipals
}: Readonly<{ numberOfPrincipals: number }>) {
  const { t } = useTranslation();

  return <h1>{t('principals:numberOfPrincipals', { numberOfPrincipals })}</h1>;
}
