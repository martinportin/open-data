'use client';

import { useTranslation } from 'react-i18next';

export default function ClientComponent() {
  const { t } = useTranslation();

  return <h2>{t('subheader')}</h2>;
}
