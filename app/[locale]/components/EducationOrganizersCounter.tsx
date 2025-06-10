'use client';

import { useTranslation } from 'react-i18next';

export default function EducationOrganizersCounter({
  numberOfEducationOrganizers
}: Readonly<{ numberOfEducationOrganizers: number }>) {
  const { t } = useTranslation();
  return (
    <p>{t('numberOfEducationOrganizers', { numberOfEducationOrganizers })}</p>
  );
}
