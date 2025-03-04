'use client';

import { useTranslation } from 'react-i18next';

export default function ErrorMessage({
  errorInformation
}: Readonly<{ errorInformation: string }>) {
  const { t } = useTranslation();
  const { status, message } = JSON.parse(errorInformation);
  return (
    <>
      <h1>{t('thereHasBeenAnError')}</h1>
      <p>{`Http ${status} - ${message}`}</p>
    </>
  );
}
