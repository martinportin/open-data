'use client';

import { useTranslation } from 'react-i18next';

export default function PrincipalsTableHeader() {
  const { t } = useTranslation();

  return (
    <thead>
      <tr>
        <th>{t('principals:organizationNumber')}</th>
        <th>{t('principals:name')}</th>
        <th>{t('principals:type')}</th>
      </tr>
    </thead>
  );
}
