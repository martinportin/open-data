'use client';

import { useTranslation } from 'react-i18next';

export default function PrincipalsTableHeader() {
  const { t } = useTranslation();
  return (
    <thead>
      <tr>
        <th>{t('organizationNumber')}</th>
        <th>{t('name')}</th>
        <th>{t('type')}</th>
      </tr>
    </thead>
  );
}
