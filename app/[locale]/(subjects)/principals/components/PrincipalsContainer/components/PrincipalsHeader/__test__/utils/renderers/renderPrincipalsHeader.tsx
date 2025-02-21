import { render, screen } from '@testing-library/react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import PrincipalsHeader from '../../../PrincipalsHeader';

export default async function renderPrincipalsHeader(
  principalsHeaderProps: PrincipalsHeaderProps
) {
  const locale = 'en';
  const i18nNamespaces = ['common', 'principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <PrincipalsHeader {...principalsHeaderProps} />
    </TranslationsProvider>
  );

  return {
    getHeaderShowingNoPrincipals: () =>
      screen.getByRole('heading', { name: /numberOfPrincipals/i })
  };
}
