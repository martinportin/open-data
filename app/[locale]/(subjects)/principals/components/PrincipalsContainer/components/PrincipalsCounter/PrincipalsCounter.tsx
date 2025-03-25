'use client';

import { useTranslation } from 'react-i18next';

export default function PrincipalsCounter({
  numberOfPrincipals
}: Readonly<{ numberOfPrincipals: number }>) {
  const { t } = useTranslation();
  return <p>{t('principals:numberOfPrincipals', { numberOfPrincipals })}</p>;
}
