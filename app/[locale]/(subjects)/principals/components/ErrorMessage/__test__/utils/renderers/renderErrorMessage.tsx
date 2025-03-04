import { render, screen } from '@testing-library/react';
import ErrorMessage from '../../../ErrorMessage';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import { errorInformation } from '../mocks/errorInformation';

export default async function renderErrorMessage() {
  const locale = 'en';
  const i18nNamespaces = ['common'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <ErrorMessage errorInformation={errorInformation} />
    </TranslationsProvider>
  );

  return {
    getHeader: () =>
      screen.getByRole('heading', { name: /thereHasBeenAnError/i }),
    getErrorInformation: () => screen.getByText(/Http 404 - Not Found/i)
  };
}
