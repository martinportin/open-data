'use client';

import { useTranslation } from 'react-i18next';

export default function EducationOrganizersTableHeader() {
  const { t } = useTranslation();
  return (
    <thead>
      <tr>
        <th>{t('organizationNumber')}</th>
        <th>{t('displayName')}</th>
        <th>{t('organizerType')}</th>
      </tr>
    </thead>
  );
}
